import React from 'react';

const Tasklist = ({todo, deleteItem}) => {
  return (
    <ul>
    {todo.map((element,idx) => {
      return(
        <li key={idx}>{element}
          <button type="button" onClick={() => deleteItem(idx)}>Delete</button>
        </li>
      )
    })}
  </ul>
  )
}


export default Tasklist;