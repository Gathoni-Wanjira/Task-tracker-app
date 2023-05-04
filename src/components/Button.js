// Use rafce as the boilerplate for component files
// Import the proptypes to be able to identify and spot errors on which kind of properties are expected.
import PropTypes from "prop-types"

// customize the functional components.
const Button = ({color, text}) => {
  return (
    <button style={{backgroundColor: color }} className = "btn" >
       {text}
        </button>
  )
}

// This is an object that allows you to pass information that might not have been passed from the parent component.
Button.defaultProps = {
    color: "steelblue"

}

// This object helps to define the type of proptype to be expeted.
Button.propTypes = {
    color : PropTypes.string.isRequired,
    text : PropTypes.string.isRequired,

}


export default Button 
