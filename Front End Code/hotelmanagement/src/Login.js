import React from "react";
import "./login.css";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      cust_email_id: "",
      cust_password: "",
    };
  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = (e) => {
    // e.preventdDefault();

    console.log(this.state.cust_email_id);
    fetch(`http://localhost:8083/GetCustomerEmail/${this.state.cust_email_id}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.cust_password === this.state.cust_password) {
          if (result.cust_name == "admin") {
            sessionStorage.setItem("userName", "admin");
            localStorage.setItem("data", JSON.stringify(result));
          } else {
            sessionStorage.setItem("userName", result.cust_name);
            localStorage.setItem("data", JSON.stringify(result));
          }
        }
      })
      .catch((error) => {
        alert("error");
      });
    this.props.history.push("/");
  };

  render() {
    const { cust_email_id, cust_password } = this.state;
    return (
      <div id="front">
        <form onSubmit={this.onSubmitHandler}>
          <div className="loginbox box">
            <h1>Login</h1>
            <div className="textbox">
              <input
                type="email"
                placeholder="Email"
                value={cust_email_id}
                name="cust_email_id"
                onChange={this.onChangeHandler}
              />
            </div>
            <div className="textbox">
              <input
                type="password"
                placeholder="password"
                value={cust_password}
                name="cust_password"
                onChange={this.onChangeHandler}
              />
            </div>
            <button type="submit" className="btn1 btn-outline-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
