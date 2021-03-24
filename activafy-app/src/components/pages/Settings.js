import { Menu } from '../layout/Menu'
import { Container, Row, Col } from 'react-bootstrap'

import '../../style/style.css'


export const Settings = () => {
  const nav = [
    {
      id: 1,
      link: "/home",
      label: "Dashboard"
    },
    {
      id: 2,
      link: "/settings",
      label: "Settings"
    },
    {
      id: 3,
      link: "/",
      label: "Sign out"
    }
  ]


  return (
    <>
      <Menu nav={nav} link='/home' />
      <Container className="section">
        <Row className="justify-content-center">
          <Col className="text-center" md="auto">
            <h1>User Settings</h1><br/>
            <h3>Add notifications enhancement</h3>
            <p>Use modal</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}
