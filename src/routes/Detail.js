import React from "react";


class Detail extends React.Component {

  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  // render가 먼저 실행되고 componentDidMount가 실행된다.
  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>
    } else {
      return null;
    }
  }
}

export default Detail;
