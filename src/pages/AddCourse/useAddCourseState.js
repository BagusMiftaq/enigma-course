import React from "react";

const useAddCourseState = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [typeId, setTypeId] = React.useState("");
  const [file, setFile] = React.useState("");
  const [level, setLevel] = React.useState("");
  const [duration, setDuration] = React.useState("");

  const getter = [title, description, typeId, file, level, duration];
  const setter = [
    setTitle,
    setDescription,
    setTypeId,
    setFile,
    setLevel,
    setDuration,
  ];

  return [getter, setter];
};

export default useAddCourseState;
