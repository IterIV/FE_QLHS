import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout/MainLayout";
import Blank from "./pages/Blank/Blank";
import Dashboard from "./pages/Dashboard/Dashboard";
import InProcessTDProject from "./pages/InProcessTDProject/InProcessTDProject";
import NewTDProject from "./pages/NewTDProject/NewTDProject";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="td-inprocess" element={<InProcessTDProject />} />
          <Route path="td-new" element={<NewTDProject />} />
          <Route path="td-finish" element={<Blank />} />
          <Route path="nt-inprocess" element={<Blank />} />
          <Route path="nt-new" element={<Blank />} />
          <Route path="nt-finish" element={<Blank />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
