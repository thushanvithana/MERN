import React, { Component } from 'react';
import axios from 'axios';



export default class PostDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }
////////////////////ISSUEEEE?????
    componentDidMount(){
      const id = this.props.match.params.id;
      axios.get(`/post/${id}`).then((res) =>{
        if(res.data.success){
          this.state({
            post:res.data.post
          });
          console.log(this.state.post);
        }
      })

}


  render() {
    const {cusID,description,postCategory} = this.state.post;
    return (
      <div style={{marginTop:'20px'}}>
        <h4>{cusID}</h4>
        <hr/>

        <dl className="row">
          <dt className= "col-sm-3">Description</dt>
          <dd className="col-sm-9">{description}</dd>

          <dt className= "col-sm-3">post Category</dt>
          <dd className="col-sm-9">{postCategory}</dd>
        </dl>
        
      </div>
    )
  }
}

