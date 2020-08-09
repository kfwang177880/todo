import React, {Component} from 'react'

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
    const {todo} = this.state
    return (
      <div className='container'>
        <form onSubmit = {this.addItem}>
          <label htmlFor='taskName'>Task Name:</label>
          <input id="invalue" onChange={this.handleChange} name='taskName'type='text'placeholder='Add todo here!' />
          <button type='submit'>Add Task</button>
        </form>
        <ul>
          {todo.map((element,idx) => {
            return(
              <li key={idx}>{element}
                <button type="button" onClick={() => this.deleteItem(idx)}>Delete</button>
              </li>
            )
          })}
        </ul>        
      </div>
    );
  }
}

export default TodoList;