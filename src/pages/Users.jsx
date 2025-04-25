import React, { useEffect, useState } from "react";
import { Button, Dialog } from "@headlessui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import Layout from "../components/Layout";
import {
  createUserRequest,
  deleteUserRequest,
  fetchUsersRequest,
  updateUserRequest,
} from "../redux/actions/userActions";

const UserSchema = Yup.object().shape({
  name: Yup.string().required("Name is required!"),
  email: Yup.string().email("Invalid email").required("Email is required!"),
  password: Yup.string().min(4, "Too Short!").required("Password is required!"),
  avatar: Yup.string().url("Invalid URL!"),
});

const UsersPage = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.user);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [isOpen, setIsOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    dispatch(fetchUsersRequest(page, limit));
  }, [dispatch, page, limit]);

  const handleDelete = (id) => {
    dispatch(deleteUserRequest(id));
  };

  const handleSubmit = (values, { resetForm }) => {
    if (editingUser) {
      dispatch(updateUserRequest({ ...values, id: editingUser.id }));
    } else {
      dispatch(createUserRequest(values));
    }
    setIsOpen(false);
    setEditingUser(null);
    resetForm();
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setIsOpen(true);
  };

  const columns = [
    { name: "Name", selector: (row) => row.name, sortable: true },
    { name: "Email", selector: (row) => row.email, sortable: true },
    {
      name: "Avatar",
      cell: (row) => (
        <img
          src={row.avatar}
          alt={row.name}
          className="w-10 h-10 rounded-full"
        />
      ),
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-2">
          <Button size="sm" onClick={() => handleEdit(row)}>
            Edit
          </Button>
          <Button
            size="sm"
            variant="destructive"
            onClick={() => handleDelete(row.id)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <div className="p-4">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold">Users</h2>
          <Button onClick={() => setIsOpen(true)}>Add User</Button>
        </div>

        <div className="mb-4 flex gap-4">
          <label>
            Page Size:
            <select
              value={limit}
              onChange={(e) => setLimit(Number(e.target.value))}
              className="ml-2 border p-1"
            >
              {[5, 10, 20, 50].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </label>
          <label>
            Page:
            <input
              type="number"
              value={page}
              onChange={(e) => setPage(Number(e.target.value))}
              className="ml-2 border p-1 w-20"
            />
          </label>
        </div>

        <DataTable
          columns={columns}
          data={users}
          progressPending={loading}
          pagination={false}
          highlightOnHover
        />

        <Dialog
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
            setEditingUser(null);
          }}
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded w-full max-w-md">
              <Dialog.Title className="text-lg font-bold mb-4">
                {editingUser ? "Edit User" : "Add User"}
              </Dialog.Title>
              <Formik
                initialValues={
                  editingUser || {
                    name: "",
                    email: "",
                    password: "",
                    avatar: "",
                  }
                }
                validationSchema={UserSchema}
                onSubmit={handleSubmit}
                enableReinitialize
              >
                <Form className="space-y-4">
                  <div>
                    <label>Name</label>
                    <Field name="name" className="w-full border p-2" />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div>
                    <label>Email</label>
                    <Field
                      name="email"
                      type="email"
                      className="w-full border p-2"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div>
                    <label>Password</label>
                    <Field
                      name="password"
                      type="password"
                      className="w-full border p-2"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div>
                    <label>Avatar URL</label>
                    <Field name="avatar" className="w-full border p-2" />
                    <ErrorMessage
                      name="avatar"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => setIsOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button type="submit">
                      {editingUser ? "Update" : "Create"}
                    </Button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </Dialog>
      </div>
    </Layout>
  );
};

export default UsersPage;
