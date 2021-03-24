import { Menu } from '../layout/Menu'
import { Container, Button} from 'react-bootstrap'


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
        <Button>Weekly</Button> {} <Button>Monthly</Button> {} <Button>Yearly</Button>
      </Container>
    </>
  )
}
