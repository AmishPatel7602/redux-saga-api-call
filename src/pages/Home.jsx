import React from "react";
import clsx from "clsx";
import Layout from "../components/Layout";

const Avatar = ({ bg = "default", children, className }) => {
  const backgrounds = {
    default: "bg-gray-50",
    paper: "bg-white",
    primary: "bg-blue-500 text-white",
  };

  return (
    <div
      className={clsx(
        "inline-flex items-center justify-center h-10 w-10 rounded-full",
        backgrounds[bg],
        className
      )}
    >
      {children}
    </div>
  );
};

const Badge = ({ children, className, color = "primary" }) => {
  const colors = {
    error: "bg-red-100 text-red-700",
    primary: "bg-blue-100 text-blue-700",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div
      className={clsx(
        "inline-block font-bold text-xs rounded-full px-3 py-2",
        colors[color],
        className
      )}
    >
      {children}
    </div>
  );
};

const Card = ({ children, className }) => {
  return (
    <div className={clsx("rounded-xl shadow-sm bg-white", className)}>
      {children}
    </div>
  );
};

const CardBody = ({ children, className }) => {
  return <div className={clsx("p-4", className)}>{children}</div>;
};

const CardHeader = ({ className, title }) => {
  return (
    <div className={clsx("pt-4 px-4", className)}>
      <Typography as="div" variant="h3">
        {title}
      </Typography>
    </div>
  );
};

const List = ({ children, className }) => {
  return <div className={clsx("flex flex-col", className)}>{children}</div>;
};

const Typography = ({
  as,
  bold,
  children,
  className,
  muted,
  small,
  smaller,
  variant = "div",
}) => {
  const variants = {
    h1: "font-semibold text-xl",
    h2: "font-semibold",
    h3: "font-semibold",
    h4: "font-semibold",
  };

  const Component = as || variant;

  return (
    <Component
      className={clsx(
        variants[variant],
        bold && "font-semibold",
        muted && "text-gray-600",
        small && "text-sm",
        smaller && "text-xs",
        className
      )}
    >
      {children}
    </Component>
  );
};

const ListItem = ({ avatar, className, subTitle, title }) => {
  return (
    <div
      className={clsx(
        "relative flex items-center justify-between px-2 py-3",
        className
      )}
    >
      <div className="flex items-center">
        {avatar && <div className="mr-4">{avatar}</div>}
        <div>
          {title && (
            <Typography bold small>
              {title}
            </Typography>
          )}
          {subTitle && (
            <Typography muted smaller>
              {subTitle}
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
};

const PageBody = ({ children, className }) => {
  return <div className={clsx("p-0", className)}>{children}</div>;
};

const ProgressBar = ({ className, value = 0 }) => {
  return (
    <div
      className={clsx(
        "overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-gray-100",
        className
      )}
    >
      <div
        style={{ width: `${value}%` }}
        className="flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
      ></div>
    </div>
  );
};

const ProgressCircle = ({ className, value = 0 }) => {
  const radius = 30;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div
      className={clsx(
        "inline-flex items-center justify-center overflow-hidden rounded-full",
        className
      )}
    >
      <svg className="w-20 h-20">
        <circle
          className="text-gray-200"
          strokeWidth={8}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="40"
          cy="40"
        />
        <circle
          className="text-blue-500"
          strokeWidth={8}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="40"
          cy="40"
        />
      </svg>
      <Typography className="absolute" bold small>{`${value}%`}</Typography>
    </div>
  );
};

const Table = ({ children, className }) => {
  return <table className={clsx("min-w-full", className)}>{children}</table>;
};

const TableBody = ({ children, className }) => {
  return (
    <tbody className={clsx("bg-white divide-y divide-gray-200", className)}>
      {children}
    </tbody>
  );
};

const TableCell = ({ align = "left", children, className, head }) => {
  const alignments = {
    center: "text-center",
    left: "text-left",
    right: "text-right",
  };

  const Component = head ? "th" : "td";
  return (
    <Component
      className={clsx(
        "px-4 py-3 whitespace-nowrap",
        alignments[align],
        className
      )}
    >
      {children}
    </Component>
  );
};

const TableHead = ({ children, className }) => {
  return (
    <thead className={clsx("text-sm bg-gray-50 text-gray-500", className)}>
      {children}
    </thead>
  );
};

const TableRow = ({ children, className }) => {
  return <tr className={clsx("text-sm", className)}>{children}</tr>;
};

const Home = () => {
  const overviews = [
    {
      name: "Users",
      value: "12 500",
    },
    {
      name: "Orders",
      value: "12 500",
    },
    {
      name: "Products",
      value: "12 500",
    },
    {
      name: "Visits",
      value: "12 500",
    },
  ];

  const users = [
    {
      firstName: "John",
      lastName: "Smith",
      job: "Web developer",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      job: "Designer",
    },
  ];

  const orders = [
    {
      amount: "$234.99",
      createdAt: "07-08-2021",
      id: "202108070001",
      status: "In Progress",
    },
    {
      amount: "$456.99",
      createdAt: "07-08-2021",
      id: "202108070002",
      status: "Done",
    },
  ];

  const statusColorMap = {
    Done: "success",
    "In Progress": "warning",
  };

  const targets = [
    {
      name: "Visits",
      value: 90,
    },
    {
      name: "Income",
      value: 75,
    },
    {
      name: "Orders",
      value: 50,
    },
  ];

  return (
    <Layout>
      <PageBody className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {overviews.map((overview) => (
          <Card className="md:col-span-3" key={overview.name}>
            <CardBody>
              <Typography className="mb-2" bold>
                {overview.value}
              </Typography>
              <Typography muted smaller>
                {overview.name}
              </Typography>
            </CardBody>
          </Card>
        ))}
        <Card className="md:col-span-12">
          <CardHeader title="Orders"></CardHeader>
          <CardBody>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell head={true}>Date</TableCell>
                  <TableCell head={true}>ID</TableCell>
                  <TableCell head={true}>Status</TableCell>
                  <TableCell head={true}>Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>{order.createdAt}</TableCell>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>
                      <Badge color={statusColorMap[order.status]}>
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{order.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardBody>
        </Card>
        <Card className="md:col-span-4">
          <CardHeader title="Top Users"></CardHeader>
          <CardBody>
            <List>
              {users.map((user, index) => (
                <ListItem
                  key={index}
                  subTitle={user.job}
                  title={`${user.firstName} ${user.lastName}`}
                />
              ))}
            </List>
          </CardBody>
        </Card>
        <Card className="md:col-span-4">
          <CardHeader title="Targets"></CardHeader>
          <CardBody>
            {targets.map((target) => (
              <div key={target.name}>
                <div className="flex justify-between items-center mb-1">
                  <Typography bold muted small>
                    {target.name}
                  </Typography>
                  <Typography bold small>{`${target.value}%`}</Typography>
                </div>
                <ProgressBar value={target.value} />
              </div>
            ))}
          </CardBody>
        </Card>
        <Card className="md:col-span-4">
          <CardHeader title="Progress"></CardHeader>
          <CardBody>
            <ProgressCircle />
          </CardBody>
        </Card>
      </PageBody>
    </Layout>
  );
};

export default Home;
