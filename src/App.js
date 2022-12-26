import {AddCourse,
    CourseList} from "./pages";
import React from "react";
import './App.css'

function App() {
    const [nav, setNav] = React.useState("/");
    let Component;

    switch (nav){
        case "/":
            Component = CourseList;
            break;
        case "/add-course":
            Component = AddCourse;
            break;
        default :
            Component = CourseList;
            break;
    }

    return (
        <div className="App">
           <Component onNavigate={setNav}/>
        </div>
    );
}

export default App;
