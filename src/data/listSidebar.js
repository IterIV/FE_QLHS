export const listMenu = [
  {
    title: "Tổng quan",
    submenu: [
      {
        id: "dashboard",
        title: "Tổng quan",
        icon: <i className="fa-solid fa-gauge"></i>,
        src: "/",
      },
    ],
  },
  {
    title: "Hồ sơ thẩm duyệt",
    submenu: [
      {
        id: "tdNew",
        title: "Hồ sơ mới",
        icon: <i className="fa-solid fa-file-medical"></i>,
        src: "/td-new",
      },
      {
        id: "tdInprocess",
        title: "Đang xử lý",
        icon: <i className="fa-solid fa-file-contract"></i>,
        src: "/td-inprocess",
      },
      {
        id: "tdFinish",
        title: "Hoàn thành",
        icon: <i className="fa-solid fa-file-code"></i>,
        src: "/td-finish",
      },
    ],
  },
  {
    title: "Hồ sơ nghiệm thu",
    submenu: [
      {
        id: "ntNew",
        title: "Hồ sơ mới",
        icon: <i className="fa-solid fa-file-medical"></i>,
        src: "/nt-new",
      },
      {
        id: "ntInprocess",
        title: "Đang xử lý",
        icon: <i className="fa-solid fa-file-contract"></i>,
        src: "/nt-inprocess",
      },
      {
        id: "ntFinish",
        title: "Hoàn thành",
        icon: <i className="fa-solid fa-file-code"></i>,
        src: "/nt-finish",
      },
    ],
  },
];
