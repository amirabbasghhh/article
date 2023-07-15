import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import './ArticleItem.css'
import {TiArrowLeftThick} from 'react-icons/ti'
import {AiOutlineClockCircle} from 'react-icons/ai'

const ArticleItem = ({title,desc,image,readingTime,writter,id}) => {
  return (
    <div>
      <Card >
        <Card.Img variant="top"  src={image} />
        <Card.Body>
          <Card.Title > {title}</Card.Title>
          <Card.Text style={{textAlign:'justify'}}>
          {desc}
          </Card.Text>
          <div className="read-more">
           <Link to={`article/${id}`}>
              <span>ادامه مقاله</span>
              <TiArrowLeftThick size='25px' style={{marginRight:'10px'}}/>
           </Link>
          </div>
        </Card.Body>
        
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'8px 8px',backgroundColor:'#e1e5e8',borderTop:"1px solid grey"}}>
            <span>نویسنده مقاله : {writter}</span>
            <span style={{display:'flex',alignItems:'center'}}>
                <AiOutlineClockCircle style={{margin:'0px 5px'}}/>
                {readingTime}دقیقه
            </span>
        </div>
      </Card>
      
    </div>
  );
};

export default ArticleItem;
