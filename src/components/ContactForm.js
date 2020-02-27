import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import {Button,Form,Input,FormGroup, Label} from 'reactstrap'
import axios from 'axios'


class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleCaptchaResponseChange = this.handleCaptchaResponseChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { 
      name: "",
      email:"",
      message:"",
      isSubmitSuccess: false,
      contactFormOpen: false,
      loader: false,
      sitekey: process.env.REACT_APP_SITEKEY
    }
  }

  updateName(event) {
    const {value} = event.target;
    this.setState({name:value})
  }

  updateEmail(event) {
    const {value} = event.target;
    this.setState({email:value})
  }

  updateMessage(event) {
    const {value} = event.target;
    this.setState({message:value})
  }

  showForm() {
    const {contactFormOpen} = this.state;
    this.setState({contactFormOpen:!contactFormOpen})
  }

  handleCaptchaResponseChange(response) {
    this.setState({
      recaptchaResponse: response,
    });
  }

  handleChange(e) {
    this.props.loaderOpen()
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('envoi submit')
    this.handleChange();
    axios.post(`${process.env.REACT_APP_API_URL}/api/contact`, this.state)
      .then(response => {
      
      
      if (response.data.msg === 'success') {
        
        this.setState(
          {isSubmitSuccess: true,
           contactFormOpen: false,
           loader: false 
          });
        this.handleChange();
        this.props.scrollToTop();
      }
      else {
        alert("PROBLEM")
      }
      })
      .catch(err => {
        console.log("ERROR", err);
      })
      
  }

  

  render() { 

    const {name,email,message,contactFormOpen,sitekey} = this.state;
    
    if (!contactFormOpen) {
      return <Button onClick={e => this.showForm()}>Click here to contact me</Button>
    }

    

    return ( 
      <main id="contact-position">
        
        <div className="container my-5 mx-auto">
          <div className="close-form" onClick={e => this.showForm()}>
            <span ><i class="far fa-times-circle"></i></span>
          </div>
        <Form onSubmit={event => this.handleSubmit(event)}>

          
          <FormGroup>
          <Label>NAME</Label>
          <Input type="text" placeholder="name" onChange={(event) => this.updateName(event)} value={name}/>
          </FormGroup>
          <FormGroup>
          <Label>EMAIL</Label>
          <Input type="email" placeholder="email" onChange={(event) => this.updateEmail(event)} value={email}/>
          </FormGroup>
          <FormGroup>
          <Label>MESSAGE</Label>
          <Input type="textarea" rows="10" placeholder="message" onChange={(event) => this.updateMessage(event)} value={message}/>
          </FormGroup>
          <FormGroup>
          <ReCAPTCHA
            ref={(el) => { this.recaptcha = el; }}
            sitekey={sitekey}
            onChange={this.handleCaptchaResponseChange}
          />
          </FormGroup>
          <Button>Send</Button>
        
        </Form>
        </div>
      </main>
     );
  }
}

 
export default ContactForm;