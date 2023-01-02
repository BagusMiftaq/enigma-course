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
import EditType from "./pages/EditType";
import {Outlet, Route, Routes} from "react-router-dom";

const CourseWrapper = () => (
    <>
        <h1>Course Page</h1>
        <Outlet/>
    </>
)

const TypeWrapper = () => (
    <>
        <h1>Type Course Page</h1>
        <Outlet/>
    </>
)

function App() {

    return (
        <div className="App">
            <NavBar/>
            <Routes>
                <Route path={constants.ROUTES.DASHBOARD} element={<h1>Dashboard Page</h1>} index={true}/>
                <Route path={constants.ROUTES.COURSE_LIST} element={<CourseWrapper/>}>
                    <Route element={<CourseList/>} index={true}/>
                    <Route path={constants.ROUTES.ADD_COURSE} element={<AddCourse/>}/>
                    <Route path={`${constants.ROUTES.EDIT_COURSE}/:courseId?`} element={<EditCourse/>}/>
                </Route>
                <Route path={constants.ROUTES.COURSE_TYPE} element={<TypeWrapper/>}>
                    <Route element={<TypeList/>} index={true}/>
                    <Route path={constants.ROUTES.ADD_COURSE_TYPE} element={<AddType/>}/>
                    <Route path={`${constants.ROUTES.EDIT_COURSE_TYPE}/:id?`} element={<EditType/>}/>
                </Route>
                <Route path={"*"} element={<h3>Page not Found</h3>}/>
            </Routes>
        </div>
    )
}

export default App;
