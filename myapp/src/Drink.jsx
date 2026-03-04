import HeaderText from "./HeaderText";

export default function Drink({ drink }) { // props 대신 { drink }로 바로 쪼개 받기
  return (
  <>
    <h1>
      Would you like to drink some {drink}?
      <HeaderText text= '추가 텍스트' />
    </h1>
  </>
);
}