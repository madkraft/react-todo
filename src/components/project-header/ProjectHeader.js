import React from 'react'
import './ProjectHeader.css'

const ProjectHeader = ({
  titleText,
  displayTitle,
  isTitleEdit,
  handleSubmit,
  toggleTitleEdit,
  handleFocus,
  handleKeyDown,
  handleChange,
  handleBlur,
  handleDeleteList
}) => {
  const input = (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={titleText}
        autoFocus={isTitleEdit}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
    </form>
  )
  const title = <span onClick={toggleTitleEdit}>{displayTitle}</span>

  const headerContent = isTitleEdit ? input : title

  return (
    <div className="project-header">
      <div className="header-title">
        {headerContent}
        <button onClick={handleDeleteList}>Delete list</button>
      </div>
    </div>
  )
}

export default ProjectHeader
