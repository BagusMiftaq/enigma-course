import typeList from "../../fixtures/courseType.json"
import courseList from "../../fixtures/courseList.json";

const initialState = {
    typeList: [
        ...typeList.data
    ],
    pagination : {
        count:courseList.count, totalPage:courseList.totalPage, page:courseList.page, size: courseList.size
    }
}

const typeReducer = (state = initialState, action) => {
    return{
        ...initialState
    };
}

export default typeReducer;