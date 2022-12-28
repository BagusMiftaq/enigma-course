import React from 'react';
import './App.css';
import {
    AddCourse, CourseList, TypeList, AddType
} from "./pages";
import constants from "./constants";
import {Provider} from "react-redux";
import store from "./store/store";
import NavBar from "./components/NavBar";

function App() {
    const [nav, setNav] = React.useState("/");
    const [params, setParams]= React.useState(null);

    let Component;

    const onNavigate = (route, params=null) => {
        setNav(route);
        setParams(params);
    }

    const menu = [
        {name: "course-list", onNavigate: ()=> setNav(constants.ROUTES.COURSE_LIST)},
        {name: "course-type", onNavigate: ()=> setNav(constants.ROUTES.COURSE_TYPE)}
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
        case "/course-type":
            Component = TypeList;
            break;
        default:
            Component = CourseList;
            break;
    }

  return (
    <Provider store={store}>
        <NavBar menu={menu}/>
      <Component onNavigate={onNavigate} params={params} />
    </Provider>
  );
}

export default App;
