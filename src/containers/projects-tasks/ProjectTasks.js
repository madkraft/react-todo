import React, { Component } from 'react'

import './ProjectTasks.css'
import ProjectHeader from '../../components/project-header/ProjectHeader'

class ProjectTasks extends Component {
  constructor() {
    super()
    this.state = {
      titleText: 'Untitled list',
      displayTitle: 'Untitled list',
      isTitleEdit: false
    }
  }

  toggleTitleEdit = () => {
    this.setState({
      isTitleEdit: !this.state.isTitleEdit
    })
  }

  setNewTitle = () => {
    if (this.state.titleText) {
      this.setState({ displayTitle: this.state.titleText })
    }
  }

  resetTitle = () => {
    this.setState({ titleText: this.state.displayTitle })
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.state.titleText) {
      this.setNewTitle()
    } else {
      this.resetTitle()
    }
    this.toggleTitleEdit()
  }

  handleKeyDown = event => {
    if (event.keyCode === 27) {
      this.toggleTitleEdit()
      this.resetTitle()
    }
  }

  handleFocus = event => {
    event.target.select()
  }

  handleChange = event => {
    this.setState({ titleText: event.target.value })
  }

  handleBlur = () => {
    if (this.state.titleText) {
      this.setNewTitle()
    } else {
      this.resetTitle()
    }
    this.toggleTitleEdit()
  }

  handleDeleteList = () => {
    console.log('Delete this list')
  }

  render() {
    return (
      <div className="task-view">
        <ProjectHeader
          titleText={this.state.titleText}
          displayTitle={this.state.displayTitle}
          isTitleEdit={this.state.isTitleEdit}
          handleSubmit={this.handleSubmit}
          toggleTitleEdit={this.toggleTitleEdit}
          handleFocus={this.handleFocus}
          handleKeyDown={this.handleKeyDown}
          handleChange={this.handleChange}
          handleBlur={this.handleBlur}
          handleDeleteList={this.handleDeleteList}
        />
        list here
      </div>
    )
  }
}

export default ProjectTasks
