import React from "react";
import { Div,Image,Row,Col,Text } from "atomize";
import '../styles/component.css'
function BookCard({image,title,price,onMoreInfo}) {
  return (
    <div className="card">
        <div className="book-img">
        <img onClick={onMoreInfo}  src={`${image}`} />
        <div className="white"></div>
        </div>
          
        <Text textColor="black400" textAlign="center" textSize="title">{title}</Text>
        <Text textColor="gray600"  textAlign="center" textSize="subheader">{price}</Text>
    </div>
  );
}

export default BookCard;
