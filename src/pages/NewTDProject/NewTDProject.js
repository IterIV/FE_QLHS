import React, { useEffect, useState } from "react";
import Breadcumb from "../../components/Breadcumb/Breadcumb";
import { Row, Col, notification } from "antd";
import CardNewProject from "../../components/Card/CardNewProject";
import listProject from "../../data/NewProjectDesign.json";
const NewTDProject = () => {
  const [lstNewProject, setLstNewProject] = useState([]);

  useEffect(() => {
    setLstNewProject(listProject);
  }, [lstNewProject]);

  const listBreadcumb = [
    {
      name: "Trang chủ",
      path: "/",
    },
    {
      name: "Hồ sơ thẩm duyệt",
      path: "",
    },
    {
      name: "Hồ sơ mới",
      path: "",
    },
  ];
  const onChangeUser = (project) => {
    const index = listProject.findIndex((item) => item._id === project.id);
    listProject[index] = { ...project };
    setLstNewProject((prev) => {
      prev[index] = { ...project };
      return [...prev];
    });
    openNotification();
  };
  const openNotification = () => {
    notification.info({
      message: `Thông báo`,
      description: `Chuyển hồ sơ thành công!"`,
    });
  };
  const renderCard = () => {
    return lstNewProject.map((project) => {
      return project.status === "hosomoi" ? (
        <Col key={project._id} xs={24} sm={24} md={12} lg={12} xl={8} xxl={6}>
          <CardNewProject project={project} onChangeUser={onChangeUser} />
        </Col>
      ) : (
        <></>
      );
    });
  };
  console.log(lstNewProject);

  return (
    <div>
      <Breadcumb listPath={listBreadcumb} header="Hồ sơ mới" />
      <Row gutter={[15, 15]}>{renderCard()}</Row>
    </div>
  );
};

export default NewTDProject;
