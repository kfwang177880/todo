import React, {Component} from 'react'
class TodoList extends Component {
  constructor(){
    super();
    this.state = {
      todos: [],
      currentToDo:"",
    };
  }
  //This is where I'm going to code the handleChange method the methods go
  handleChange = event => {
    //console.log(event.target.value)
    this.setState({
      currentToDo: event.target.value,
    })
    console.log(this.state.currentToDo);
  };
//this is where I am going to code the addItem method
  addItem = event => {
    event.preventDefault();
   // console.log("addItem Method fired")
    if(this.state.currentToDo !==''){
      this.setState({
       currentToDo: "",
       //ES6 Workshop-spread operator. Can also push it in
       todos: [...this.state.todos, this.state.currentToDo]
      })
    }
  };
  deleteItem = (idx) => {
    //console.log(idx)
    const filteredItems = this.state.todos.filter((el, index) => {
      return index !== idx
    })
    //console.log(filteredItems)
    this.setState({
      todos: filteredItems,
    })
  }

  render(){
    // console.log(this.state.todos)
    // deconstruct todos from state
    const {todos} = this.state
    return (
      <div className='container'>
        <form onSubmit={this.addItem}>
          <label htmlFor="tastName">Task Name:</label>
          <input onChange={this.handleChange} name="taskName"type="text"placeholder="Add todo here!"/>
          <button type="submit">Add Task</button>
        </form>
        <ul>
          {todos.map((el,idx) => {
            return(
              <li key={idx}>{el}
                <button type="button" onClick={() => this.deleteItem(idx)} >Delete</button>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}
export default TodoList;