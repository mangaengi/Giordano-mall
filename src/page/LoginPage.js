import React from "react";
import { Form, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const LoginPage = (setAuthenticate) => {
  const navigate = useNavigate();

  // submin버튼을 클릭할 떄마다 form이 매번 새로고침되므로 콘솔창에서 텍스트가 사라짐
  // form을 쓸 때는 form이 새로고침퇴는 것을 막아주는 e.preventDefalt를 써준다
  const loginUser = (e) => {
  e.preventDefalt();
  console.log("login user function issus")
  setAuthenticate(true)
  navigate('/')
}
  return (
    <div className="form-area">
      {/* 버튼 type이 submit일 경우에는 onClick이벤트를 주지 않음.*/}
      <Form onSubmit={(e)=>loginUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="이메일 기억하기" />
        </Form.Group>
        <Button variant="primary" type="submit">로그인</Button>
      </Form>
    </div>
  );
};

export default LoginPage;
