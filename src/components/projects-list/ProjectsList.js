import React from 'react'
import './ProjectsList.css'

const ProjectsList = ({ list, addNewItem }) => {
  return (
    <div>
      <div className="list-header">Todo App</div>
      {list.map(item => (
        <div className="list-item" key={item.id}>
          {item.title}
        </div>
      ))}
      <div className="list-item" onClick={addNewItem}>
        + New list
      </div>
    </div>
  )
}

export default ProjectsList
