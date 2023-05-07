
// You create a boilerplate of a component by "rafce"
// now heads up to the app.js to add it to our application.
// Avoid giving the functional component the same name as the nested html tag Also rem html tags are lower cased..
// Props refers to properties.
// Proptypes refers to the type of the props(erties) expected whether its a string , boolean or number expected.

import PropTypes from "prop-types"
import Button from "./Button"



const Header = ({title, onAdd ,showAdd }) => {
  return (
    <header className="header">
    <h1>{title}</h1> 
    <Button  color={showAdd ? "red" : "green"}  text = { showAdd ? "close" : "Add"}onClick = {onAdd}  />
    
    </ header>

  )
}

Header.defaultProps = {
  title: "Task Tracker",
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
