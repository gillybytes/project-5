import { Menu } from '../../layout/Menu'

export const Login = () => {
    const nav = [
        {
          id: 1,
          link: "/signup",
          label: "Sign up"
        }
      ]
    
    return(
        <>
        <Menu nav={nav} link="/login" />
          <form>
              <h1>Activafy</h1>
              <div className="container">
                  <label for="username"><b>Username</b></label>
                  <input type="text" placeholder="Enter Username" name="username" required />

                  <label for="passw"><b>Password</b></label>
                  <input type="password" placeholder="Enter Password" name="passw" required />
                
                  <button type="submit">Login</button>
                 
              </div>
          </form>
        </>
    )
}