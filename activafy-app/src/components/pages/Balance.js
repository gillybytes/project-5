import { Menu } from '../layout/Menu'
import { Container, Row, Col } from 'react-bootstrap'
import { Template } from '../exercise/Template'
import '../../style/style.css'


export const Balance = () => {
  const nav = [
    {
      id: 1,
      link: "/settings",
      label: "Settings"
    },
    {
      id: 2,
      link: "/s",
      label: "Sign out"
    }
  ]


  return (
    <>
      <Menu nav={nav} link='/home'/>
      <Container className="section">
        <Row className="justify-content-center">
          <Col className="text-center" md="auto">
            <Template />
          </Col>
        </Row>
      </Container>
    </>
  )
}
