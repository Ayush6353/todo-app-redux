import React, { useState } from 'react'
import { Card, Col, Container, Row, Form, Button } from 'react-bootstrap';
import DisplayCounts from './DisplayCounts';
import { add_todo } from '../redux/actions/action-todo';
import { connect } from 'react-redux';

const AddTodo = ({add_todo}) => {

    const [todo, setTodo] = useState({ Email: '', Password: '' });

    const handlsubmit = (event) => {
        event.preventDefault();
        add_todo(todo)
        console.log(todo,'todo..................................');
        setTodo({
            Email:"",
            Password:"",
        })
    };

    return (
        <Container>
            <h3 className='text-center'>
                Todo Login Form
            </h3>
            <Row>
                <Col md={12}>
                    <Card className='shadow-sm'>
                        <Card.Body>
                            <DisplayCounts/>
                            <Form onSubmit={handlsubmit}>
                                <Form.Label>Todo Email</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter your Email'
                                    value={todo.Email}
                                    onChange={event => setTodo({ ...todo, Email: event.target.value })}
                                >
                                </Form.Control>
                                <Form.Label className='mt-3'>Todo Password</Form.Label>
                                <Form.Control
                                    type='Password'
                                    placeholder='Enter your Password'
                                    value={todo.Password}
                                    onChange={event => setTodo({ ...todo, Password: event.target.value })}
                                >
                                </Form.Control>
                                <Container className='text-center mt-3'>
                                    <Button variant='primary' type='submit'>Submit</Button>
                                </Container>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
const mapStateToProps= (state)=> ({})

const mapDispatchToProps = (dispatch) => ({
    add_todo: (todo) =>  (dispatch(add_todo(todo))),
});

export default connect(mapStateToProps,mapDispatchToProps)(AddTodo);                    