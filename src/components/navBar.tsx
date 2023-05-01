import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from "../styles/navBar.module.css";
import Button from "react-bootstrap/Button";
import SSRProvider from 'react-bootstrap/SSRProvider';
import localFont from "next/font/local";
import Image from "next/image";

const satoshiRegular = localFont({src: "../../public/fonts/Satoshi-Regular.woff2"});

export default function NavBar() {
  return (
    <SSRProvider>
        <style type ="text/css">
            {`
            .dropdown-menu{
                background: #dac5a7;
              
                border: 1px solid rgba(218, 197, 167, 0.15);
              
                backdrop-filter: blur(15px); 
                border-radius: 2px;
            }
            `}
        </style>
    <Navbar expand="lg" className={`${styles.navigation} ${styles.navbar}`}>
      <Container>
        <Navbar.Brand className={`${styles.navbarBrand}`} href="#home"><Image src="/Logo.svg" width={52.17} height={20} alt='logo'></Image></Navbar.Brand>
        <Navbar.Toggle className={`${styles.navbarToggler}`} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={`${satoshiRegular.className} ${styles.navLink}`} href="#services">SERVICES</Nav.Link>
            <Nav.Link className={`${satoshiRegular.className} ${styles.navLink}`} href="#work">WORK</Nav.Link>
            <Nav.Link className={`${satoshiRegular.className} ${styles.navLink}`} href="#blog">BLOG</Nav.Link>
            <NavDropdown className={`${satoshiRegular.className}`} title="PAGES" id="basic-nav-dropdown">
              <NavDropdown.Item className={`${satoshiRegular.className} ${styles.dropdownItem}`} href="#action/3.1">PAGE1</NavDropdown.Item>
              <NavDropdown.Item className={`${satoshiRegular.className} ${styles.dropdownItem}`} href="#action/3.2">
                PAGE2
              </NavDropdown.Item>
              <NavDropdown.Item className={`${satoshiRegular.className} ${styles.dropdownItem}`} href="#action/3.3">PAGE3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className={`${satoshiRegular.className} ${styles.dropdownItem}`} href="#action/3.4">
                PAGE4
              </NavDropdown.Item>
            </NavDropdown>
            <Button className={`${satoshiRegular.className}`} id="button">Let&apos;s talk</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </SSRProvider>
  );
}
