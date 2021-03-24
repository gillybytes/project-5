import { Menu } from '../../layout/Menu'
import './style.css'

export const Signup = () => {
    const nav = [
        {
          id: 1,
          link: "/",
          label: "Login"
        }
      ]
  return(
      <>
        <Menu nav={nav} />
          <container className="section">
            <h2>Create your Account</h2>
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
      </>
  )
}

export default Signup;