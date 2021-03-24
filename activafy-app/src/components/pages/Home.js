import { Menu } from '../layout/Menu'
import { Container, Row, Col, CardGroup } from 'react-bootstrap'
import { Template } from '../exercise/Template'
import '../../style/style.css'
import '../../style/Home.css'
import balance from '../../img/balance.png'
import endurance from '../../img/endurance.png'
import flexibility from '../../img/flexibility.png'
import strength from '../../img/strength.png'


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
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={12} className="text-center">
            <CardGroup>
              <Template pic={balance} title="Balance"/>
              <Template pic={endurance} title="Endurance"/>
              <Template pic={flexibility} title="Flexibility"/>
              <Template pic={strength} title="Strength"/>
            </CardGroup>          
          </Col>
        </Row>
      </Container>
    </>
  )
}

