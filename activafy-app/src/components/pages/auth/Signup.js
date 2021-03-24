import React from 'react';
import './style.css'

export const Signup = () => {
  return(
      <container className="section">
          <h1>Activafy</h1>
          <h2>Create your Activafy Account</h2>
          <form>
              <label>
                  <p>First name<input type="text" /></p>
              </label><br />
              <label>
                  <p>Last name<input type="text" /></p>
              </label><br />
              <label>
                  <p>Username<input type="text" /></p>
              </label><br />
              <label>
                  <p>Password<input type="password" /></p>
              </label><br />
              <div>
                  <button type="submit">Submit</button>
              </div>
          </form>
      </container>
  )
}

export default Signup;