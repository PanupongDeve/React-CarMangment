import React, { Component } from "react";
import NavbarAdmin from "../../components/NavbarAdmin";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

export default class Users extends Component {
  render() {
    return (
      <div id="users">
        <NavbarAdmin title={"users"} {...this.props} />
        <Container>
          <Card>
            <CardHeader>จัดการผู้ใช้งาน</CardHeader>
            <CardBody>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
            </CardBody>
          </Card>
          <Row />
        </Container>
      </div>
    );
  }
}
