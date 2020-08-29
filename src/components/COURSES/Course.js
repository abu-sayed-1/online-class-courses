import React,{useState} from 'react';
import CourseChild from './CourseChild/CourseChild';
import data from "./data.json"
import '../Course.css';
import Cart from './Carts/Cart';

const Course = () => {
    const[fakeData,setData] = useState(data);

    const[carts,setCarts] = useState([]);
    const handelAddCart =(product)=>{
        const cart = [...carts,product]; 
        setCarts(cart)
       };
      
    return (
        <div className="main-container">
          
              <Cart carts={carts}></Cart>
         
              { 
              
                fakeData.map(course => <CourseChild course={course} handelAddCart={handelAddCart}></CourseChild>)  

              } 
         </div>
    );
};

export default Course;



