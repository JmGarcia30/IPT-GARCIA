import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <Container fluid className='bg-light p-1 p-lg-5 shadow mt-5 w-50 justify-content-center flex-column border my-5 rounded-4 text-center'>
            <h1 className='display-3 fw-bold text-primary'>OOPS!!</h1>
            <h1 className='display-5 text-primary'>The page you are trying to access cannot be found.</h1>

            <Button className='px-5 rounded-pill my-5' as={Link} to="/login">Login</Button>
        </Container>
    )
}
