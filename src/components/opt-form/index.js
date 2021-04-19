import React from 'react'
import {Container, Input, Button, Text, Break} from './styles/opt-form' 

export default function OptForm({ children, ...restProps}) {
    return <Container {...restProps}> {children} </Container>
}

//container, input, button, text

OptForm.Input = function OptFormInput({ children, ...restProps }) {
    return <Input {...restProps} />
}

OptForm.Button = function OptformButton({ children, ...restProps }) {
    return (
        <Button {...restProps}> 
            {children} <img src="/images/icons/chevron-right.png" alt='Try Now'/>
        </Button>
    )
}

OptForm.Break = function OptBreak({ ...restProps }) {
    return <Break {...restProps} />;
}

OptForm.Text = function OptformText({ children, ...restProps }) {
    return <Text {...restProps} > {children} </Text>
}