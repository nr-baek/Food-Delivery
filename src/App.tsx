import { Route, Routes } from "react-router-dom";
import Template from "./components/common/Template";
import Main from "./components/Main";
import StoreListComp from "./components/StoreListComp";
import MyPage from "./components/MyPage";
import StoreDetail from "./components/StoreDetail";
import Order from "./components/Order";
import Bill from "./components/Bill";
import Review from "./components/Review";
import { Container } from "./components/common/styles";
import Login from "./components/AuthTemplate/Login";
import SignUp from "./components/AuthTemplate/SignUp";
import { useUserActions } from "store";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const { setId, setNickname } = useUserActions();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user && user.displayName) {
        setId(user.uid);
        setNickname(user.displayName);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [setId, setNickname]);

  return (
    <Container>
      <Routes>
        <Route element={<Template />}>
          <Route path="/" element={<Main />} />
          <Route path="/likes" element={<StoreListComp />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/store/:category" element={<StoreListComp />} />
          <Route path="/bill" element={<Bill />} />
        </Route>
        <Route path="/store/detail/:storeId" element={<StoreDetail />} />
        <Route path="/order/:storeId" element={<Order />} />
        <Route path="/review/:storeId" element={<Review />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Container>
  );
}

export default App;
