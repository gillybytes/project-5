import { Menu } from '../layout/Menu'
import { Container, Row, Col } from 'react-bootstrap'
import { Template } from '../exercise/Template'
import '../../style/style.css'
import '../../style/Home.css'


export const Home = () => {
  const nav = [
    {
      id: 1,
      link: "/settings",
      label: "Settings"
    },
    {
      id: 2,
      link: "/logout",
      label: "Sign out"
    }
  ]

  return (
    <>
      <Menu nav={nav} />
      <Container className="section">
        <Row className="justify-content-center">
          <Col className="text-center" md="auto">
            <h1>Welcome, [name]!</h1><br/>
            <h3>Choose a template:</h3>
            <br />
            <p>Enter Template components here</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={6} md={3} className="text-center">
            <Template />
          </Col>
        </Row>
      </Container>
    </>
  )
}

