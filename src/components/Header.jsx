import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const socialStyle1 = {
  color: "white",
  marginLeft: 10,
};

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img alt="CleanCodeOnline" src="/images/logo.png" />
            </Link>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "lightblue" : "white",
              })}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "lightblue" : "white",
              })}
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          {/* <li>
            <NavLink activeStyle={activeStyle} style={style} to="/contact">
              Contact
            </NavLink>
          </li> */}
          <li>
            <a
              className="social-link"
              target="_blank"
              href="https://www.linkedin.com/in/mohamed-nawas-7b2b0498/"
            >
              <BsLinkedin size={20} />
            </a>
          </li>
          <li>
            <a
              style={socialStyle1}
              target="_blank"
              href="https://github.com/mohamed-nawas/"
            >
              <AiFillGithub size={20} />
            </a>
          </li>
          <li>
            <a
              style={socialStyle1}
              target="_blank"
              href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            >
              <GrMail size={20} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
