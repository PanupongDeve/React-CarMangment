import React, { Component } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardHeader,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

export default class Login extends Component {
  render() {
    return (
      <div id="login">
        <Card>
          <CardHeader>Admin - login</CardHeader>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Username</Label>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter Username"
                />
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                />
              </FormGroup>
              <FormGroup>
                <Button className="accept">Login</Button>
              </FormGroup>
              <FormGroup>
                <Button className="register">register</Button>
              </FormGroup>
              <FormGroup>
                <Button className="cancel">cancel</Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
