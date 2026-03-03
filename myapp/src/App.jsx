import Hello from './Hello.jsx'
import Drink from './Drink.jsx'
import MyComponent from './MyComponent.jsx'

export default function App() {
  return (
    <>
      <MyComponent />
      <Hello firstName='김' lastName='영' />
      <Hello firstName='김' lastName='일' />
      <Hello firstName='김' lastName='이' />
      <Drink drink='coffee' />
    </>
  )
}
