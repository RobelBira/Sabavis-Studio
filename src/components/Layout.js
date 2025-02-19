import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  text-decoration: none;
  color: #333;
  font-weight: bold;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 2rem 0;
  background-color: #f8f8f8;
  margin-top: auto;
`;

const Layout = () => (
  <>
    <Navbar>
      <div>Logo</div>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/case-studies">Case Studies</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/careers">Careers</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </Navbar>
    <Outlet />
    <Footer>&copy; {new Date().getFullYear()} The Digital Bunch</Footer>
  </>
);

export default Layout;
