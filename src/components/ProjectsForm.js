import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      id: null,
      title: "",
      link: "",
      img: "",
      img_large:"",
      description: "",
      isSubmitSuccess: false,
      currentUser: this.props.currentUser
     }
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ [event.target.name] : value });
  }

  handleChangeContent(data) {
    
    console.log("data",data)
    this.setState({ description : data})
  }
  

  handleSubmit(event) {
    event.preventDefault();
    
    axios.post(`${process.env.REACT_APP_API_URL}/api/projects`, this.state)
        .then(res => {
          console.log(res.data._id);
          this.setState({
            id: res.data._id,
            isSubmitSuccess: true
          })
        })
        .catch(err => {
            console.log(err);
            alert("Sorry! Something went wrong.");
          })
         
  }



  render() { 

    const {isSubmitSuccess, currentUser} = this.state;

    if (isSubmitSuccess) {
      return (
        <Redirect to="/"/>
      )
    }

    if (currentUser===null) {
      return (
        <Redirect to="/notfound"/>
      )
    }

    return ( 
      <div className="container mt-5">

        <Link id='logo-to-home' to='/'><img src="../../logoPT.jpg" alt="logo"/></Link>
        <Link id='dice-to-home' to='/'><i className="fas fa-dice"></i></Link>
        
        <h1>PROJECT INSERTION</h1>

        <form onSubmit={event => this.handleSubmit(event)} id="form-container">

          <div className="container mx-auto my-5">
            <div className="form-group">
              <label htmlFor="title">TITLE</label>
              <input className="form-control" onChange={(event) => this.handleChange(event)} id="title" type="text" name="title" placeholder="title..."/>
            </div>

            <div className="form-group">
              <label htmlFor="image">IMAGE URL</label>
              <input className="form-control" onChange={(event) => this.handleChange(event)} id="image" type="text" name="img" placeholder="image url..."/>
            </div>

            <div className="form-group">
              <label htmlFor="image">LARGE IMAGE URL</label>
              <input className="form-control" onChange={(event) => this.handleChange(event)} id="image" type="text" name="img_large" placeholder="image url..."/>
            </div>

            <div className="form-group">
              <label htmlFor="link">LINK URL</label>
              <input className="form-control" onChange={(event) => this.handleChange(event)} id="link" type="text" name="link" placeholder="link url..."/>
            </div>

            <div className="form-group">
              <label htmlFor="description">DESCRIPTION</label>
              <CKEditor 
                  editor={ ClassicEditor } 
                  onInit={ editor => {
                       console.log( 'Editor is ready to use!', editor );
                        } }
                  onChange={ ( event, editor ) => {
                       const data = editor.getData();
                       
                       console.log( { event, editor, data } );
                       this.handleChangeContent(data)
                        } }
                  name="description"
                  
              />
            </div>

            <div className="form-group d-flex justify-content-center">
              <button className="btn btn-secondary col-md-4">ADD</button>
            </div>
            </div>
        </form>

    </div>
     );
  }
}
 
export default ProjectForm;