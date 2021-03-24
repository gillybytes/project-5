import { useState } from 'react'
import { Menu } from '../layout/Menu'
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap'
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
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
            </tr>
            <tr>
              <td>TUESDAY</td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
            </tr>
            <tr>
              <td>WEDNESDAY</td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
            </tr>
            <tr>
              <td>THURSDAY</td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
            </tr>
            <tr>
              <td>FRIDAY</td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
            </tr>
            <tr>
              <td>SATURDAY</td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
            </tr>
            <tr>
              <td>SUNDAY</td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
              <td><Form.Control type="text" placeholder="Exercise" /></td>
            </tr>
          </tbody>
        </Table>
      <Button variant="primary" href={props.path}>Save</Button>
    </Form>
  </>
  )
}