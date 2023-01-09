import React from "react";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse
} from "shards-react";

export default class NavExample extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      dropdownOpen: false,
      collapseOpen: false
    };
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  }

  render() {
    return (
      <Navbar type="dark" expand="md" style={{ backgroundColor: '#003f72'}}>
        <NavbarBrand href="#" style={{ color: '#eaab00'}}>Shards React</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />
        <Collapse open={this.state.collapseOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink active href="/" style={{ color: '#fff'}}>
                Cursos
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href="/acerca-del-proyecto" style={{ color: '#fff'}}>
                Acerca del proyecto
              </NavLink>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}