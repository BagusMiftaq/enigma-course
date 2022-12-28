    import constants from "../../constants";


export const onAddCourse = (course) => {
    return {
        type : constants.ACTION.ADD_COURSE,
        payload : {
            courseId: Math.random().toString(36).substring(2,7),
            title:course.title,
            desc:course.description,
            file:course.courseFile,
            duration:course.duration,
            level:course.level,
            courseTypeId: course.typeId
        }

    }
}

export const onEditCourse = (course) =>({
    type : constants.ACTION.EDIT_COURSE,
    payload : course

})

export const deleteCourse = (id) => ({
    type : constants.ACTION.DELETE_COURSE,
    payload: id
})