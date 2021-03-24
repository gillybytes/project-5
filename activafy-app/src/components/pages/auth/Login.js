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
        <Menu nav={nav} link="/" />
        <container className="section">
            <h1>Welcome to Activafy!</h1>
            <form>
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