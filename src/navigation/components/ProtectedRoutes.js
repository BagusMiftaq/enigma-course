import constants from "../../constants";
import {getToken} from "../../utils/token";
import {Navigate, Outlet} from "react-router-dom";
import {NavBar} from "../../components";

const {ROUTES} = constants;
const ProtectedRoutes = () => {
    const token = getToken();
    if(!token){
        return <Navigate to={ROUTES.LOGIN} replace/>
    }

    return (
        <>
            <NavBar/>
            <Outlet/>
        </>
    )
}

export default ProtectedRoutes;