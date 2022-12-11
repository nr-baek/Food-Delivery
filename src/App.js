import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import TodayFoodPage from "./pages/TodayFoodPage";
import MyPagePage from "./pages/MyPagePage";
import LikesPage from "./pages/LikesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/todayfood" element={<TodayFoodPage />} />
      <Route path="/likes" element={<LikesPage />} />
      <Route path="/mypage" element={<MyPagePage />} />
    </Routes>
  );
}

export default App;
