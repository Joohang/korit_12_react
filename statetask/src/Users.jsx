import { useState } from "react"

export default function Users () {
  const [ username , setUsername] = useState('');
  const [ password , setPassword] = useState('');
  const [ email , setEmail] = useState('');

  const handleSubmit = event => {    
    alert(`Hello ${username} !`);
    event.preventDefault();
  }

  
    

  return (
    <form onSubmit={handleSubmit}>
      <label>User Name</label><br />
      <input type="text" name="username" onChange={(event) => setUsername(event.target.value)} value={username}/><br />
      <label>Password</label><br />
      <input type="password" name="password" onChange={(event) => setPassword(event.target.value)} value={password}/><br />
      <label>E-mail</label><br />
      <input type="text" name="email" onChange={(event) => setEmail(event.target.value)} value={email}/><br />
      <input type="submit" />
    </form>
  );
}
  
