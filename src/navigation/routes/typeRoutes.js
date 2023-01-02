import constants from "../../constants";
import {AddType, EditType, TypeList} from "../../pages";

const {ROUTES} = constants;

const typeRoutes = ({
    path: ROUTES.COURSE_TYPE,
    children: [
        {index:true, element:<TypeList/>},
        {path:ROUTES.ADD_COURSE_TYPE, element: <AddType/>},
        {path: `${ROUTES.EDIT_COURSE_TYPE}/:id?`, element: <EditType/>}
    ]
})

export default typeRoutes;