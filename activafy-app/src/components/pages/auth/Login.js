import { Menu } from '../../layout/Menu'
import { Container, Form, Button } from 'react-bootstrap'

export const Login = () => {
    const nav = [
        {
          id: 1,
          link: "/signup",
          label: "Sign up"
        }
      ]
    
    return(
        <>
        <Menu nav={nav} link="/" />
        <Container className="section">
          <Form>
            <Form.Group controlId="fromBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Button variant="primary" href="/home">
              Login
            </Button>
          </Form>
        </Container>
        </>
    )
}