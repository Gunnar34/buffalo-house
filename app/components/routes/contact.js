import React from 'react';
import{ Input, Row, Button } from 'react-materialize';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import '../../styles/App.css';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      first: '',
      last: '',
      phone: '',
      text: ''
    };
  }

  notify = () => {
    toast('Please Fill Out All Required Fields', {
      closeButton: false
    });
  }

  onCommentSubmit = (email) => {
    axios.post('/email', email).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  }

  handleEmail = (e) => {
    this.setState({email: e.target.value});
  }

  handleFirstName = (e) => {
    this.setState({first: e.target.value});
  }

  handleLastName = (e) => {
    this.setState({last: e.target.value});
  }

  handleText = (e) => {
    this.setState({text: e.target.value});
  }

  handlePhone = (e) => {
    this.setState({phone: e.target.value});
  }

  handleSubmit = () => {
    const email = this.state.email;
    const first = this.state.first;
    const last = this.state.last;
    const text = this.state.text;
    const phone = this.state.phone;
    if (!text || !first || !last || !email || !(email.includes('@')) || !(email.includes('.'))) {
      this.notify();
      return;
    }
    this.onCommentSubmit({first: first, last: last, email: email, text: text, phone: phone});
    this.setState({first: '', last: '', email: '', text: '', phone: ''});
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1>Ready to Reach Out?</h1>
          <div className="row">
            <div className="col s12 backgroundLight">
              <Row>
                <Input
                  s={6}
                  label="First Name"
                  value={this.state.first}
                  onChange={this.handleFirstName} />
                <Input
                  s={6}
                  label="Last Name"
                  value={this.state.last}
                  onChange={this.handleLastName}/>
                <Input
                  label="Phone"
                  s={12}
                  value={this.state.phone}
                  onChange={this.handlePhone}/>
                <Input
                  type="email"
                  label="Email"
                  s={12}
                  value={this.state.email}
                  onChange={this.handleEmail}/>
                <Input
                  label="Message"
                  s={12} multiple
                  value={this.state.text}
                  onChange={this.handleText}/>
                <div className="col s12 center-align">
                  <Button onClick={this.handleSubmit}  waves="light">Submit</Button>
                </div>
              </Row>
            </div>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          type="default"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          toastClassName="dark-toast"
        />
      </div>
    );
  }
}
