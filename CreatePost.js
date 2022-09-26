import React, { Component } from 'react'
import axios from 'axios';

export default class CreatePost extends Component {

  constructor(props){
    super(props);
    this.state={
      topic:"",
      description:"",
      postCategory:""
    }
  }


  handleInputChange = (e)=>{
    const{name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }

  onSubmit = (e)=>{
    e.preventDefault();
    const{ topic,description,postCategory} = this.state;

    const data = {
      topic:topic,
      description:description,
      postCategory:postCategory
    }
    console.log(data)
    axios.post("/post/save",data).then((res)=>{
      if(res.data.success){
        this.setState({
          topic:"",
          description:"",
          postCategory:""
        })
      }
    })
  }

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Create new Prescription</h1>
        <form className="needs-validstion" noValidate>
          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Topic</label>
            <input type="text"
            className="form-control"
            name="topic"
            placeholder="Enter Topic"
            value={this.state.topic}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Description</label>
            <input type="text"
            className="form-control"
            name="description"
            placeholder="Enter Description"
            value={this.state.description}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Post Category</label>
            <input type="text"
            className="form-control"
            name="postCategory"
            placeholder="Enter post Category"
            value={this.state.postCategory}
            onChange={this.handleInputChange}/>
          </div>
          <br></br>
          <div className="form-group" style={{marginBottom:'15px'}}>

          {/* Prescription image uploading part */}
          <form action="/action_page.php">
            <label for="img">Upload Prescription:</label>
            <input type="file" id="img" name="img" accept="image/*"></input>
            <input type="submit" class="btn btn-warning"></input>
          </form>
          </div>

          <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
            <i className="far fa-check-square"></i>
            &nbsp; Save Details
            
          </button>
          <br></br>
          <br></br>
          <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        </form>

      </div>
    )
  }
}
