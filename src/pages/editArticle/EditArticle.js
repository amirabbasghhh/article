import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import MyNavbar from '../../components/navbar/MyNavbar';

const EditArticle = () => {
    const articleId=useParams().articleId
    const navigate=useNavigate()
    const[articleData,setArticledata]=useState({})
    useEffect(()=>{
        axios.get(`http://localhost:5000/articles/${articleId}`)
        .then((res)=>setArticledata(res.data))
    },[])
    const editArticleHandler=()=>{
         axios.put(`http://localhost:5000/articles/${articleId}`,articleData)
         Swal.fire({
            title:'مقاله با موفقیت ویرایش شد',
            timer:1500,
            timerProgressBar:true,
            showCloseButton:false
         })
         .then(()=>navigate('/'))
    }
    const FormHandler=(e,propName)=>{
        setArticledata({ ...articleData, [propName]: e.target.value });
    }
    return (
            <div>
              <MyNavbar/>
              <div className="form-container">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>عنوان مقاله</Form.Label>
                    <Form.Control
                      type="text"
                      value={articleData.title}
                      placeholder="عنوان مقاله را وارد کنید"
                      onChange={(e) => FormHandler(e, "title")}
                    />
                  </Form.Group>
        
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>توضیح کوتاه</Form.Label>
                    <Form.Control
                      type="text"
                      value={articleData.desc}
                      placeholder="یک توضیح کوتاه در مورد مقاله وارد کنید"
                      onChange={(e) => FormHandler(e, "desc")}
                    />
                  </Form.Group>
        
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>نویسنده مقاله</Form.Label>
                    <Form.Control
                      type="text"
                      value={articleData.writter}
                      placeholder="نام نویسنده مقاله را وارد کنید"
                      onChange={(e) => FormHandler(e, "writter")}
                    />
                  </Form.Group>
        
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>موضوع مقاله</Form.Label>
                    <Form.Control
                      type="text"
                      value={articleData.category}
                      placeholder="موضوع مقاله را وارد کنید"
                      onChange={(e) => FormHandler(e, "category")}
                    />
                  </Form.Group>
        
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>عکس مقاله</Form.Label>
                    <Form.Control
                      type="text"
                      value={articleData.image}
                      placeholder="آدرس عکس مقاله را وارد کنید"
                      onChange={(e) => FormHandler(e, "image")}
                    />
                  </Form.Group>
        
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>مدت زمان خواندن</Form.Label>
                    <Form.Control
                      type="number"
                      value={articleData.readingTime}
                      placeholder=""
                      onChange={(e) => FormHandler(e, "readingTime")}
                    />
                  </Form.Group>
                  <Button variant="primary" type="button" onClick={editArticleHandler}>
                    ساخت مقاله
                  </Button>
                </Form>
              </div>
            </div>
          );
};

export default EditArticle;