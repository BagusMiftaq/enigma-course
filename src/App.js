import React from 'react';
import './App.css';
import {
    AddCourse, CourseList, TypeList, AddType
} from "./pages";
import constants from "./constants";
import {Provider} from "react-redux";
import store from "./store/store";
import NavBar from "./components/NavBar";
import EditCourse from "./pages/EditCourse";

function App() {
    const [nav, setNav] = React.useState("/");
    const [params, setParams]= React.useState(null);

    console.log("NAV", nav)

    let Component;

    const onNavigate = (route, params=null) => {
        setNav(route);
        setParams(params);
    }

    const menu = [
        {name: "course-list", onNavigate:()=> setNav(constants.ROUTES.COURSE_LIST)},
        {name: "course-type", onNavigate:()=> setNav(constants.ROUTES.COURSE_TYPE)}
    ]


    switch (nav) {
        case constants.ROUTES.COURSE_LIST:
            Component = CourseList;
            break;
        case constants.ROUTES.ADD_COURSE:
            Component = AddCourse;
            break;
        case constants.ROUTES.ADD_COURSE_TYPE:
            Component = AddType;
            break;
        case constants.ROUTES.COURSE_TYPE:
            Component = TypeList;
            break;
        case constants.ROUTES.EDIT_COURSE:
            Component = EditCourse;
            break;
        default:
            Component = CourseList;
            break;
    }

  return (
      <>
          <NavBar menu={menu}/>
      <Component onNavigate={onNavigate} params={params} />
      </>
  );
}

export default App;
