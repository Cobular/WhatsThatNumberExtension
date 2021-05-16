import styled from "styled-components";
import {ButtonGroup, Button as MUIButton} from "@material-ui/core";

interface ButtonProps {
  selected?: boolean;
}

const Div = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const border_width = 1;

const Button = styled(MUIButton)<ButtonProps>`
  width: fit-content;
  border: ${border_width}px solid black;
  margin: 0;
  padding: 10px;
  border-radius: 0;
  border-left-width: 0;
  cursor: pointer;

  &:hover {
    background: red;
  }
`;

Button.defaultProps = {
  selected: false,
};

const LeftCapP = styled(Button)`
  border-left-width: ${border_width}px;
  border-radius: 5px 0 0 5px;
`;

const RightCapP = styled(Button)`
  border-radius: 0 5px 5px 0;
`;

interface ThreeButtonProps {
  selectedElement: number;
  setSelectedElement: CallableFunction;
  names: [string, string, string];
}

export function ThreeButton(props: ThreeButtonProps) {
  return (
    <div>
      <Div>
        <ButtonGroup>
          <LeftCapP
              color={props.selectedElement === 0 ? "primary" : "default"}
              onClick={() => props.setSelectedElement(0)}
          >
            {props.names[0]}
          </LeftCapP>
          <Button
              color={props.selectedElement === 1 ? "primary" : "default"}
              onClick={() => props.setSelectedElement(1)}
          >
            {props.names[1]}
          </Button>
          <RightCapP
              color={props.selectedElement === 2 ? "primary" : "default"}
              onClick={() => props.setSelectedElement(2)}
          >
            {props.names[2]}
          </RightCapP>
        </ButtonGroup>

      </Div>
    </div>
  );
}
