import React, {Component} from 'react'
import Tasklist from './Tasklist'
import TodoForm from './TodoForm'

class TodoList extends Component {

  constructor() {
    super();
    this.state = {
      todo: [],
      currentTodo: "",
    };
  }

  handleChange = event => {
    //console.log(event.target.value)
    this.setState({
      currentTodo:event.target.value
    })
    console.log(this.state.currentTodo)
  };

  addItem = event => {
    event.preventDefault();
    if (this.state.currentTodo !== '') {
      this.setState({
        currentTodo: "",
      // E6 SPREAD Operator with ...
        todo: [...this.state.todo, this.state.currentTodo]
      })
    }
  //  console.log('addItem Method fired')
  };

  deleteItem = (idx) => {
    //console.log(idx)
    const filteredItems = this.state.todo.filter((el, index) => {
      return index !== idx
    })
    //console.log(filteredItems)
    this.setState({
      todo: filteredItems,
    })
  }  

  render() {
    return (
      <div className='container'>
        <TodoForm handleChange={this.handleChange} addItem={this.addItem} currentTodo={this.state.currentTodo} />
        <Tasklist todo={this.state.todo} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default TodoList;