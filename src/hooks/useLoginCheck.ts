import { useNavigate } from "react-router-dom";

const useLoginCheck = (callback: () => void) => {
  const navigate = useNavigate();

  return () => {
    const isLogin = localStorage.getItem("deliveryApp");

    if (!isLogin) {
      if (window.confirm("로그인이 필요합니다. 로그인하시겠습니까?")) {
        navigate("/login");
        return;
      }
    } else {
      callback();
    }
  };
};

export default useLoginCheck;
