import constants from "../../constants";


export const addCourse = (course) => {
    return {
        type : constants.ACTION.ADD_COURSE,
        payload : {
            courseId: Math.random().toString(36).substring(2,7),
            title:course.title,
            description:course.description,
            file:course.courseFile,
            courseInfo: {
                duration:course.duration,
                level:course.level,
            },
            courseType: {
                courseTypeId: course.courseTypeId
            }


        }

    }
}

export const editCourse = (course) =>({
    type : constants.ACTION.EDIT_COURSE,
    payload : course

})

export const deleteCourse = (id) => ({
    type : constants.ACTION.DELETE_COURSE,
    payload: id
})