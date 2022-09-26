import React, { Component } from 'react'
import axios from 'axios';

export default class EditPost extends Component {

  constructor(props){
    super(props);
    this.state={
      cusID:"",
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
    const id = this.props.match.params.id;
    const{ cusID,description,postCategory} = this.state;

    const data = {
      cusID:cusID,
      description:description,
      postCategory:postCategory
    }
    console.log(data)
    axios.put(`/post/update/:id${id}`,data).then((res)=>{
      if(res.data.success){
        alert("Post updated Success")
        this.setState({
          cusID:"",
          description:"",
          postCategory:""
        })
      }
    })
  }
///ERRRRRRRROORRR//////////////////////////////////
  componentDidMount(){
    const id = this.props.match.params.id;
    axios.get(`/post/${id}`).then((res) =>{
      if(res.data.success){
        this.state({
          cusID:res.data.post.cusID,
          description:res.data.post.description,
          postCategory:res.data.post.postCategory
        });
        console.log(this.state.post);
      }
    })
}

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal">Edit post</h1>
      <form className="needs-validstion" noValidate>
        <div className="form-group" style={{marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}}>Topic</label>
          <input type="text"
          className="form-control"
          name="cusID"
          placeholder="Enter Topic"
          value={this.state.cusID}
          onChange={this.handleInputChange}
          />
        </div>

        <div className="form-group" style={{marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}}>Description</label>
          <input type="text"
          className="form-control"
          name="description"
          placeholder="Enter Description"
          value={this.state.description}
          onChange={this.handleInputChange}
         />
        </div>

        <div className="form-group" style={{marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}}>Post Category</label>
          <input type="text"
          className="form-control"
          name="postCategory"
          placeholder="Enter post Category"
          value={this.state.postCategory}
          onChange={this.handleInputChange}
          />
        </div>

        <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
          <i className="far fa-check-square"></i>
          &nbsp; Update
        </button>

      </form>

    </div>
    )
  }
}
