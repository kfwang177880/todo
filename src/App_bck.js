import React, {Component} from 'react'

class TodoList extends Component {

  constructor() {
    super();
    this.state = {
      todo: [],
      currentTodo: '',
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
        todo: []
      })
    }
    console.log('addItem Method fired')
  };

  deleteItem = event => {
    event.preventDefault();
    console.log('addItem Method fired')
  };

  render() {
    const {todos} = this.state
    return (
      <div className='container'>
        <form onSubmit = {this.addItem}>
          <label htmlFor='taskName'>Task Name:</label>
          <input onChange={this.handleChange} name='taskName'type='text'placeholder='Add todo here!' />
          <button type='submit'>Add Task</button>
        </form>
        <ul>
  {todos.map((el,idx) => {
    return(
      <li key={idx}>
        {el}
      </li>
    )
  })}
</ul>

      </div>
    );
  }
}

export default TodoList;