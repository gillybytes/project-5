import { Menu } from '../layout/Menu'
import { Container, Row, Button} from 'react-bootstrap'


export const Stats = () => {
  const nav = [
    {
      id: 1,
      link: "/settings",
      label: "Settings"
    },
    {
      id: 2,
      link: "/",
      label: "Sign out"
    }
  ]
  return (
    <>
      <Menu nav={nav} link='/home' />
        <Container className="section">
          <Row className="justify-content-center">
            <h3>Daily Statistics</h3><br/>
          </Row>
          <Row className="justify-content-center">
            <p>
              User can view their daily, weekly, monthly, and yearly workout summary.
            </p>
          </Row>
          <Row className="justify-content-center">
            <p>
              <Button>Weekly</Button> { } <Button>Monthly</Button> { } <Button>Yearly</Button>
            </p>
                          
          </Row>
          
        </Container>
    </>
  )
}
