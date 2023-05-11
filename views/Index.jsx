const React = require("react")
const Nav = require('./components/Nav')


class Index extends React.Component {
  render() {
    const { logs } = this.props
    return(
        <div>
        <h1>Captain's Logs</h1>
        <Nav link="/logs/new" text="Enter a New Log"/>
        <ul>
            {logs.map((log, i) => {
                return (
                    <li key={i}>
                        Title:{" "}
                        <a href={`/logs/${log._id}`}>
                            {log.title}
                        </a>{" "}
                        <br />
                         Entry: {log.entry} <br></br>
                        Ship Status: {log.shipIsBroken
                            ? `It is broken`
                            : `It is not broken`}
                        <br />
                        {/* link to this specific fruit's edit page */}
                        <a href={`/logs/${log._id}/edit`}>Edit This Captain Log</a> 
                        {/* we must use a Form for delete because we need to make a request to our server.  You can't use handleClick in server-side app */}
                        <form action={`/logs/${log._id}?_method=DELETE`} method ="POST">
                            <input type="submit" value="DELETE" />
                        </form>
                    </li>
                );
            })}
        </ul>
        </div>
    )
  }
}

module.exports = Index
