import { useState } from 'react';

export default function MyComponent() {
  const [ firstName, lastName ] = useState('김영');
  

  return (
    <>
      <div>Hello {firstName}</div>
    </>
  )
}