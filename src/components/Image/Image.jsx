import "./image.css"

function Image(props) {

    return (
     <img src={props.url} alt={props.description} />
    )
  }
  
  export default Image