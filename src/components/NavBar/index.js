import {Container, Navbar, NavLink} from "react-bootstrap";
import {StyledNav} from "./styles";
import {Link} from "react-router-dom";
import constants from "../../constants";

const menu = [
    {path: constants.ROUTES.COURSE_LIST, text: "Course List"},
    {path: constants.ROUTES.COURSE_TYPE, text: "Type List"}
]

const NavBar = () => (
    <Navbar bg={'light'} expand={'light'} sticky={'top'}>
        <Container>
            <Navbar.Brand>Enigma Course</Navbar.Brand>
            <StyledNav>
                {menu?.map((item, index)=>(
                    <Link to={item.path} className={"nav-link mx-3"} key={index}>
                        {item.text}
                    </Link>
                ))}
            </StyledNav>
        </Container>
    </Navbar>
    )

export default NavBar
