import React from "react";
import Divider from "@material-ui/core/Divider";
import {
  Navbar,
  NavDropdown,
  Nav,
  Container,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import "./navigation.css";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import HelpIcon from "@mui/icons-material/Help";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Navigation() {
  return (
    <div>
      <Navbar bg="white" expand="lg">
        <Container className="topcontainer">
          <Navbar.Brand href="/home">Project Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title="Your Work"
                id="basic-nav-dropdown"
                style={{ fontSize: 14 }}
              >
                <NavDropdown.Item href="#action/3.1" style={{ fontSize: 14 }}>
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" style={{ fontSize: 14 }}>
                  Another action
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4" style={{ fontSize: 14 }}>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Projects"
                id="basic-nav-dropdown"
                style={{ fontSize: 14 }}
              >
                <NavDropdown.Item href="#action/3.1" style={{ fontSize: 14 }}>
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" style={{ fontSize: 14 }}>
                  Another action
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4" style={{ fontSize: 14 }}>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Filters"
                id="basic-nav-dropdown"
                style={{ fontSize: 14 }}
              >
                <NavDropdown.Item href="#action/3.1" style={{ fontSize: 14 }}>
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" style={{ fontSize: 14 }}>
                  Another action
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4" style={{ fontSize: 14 }}>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Dashboards"
                id="basic-nav-dropdown"
                style={{ fontSize: 14 }}
              >
                <NavDropdown.Item href="#action/3.1" style={{ fontSize: 14 }}>
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" style={{ fontSize: 14 }}>
                  Another action
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4" style={{ fontSize: 14 }}>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="People"
                id="basic-nav-dropdown"
                style={{ fontSize: 14 }}
              >
                <NavDropdown.Item href="#action/3.1" style={{ fontSize: 14 }}>
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" style={{ fontSize: 14 }}>
                  Another action
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4" style={{ fontSize: 14 }}>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Apps  "
                id="basic-nav-dropdown"
                style={{ fontSize: 14 }}
              >
                <NavDropdown.Item href="#action/3.1" style={{ fontSize: 14 }}>
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" style={{ fontSize: 14 }}>
                  Another action
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4" style={{ fontSize: 14 }}>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Button variant="primary" size="sm" className="createbutton">
                Create
              </Button>{" "}
            </Nav>
          </Navbar.Collapse>

          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <button className="iconbutton">
            <NotificationsNoneRoundedIcon />
          </button>
          <button className="iconbutton">
            <HelpIcon />
          </button>
          <button className="iconbutton">
            <AccountCircleIcon />
          </button>
        </Container>
      </Navbar>
      <Divider className="divider" />
    </div>
  );
}

export default Navigation;
