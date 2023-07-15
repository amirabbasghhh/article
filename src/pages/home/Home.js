import React, { useState } from 'react';
import { useEffect } from 'react';
import MyNavbar from '../../components/navbar/MyNavbar';
import ArticleItem from '../../components/article/ArticleItem'
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';

const Home = () => {
    useEffect(() => {
      axios.get('http://localhost:5000/articles')
      .then((res)=>setArticles(res.data))
    }, [])
    const[articles,setArticles]=useState([])
    return (
        
          
             <div >
                <MyNavbar/>
                <Container>
                    <h1 style={{marginBottom:'40px'}}>لیست مقالات</h1>
                    <Row className='row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4'>
                        {articles.map(article=>(
                            <Col key={article.id}>
                                <ArticleItem {...article}  />
                            </Col>
                        ))}
                             
                        
                    </Row>
                </Container>     
           </div>
          
    );
};

export default Home;