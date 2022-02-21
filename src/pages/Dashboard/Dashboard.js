import React from "react";
import Breadcumb from "../../components/Breadcumb/Breadcumb";

const Dashboard = () => {
  const listBreadcumb = [
    {
      name: "Trang chu",
      path: "/",
    },
    {
      name: "Ho so tham duyet",
      path: "",
    },
    {
      name: "Dang xu ly",
      path: "",
    },
  ];
  return (
    <div>
      <Breadcumb listPath={listBreadcumb} header="Ho so moi" />
    </div>
  );
};

export default Dashboard;
