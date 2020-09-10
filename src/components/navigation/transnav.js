import React, { useState } from "react";
// import throttle from "lodash/throttle";
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { LinkContainer } from 'react-router-bootstrap';

import { Home } from '../home/home'

import { Contact } from '../contact/contact'

import { Uguru } from '../uguru/uguru'

import { Dasdasdigital } from '../dasdasdigital/dasdasdigital'

import { Sanchezcoffeeco } from '../sanchezcoffeeco/sanchezcoffeeco'

import { Apexvr } from '../apexvr/apexvr'

import { Stepsaver } from '../stepsaver/stepsaver'

import { Nikerate } from '../nikerate/nikerate'

import ScrollToTop from 'react-router-scroll-top'

import styles from './navigation.module.css'
import './navigation.css'



function TestNav() {
  const [change, setChange] = useState(false);
  const changePosition = 300;

  let position = useWindowScrollPosition();
  // position == { x: 0, y: 0 }

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
    setChange(false);
  }

  let style = {
    backgroundColor: change ? "rgba(255,255,255,0.1)" : "transparent",
    backdropFilter: change ? "saturate(180%) blur(20px)" : "none",
    transition: "400ms ease",
    position: "fixed",
    right: 0,
    left: 0,
    top: 0
  };

  return (

      
    <>
        <div style={style}></div>


    <MemoryRouter>
        
  <ScrollToTop>
    <Container className={styles.navbarbackground}>
        <Navbar  style={style} className={styles.navbar} expand="lg" sticky="top">
          <Navbar.Brand className={styles.logo} to="/">jaeminkim.com</Navbar.Brand>


          <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.navbarwrap} />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ml-auto">

            <LinkContainer to="/">
              <Nav.Link className={styles.white}>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/uguru">
              <Nav.Link className={styles.white}>• UGURU INC</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/sanchezcoffeeco">
              <Nav.Link className={styles.white}>• SANCHEZ COFFEE CO</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/apexvr">
              <Nav.Link className={styles.white}>• APEX VR</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/stepsaver">
              <Nav.Link className={styles.white}>• STEPSAVER</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/dasdasdigital">
              <Nav.Link className={styles.white}>• DASDAS DIGITAL</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Contact">
              <Nav.Link className={styles.white}>Contact</Nav.Link>
            </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/uguru">
              <Uguru />
            </Route>
            <Route path="/sanchezcoffeeco">
              <Sanchezcoffeeco />
            </Route>
            <Route path="/apexvr">
              <Apexvr />
            </Route>
            <Route path="/dasdasdigital">
              <Dasdasdigital />
            </Route>
            <Route path="/stepsaver">
              <Stepsaver />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/"> 
              <Home />
            </Route>
          </Switch>

    </Container>
    </ScrollToTop>
    </MemoryRouter>
    </>
   
  );
}

export default TestNav;