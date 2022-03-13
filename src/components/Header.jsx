import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const socialStyle1 = {
  color: "white",
};

export default function Header() {
  return (
    // <header>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/">
    //           <img alt="CleanCodeOnline" src="/images/logo.png" />
    //         </Link>
    //       </li>
    //       <li>
    //         <NavLink
    //           style={({ isActive }) => ({
    //             color: isActive ? "lightblue" : "white",
    //           })}
    //           to="/about"
    //         >
    //           About
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink
    //           style={({ isActive }) => ({
    //             color: isActive ? "lightblue" : "white",
    //           })}
    //           to="/projects"
    //         >
    //           Projects
    //         </NavLink>
    //       </li>
    //       {/* <li>
    //         <NavLink activeStyle={activeStyle} style={style} to="/contact">
    //           Contact
    //         </NavLink>
    //       </li> */}
    //       <li>
    //         <a
    //           className="social-link"
    //           target="_blank"
    //           href="https://www.linkedin.com/in/mohamed-nawas-7b2b0498/"
    //         >
    //           <BsLinkedin size={20} />
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           style={socialStyle1}
    //           target="_blank"
    //           href="https://github.com/mohamed-nawas/"
    //         >
    //           <AiFillGithub size={20} />
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           style={socialStyle1}
    //           target="_blank"
    //           href="https://mail.google.com/mail/u/0/#inbox?compose=new"
    //         >
    //           <GrMail size={20} />
    //         </a>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>

    <header>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img alt="OnlineDevs" src="/images/logo.png" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" style={{ paddingLeft: 10 }}>
              <Nav.Link>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "lightblue" : "white",
                    textDecoration: "none",
                  })}
                  to="/about"
                >
                  About
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "lightblue" : "white",
                    textDecoration: "none",
                  })}
                  to="/projects"
                >
                  Projects
                </NavLink>
              </Nav.Link>
            </Nav>
            <Nav style={{ paddingLeft: 10 }}>
              <Nav.Link>
                <a
                  style={socialStyle1}
                  className="social-link"
                  target="_blank"
                  href="https://www.linkedin.com/in/mohamed-nawas-7b2b0498/"
                  rel="noreferrer"
                >
                  <BsLinkedin size={20} />
                </a>
              </Nav.Link>
              <Nav.Link>
                <a
                  style={socialStyle1}
                  target="_blank"
                  href="https://github.com/mohamed-nawas/"
                  rel="noreferrer"
                >
                  <AiFillGithub size={20} />
                </a>
              </Nav.Link>
              <Nav.Link>
                <a
                  style={socialStyle1}
                  target="_blank"
                  href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                  rel="noreferrer"
                >
                  <GrMail size={20} />
                </a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
