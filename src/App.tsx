import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import { Button, Container, Form } from 'react-bootstrap';

export default function App() {

  const [returnText, setReturnText] = useState("");
  const [textInput, setTextInput] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    if (textInput.includes("app that tells you you're idea is bad"))
    {
      setReturnText("IDIOT")
      alert("THIS IS A CEASE AND DESIST.");
      alert("YOU'RE NOT FUNNY.");
      e.disabled = true;
    }
    else if (textInput.includes("pikachu on a skateboard"))
    {
      setReturnText("Honestly the only good idea. You're alright, bro.");
    }
    else if (textInput === "")
    {
      setReturnText("");
    }
    else 
    {
      setReturnText("Terrible idea; don't try again.")
      // e.txtinput.disabled= true;
    }
  }

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setTextInput(e.target.value);
  }

  return(
  <Container style={{padding: "7em"}}>
    <h1>I want you to help me make an app.</h1>
    <form onSubmit={handleSubmit} >
    <Form.Control name="txtinput" type="text" onChange={handleChange} placeholder="Enter idea here" />
    <Button variant="primary" type="submit" onClick={handleSubmit} form="myform">Is my idea good?</Button>
    </form>
    <div><br />
    <span>{returnText}</span>
    </div>
  </Container>
  )
}
