import React from "react"
import styled from "styled-components"
import Button from "~/components/atoms/Button"

interface IBtnElement {
    background: string
    buttonText: string
    isWide: boolean
    textColor: string
}

interface IButtonGroup {
    groupJustify: string
    groupAlign: string
    btnElement: Array<IBtnElement>
}

export default function ButtonGroup(props: IButtonGroup) {
    const { groupJustify, groupAlign, btnElement } = props
    return (
        <SButtonGroup groupJustify={groupJustify} groupAlign={groupAlign}>
            {btnElement.map((item: any, idx: number) => (
                <SButtonWrapper key={idx}>
                    <Button
                        background={item.background}
                        buttonText={item.buttonText}
                        isWide={item.isWide}
                        textColor={item.textColor}
                    />
                </SButtonWrapper>
            ))}
        </SButtonGroup>
    )
}

const SButtonGroup = styled.div<{ groupJustify: string; groupAlign: string }>`
    padding: 20px;
    display: flex;
    justify-content: ${(props) => props.groupJustify};
    align-items: ${(props) => props.groupAlign};
`

const SButtonWrapper = styled.div`
    padding: 0 15px;
`
