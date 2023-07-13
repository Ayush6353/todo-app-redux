import React, { useState } from 'react'
import { Container, Row, Card, Col, ListGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { delete_todo } from '../redux/actions/action-todo';
import DisplayCounts from './DisplayCounts';


const DisplayTodos = ({ todos, delettodo }) => {


    return (
        <div>
        <Container>
            <Row>
                <Col>
                    <Card className='mt-3 shadow-sm'>
                        <Card.Body>
                            <h3 className='text-center'>Output</h3>
                            <DisplayCounts />
                            <ListGroup>
                                {
                                    todos.map((todo, i) => (
                                        <ListGroup.Item key={i}>
                                            <h4>{todo.Email}</h4>
                                            <h6>{todo.Password}</h6>
                                            <Button variant='danger' onClick={event => delettodo(todo.i)}>
                                                DELETE
                                            </Button>
                                        </ListGroup.Item>
                                    ))
                                }
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
</div>
    )
}
const mapStateToProps = (state) => {
    console.log(state, "todoReducers");
    return { todos: state.todos }
}
const mapDispatchToProps = (dispatch) => ({
    delettodo: (i) => (dispatch(delete_todo(i)))
})

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);