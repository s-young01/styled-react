import React from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';

const ButtonTotal = ({children, color, size, fullWidth, ...rest}) => {
    // 배경색 변수
    const colorStyle = css`
        ${({theme, color}) => {
            const selected = theme.palette[color];
            return css`
                background: ${selected};
                &:hover {
                    background: ${darken(0.1, selected)};
                }
            `;
        }}
    `

    // 사이즈
    const sizes = {
        large: {
            width: '40%',
            height: '3em',
            fontSize: '1.25em'
        },
        midium: {
            width: '25%',
            height: '2.25em',
            fontSize: '1em'
        },
        small: {
            width: '15%',
            height: '1.75em',
            fontSize: '0.75em'
        }
    }

    const sizeStyle = css`
        ${({size}) => css`
            height: ${sizes[size].height};
            font-size: ${sizes[size.fontSize]};
            width: ${sizes[size].width};
        `}
    `;
    const StyledButton = styled.button`
        /* 공통스타일 */
        display: inline-flex;
        justify-content: center;
        outline: 0;
        border: 0;
        border-radius: 4px;
        color: white;
        font-weight: bold;
        cursor: pointer;
        padding: 1em;
        margin: 0.5em;

        /* 크기 지정 */
        font-size: 1em;
        align-items: center;

        /* 색상 지정 */
        ${colorStyle}

        /* 크기 스타일 */
       

        // 전체 너비 100% 스티일
        ${props => {props.fullWidth &&
        css`
            width: 100%;
        `
        }}
        
        & + & {
            margin-left: 1em;
        }
    `;
    return (
        <StyledButton color={color} size={size} fullWidh={fullWidth} {...rest}>{children}</StyledButton>
    );
};

ButtonTotal.defaultProps = {
    color: 'blue',
    size: 'medium'
}

export default ButtonTotal;