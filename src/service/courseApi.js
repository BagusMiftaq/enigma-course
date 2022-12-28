import store from "../store/store";

export const getCourseById = (id) =>{
    const courseList = store.getState().courses?.courseList;

    return courseList.filter((course)=>{
        return course.courseId === id;
    })?.[0]
}

