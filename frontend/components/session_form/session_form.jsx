import React from 'react';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return(e) => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  render() {
    let header;
    let errMessages;
    if (this.props.errors.length > 0){
      errMessages = this.props.errors.map((err) => {
        return <li>err</li>;
      });
    }

    let loginFields;
    if (this.props.formType === 'signup'){
      header = (<h1>SIGNUP</h1>);
      loginFields = (
        <div>
          {errMessages}
          <label>Username
          <input type="text" value={this.state.username} onChange={this.update('username')}></input>
        </label>
        <label>Email
          <input type="text" value={this.state.email} onChange={this.update('email')}></input>
        </label>
      </div>);
    } else {
      header = (<h1>Welcome to Sparrow</h1>);
      loginFields = (<label>Email or Username
        <input type="text" value={this.state.username} onChange={this.update('username')}></input>
      </label>);
    }
    return(
    <div className="flex flex-vertical">
      <div className="flex-child greet-img">
        <img src={window.shipURL} className="greet-ship"/>
      </div>
      <div className="flex-child greet-form-container">
        <div className="greet-form">
          {header}
          <form onSubmit={this.handleSubmit}>
            {loginFields}
            <label>Password
              <input type="text" value={this.state.password} onChange={this.update('password')}></input>
            </label>
            <button>
              <div>
                Submit
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
  }
}

export default SessionForm;
