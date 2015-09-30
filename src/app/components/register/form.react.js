class Form extends React.Component {

  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onRegister({
      username: React.findDOMNode(this.refs.username).value.trim(),
      email: React.findDOMNode(this.refs.email).value.trim(),
      password: React.findDOMNode(this.refs.password).value.trim(),
      passwordRepeat: React.findDOMNode(this.refs.passwordRepeat).value.trim()
    });
  }

  render() {
    return (
      <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-8">
            <input type="text" ref="username" defaultValue={this.props.username} placeholder="Username"
                   className="form-control"/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-8">
            <input type="email" ref="email" defaultValue={this.props.email} placeholder="Email"
                   className="form-control"/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-8">
            <input type="password" ref="password" defaultValue={this.props.password} placeholder="Password"
                   className="form-control"/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-8">
            <input type="password" ref="passwordRepeat" defaultValue={this.props.passwordRepeat}
                   placeholder="Password Repeat" className="form-control"/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-8">
            <button type="submit" className="btn btn-default">Register</button>
          </div>
        </div>
      </form>
    );
  }

}

export default Form;
