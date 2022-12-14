import React from 'react'
import {ButtonContainer} from './style'
const Button = ({title, variant="primary", onClick}) => {
    return (
       <ButtonContainer variant={primary} onClick={variant}>
        {title}
       </ButtonContainer>
    )
}

export {Button}