import typeList from "../../fixtures/courseType.json"
import constants from "../../constants";

const initialState = {
    typeList: [
        ...typeList.data
    ],
    pagination : {
        count:typeList.count, totalPage:typeList.totalPage, page:typeList.page, size: typeList.size
    }
}

const typeReducer = (state = initialState, action) => {
    switch (action.type){
        case constants.ACTION.ADD_COURSE_TYPE:
            return {
                ...state,
                typeList: [...state.typeList, action.payload]
            }
        case constants.ACTION.EDIT_COURSE_TYPE:
            const newType = state?.typeList?.map((courseType)=>{
                if (courseType.courseTypeId === action?.payload?.courseTypeId){
                    return{
                        ...courseType, ...action?.payload
                    }
                }
                return courseType;
            })
            return {
                ...state,
                typeList: newType
            }
        case constants.ACTION.DELETE_COURSE_TYPE:
            const typeListCopy = [...state?.typeList];
            const typeWithIdIndex = typeListCopy?.findIndex((courseType) => {
                return courseType.courseTypeId === action.payload
            })
            typeListCopy.splice(typeWithIdIndex, 1);
            return {
                ...state,
                typeList: typeListCopy
            }
        default:
            return{
                ...initialState
            };
    }

}

export default typeReducer;