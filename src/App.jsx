import { Component } from "react";
import "./App.css";
import Lifecycle_Comp from "./components/Lifecycle_Comp";
import FormControlled_C1 from "./components/FormControlled_C1";
import FormControlled_C2 from "./components/Formcontrolled_C2";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      company: "BlackPink1",
      showform: false, // sate để quyết định trạng thái bật tắt của form
    };
  }
  handleShow = (e) => {
    console.log("event", e); //  event là 1 sự kiện mặc định dc JS tạo ra khi có sự kiện từ người dùng
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    return (
      <>
        {/* khu vực button */}
        <button onClick={this.handleShow}>Show</button>
        <button
          onClick={() =>
            this.setState({
              company: "Blackpink2",
            })
          }
        >
          Change Props
        </button>
        <button
          onClick={() =>
            this.setState({
              showform: !this.state.showform,
            })
          }
        >
          show form
        </button>
        {/* khu vực hiển thị các component */}
        {this.state.show === true ? (
          <Lifecycle_Comp company={this.state.company} />
        ) : (
          <></>
        )}

        {/* hiển thị form */}
        {this.state.showform ? <FormControlled_C2 /> : <></>}
      </>
    );
  }
}

export default App;
