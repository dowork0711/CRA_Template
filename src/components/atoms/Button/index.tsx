import React from "react"
import styled, { css } from "styled-components"

interface IButton {
    background: string
    buttonText: string
    isWide: boolean
    textColor: string
}

export default function Button(props: IButton) {
    const { background, buttonText, isWide, textColor } = props

    return (
        <SButton background={background} isWide={isWide}>
            <SButtonText textColor={textColor}>{buttonText}</SButtonText>
        </SButton>
    )
}

const SButton = styled.div<{ background: string; isWide: boolean }>`
    background: ${(props) => props.background};
    ${(props) =>
        props.isWide
            ? css`
                  width: 100%;
              `
            : css`
                  width: 50%;
              `}
    padding: 15px;
`

const SButtonText = styled.div<{ textColor: string }>`
    text-align: center;
    color: ${(props) => props.textColor};
    font-size: 10%;
`
