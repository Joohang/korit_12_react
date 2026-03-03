export default function Drink({ drink }) { // props 대신 { drink }로 바로 쪼개 받기
  return <h1>Would you like to drink some {drink}?</h1>;
}