import constants from "../../constants";
import useToken from "../../hooks/useToken";
import {Navigate, Outlet} from "react-router-dom";
import {NavBar} from "../../components";

const {ROUTES} = constants;
const ProtectedRoutes = () => {
    const {token} = useToken();
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