//imports
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";
//function
export default function Storyform() {
  function submitForm(event) {
    console.log("hi");
    event.preventDefault();
    // dispatch(login(email, password));
    // setEmail("");
    // setPassword("");
  }
  //   this.state={value:''}
  //   handleChange(event){
  //       alert('a name was submitted'+ this.state.value);
  //       event.preventDefault();
  //   }

  return (
    <div>
      {/* <div>
        <form>
          <label>
            name:
            <input type="text" value={this.state.value} onChange={this.handleChange}></input>
          </label>
        </form>
      </div> */}
    </div>

    // <Container>
    //   <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
    //     <h1 className="mt-5 mb-5">Post story</h1>
    //     <Form.Group controlId="formBasicEmail">
    //       <Form.Label>Email address</Form.Label>
    //       <Form.Control
    //         value={email}
    //         onChange={(event) => setEmail(event.target.value)}
    //         type="email"
    //         placeholder="Enter email"
    //         required
    //       />
    //     </Form.Group>

    //     <Form.Group controlId="formBasicPassword">
    //       <Form.Label>Password</Form.Label>
    //       <Form.Control
    //         value={password}
    //         onChange={(event) => setPassword(event.target.value)}
    //         type="password"
    //         placeholder="Password"
    //         required
    //       />
    //     </Form.Group>
    //     <Form.Group className="mt-5">
    //       <Button variant="primary" type="submit" onClick={submitForm}>
    //         Log in
    //       </Button>
    //     </Form.Group>
    //     <Link to="/signup" style={{ textAlign: "center" }}>
    //       Click here to sign up
    //     </Link>
    //   </Form>
    // </Container>
  );
}
