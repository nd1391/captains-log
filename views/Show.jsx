const React = require("react")
const Nav = require("./components/Nav")

class Show extends React.Component {
    render() {
        const log = this.props.log
        return (
            <div>
            <Nav link='/logs' text="Home" />
            <br />
            {/* GREAT METHOD FOR DISPLAYING DATES */}
            <h2>{log.createdAt.toLocaleString()}</h2> 
            <h1> Dear Diary,</h1>
            <br />
            Title: {log.title}
            <br />
            Entry: {log.entry}
            <br />
            Ship Status:{log.shipIsBroken? 'The ship is broken... cannot touch this' : 'The ship is not broken'}
            </div>
        )
    }
}

module.exports = Show;