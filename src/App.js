import { Route, Routes } from "react-router-dom";
import Template from "./components/common/Template";
import Main from "./components/Main";
import TodayFood from "./components/TodayFood";
import StoreListComp from "./components/StoreListComp";
import MyPage from "./components/MyPage";
import StoreDetail from "./components/StoreDetail";
import Order from "./components/Order";
import Bill from "./components/Bill";
import Review from "./components/Review";
import { Container } from "./components/common/styles";

function App() {
  return (
    <Container>
      <Routes>
        <Route element={<Template />}>
          <Route path="/" element={<Main />} />
          <Route path="/todayfood" element={<TodayFood />} />
          <Route path="/likes" element={<StoreListComp />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/store/:category" element={<StoreListComp />} />
        </Route>
        <Route path="/store/detail/:id" element={<StoreDetail />} />
        <Route path="/order" element={<Order />} />
        <Route path="/bill" element={<Bill />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </Container>
  );
}

export default App;
