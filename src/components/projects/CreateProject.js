import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/action/ProjectActions'

class CreateProject extends Component {
    state = {
     title: '',
     content:''
    }
handleChange = (e) =>{
  this.setState({
      [e.target.id] : [e.target.value]
  })
}
handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state); //this.state pass into (project function) down there
}

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea id="content"  className="materialize-textarea" onChange={this.handleChange} ></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lightrn-1 z-depth-0">Create</button>
                    </div>
                    </form> 
                
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
    createProject: (project) => dispatch(createProject(project)) //this.state pass here inti (project)
    }

}

export default  connect(null,mapDispatchToProps)(CreateProject)
