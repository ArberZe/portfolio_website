import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Section, SectionDivider, SectionText, SectionTitle, ButtonBack, Form, Input, TextArea, FormButton } from '../../styles/GlobalComponents';


const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mgxcgua', 'template_8fdncsp', formRef.current, 'AOt8lxaCgX8Rnc-tj')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <Section id="contact" style={{marginBottom: "120px"}}>
            <SectionDivider />
            <SectionTitle style={{ marginTop: "20px" }}>Contact</SectionTitle>
            <SectionText>
                <b>What’s your story?</b> Get in touch. Always available for
                freelancing if the right project comes along.
            </SectionText>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <Input type="text" placeholder="Name" name="user_name" />
                <Input type="text" placeholder="Subject" name="user_subject" />
                <Input type="text" placeholder="Email" name="user_email" />
                <TextArea rows="5" placeholder="Message" name="message" />
                <FormButton>Send</FormButton>
            </Form>
        </Section>
    )
}

export default Contact;