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

export default class Products extends Component {
  render() {
    return (
      <div id="products">
        <NavbarAdmin title={"products"} {...this.props} />
        <Container>
          <Card>
            <CardHeader>จัดการรายการสินค้า</CardHeader>
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
