import { Table } from 'react-bootstrap'


export const Template = () => {
  return (
    <>
      <h2>Balance Routine</h2><br/>
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
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
          </tr>
          <tr>
            <td>TUESDAY</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
          </tr>
          <tr>
            <td>WEDNESDAY</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
          </tr>
          <tr>
            <td>THURSDAY</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
          </tr>
          <tr>
            <td>FRIDAY</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
          </tr>
          <tr>
            <td>SATURDAY</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
          </tr>
          <tr>
            <td>SUNDAY</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
          </tr>
        </tbody>
      </Table>
      <br/>
      <h3>Add Save/Edit Button</h3>
      <h3>Add Synchronize Button</h3>
    </>
  )
}
