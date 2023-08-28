import { Component } from "react";

export default class Lifecycle_Comp extends Component{
    constructor(props) {
        super(props);
        console.log('Component được khởi tạo');
        this.state = {
            className: "JV-230630",
        };
    }

    componentWillMount() {
        console.log('Component will Mount');
    }

    componentDidMount() {
        console.log('component did Mount');
    }
    componentWillReceiveProps(newProps) {
        "component will Receive props được chạy lúc nà props mới là:"
        newProps
    }
    
    shouldComponentUpdate() {
        return true; // mặc định hàm này sẽ return true
    }

    componentWillUpdate() {
        console.log("component được render");
    }

    componentDidUpdate() {
        console.log("component did update được gọi");
    }
    componentWillUnmount() {
        console.log('component wil Unmuont'); // thường được dùng để clear sự kiện
    }

    render() {
        console.log('Component được render');
        return (
            <>
                <h4>Tên công ty ở component con:{this.props.company}</h4>
                <h3>Tên lớp: {this.state.className}</h3>
                <button onClick={() =>
                    this.setState({
                    className:"JV-2023",
                })}>Change State</button>
            </>
        );
    }
}