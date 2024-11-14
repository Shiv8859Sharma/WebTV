import { useDispatch, useSelector } from "react-redux";
import { lazy, useEffect } from "react";
import LandingPageHeader from "./LandingPageHeader";
const AdminHeader = lazy(() => import("./AdminHeader"));
// import { getCurrentUserDatails } from "@/globalStates/actions/userAction";

const Header = () => {
  const { role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (role) {
      // dispatch(getCurrentUserDatails())
    }
  }, [role, dispatch]);
  return role === "admin" ? <AdminHeader /> : <LandingPageHeader />;
};

export default Header;
