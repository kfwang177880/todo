import React from 'react';

const TodoForm = ({addItem, handleChange, currentTodo}) => {
  return (
      <form onSubmit={addItem}>
        <label htmlFor="taskName">Task Name:</label>
        <input onChange={handleChange} 
          name='taskName'
          type='text' 
          value={currentTodo}
          placeholder='Add todo here!' 
        />
        <button type='submit'>Add Task</button>
      </form>
  )
}
 
export default TodoForm;