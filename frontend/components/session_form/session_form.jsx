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
      errMessages = this.props.errors.map((err) => {
        return <li>err</li>;
      });
    }

    let loginFields;
    if (this.props.formType === 'signup'){
      header = (<h1>SIGNUP</h1>);
      loginFields = (
        <div>
          <ul>
            {errMessages}
          </ul>
          <label>Username
          <input type="text" value={this.state.username} onChange={this.update('username')}></input>
        </label>
        <label>Email
          <input type="text" value={this.state.email} onChange={this.update('email')}></input>
        </label>
      </div>);
    } else {
      header = (<h1>Welcome to Sparrow</h1>);
      loginFields = (<div>
        <ul>
          {errMessages}
        </ul>
        <label>Email or Username
          <input type="text" value={this.state.username} onChange={this.update('username')}></input>
        </label>
      </div>);
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
          <button onClick={this.startDemo}>Demo User!</button>
        </div>
      </div>
    </div>
  );
  }
}

export default SessionForm;
