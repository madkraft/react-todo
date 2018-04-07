import React, { Component } from 'react'
import './App.css'
import ProjectsList from './components/projects-list/ProjectsList'
import ProjectTasks from './containers/projects-tasks/ProjectTasks'

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    this.setState({
      list: [{ id: 1, title: 'List 1' }]
    })
  }

  addNewItem = () => {
    const newItem = {
      id: Date.now(),
      title: 'Untitled list'
    }

    this.setState({
      list: [...this.state.list, newItem]
    })
  }

  render() {
    return (
      <div className="app">
        <aside className="sidebar">
          <ProjectsList list={this.state.list} addNewItem={this.addNewItem} />
        </aside>
        <main className="project-details">
          <ProjectTasks />
        </main>
      </div>
    )
  }
}

export default App
