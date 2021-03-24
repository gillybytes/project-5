import { Card } from 'react-bootstrap'
import pic from '../../img/balance.png'

export const Template = () => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={pic} />
          <Card.Body>
            <Card.Title>test</Card.Title>
            <Card.Text>test</Card.Text>
          </Card.Body>
      </Card>
    </>
  )
}
