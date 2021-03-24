import { Menu } from '../../layout/Menu'
import './style.css'

export const Signup = () => {
    const nav = [
        {
          id: 1,
          link: "/login",
          label: "Login"
        }
      ]
  return(
      <>
        <Menu nav={nav} />
          
          <form>
            <div className="container">
                <label for="lname"><b>LastName</b></label>
                <input type="text" placeholder="Enter your last name" name="lname" required />
                <label for="fname"><b>FirstName</b></label>
                <input type="text" placeholder="Enter your first name" name="fname" required />
                <label for="uname"><b>UserName</b></label>
                <input type="text" placeholder="Enter the user name" name="uname" required /> 
                <label for="passw"><b>Password</b></label>
                <input type="password" placeholder="Enter the password" name="passw" required />
                <button type="submit">Submit</button>        
            </div>
          </form>
    
      </>
  )
}
