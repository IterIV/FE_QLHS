import React, { useState } from "react";
import styled from "styled-components";
import { styledConfig } from "../../configs/StyledVariable";
import { Typography, Row, Col, Progress, Popconfirm, notification } from "antd";
import moment from "moment";
import Dropdown from "../Dropdown/Dropdown";
import ImageButton from "../CustomComponent/Buttons/ImageButton";
import listUser from "../../data/listUser.json";

const CardContainer = styled.div``;
const CardItem = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  box-shadow: ${styledConfig.boxShadow};
`;
const CardContent = styled.div`
  .project__item__header {
    font-weight: 600;
    margin-bottom: 5px;
    margin-top: 10px;
  }
  .project__item__subheader {
    font-size: 14px;
    opacity: 0.8;
    margin-bottom: 10px;
  }
  .project__item__label {
    opacity: 0.8;
    font-size: 12px;
    margin-bottom: 5px;
  }
  .project__item__text {
    font-size: 14px;
  }
  .project__badge {
    &.green {
      background-color: ${styledConfig.background.green};
      color: ${styledConfig.color.green};
    }
    &.orange {
      background-color: ${styledConfig.background.orange};
      color: ${styledConfig.color.orange};
    }
    &.grey {
      background-color: ${styledConfig.background.grey};
      color: ${styledConfig.color.grey};
    }
    &.blue {
      background-color: ${styledConfig.background.blue};
      color: ${styledConfig.color.blue};
    }
    padding: 8px;
    padding-top: 12px;
    font-size: 12px;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 0;
    font-weight: 600;

    @media screen and (max-width: 1440px) and (min-width: 1024px) {
      font-size: 12px;
    }
    @media screen and (max-width: 375px) {
      font-size: 12px;
    }
  }
`;
const ProgressStyled = styled(Progress)`
  .ant-progress-outer {
    padding-right: 0;
  }
  .ant-progress-text {
    position: absolute;
    top: -90%;
    right: 10%;
  }
`;

const CardInProcessProject = ({ project }) => {
  const startDay = moment(new Date(project.observedDate));
  const dueDay = moment(new Date(project.dueDate));
  const totalDay = dueDay.diff(startDay, "days") + 1;
  const countDay = moment().diff(startDay, "days") + 1;

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [userChange, setUserChange] = useState({});

  const openNotification = () => {
    notification.info({
      message: `Th??ng b??o`,
      description: `Chuy???n h??? s?? th??nh c??ng cho "${userChange?.shortName}"`,
    });
  };

  const showPopconfirm = (user) => {
    setVisible(true);
    setUserChange(user);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      openNotification();
    }, 2000);
    console.log(userChange);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const MenuDropdown = ({ onClick }) => (
    <div
      className="dropdown__menu"
      onClick={onClick}
      style={{ minWidth: "100px" }}
    >
      {listUser.map((user) => (
        <ImageButton
          key={user._id}
          type="text"
          shape="round"
          style={{ margin: "20px 10px" }}
          icon={
            <img src={user.avatar} alt="Minh duc" className="btn__logo__img" />
          }
          onClick={() => showPopconfirm(user)}
        >
          {user.shortName}
        </ImageButton>
      ))}
    </div>
  );

  const renderTypeProject = (type) => {
    let textType;
    let color;
    switch (type) {
      case "tkcs":
        textType = "Thi???t k??? c?? s???";
        color = "grey";
        break;
      case "ctdd":
        textType = "Ch???p thu???n ?????a ??i???m";
        color = "green";
        break;
      case "tkkt":
        textType = "Thi???t k??? k??? thu???t";
        color = "orange";
        break;
      case "tddc":
        textType = "Thi???t k??? ??i???u ch???nh";
        color = "blue";
        break;
      default:
        textType = "";
        color = "white";
    }
    return (
      <Typography.Text ellipsis={true} className={`project__badge ${color}`}>
        {textType}
      </Typography.Text>
    );
  };

  return (
    <CardContainer>
      <CardItem>
        <CardContent>
          <Row gutter={[10, 10]} align="middle" justify="space-between">
            <Col span={12}>{renderTypeProject(project.typeProject)}</Col>
            <Col span={12}>
              <Popconfirm
                title="?????ng ?? chuy???n h??? s???"
                visible={visible}
                onConfirm={handleOk}
                okButtonProps={{ loading: confirmLoading }}
                onCancel={handleCancel}
                okText="?????ng ??"
                cancelText="H???y"
              ></Popconfirm>
              <Dropdown MenuDropComponent={MenuDropdown} minWidth={100}>
                <ImageButton
                  type="text"
                  shape="round"
                  icon={
                    <img
                      src={project.user.avatar}
                      alt={project.user.shortName}
                      className="btn__logo__img"
                    />
                  }
                >
                  {project.user.shortName}
                </ImageButton>
              </Dropdown>
            </Col>
            <Col span={24}>
              <Typography.Text
                ellipsis={true}
                className="project__item__header"
              >
                {project.building.name}
              </Typography.Text>
              <p className="project__item__subheader">
                {project.building.investor.name}
              </p>
            </Col>
            <Col span={12}>
              <p className="project__item__label">Ngay nhan</p>

              <p className="project__item__text">
                {startDay.format("DD/MM/yyyy")}
              </p>
            </Col>
            <Col span={12}>
              <p className="project__item__label">Ngay tra</p>
              <p className="project__item__text">
                {dueDay.format("DD/MM/yyyy")}
              </p>
            </Col>
            <Col span={24}>
              <p className="project__item__label">Th???i h???n</p>
              <ProgressStyled
                percent={
                  countDay > totalDay
                    ? (countDay / totalDay) * 100
                    : (countDay / totalDay) * 100
                }
                status={countDay > totalDay ? "exception" : "active"}
                format={(percent) => {
                  if (countDay > totalDay) {
                    return `${countDay}/${totalDay} ng??y`;
                  }
                  return `${(percent / 100) * totalDay}/${totalDay} ng??y`;
                }}
              />
            </Col>
          </Row>
        </CardContent>
      </CardItem>
    </CardContainer>
  );
};

export default CardInProcessProject;
