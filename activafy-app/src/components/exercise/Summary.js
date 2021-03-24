import { Card, CardGroup} from 'react-bootstrap'


export const Summary = () => {
  return (
    <>
      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title>3/22</Card.Title>
            <Card.Text>
              <a href="/stats">Monday</a>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>3/23</Card.Title>
            <Card.Text>
              <a href="/stats">Tuesday</a> 
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>3/24</Card.Title>
            <Card.Text>
              <a href="/stats">Wednesday</a> 
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>3/25</Card.Title>
            <Card.Text>
              <a href="/stats">Thursday</a> 
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>3/26</Card.Title>
            <Card.Text>
              <a href="/stats">Friday</a>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>3/27</Card.Title>
            <Card.Text>
              <a href="/stats">Saturday</a>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>3/28</Card.Title>
            <Card.Text>
              <a href="/stats">Sunday</a>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  )
}
