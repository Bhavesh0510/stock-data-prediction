import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "views/index.css"

class Footer extends Component {
  render() {
    return (
      <footer className="footer fixed">
        <Container fluid >
          {/* <div> */}
          <p className="copyright" style={{ marginLeft: "50%", transform:"translate(-40%, 0%)"}} >
              © {new Date().getFullYear()}{" "}
              <Link to="/">Mine Stocks</Link>, made with
              &hearts;	 
            </p>
            {/* </div> */}
        </Container>
      </footer>
    );
  }
}

export default Footer;
