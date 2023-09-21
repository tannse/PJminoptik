import React from "react";
class App extends React.Component {
    state = {
        isOnline: navigator.onLine, // Kiểm tra trạng thái kết nối ban đầu.
    };

    componentDidMount() {
        window.addEventListener("online", this.handleOnline);
        window.addEventListener("offline", this.handleOffline);
    }

    componentWillUnmount() {
        window.removeEventListener("online", this.handleOnline);
        window.removeEventListener("offline", this.handleOffline);
    }

    handleOnline = () => {
        this.setState({ isOnline: true });
    };

    handleOffline = () => {
        this.setState({ isOnline: false });
    };

    render() {
        if (!this.state.isOnline) {
            return <div>Không có kết nối internet.</div>;
        }

        return <div>Ứng dụng của bạn</div>;
    }
}
export default App;
