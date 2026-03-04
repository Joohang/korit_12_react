import Hello from './Hello.jsx'
import Drink from './Drink.jsx'
import MyComponent from './MyComponent.jsx'
import MyComponent2 from './MyComponent2.jsx'

export default function App() {
  return (
    <>
      <MyComponent2 isLoggedin={true} />
      <MyComponent2 isLoggedin={false} />
      <MyComponent />
      <Hello firstName='김' lastName='영' />
      <Hello firstName='김' lastName='일' />
      <Hello firstName='김' lastName='이' />
      <Drink drink='coffee' />
    </>
  )
}
