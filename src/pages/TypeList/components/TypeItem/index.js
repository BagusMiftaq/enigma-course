import React from "react";
import {StyledListItem} from "./styles";
import {Button, ButtonGroup, Col} from "react-bootstrap";

const TypeItem = ({data, onNavigateToEdit, onDelete}) => {
    console.log("test", data?.typeName)
    return (
        <StyledListItem action>
            <Col>
                <h3 className="lead">{data?.typeName}</h3>
            </Col>
            <ButtonGroup>
                <Button variant="primary" onClick={onNavigateToEdit}>Edit</Button>
                <Button variant="danger" onClick={onDelete}>Delete</Button>
                <Button variant="secondary">Download</Button>
            </ButtonGroup>
        </StyledListItem>
    )
}

export default React.memo(TypeItem);
