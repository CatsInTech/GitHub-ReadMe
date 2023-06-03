import { Component } from "react";
import Header from "./Bootstrap/Header";
import Container from "./Bootstrap/Container";
import ContainerRow from "./Bootstrap/ContainerRow";
import Card from "./Bootstrap/Card";
import FormGroup from "./Bootstrap/FormGroup";

class Docs extends Component {
  state = {
    Name: "",
    Email: ""
  };

  handleFormElementChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render () {
    return (
      <div className="Docs">
        <ContainerRow fluid={true}>
          <div className="col-12">
            <h1 className="display-4 AppHeading text-center">
              Documentation -{" "}
              <a
                href="https://github.com/praveenscience/Praveen-React-App"
                target="_blank"
                rel="noopener noreferrer"
              >
                Praveen&rsquo;s Modified CRA project
              </a>
            </h1>
          </div>
        </ContainerRow>
        <Header className="justify-content-center">All Headers</Header>
        <Header dark={true}>Dark Header</Header>
        <Header>Light Header</Header>
        <Header dark={true} className="AppHeader justify-content-center">
          Centrally Aligned Dark Header
        </Header>
        <Container>
          <div className="row pb-3">
            <div className="col-12 col-sm-6">
              <Card Header="Forms">
                <form>
                  <FormGroup
                    Label="Name"
                    Id="Name"
                    Type="text"
                    Value={this.state.Name}
                    onChange={this.handleFormElementChange}
                  />
                  <FormGroup
                    Label="Email"
                    Id="Email"
                    Type="email"
                    Value={this.state.Email}
                    onChange={this.handleFormElementChange}
                  />
                  <input
                    type="submit"
                    value="Save"
                    className="btn btn-primary"
                  />
                </form>
              </Card>
            </div>
            <div className="col-12 col-sm-6 mt-3 mt-sm-0">
              <Card className="mb-3 h-100" Header="State Value">
                <pre className="bg-light border rounded p-1">
                  {JSON.stringify(this.state, null, 2)}
                </pre>
              </Card>
            </div>
          </div>
        </Container>
        <Container>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Boxed 1</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Boxed 2</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Boxed 3</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Boxed 4</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Boxed 5</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Boxed 6</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Boxed 7</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Boxed 8</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Boxed 9</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Boxed 10</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Boxed 11</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Boxed 12</Card>
            </div>
          </div>
        </Container>
        <Container fluid={true}>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Fluid 1</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Fluid 2</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Fluid 3</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Fluid 4</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Fluid 5</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Fluid 6</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Fluid 7</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Fluid 8</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Fluid 9</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Fluid 10</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Fluid 11</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Fluid 12</Card>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Docs;
