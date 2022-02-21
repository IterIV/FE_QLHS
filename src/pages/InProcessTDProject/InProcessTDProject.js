import React, { useEffect, useState } from "react";
import Breadcumb from "../../components/Breadcumb/Breadcumb";
import { Row, Col } from "antd";
import CardInProcessProject from "../../components/Card/CardInProcessProject";
import listProject from "../../data/InProcessProjectDesign.json";

const InProcessTDProject = () => {
  const [lstNewProject, setLstNewProject] = useState([]);

  useEffect(() => {
    setLstNewProject(listProject);
  }, []);

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
      name: "Hồ sơ đang xử lý",
      path: "",
    },
  ];
  const onChangeUser = (project) => {
    const index = lstNewProject.findIndex((item) => item._id === project.id);
    lstNewProject[index] = { ...project };
    setLstNewProject(lstNewProject);
  };
  const renderCard = () => {
    return lstNewProject.map((project) => {
      return project.status === "dangxuly" ? (
        <Col key={project._id} xs={24} sm={24} md={12} lg={12} xl={8} xxl={6}>
          <CardInProcessProject project={project} onChangeUser={onChangeUser} />
        </Col>
      ) : (
        <></>
      );
    });
  };

  return (
    <div>
      <Breadcumb listPath={listBreadcumb} header="Hồ sơ đang xử lý" />
      <Row gutter={[15, 15]}>{renderCard()}</Row>
    </div>
  );
};

export default InProcessTDProject;
