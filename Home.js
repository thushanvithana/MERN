import React, { Component } from 'react';
import axios from 'axios';
//import { post } from '../../../routes/posts';
//import posts from '../../models/posts';




export default class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      posts:[]
    };
  }
  componentDidMount(){
    this.retrivePosts();
  }
  retrivePosts(){
    axios.get("/posts").then(res => {
      if(res.data.success){
        this.setState({
          posts:res.data.existingPosts
        });
        console.log(this.state.posts);
      }
    });
  }

onDelete = (id) =>{
  axios.delete(`/post/delete/${id}`).then((res) =>{

    alert("Deleted successful!");
    this.retrivePosts();

  });
}
filterData(posts,searchKey){
  const result = posts.filter((post)=>
  post.topic.toLowerCase().includes(searchKey)||
  post.description.toLowerCase().includes(searchKey)||
  post.postCategory.toLowerCase().includes(searchKey)
  )
  this.setState({posts:result})
}


handleSearchArea = (e) =>{
  const searchKey =  e.currentTarget.value;

    axios.get("/posts").then(res => {
      if(res.data.success){
        this.filterData(res.data.existingPosts,searchKey)
      }
    });
  
}


  render() {
    return (
      <body>
      <div className="container">
        

      </div>
      <div class="wrapper">
    <div class="typing-demo">
      Welcome to the Prescriptions!
    </div>
        <center><h1>Admin Page</h1></center>
        <div className="row">
        <div className="col-lg-9 mt-2 mb-2">
            <h4>All Prescription Details</h4>
          </div>
        </div>
        <div className="col-lg-3 mt-2 mb-2">
        <input
            className="form-control"
            type="search"
            placeholder="Search Prescriptions"
            name="searchQuery"
            onChange={this.handleSearchArea}>
            </input>
        </div>



       
        <center><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-prescription" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M5.5 6a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0V9h.293l2 2-1.147 1.146a.5.5 0 0 0 .708.708L9 11.707l1.146 1.147a.5.5 0 0 0 .708-.708L9.707 11l1.147-1.146a.5.5 0 0 0-.708-.708L9 10.293 7.695 8.987A1.5 1.5 0 0 0 7.5 6h-2ZM6 7v1h1.5a.5.5 0 0 0 0-1H6Z"/>
        <path fill-rule="evenodd" d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v10.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 14.5V4a1 1 0 0 1-1-1V1Zm2 3h8v10.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5V4ZM3 3V1h10v2H3Z"/>
        </svg></center>
        <br></br>


        <div class="shadow p-3 mb-5 bg-body rounded">
        <table className="table table-hover" style={{marginTop:'40px'}}>
          <thead>
            <tr>
              
              <th scope="col">No</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Description</th>
              <th scope="col">Post Catogory</th>
              <th scope="col">Action</th>
              <th scope="col">Action</th>
              <th scope="col">Prescription Image</th>&nbsp; 
              
     
              <th scope="col">Action</th>
            </tr>
          </thead>
          
          <tbody>
          {this.state.posts.map((posts,index) =>(
            <tr key={index}> 
            
              <th scope="row">{index+1}</th>
              <td>
      
                <a href={`/post/${posts._id}`}  style={{textDecoration:'none',color:'black'}}>
                {posts.topic}</a>
                </td>


              <td>{posts.description}</td>
              <td>{posts.postCategory}</td>
              <td>{posts.description}</td>
              <td>{posts.description}</td>
              <td>{posts.postCategory}</td>
             
              {/* Prescription image uploading part */}
              {/* <td><img src=''></img></td> */}

              <td></td>

              <td>
                <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                <i className="fas fa-edit"></i>&nbsp;Edit                
                </a>
            &nbsp; &nbsp;
                <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(posts._id)}>
                <i className="fas fa-trash"></i>&nbsp;Delete                
                </a>
                </td>
            </tr>
          ))}
          </tbody>
        </table>
        <button className="btn btn-success"><a href="/add" style={{textAlign:'center', textDecoration:'none', color:'white'}}> Create New Post</a></button>
        </div>
    
       
       
        <br></br>
</div>
      </body>

      
    )
  }
}
