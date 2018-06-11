import React, { Component } from "react";
import "../bootstrap.min.css";
import { Button } from "reactstrap";
import { StyledButton } from "../styled/StyledButton";
import { Container, Row, Col } from "reactstrap";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText,
  Fade
} from "reactstrap";
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
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "info",
      fadeIn: true
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      color: "success",
      fadeIn: !this.state.fadeIn
    });
  }

  render() {
    return (
      <Container>
        <Navbar color="primary" light className="rounded" expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>

        <Row>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
        </Row>

        <Row>
          <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Input without validation</Label>
                <Input type="text" required placeholder="with a placeholder" />
                <FormFeedback>You will not be able to see this</FormFeedback>
                <FormText>Example help text that remains unchanged.</FormText>
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Valid input</Label>
                <Input valid />
                <FormFeedback valid>Sweet! that name is available</FormFeedback>
                <FormText>Example help text that remains unchanged.</FormText>
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Invalid input</Label>
                <Input invalid />
                <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                <FormText>Example help text that remains unchanged.</FormText>
              </FormGroup>
            </Form>
          </Fade>
        </Row>

        <Card>
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>

        <StyledButton>Mon super Boutton</StyledButton>
        <Button color="primary" disabled>
          disabled
        </Button>
        <Button onClick={this.handleChange} block color="primary">
          Cliquez-moi
        </Button>
        <Button block color={this.state.color}>
          Active block
        </Button>
        <Button color="primary">primary</Button>
        <Button color="secondary">secondary</Button>
        <Button color="success">success</Button>
        <Button color="info">info</Button>
        <Button color="warning">warning</Button>
        <Button color="danger">danger</Button>
        <Button color="link">link</Button>
      </Container>
    );
  }
}

export default App;
