const constants = {
    ACTION : {
        ADD_COURSE : "ADD_COURSE",
        ADD_COURSE_TYPE : "ADD_COURSE_TYPE",
        EDIT_COURSE: "EDIT_COURSE",
        EDIT_COURSE_TYPE : "EDIT_COURSE_TYPE",
        DELETE_COURSE : "DELETE_COURSE",
        DELETE_COURSE_TYPE : "DELETE_COURSE_TYPE",
        SET_TOKEN : "SET_TOKEN"


    },
    ROUTES : {
        COURSE_LIST : "/course",
        ADD_COURSE : "/course/add",
        EDIT_COURSE : "/course/edit",

        COURSE_TYPE : "/type",
        ADD_COURSE_TYPE : "/type/add",
        EDIT_COURSE_TYPE: "/type/edit",

        DASHBOARD : "/",

        AUTH : "/auth",
        LOGIN : "/auth/login",
        REGISTER : "/auth/register"

    }
}

export default constants;