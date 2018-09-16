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
    this.startDemo = this.startDemo.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  startDemo(e) {
    e.preventDefault();
    const user = { username: "Demo", password: "123456"};
    this.props.login(user);
  }

  update(field) {
    return(e) => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  // renderErrors() {
  //   return(
  //     <ul>
  //       {this.props.errors.map((err, idx) => (
  //         <li key={idx}>{err}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    let header;
    let errMessages;
    if (this.props.errors.length > 0){
      errMessages = (<li>{this.props.errors[0]}</li>);
    }

    let loginFields;
    if (this.props.formType === 'signup'){
      header = (<h1>SIGNUP</h1>);
      loginFields = (
        <div>
          <label><div className="form-label">Username</div>
          <input type="text" value={this.state.username} onChange={this.update('username')}></input>
        </label>
        <label><div className="form-label">Email</div>
          <input type="text" value={this.state.email} onChange={this.update('email')}></input>
        </label>
      </div>);
    } else {
      header = (<h2>Welcome to Sparrow</h2>);
      loginFields = (<div>
        <label><div className="form-label">Email or Username</div>
          <input type="text" value={this.state.username} onChange={this.update('username')}></input>
        </label>
      </div>);
    }
    return(
      <div className="session-div">
        <div className="flex">
          <div className="greet-img">
            <img src={window.shipURL} className="greet-ship"/>
          </div>
          <div className="greet-form-container">
            <div className="greet-form">
              {header}
              <form onSubmit={this.handleSubmit}>
                {loginFields}
                <label><div className="form-label">Password</div>
                  <input type="password" value={this.state.password} onChange={this.update('password')}></input>
                </label>
                <ul>
                  {errMessages}
                </ul>
                <button>
                  <div>
                    Submit
                  </div>
                </button>
              </form>
              <button onClick={this.startDemo} id="demo-button">Demo User!</button>
            </div>
          </div>
        </div>
      </div>
  );
  }
}

export default SessionForm;
