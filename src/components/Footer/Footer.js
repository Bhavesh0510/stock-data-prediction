import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer className="footer px-0 px-lg-3 fixed">
        <Container fluid>
            <p className="copyright text-center">
              © {new Date().getFullYear()}{" "}
              <Link to="/">Mine Stocks</Link>, made with
              &hearts;	 
            </p>
        </Container>
      </footer>
    );
  }
}

export default Footer;
