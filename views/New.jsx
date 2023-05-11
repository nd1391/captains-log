const React = require("react")

class New extends React.Component {
    render() {
      return(
        <div>
          <form action="/logs" method="POST">
            Title: <input type="text" name="title" />
            Entry: <input type="textarea" name="entry" />
            Ship Is Broken: 
            <input 
              type="checkbox" 
              name="shipIsBroken" 
            /> 
            <input type="submit" value="Submit" />       
          </form>
        </div>
      )
    }
  }
  
  module.exports = New