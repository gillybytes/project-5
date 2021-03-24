import Menu from '../layout/Menu'
import { Container } from 'react-bootstrap'


export const Home = () => {
  const nav = [
    {
      id: 1,
      link: "/login",
      label: "Log in"
    },
    {
      id: 2,
      link: "/signup",
      label: "Sign up"
    }
  ]

  return (
    <>
      <Menu nav={nav} />
      <Container className="dashboard">
        <h1>Dashboard will go here</h1>
      </Container>
    </>
  )
}

