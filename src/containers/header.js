import React from 'react'
import {Header} from '../components'
//Import our Routes 
import * as ROUTES from '../constants/routes'

export function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src="/images/misc/logo.svg" alt="Netflix" />
                <Header.ButtonLink to={ROUTES.SIGNIN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}