import Login from './Login';
import Logout from './Logout';

export default function MyComponent2 (props) {
  const isLoggedin = props.isLoggedin; // props에서 isLoggedin을 꺼내서 변수에 저장

  if(isLoggedin) {
    return (<Login />)
  }

  return (<Logout />)
}