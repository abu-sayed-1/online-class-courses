import React from 'react';
import './CourseChild.css';
const CourseChild = (props) => {
    const { img,price,detail} = props.course;

     return (
          
         <div className="product-container">
            <img src={img} alt=""/>
            <h5>{detail}</h5>
            <p><small>${price}</small></p>
            <button className="btn btn-primary" onClick={()=> props.handelAddCart(props.course)}>Enroll now</button>
         </div>
     );
 };
 
 export default CourseChild;