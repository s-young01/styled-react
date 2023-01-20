import React from 'react';
import styled from 'styled-components';

const Button = () => {
    const ButtonCom = styled.button`
        background: ${props => props.primary ? 'palevioletred' : 'white'};
        color: ${props => props.primary ? 'white' : 'palevioletred'};
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid palevioletred;
        border-radius: 3px; 
    `;

    // TomatoButton은 ButtonCom의 스타일을 상속받음 (바꿔주고 싶은 값들만 변경!)
    const TomatoButton = styled(ButtonCom)`
        color: tomato;
        background: #fff;
    `;
    // 단위 > 1em = 약 16px 정도
    return (
        <div>
            <ButtonCom>Normal</ButtonCom>
            <ButtonCom primary>Primary</ButtonCom>
            <TomatoButton>TomatoBtn</TomatoButton>
        </div>
    );
};

export default Button;