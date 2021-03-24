import { MenuBar } from '../layout/Menu'
import { Container } from 'react-bootstrap'
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
      <MenuBar nav={nav} />
      <Container className="section">
        <h1>Dashboard will go here</h1>
      </Container>
    </>
  )
}

