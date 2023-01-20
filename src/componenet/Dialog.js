import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import ButtonTotal from './ButtonTotal';

// fadeIn - keyframes만들기
const fadeIn = keyframes`
    from {opacity: 0}
    to {opacity: 1}
`;

// fadeOut - keyframs만들기
const fadeOut = keyframes`
    from {opacity: 1}
    to {opacity: 0}
`;

// slideUp - keyframes만들기
const slideUp = keyframes`
    from {transform: translateY(200px)}
    to {transform: translateY(0)}
`;

// slideDown - keyframes만들기
const slideDown = keyframes`
    from {transform: translateY(0)}
    to {transform: translateY(200px)}
`;

// 컨펌창 배경
const DarkBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.8);
    animation-duration: 0.25s;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;
    ${props => 
        props.disappear && css`
            animation-name: ${fadeOut};
        `
    }
`;
// 컨ㅊ펌창 ㅂㅡㄹ럭
const DialogBlock = styled.div`
    width: 320px;
    padding: 1.5em;
    background: white;
    border-radius: 2px;
    h3 {
        margin:0;
        font-size: 1.5em;
    }
    p {
        font-size 1.125em
    }
    animation-duration: 0.25s;
    animation-name: ${slideUp};
    animation-fill-mode: forwards;
    ${props => 
        props.disappear && css`
            animation-name: ${slideDown};
        `
    }
`;
const Dialog = ({title, confirmText, cancelText, children, 
    visible, onConfirm, onCancel}) => {
    // 현재 트렌지션 효과를 보여주고 있는 중이라는 상태를 의미함 
    const [animate, setAnimate] = useState(false);
    // 실제로 컴포넌트가 사라지는 시점을 지연시키기 위한 상태를 의미함
    const [localVisible, setLocalVisible] = useState(visible);

    // useEffect 작성
    // 1. visible 값이 true에서 false로 바뀌는 시점을 감지하여
    // animate값을 true로 변경
    // 2. setTimeout 함수를 사용해 0.5초 이후에 
    // animate값을 false로 변경
    useEffect(() => {
        // localVisible이 true고, visible값이 true -> false가 되면
        if(localVisible && !visible) {
            // animate가 true가 되고, 0.5초 지나면 false로 변경
            setAnimate(true);
            setTimeout(() => setAnimate(false), 500);
        }
        // visible 상태는 false가 담김 
        setLocalVisible(visible);
    }, [localVisible, visible]) // localVisible과 visible 값을 구독 좋아요 알림설정
    // animate가 false고, localVisible도 false일 때 Dialog 사라짐
    if(!animate && !localVisible) return null;
    return (
        <DarkBackground disappear={!visible}>
            <DialogBlock disappear={!visible}>
                <h3>{title}</h3>
                <p>{children}</p>
                <div>
                    <ButtonTotal color='gray' onClick={onConfirm}>{confirmText}</ButtonTotal>
                    <ButtonTotal color='pink' onClick={onCancel}>{cancelText}</ButtonTotal>
                </div>
            </DialogBlock>
        </DarkBackground>
    );
};

export default Dialog;