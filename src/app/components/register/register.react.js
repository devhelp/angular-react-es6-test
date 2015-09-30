import RegisterForm from './form.react';

class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  processOnRegister(user) {
    this.props.registerUser(user);
  }

  render() {
    return (
      <div className="registerBox">
        <h2>Register your account</h2>
        <RegisterForm onRegister={this.processOnRegister.bind(this)} />
      </div>
    );
  }
}

export default Register;
