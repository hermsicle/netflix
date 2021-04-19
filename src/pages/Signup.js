import React, {useState, useContext} from 'react'
import { FirebaseContext } from '../context/firebase'
import { useHistory } from 'react-router-dom'
import { HeaderContainer } from '../containers/header'
import { Form } from '../components'
import { FooterContainer } from '../containers/footer'
import * as ROUTES from '../constants/routes'

export default function Signup() {

    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)

    const isInvalid = firstName === '' || email === '' || password === ''

    function handleSignup(e) {
        e.preventDefault()

        firebase  
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(result => 
                result.user 
                .updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5) + 1,
                })
                .then( () => {
                    history.push(ROUTES.BROWSE)
                })
            )
            .catch((error) => {
                setEmail('');
                setPassword('');
                setError(error.message);
            });
    }

    return (
        <> 
        <HeaderContainer>
            <Form>
                <Form.Title>Sign Up</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                <Form.Base onSubmit={handleSignup}>
                    <Form.Input
                        placeholder='First name'
                        value={firstName}
                        onChange={({ target }) =>  setFirstName(target.value)}
                    />
                    <Form.Input
                        placeholder='Email address'
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                    <Form.Input
                        type='password'
                        placeholder='Password'
                        value={password}
                        autoComplete="off"
                        onChange={({ target }) => setPassword(target.value)}
                    />
                    <Form.Submit type='submit' disabled={isInvalid}>
                        Sign Up
                    </Form.Submit>

                    <Form.Text>
                        Already a user? <Form.Link to='/signin'>Sign in here</Form.Link>
                    </Form.Text>

                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA.
                    </Form.TextSmall>
                </Form.Base>
            </Form>
        </HeaderContainer>
        <FooterContainer/>
        </>
    )
}