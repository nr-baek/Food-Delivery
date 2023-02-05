import { useEffect, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "./components/common/styles";

import { useUserActions } from "store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const Template = lazy(() => import("./components/common/Template"));
const Main = lazy(() => import("./components/Main"));
const StoreListComp = lazy(() => import("./components/StoreListComp"));
const MyPage = lazy(() => import("./components/MyPage"));
const StoreDetail = lazy(() => import("./components/StoreDetail"));
const Order = lazy(() => import("./components/Order"));
const Bill = lazy(() => import("./components/Bill"));
const Review = lazy(() => import("./components/Review"));
const Login = lazy(() => import("./components/AuthTemplate/Login"));
const SignUp = lazy(() => import("./components/AuthTemplate/SignUp"));

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
      <Suspense>
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
      </Suspense>
    </Container>
  );
}

export default App;
