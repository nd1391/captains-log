const React = require('react');

class Edit extends React.Component {
    render() {
        const log = this.props.log
        //this const makes the props more easily accessible - see line 15,16 the shortened extension for accessing the data.
        return (

            <div>
                <form action={`/logs/${log._id}?_method=PUT`} method="POST">
                {/* use the fruit info to give the inputs defaultValue for a nice user experience */}
                Title: <input type="text" name="title" defaultValue={log.title}/>
                Entry: <input type="text" name="entry" defaultValue={log.entry} />
                Is the Ship Broken: 
                {/* conditionally rendering the checkbox input to have it match the original data */}
                {
                    log.shipIsBroken ? 
                        <input type="checkbox" name="shipIsBroken" defaultChecked />
                    : 
                        <input type="checkbox" name="shipIsBroken"/> }
                <input type="submit" value="Submit Changes" />
                </form>
            </div>
        )
    }
}

module.exports = Edit;