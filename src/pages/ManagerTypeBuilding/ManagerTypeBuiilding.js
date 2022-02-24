import React, { useEffect, useRef, useState } from "react";
import Breadcumb from "../../components/Breadcumb/Breadcumb";
import { Row, Col, Select, Button, Form, Input } from "antd";
import {
  Container,
  InputSearch,
  TableContainer,
} from "./ManagerTypeBuildingStyled";
import Dropdown from "../../components/Dropdown/Dropdown";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";
import _ from "lodash";

const ManagerTypeBuiilding = () => {
  const [listTable, setListTable] = useState([]);
  const [pagination, setPagination] = useState({
    totalRow: 0,
    limit: 0,
    page: 0,
  });
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [id, setID] = useState(null);
  const totalPage = Math.ceil(pagination.totalRow / pagination.limit);
  const refForm = useRef(null);
  useEffect(() => {
    const data = [
      {
        _id: "620e16aca37617253de53d41",
        name: "Trụ sở cơ quan hành chính dưới 10 tầng",
        group:
          "Trụ sở cơ quan hành chính các cấp, nhà làm việc của các doanh nghiệp, tổ chức chính trị xã hội",
      },
      {
        _id: "620e16bca37617253de53d43",
        name: "Trụ sở cơ quan hành chính trên 10 tầng",
        group:
          "Trụ sở cơ quan hành chính các cấp, nhà làm việc của các doanh nghiệp, tổ chức chính trị xã hội",
      },
      {
        _id: "620e16f4a37617253de53d45",
        name: "Nhà chung cư, ký túc xá dưới 10 tầng",
        group: "Nhà chung cư, nhà tập thể, nhà ở ký túc xá",
      },
      {
        _id: "620e16f4a37627253de53d45",
        name: "Nhà chung cư, ký túc xá dưới 10 tầng",
        group: "Nhà chung cư, nhà tập thể, nhà ở ký túc xá",
      },
      {
        _id: "620e16f4a37625253de53d45",
        name: "Nhà chung cư, ký túc xá dưới 10 tầng",
        group: "Nhà chung cư, nhà tập thể, nhà ở ký túc xá",
      },
      {
        _id: "620e16f4c37625253de53d45",
        name: "Nhà chung cư, ký túc xá dưới 10 tầng",
        group: "Nhà chung cư, nhà tập thể, nhà ở ký túc xá",
      },
      {
        _id: "620e16f4d37625253de53d45",
        name: "Nhà chung cư, ký túc xá dưới 10 tầng",
        group: "Nhà chung cư, nhà tập thể, nhà ở ký túc xá",
      },
      {
        _id: "621e16f4c37625253de53d45",
        name: "Nhà chung cư, ký túc xá dưới 10 tầng",
        group: "Nhà chung cư, nhà tập thể, nhà ở ký túc xá",
      },
      {
        _id: "620e16f4c37625253de52d45",
        name: "Nhà chung cư, ký túc xá dưới 10 tầng",
        group: "Nhà chung cư, nhà tập thể, nhà ở ký túc xá",
      },
      {
        _id: "620e16f4c37625453de53d45",
        name: "Nhà chung cư, ký túc xá dưới 10 tầng",
        group: "Nhà chung cư, nhà tập thể, nhà ở ký túc xá",
      },
      {
        _id: "620e16f4c37625453de73d45",
        name: "Nhà chung cư, ký túc xá dưới 10 tầng",
        group: "Nhà chung cư, nhà tập thể, nhà ở ký túc xá",
      },
    ];
    setListTable(data);
  }, []);
  useEffect(() => {
    setPagination({ totalRow: listTable.length, limit: 5, page: 1 });
  }, [listTable]);
  const MenuDropdown = ({ onClick, id }) => (
    <ul className="dropdown__menu" onClick={onClick}>
      <li
        className="dropdown__menu__item"
        onClick={() => {
          console.log(`Edit item with id: ${id}`);
        }}
      >
        <i className="fa-solid fa-pen"></i>
        <p>Chỉnh sửa</p>
      </li>
      <li
        className="dropdown__menu__item"
        style={{ color: "#B33030" }}
        onClick={() => {
          setShow(true);
          setID(id);
        }}
      >
        <i className="fa-solid fa-trash-can"></i>
        <p>Xóa</p>
      </li>
    </ul>
  );
  const listBreadcumb = [
    {
      name: "Trang chủ",
      path: "/",
    },
    {
      name: "Quản lý admin",
      path: "",
    },
    {
      name: "Quản lý loại công trình",
      path: "",
    },
  ];
  const onFinish = (values) => {
    setListTable((prev) => {
      prev.push({ _id: "1231241421xvvcaa21312412421", ...values });
      return [...prev];
    });
    refForm.current.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const renderTableContent = () => {
    const section = (pagination.page - 1) * pagination.limit;
    const list = listTable.filter((item) => {
      const name = item.name.toLowerCase();
      return name.indexOf(search.toLowerCase()) > -1;
    });
    const sliceList = list.filter((item, index) => {
      return index >= section && index < section + pagination.limit;
    });
    return sliceList.map((item, index) => {
      return (
        <Row gutter={[15, 0]} className="table__item" key={item._id}>
          <Col className="table__item__col" xs={4} md={2} xl={1}>
            <p>{section + 1 + index}</p>
          </Col>
          <Col className="table__item__col" xs={9} md={10} xl={11}>
            <p>{item.name}</p>
          </Col>
          <Col className="table__item__col" xs={9} md={10} xl={11}>
            <p>{item.group}</p>
          </Col>
          <Col className="table__item__col" xs={2} md={2} xl={1}>
            <Dropdown
              MenuDropComponent={MenuDropdown}
              minWidth={150}
              id={item._id}
            >
              <Button
                type="text"
                shape="circle"
                icon={<i className="fa-solid fa-ellipsis-vertical"></i>}
              />
            </Dropdown>
          </Col>
        </Row>
      );
    });
  };
  const renderPagitionInfo = () => {
    const section = (pagination.page - 1) * pagination.limit;
    const startRow = section + 1;
    let endRow = section + pagination.limit;
    if (pagination.page === totalPage) {
      endRow = pagination.totalRow;
    }
    return `${startRow} - ${endRow} / ${pagination.totalRow}`;
  };

  const handleOKConfirm = () => {
    setListTable((prev) => {
      _.remove(prev, { _id: id });
      return [...prev];
    });
    setShow(false);
  };
  return (
    <div>
      <ConfirmModal
        message="Bạn có muốn xóa không?"
        handleOK={handleOKConfirm}
        show={show}
        handleShow={(value) => setShow(value)}
      />
      <Breadcumb listPath={listBreadcumb} header="Quản lý loại công trình" />

      <Container>
        <div className="form__header">
          <h4>Thông tin loại hình</h4>
        </div>
        <Form
          layout="inline"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          ref={refForm}
        >
          <Form.Item name="group">
            <Select
              showSearch
              placeholder="Chon cum loai hinh"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {_.uniqBy(listTable, "group").map((item, index) => {
                return (
                  <Select.Option value={item.group} key={`group_${index}`}>
                    {item.group}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item name="name">
            <Input placeholder="Nhập tên loại hình"></Input>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              icon={
                <i
                  className="fa-solid fa-circle-plus"
                  style={{ marginRight: "10px" }}
                ></i>
              }
            >
              Thêm loại hình
            </Button>
          </Form.Item>
        </Form>
        <Row>
          <Col span={24}>
            <InputSearch
              size="large"
              placeholder="Nhập tên loại hình..."
              prefix={<i className="fa-solid fa-magnifying-glass"></i>}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
        </Row>
        <TableContainer>
          <Row gutter={[15, 0]} className="table__header">
            <Col className="table__header__item" xs={4} md={2} xl={1}>
              <p>STT</p>
            </Col>
            <Col className="table__header__item" xs={10} md={11} xl={12}>
              <p>Loại hình</p>
            </Col>
            <Col className="table__header__item" xs={10} md={11} xl={11}>
              <p>Cụm loại hình</p>
            </Col>
          </Row>
          {renderTableContent()}

          <div className="table__footer">
            <div className="table__footer__left">
              <p>Số dòng hiển thị</p>
              <Select
                defaultValue="5"
                style={{ width: 60 }}
                className="table__footer__select"
                onChange={(value) => {
                  setPagination((prev) => ({ ...prev, limit: value }));
                }}
              >
                <Select.Option value="5">5</Select.Option>
                <Select.Option value="10">10</Select.Option>
                <Select.Option value="15">15</Select.Option>
              </Select>
            </div>
            <div className="table__footer__right">
              <p className="table__footer__numpage">{renderPagitionInfo()}</p>
              <Button
                shape="circle"
                type="text"
                icon={<i className="fa-solid fa-angle-left"></i>}
                disabled={pagination.page === 1}
                onClick={() => {
                  setPagination((prev) => ({ ...prev, page: prev.page - 1 }));
                }}
              />
              <Button
                shape="circle"
                type="text"
                icon={<i className="fa-solid fa-angle-right"></i>}
                disabled={pagination.page === totalPage}
                onClick={() => {
                  setPagination((prev) => ({ ...prev, page: prev.page + 1 }));
                }}
              />
            </div>
          </div>
        </TableContainer>
      </Container>
    </div>
  );
};

export default ManagerTypeBuiilding;
