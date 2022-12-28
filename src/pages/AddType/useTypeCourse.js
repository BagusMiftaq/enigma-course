import React from "react";
import {onChangeText} from "../../utils/eventHandlers";
const  useTypeCourse = () => {
    const [typeName, setTypeName] = React.useState("");
    const [isDisable, setDisable] = React.useState(true);

    const getter = {typeName, isDisable};
    const setter = {
        typeName: onChangeText(setTypeName)
    }

    React.useEffect(()=>{
        if(typeName) {
            setDisable(false)
        }
    },[typeName])
    return {
        getter, setter
    }

}

export default useTypeCourse;

