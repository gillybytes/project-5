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
              </label>
              <label>
                  <p>Last name<input type="text" /></p>
              </label>
              <label>
                  <p>Username<input type="text" /></p>
              </label>
              <label>
                  <p>Password<input type="password" /></p>
              </label>
              <div>
                  <button type="submit">Submit</button>
              </div>
          </form>
      </container>
  )
}

export default Signup;