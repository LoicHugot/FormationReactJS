import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBar.module.scss';
import { Nav, Navbar } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';

const NavBar = () => (
  <Navbar bg="dark" variant="dark">
    <LinkContainer to="/">
      <Navbar.Brand>
        Meme generator
      </Navbar.Brand>
    </LinkContainer>
    <Nav
      activeKey="/thumbnail"
      // onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <LinkContainer to="/thumbnail">
          <Nav.Link>Thumbnail</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/editor">
          <Nav.Link>Nouveau meme</Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </Nav>
  </Navbar>
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
