import React, { useContext, useState } from 'react';
import {
  Form, FormGroup, Label, Input, Button,
} from 'reactstrap';
import { CallbackContext } from '../../context/PostContexp';

export default function MyForm() {
  const [input, setInput] = useState('');
  const { submitHandler } = useContext(CallbackContext);
  return (
    <div>
      <Form onSubmit={(e) => {
        submitHandler(e, input);
        setInput('');
      }}
      >
        <FormGroup>
          <Label for="exampleEmail">
            Post
          </Label>
          <Input
            value={input}
            id="exampleEmail"
            name="message"
            placeholder="Post"
            type="text"
            onChange={(e) => setInput(e.target.value)}
          />
        </FormGroup>
        <Button
          type="submit"
          color="primary"
        >
          Submit
        </Button>

      </Form>

    </div>
  );
}
