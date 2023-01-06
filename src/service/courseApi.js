import api from "../config/api";


export const getCourseById = (id) =>{
    return api.get("/courses/"+id);
}

export const getCourses = (page) => api.get("/courses", {
    params:{
        page
    }
})

export const addCourse = (data) => {
    return api.post("/courses", data, {
        headers : {
            "Content-type" : "multipart/form-data"
        }
    })
}

export const updateCourse = (course) => {
    return api.put("/courses/"+course.courseId, course);
}

export const deleteCourse = (id) => {
    return api.delete("/courses/"+id);
}

export const downloadCourse = async(filename) => {
    try {
        const response = await api.get("/course-files",{
            responseType: "blob",
            params : {
                filename
            }
        })

        const courseFile = new Blob([response.data]);
        const url = window.URL.createObjectURL(courseFile);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(document.body.lastChild);


    } catch (e){
        alert("Download Failed")
    }
}