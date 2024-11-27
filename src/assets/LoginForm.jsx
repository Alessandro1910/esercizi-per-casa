import { useState } from "react"

const LoginForm = () => {
  
    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');

    const handleChangeUser = (e)  => {
        setUsername(()=> {
            return e.target.value
        })
    }

    const handleChangePass = (e)  => {
        setPassword(()=> {
            return e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Username: ${username} Password: ${password}`);
    }

    return (
      <>
       <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="">Username:</label>
        <input className="p-2" onChange={handleChangeUser} value={username} type="text" name="username" id="username" placeholder="enter username" />
        </div>
        <div>
        <label htmlFor="">Password:</label>
        <input className="p-2" onChange={handleChangePass} value={password} type="password" name="password" id="password" placeholder="enter password"/>  
        </div>
        <button className="bg-gray-400 rounded" type="submit">Login</button>
       </form>
      </>
    )
  }
  
  export default LoginForm