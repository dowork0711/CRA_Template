import React from "react"
import styled from "styled-components"
import ButtonGroup from "~/components/molecules/ButtonGroup"

export default function SendPost() {
    return (
        <SSendPost>
            <textarea></textarea>
            <ButtonGroup
                groupJustify={"center"}
                groupAlign={"center"}
                btnElement={[
                    {
                        background: "#e9e9e9",
                        buttonText: "확인",
                        isWide: false,
                        textColor: "#000",
                    },
                    {
                        background: "#f00000",
                        buttonText: "취소",
                        isWide: false,
                        textColor: "#000",
                    },
                    {
                        background: "#00000f",
                        buttonText: "승인",
                        isWide: false,
                        textColor: "#000",
                    },
                ]}
            />
        </SSendPost>
    )
}

const SSendPost = styled.div``
