import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTopPageMove = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollTopPageMove;
