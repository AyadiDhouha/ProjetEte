import {useHistory} from 'react-router-dom'
import { Container, Navbar, Nav,Form,Button,FormControl } from "react-bootstrap"
import "./Nav2.css"


export default function Nav2() {
  const history = useHistory()
  function Disconnect() {
    localStorage.clear()
    history.push("/")
    window.location.reload();
  }

  return (
    <div>
      <Navbar className='bgNav' collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/" className="font1">Covid</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link href="/courses" className="font">Courses</Nav.Link>
              <Nav.Link eventKey={2} href="/profile" className="font">Profile</Nav.Link>
              <Nav.Link eventKey={3} onClick={Disconnect} className="font">Disconnect</Nav.Link>
            </Nav>
            <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button className="btn" variant="outline-success">Search</Button>
       </Form>
          </Navbar.Collapse>
        </Container>
       </Navbar>
      
      
    </div>
  )
}