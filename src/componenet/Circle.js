import React from 'react';
import styled, {css} from 'styled-components';

const CircleDiv = styled.div`
  width: 50px;
  height: 50px;
  background: ${ props => props.color || 'black' };
  border-radius: 50%;
  ${ props => props.big &&
  css`
    width: 150px;
    height: 150px;
  `
  }
`;
// 컴포넌트의 props를 받아와 해당하는 key값이 있으면 그 값을 리턴, 없으면 검은색 리턴
// OR연산자 : 둘 중 하나라도 true면 하나의 값이 false여도 true이기 때문에 
// 첫번째 값이 true면 두번째 값을 볼 필요가 없음 => 바로 첫번째 값으로 적용
// 첫번째 값이 false일 때는 두번째 값이 true로서 적용됨 

// AND연산자 : 둘 중 하나라도 false면 무조건 false이기 때문에 
// 첫번째 값이 false면 두번째 값이 true여도 종료시켜버림,,
const Circle = () => {
    return (
        <div>
            <CircleDiv color='blue'/>
            <CircleDiv color='green' big/>
            <CircleDiv color='yellow'/>
            <CircleDiv big/>
        </div>
    );
};

export default Circle;