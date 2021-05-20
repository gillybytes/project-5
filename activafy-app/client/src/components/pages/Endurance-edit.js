import { Menu } from '../layout/Menu'
import { Container, Row, Col } from 'react-bootstrap'
import { TemplateEdit } from '../exercise/TemplateEdit'
import '../../style/style.css'


export const EnduranceEdit = () => {
  const nav = [
    {
      id: 1,
      link: "/Dashboard",
      label: "Settings"
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
      <Menu nav={nav} link='/home'/>
      <Container className="section">
        <Row className="justify-content-center">
          <Col className="text-center" md="auto">
            <h2>Endurance Routine</h2><br/>
            <TemplateEdit path='/endurance' />
          </Col>
        </Row>
      </Container>
    </>
  )
}
