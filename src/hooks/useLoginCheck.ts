import { useNavigate } from "react-router-dom";

const useLoginCheck = (id: string, callback: () => void) => {
  const navigate = useNavigate();

  return () => {
    if (!id) {
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
