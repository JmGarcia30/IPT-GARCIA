import {Container, Ro, Col, Row} from "react-bootstrap"


export default function Feature() {
  return (
    <Container className="p-3 rounded-3 my-2 bg-light">
        <Row className="gap-3">
            <Col className="border border-primary text-center p-3 rounded-5 shadow">
                <h1 className="fw-bold">Free Shipping</h1>
                <p>We offer free shipping all across pampanga</p>
            </Col>

            <Col className="border border-primary text-center p-3 rounded-5 shadow">
                <h1 className="fw-bold">50% Discount For Students</h1>
                <p>50% Discount can be availed by students from secondary to college.</p>
            </Col>

            <Col className="border border-primary text-center p-3 rounded-5 shadow">
                <h1 className="fw-bold">Voucher Program</h1>
                <p>More suprises through our official voucher program</p>
            </Col>
        </Row>
    </Container>
  )
}
