import { Menu } from '../../layout/Menu'
import { Container, Form, Button } from 'react-bootstrap'

export const Signup = () => {
    const nav = [
        {
          id: 1,
          link: "/",
          label: "Login"
        }
      ]
  return(
      <>
        <Menu nav={nav} link='/'/>
        <Container className="section">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" href="/home">
              Sign up
            </Button> { }
            <Button variant="primary" href="/home">
              Sign in with Google account
            </Button> { }
            <Button variant="primary" href="/home">
              Forgot password?
            </Button>
          </Form>
        </Container>
        
          

    
      </>
  )
}
