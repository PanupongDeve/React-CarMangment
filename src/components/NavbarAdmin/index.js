import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import IconKit from "../../class/IconKit";

const Icon = IconKit.getIconComponent();
const { user, shoppingCart, gear, edit, signOut } = IconKit.getIconFontAwesome();

export default class NavbarAdmin extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onRedirect  = (redirectPath) => {
    return () => {
      this.props.history.push(redirectPath);
    }
  }

  render() {
    return (
      <div id="navbar-admin">
        <Navbar color="light" light expand="md">
          <NavbarBrand>DashBoard</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={this.onRedirect('/users')}>
                  {" "}
                  <div className="nav-text">
                    {" "}
                    <div className="nav-icon">
                      <Icon size={24} icon={user} />
                    </div>
                    Users{" "}
                  </div>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.onRedirect('/products')}>
                  {" "}
                  <div className="nav-text">
                    {" "}
                    <div className="nav-icon">
                      <Icon size={24} icon={shoppingCart} />
                    </div>{" "}
                    Products{" "}
                  </div>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <div class="dropdown">
                  <DropdownToggle nav caret>
                    <div className="nav-icon">
                      <Icon size={24} icon={gear} />
                    </div>
                    <div className="text-menu">Settings</div>
                  </DropdownToggle>

                  <DropdownMenu right>
                    <DropdownItem onClick={this.onRedirect('/profile')}>
                      <div className="nav-icon">
                        <Icon size={24} icon={edit} />
                      </div>
                      <div className="text-menu">Profile</div>
                    </DropdownItem>
                    <DropdownItem>
                      <div className="nav-icon">
                        <Icon size={24} icon={signOut} />
                      </div>
                      <div className="text-menu">Logout</div>
                    </DropdownItem>
                  </DropdownMenu>
                </div>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
