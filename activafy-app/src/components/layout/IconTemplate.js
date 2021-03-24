import { Card, Button } from 'react-bootstrap'

export const IconTemplate = (props) => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={props.pic} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              <Button variant="primary">Select</Button>
            </Card.Text>          
          </Card.Body>
      </Card>
    </>
  )
}
