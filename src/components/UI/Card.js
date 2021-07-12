import React from 'react'; 
import './Card.css'; 
const Card = (props) => { 
  const classes = 'card '+props.className; //classname is a built in property 
  return <div className={classes}>{props.children}</div>
}
export default Card; 