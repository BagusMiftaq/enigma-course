import { FormControl, FormLabel, FormGroup } from "react-bootstrap";

const FormInput = ({ label, type, placeholder, value, onChange }) => {
  let props;
  switch (type) {
    case "textarea":
      props = { as: type, value };
      break;
    case "file":
      props = { type };
      break;
    default:
      props = { type, value };
      break;
  }

  const onChangeHandler = (e) => {
    if (type === "file") {
      onChange(e.target.files[0]);
    } else {
      onChange(e.target.value);
    }
  };
  return (
    <FormGroup className="mb-3">
      <FormLabel>{label}</FormLabel>
      <FormControl
        {...props}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </FormGroup>
  );
};

export default FormInput;
