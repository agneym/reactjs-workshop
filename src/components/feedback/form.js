import React from "react";
import styled from "styled-components";

const Field = styled.div`
  margin: 2rem 0;
`;

const Input = styled.input`
  width: 100%;
  margin-top: 0.3rem;
  font-size: 0.8rem;
  padding: 0.5rem 0.5rem;
  background-color: transparent;
  border-width: 0.1rem;
  outline: 0;
  border-style: solid;
  border-radius: 0.3rem;
  border-color: lightgrey;
`;

const Label = styled.label`
  font-size: 0.8rem;
`;

function Form() {
  return (
    <form
      css={`
        margin: 2rem 4rem;
      `}
    >
      <Field>
        <Label htmlFor="name">
          Name (you don't have to fill this, but you can.)
        </Label>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="John Doe"
          autoComplete="name"
        />
      </Field>
      <Field>
        <Label htmlFor="well">What did I do well?</Label>
        <Input
          as="textarea"
          rows="4"
          type="text"
          id="well"
          name="well"
          placeholder=""
        />
      </Field>
      <Field>
        <Label htmlFor="not-well">
          What did <strong>not</strong> do well?
        </Label>
        <Input
          as="textarea"
          rows="4"
          type="text"
          id="not-well"
          name="notWell"
          placeholder=""
          required
        />
      </Field>
    </form>
  );
}

export default Form;
