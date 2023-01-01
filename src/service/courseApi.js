import store from "../store/store";

export const getCourseById = (id) =>{
    console.log(store);
    const courseList = store.getState().courses?.courseList;

    return courseList.filter((course)=>{
        return course.courseId === id;
    })?.[0]
}

export const getCourseTypeById = (id) =>{
    console.log(store);
    const courseList = store.getState().coursesType?.typeList;

    return courseList.filter((courseType)=>{
        return courseType.courseTypeId === id;
    })?.[0]
}
