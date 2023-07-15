import React, { useState } from "react";
import MyNavbar from "../../components/navbar/MyNavbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./AddArticle.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const AddArticle = () => {
  const navigate=useNavigate()  
  const [formData, setFormData] = useState({});
  const AddArticleHandler = () => {
    axios.post("http://localhost:5000/articles", formData)
      .then((res) => {
        if (res.status === 201) {
          Swal.fire({
            title: "مقاله جدید با موفقیت ساخته شد",
            timer: 1500,
            timerProgressBar: true,
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "مقاله ساخته نشد",
          icon: "error",
          timer: 1500,
          timerProgressBar: true,
        });
      })
      resetFormdata()
      setTimeout(()=>{
        navigate('/')
      },1500)
  };
    const FormHandler = (e, propName) => {
    setFormData({ ...formData, [propName]: e.target.value });
  };
   const resetFormdata=()=>{
            setFormData({
                title:'',
                desc:'',
                writter:'',
                image:'',
                category:'',
                readingTime:''
            })

  }

  return (
    <div>
      <MyNavbar />
      <div className="form-container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control
              type="text"
              value={formData.title}
              placeholder="عنوان مقاله را وارد کنید"
              onChange={(e) => FormHandler(e, "title")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>توضیح کوتاه</Form.Label>
            <Form.Control
              type="text"
              value={formData.desc}
              placeholder="یک توضیح کوتاه در مورد مقاله وارد کنید"
              onChange={(e) => FormHandler(e, "desc")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>نویسنده مقاله</Form.Label>
            <Form.Control
              type="text"
              value={formData.writter}
              placeholder="نام نویسنده مقاله را وارد کنید"
              onChange={(e) => FormHandler(e, "writter")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control
              type="text"
              value={formData.category}
              placeholder="موضوع مقاله را وارد کنید"
              onChange={(e) => FormHandler(e, "category")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control
              type="text"
              value={formData.image}
              placeholder="آدرس عکس مقاله را وارد کنید"
              onChange={(e) => FormHandler(e, "image")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>مدت زمان خواندن</Form.Label>
            <Form.Control
              type="number"
              value={formData.readingTime}
              placeholder=""
              onChange={(e) => FormHandler(e, "readingTime")}
            />
          </Form.Group>
          <Button variant="primary" type="button" onClick={AddArticleHandler}>
            ساخت مقاله
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddArticle;
