import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';


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
      currentUser: this.props.currentUser,
      showForm: false,
      edit: false,
      projectsArray: [],
      project: {},
     }
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_URL}/api/projects`)
    .then(res => {
      this.setState({projectsArray: res.data})
    })
    .catch(err => {
      console.log(err);
      alert("something wrong in the projects request")
    })
  }

  handleChange(event) {
    const { value } = event.target;
    console.log('value : ',value);
    this.setState({ [event.target.name] : value });
  }

  handleChangeContent(data) {
    
    console.log("data",data)
    this.setState({ description : data})
  }

  handleEdit(event) {
    const projectId = event._id;
    axios.get(`${process.env.REACT_APP_API_URL}/api/projects/${projectId}`)
      .then(res => {
        this.setState({
          project: res.data,
          id: res.data._id,
          title: res.data.title,
          img: res.data.img,
          img_large: res.data.img_large,
          link: res.data.link,
          description: res.data.description,
          edit: true,
          showForm: true
        })
      })
      .catch(err => {
        console.log(err);
        alert("something wrong in the projects request to edit")
      })

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

  handleSubmitEdit(event) {
    event.preventDefault();
    const {_id} = this.state.project 
    axios.post(`${process.env.REACT_APP_API_URL}/api/projects/${_id}`, this.state)
        .then(res => {
          this.setState({ isSubmitSuccess:true })
        })
        .catch(err => {
            console.log(err);
            alert("Sorry! Something went wrong.");
          })
         
  }



  render() { 

    const {isSubmitSuccess, currentUser, showForm, edit, projectsArray, project, title, link, img, img_large, description} = this.state;

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

    if (showForm&&edit) {
      return ( 
        <div className="container mt-5">
  
          <Link id='logo-to-home' to='/'><img src="../../logoPT.jpg" alt="logo"/></Link>
          <Link id='dice-to-home' to='/'><i className="fas fa-dice"></i></Link>
          
          <h1>PROJECT EDITION</h1>
  
          <form onSubmit={event => this.handleSubmitEdit(event)} id="form-container">
  
            <div className="container mx-auto my-5">
              <div className="form-group">
                <label htmlFor="title">TITLE</label>
                <input className="form-control" onChange={(event) => this.handleChange(event)} id="title" type="text" name="title"  value={title}/>
              </div>
  
              <div className="form-group">
                <label htmlFor="image">IMAGE URL</label>
                <input className="form-control" onChange={(event) => this.handleChange(event)} id="image" type="text" name="img" value={img}/>
              </div>
  
              <div className="form-group">
                <label htmlFor="image">LARGE IMAGE URL</label>
                <input className="form-control" onChange={(event) => this.handleChange(event)} id="image" type="text" name="img_large" value={img_large}/>
              </div>
  
              <div className="form-group">
                <label htmlFor="link">LINK URL</label>
                <input className="form-control" onChange={(event) => this.handleChange(event)} id="link" type="text" name="link" value={link}/>
              </div>
  
              <div className="form-group">
                <label htmlFor="description">DESCRIPTION</label>
                <CKEditor 
                    editor={ ClassicEditor } 
                    data={description}
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
                <button className="btn btn-secondary col-md-4">EDIT</button>
              </div>
              </div>
          </form>
  
      </div>
       );
      }

    if (showForm) {
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

    

    return (
      <div className="container mt-3">

        <Link id='logo-to-home' to='/'><img src="../../logoPT.jpg" alt="logo"/></Link>
        <Link id='dice-to-home' to='/'><i className="fas fa-dice"></i></Link>

        <h1>Project list</h1>
        
        <div className="container my-3">
          <ul>
            {projectsArray.map((project,index) => 
              <li key={index}>
                <div className="jumbotron">
                  <h2>{project.title}</h2>
                  <button className="btn btn-link" onClick={(event) => this.handleEdit(project)}>Edit</button>
                </div>
              </li>
            )}
          </ul>
          <div>
            <button type="button" className="btn btn-secondary" onClick={() => this.setState({showForm: true})}>Create a new project</button>
          </div>
        </div>
      </div>
    )
  }
}
 
export default ProjectForm;