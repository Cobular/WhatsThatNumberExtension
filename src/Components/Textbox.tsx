import styled from "styled-components";

const Input = styled.input`
  background: transparent;
  border: none;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

const BackgroundDiv = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: -20px;
  z-index: -1;

  background: rgba(196, 196, 196, 0.3);
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 7px;
`;

const TextboxDiv = styled.div`
  position: relative;
  margin: auto;
  width: fit-content;
  background: transparent;
`;

export function Textbox() {
  return (
    <TextboxDiv>
      <Input
        type={"number"}
        name={"Number"}
        placeholder={"Enter a number..."}
      />
      <BackgroundDiv />
    </TextboxDiv>
  );
}
