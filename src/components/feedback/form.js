import React from "react";
import styled from "styled-components";

import { PrimaryBtn } from "../btn";

const Field = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column-reverse;
`;

const Label = styled.label`
  font-size: 0.8rem;
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

  &:focus {
    border-color: ${props => props.theme.colors.primary};
  }

  &:focus + ${Label} {
    color: ${props => props.theme.colors.secondary};
  }
`;

function Form() {
  return (
    <form
      css={`
        margin: 2rem 4rem;
      `}
      name="feedback"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input
        type="hidden"
        name="form-name"
        value="feedback"
        action="/complete"
      />
      <Field>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="John Doe"
          autoComplete="name"
        />
        <Label htmlFor="name">
          Name (you don't have to fill this, but you can.)
        </Label>
      </Field>
      <Field>
        <Input
          as="textarea"
          rows="4"
          type="text"
          id="well"
          name="well"
          placeholder=""
          autoComplete="off"
        />
        <Label htmlFor="well">What did I do well?</Label>
      </Field>
      <Field>
        <Input
          as="textarea"
          rows="4"
          type="text"
          id="not-well"
          name="notWell"
          placeholder=""
          required
          autoComplete="off"
        />
        <Label htmlFor="not-well">
          What did <strong>not</strong> do well?
        </Label>
      </Field>
      <div
        css={`
          text-align: center;
        `}
      >
        <PrimaryBtn>Submit</PrimaryBtn>
      </div>
    </form>
  );
}

export default Form;
