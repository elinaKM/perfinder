import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../common/Button'
import InputWithLabel from '../common/InputWithLabel'
import TextAreaWithLabel from '../common/TextAreaWithLabel'

const AskAboutForm = ({ name, id, org }) => {

    const [userName, setUserName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setmessage] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(userName, userLastName, email, phone, message);
    }

    return (
        <Form>
            <About>Ask about {name}</About>
            <To>To: {org}</To>
            <UserDetails>
                <InputWithLabel label="First name" id="firstName" type="text" value={userName} onChange={(evt) => setUserName(evt.currentTarget.value)}/>

                <InputWithLabel label="Last name" id="lastName" type="text" value={userLastName} onChange={(evt) => setUserLastName(evt.currentTarget.value)}/>

                <InputWithLabel label="Email" id="email" type="email" value={email} onChange={(evt) => setEmail(evt.currentTarget.value)}/>

                <InputWithLabel label="Phone number" id="phone" type="tel" value={phone} onChange={(evt) => setPhone(evt.currentTarget.value)}/>

                <TextAreaWithLabel label="Message" id="message" name="message" rows="10" value={message} onChange={(evt) => setmessage(evt.currentTarget.value)}/>
            </UserDetails>
            <Button type="button" onClick={submitHandler}>Send Message</Button>
        </Form>
    )
}

const Form = styled.form`
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.borderRadius.card};
    padding: 20px;
`

const UserDetails = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px 0;
`

const About = styled.div`
    font-size: ${props => props.theme.fontSizes.title};
    font-weight: bold;
    margin-bottom: 10px;
`

const To = styled.div`
    padding-top: 10px;
    border-top: 1px solid ${props => props.theme.colors.border};
    font-size: ${props => props.theme.fontSizes.subTitle};
`

export default AskAboutForm