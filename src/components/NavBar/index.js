import {Button, Col, Container, Navbar, NavLink} from "react-bootstrap";
import {StyledNav} from "./styles";
import {Link, useNavigate} from "react-router-dom";
import constants from "../../constants";
import {removeToken} from "../../utils/token";

const menu = [
    {path: constants.ROUTES.COURSE_LIST, menuName: "Course List"},
    {path: constants.ROUTES.COURSE_TYPE, menuName: "Type List"}
]

const NavBar = () => {
    const onNavigate = useNavigate();
    const onLogout = () => {
        removeToken();
        onNavigate(constants.ROUTES.LOGIN);
    }
    return (
        <Navbar bg={'light'} expand={'light'} sticky={'top'}>
            <Container>
                <Col>
                    <Navbar.Brand>Enigma Course</Navbar.Brand>
                </Col>
                <Col>
                    <StyledNav>
                        {menu?.map((item, index)=>(
                            <Link to={item.path} className={"nav-link mx-3"} key={index}>
                                {item.menuName}
                            </Link>
                        ))}
                    </StyledNav>
                </Col>
                <Col className={"col-1"}>
                    <Button variant={"outline-danger"} onClick={onLogout}>
                        Logout
                    </Button>
                </Col>
            </Container>
        </Navbar>
    )
}

export default NavBar
