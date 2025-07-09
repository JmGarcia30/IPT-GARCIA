import {Button, Container, Row, Col} from 'react-bootstrap'

export default function About() {
    return (
        <Container fluid className="vh-100 bg-dark text-center">
            <h1 className="display-3 text-light fw-bold">About</h1>
            <Container className="bg-light rounded-3 mt-5">
            <Row className='gap-3 p-3'>
                <Col className="border border-primary text-center p-3 rounded-5 shadow">
                    <h1 className="fw-bold">Free Shipping</h1>
                    <p>We offer free shipping all across pampanga</p>
                    <Button className="p-3 rounded-pill px-5 my-4">Shop Now</Button>
                </Col>

                 <Col className="border border-primary text-center p-3 rounded-5 shadow">
                    <h1 className="fw-bold">Free Shipping</h1>
                    <p>We offer free shipping all across pampanga</p>
                    <Button className="p-3 rounded-pill px-5 my-4">Shop Now</Button>
                </Col>

                 <Col className='border border-primary text-center p-3 rounded-5 shadow'>
                    <h1 className="fw-bold">Free Shipping</h1>
                    <p>We offer free shipping all across pampanga</p>
                    <Button className="p-3 rounded-pill px-5 my-4">Shop Now</Button>
                </Col>
            </Row>
            </Container>
        </Container>
    )
}
