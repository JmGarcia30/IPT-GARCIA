import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import TaskLists from '../components/TaskLists';



export default function Tasks() {
    const {user} = useAuth();
    const navigate = useNavigate();
    
  useEffect(() => {
     if(!user){
      navigate("/login");
    }else{
        document.title = `${user.fname.toUpperCase()} ${user.lname.toUpperCase()} - Tasks`;
    }
  }, [user, navigate])

  return (
    <Container fluid className='m-1 m-lg-5 border rounded-4 p-1 p-lg-4 d-flex flex-column align-items-center justify-content-center text-primary-emphasis text-center'>
        <h1 className='my-3 display-3 fw-bold text-primary-emphasis'>Welcome to Tasks Page!</h1>
        <TaskLists/>
    </Container>
  )
}
