import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { connect } from 'react-redux'

const DisplayCounts = ({ todos }) => {
  return (
    <Card className='shadow-sm border border-0'>
      <Card.Body>
        <h4>number of todo  : {todos.length}</h4>
      </Card.Body>
    </Card>
  )
}

const mapStateToProps = (state) => ({todos:state.todos})

const mapDispatchToProps = (dispatch) =>({})


export default connect(mapStateToProps,mapDispatchToProps)(DisplayCounts)