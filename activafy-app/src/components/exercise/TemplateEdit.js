import { Button, Table, Form } from 'react-bootstrap'
import '../../style/style.css'


export const TemplateEdit = (props) => {
  return (
    <>
      <Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>DAY</th>
              <th>ACTIVITY</th>
              <th>ACTIVE TIME</th>
              <th>COOL DOWN</th>
              <th>DISTANCE</th>
              <th>SETS</th>
              <th>REPS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MONDAY</td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="number" placeholder="0" /></td>
              <td><Form.Control type="number" placeholder="0" /></td>
              <td><Form.Control type="number" placeholder="0" /></td>
              <td><Form.Control type="number" placeholder="0" /></td>
              <td><Form.Control type="number" placeholder="0" /></td>
            </tr>
            <tr>
              <td>TUESDAY</td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="number" placeholder="0" /></td>
              <td><Form.Control type="number" placeholder="0" /></td>
              <td><Form.Control type="number" placeholder="0" /></td>
              <td><Form.Control type="number" placeholder="0" /></td>
              <td><Form.Control type="number" placeholder="0" /></td>
            </tr>
            <tr>
              <td>WEDNESDAY</td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="number" placeholder="0" /></td>
              <td><Form.Control type="number" placeholder="0" /></td>
              <td><Form.Control type="number" placeholder="0" /></td>
              <td><Form.Control type="number" placeholder="0" /></td>
              <td><Form.Control type="number" placeholder="0" /></td>
            </tr>
            <tr>
              <td>THURSDAY</td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="number" placeholder="0" /></td>
              <td><Form.Control type="number" placeholder="0" /></td>
              <td><Form.Control type="number" placeholder="0" /></td>
              <td><Form.Control type="number" placeholder="0" /></td>
              <td><Form.Control type="number" placeholder="0" /></td>
            </tr>
            <tr>
              <td>FRIDAY</td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="number" placeholder="0" /></td>
              <td><Form.Control type="number" placeholder="0" /></td>
              <td><Form.Control type="number" placeholder="0" /></td>
              <td><Form.Control type="number" placeholder="0" /></td>
              <td><Form.Control type="number" placeholder="0" /></td>
            </tr>
            <tr>
              <td>SATURDAY</td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="number" placeholder="0" /></td>
              <td><Form.Control type="number" placeholder="0" /></td>
              <td><Form.Control type="number" placeholder="0" /></td>
              <td><Form.Control type="number" placeholder="0" /></td>
              <td><Form.Control type="number" placeholder="0" /></td>
            </tr>
            <tr>
              <td>SUNDAY</td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="number" placeholder="0" /></td>
              <td><Form.Control type="number" placeholder="0" /></td>
              <td><Form.Control type="number" placeholder="0" /></td>
              <td><Form.Control type="number" placeholder="0" /></td>
              <td><Form.Control type="number" placeholder="0" /></td>
            </tr>
          </tbody>
        </Table>
        <p>
          <Button variant="primary" href={props.path}>Save</Button> { } <Button variant="primary" href={props.path}>Cancel</Button>
        </p>
    </Form>
  </>
  )
}