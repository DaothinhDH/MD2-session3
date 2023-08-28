import React, { Component } from "react";

export default class FormControlled_C2 extends Component {
  constructor(props) {
    super(props);
    // khai báo state
    this.state = {
      userName: "",
      dateOfBirth: "",
      email: "",
      password: "",
    };
  }
// hàm lắng nghe dsự thay đổi tring các ô input
    handleChanege = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value, // [userName: nguyen van a]
            
        })

        // cập nhật lại state
    //     if (name === "userName") {
    //         this.setState({
    //             userName: value,
    //         })
    //     } else if (name === "dateOfBirth") {
    //         this.setState({
    //             dateOfBirth: value,
    //         })
    //     } else if (name === "email") {
    //         this.setState({
    //             email: value,
    //         })
    //     } else {
    //         this.setState({
    //             password: value,
    //         })
    //     }
    }
  //  hàm xử lý dữ liệu
  handleSubmit = (e) => {
    // ngăn chặn sự kiênh submit của form
    e.preventDefault();
    // đối tượng newUser
    const newUser = {
      userName: this.state.userName,
      dateOfBirth: this.state.dateOfBirth,
      email: this.state.email,
      password: this.state.password,
    };
    console.log(newUser);
  };

  render() {
    console.log("userName", this.state.userName);

    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              UserName
            </label>
            <input
              onChange={this.handleChanege}
              className="form-control"
              id="username"
              name="userName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dateOfBirth" className="form-label">
              DateOfBirth
            </label>
            <input
              onChange={this.handleChanege}
              type="date"
              className="form-control"
              id="dateOfBirth"
              name="dateOfBirth"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              onChange={this.handleChanege}
              type="text"
              className="form-control"
              id="email"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              onChange={this.handleChanege}
              type="password"
              className="form-control"
              id="password"
              name="password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
