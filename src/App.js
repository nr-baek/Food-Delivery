import { Route, Routes } from "react-router-dom";
import Template from "./components/common/Template";
import Main from "./components/Main";
import StoreListComp from "./components/StoreListComp";
import TodayFood from "./components/TodayFood";
import MyPage from "./components/MyPage";
import StoreDetail from "./components/StoreDetail";

function App() {
  return (
    <Template>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/todayfood" element={<TodayFood />} />
        <Route path="/likes" element={<StoreListComp />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/store/:category" element={<StoreListComp />} />
        <Route path="/store/detail/:id" element={<StoreDetail />} />
      </Routes>
    </Template>
  );
}

export default App;
