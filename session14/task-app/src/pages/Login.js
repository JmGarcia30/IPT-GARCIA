import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

export default function Login() {
    return (
        <Container fluid className='bg-light p-4 rounded-3 shadow mt-5 w-50'>
            <h1 className='display-3 fw-bold text-center text-primary'>Sign In</h1>
            <Form className='p-3 '>
                <Form.Group className="mb-3 " controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                    <Form.Text className="text-muted">
                        We'll never share your password with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}