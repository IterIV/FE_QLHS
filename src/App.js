import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtecRoute from "./components/ProtectRoute/ProtecRoute";
import ProtectRouteAdmin from "./components/ProtectRoute/ProtectRouteAdmin";
import MainLayout from "./layout/MainLayout/MainLayout";
import AddNewProjectTD from "./pages/AddNewProjectTD/AddNewProjectTD";
import Blank from "./pages/Blank/Blank";
import Dashboard from "./pages/Dashboard/Dashboard";
import InProcessTDProject from "./pages/InProcessTDProject/InProcessTDProject";
import Login from "./pages/Login/Login";
import ManagerTypeBuiilding from "./pages/ManagerTypeBuilding/ManagerTypeBuiilding";
import ManagerUser from "./pages/ManagerUser/ManagerUser";
import NewTDProject from "./pages/NewTDProject/NewTDProject";
function App() {
  const { userLogin } = useSelector((rootReducer) => rootReducer.UserReducer);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtecRoute user={userLogin} />}>
          <Route path="/" element={<MainLayout user={userLogin} />}>
            <Route index element={<Dashboard />} />
            <Route path="td-inprocess" element={<InProcessTDProject />} />
            <Route path="td-new" element={<NewTDProject />} />
            <Route path="add-td" element={<AddNewProjectTD />} />
            <Route path="td-finish" element={<Blank />} />
            <Route path="nt-inprocess" element={<Blank />} />
            <Route path="nt-new" element={<Blank />} />
            <Route path="nt-finish" element={<Blank />} />
            <Route element={<ProtectRouteAdmin user={userLogin} />}>
              <Route path="admin-user" element={<ManagerUser />} />
              <Route
                path="admin-typebuilding"
                element={<ManagerTypeBuiilding />}
              />
            </Route>
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
