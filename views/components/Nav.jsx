const React = require("react")

class Nav extends React.Component {
  render() {
    return (
      <nav>
            <a href={this.props.link}>{this.props.text}</a>
      </nav>
    )
  }
}

module.exports = Nav