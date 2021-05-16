import styled from "styled-components";
import image from "./img.png";

const ResultBoxDiv = styled.div`
  background: #82fff7;
  border-radius: 4px;
  backdrop-filter: blur(4px);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;

  flex-direction: column;
  align-items: flex-start;
  padding: 5px 8px;
  width: fit-content;
`;

interface ResultBoxProps {
  equation: string;
}

export function ResultBox(props: ResultBoxProps) {
  return (
    <ResultBoxDiv>
      <MathjaxRenderer equation={props.equation} />
      <hr style={{ width: "100%", marginBottom: 3 }} />
      <ExportOptions equation={props.equation} />
    </ResultBoxDiv>
  );
}

const ExportOptionsDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const ExportButton = styled.p`
  margin: 0 5px;
  cursor: pointer;
`;

interface ExportOptionsProps {
  equation: string;
}

export function ExportOptions(props: ExportOptionsProps) {
  return (
    <ExportOptionsDiv>
      <ExportButton
        onClick={() => {
          navigator.clipboard.writeText("Latex");
        }}
      >
        Latex
      </ExportButton>
      <ExportButton
        onClick={() => {
          navigator.clipboard.writeText("Unicode");
        }}
      >
        Unicode
      </ExportButton>
    </ExportOptionsDiv>
  );
}

interface MathjaxRendererProps {
  equation: string;
}

const MathjaxRendererDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  > * {
    margin: auto;
    height: 70px;
  }
`;

export function MathjaxRenderer(props: MathjaxRendererProps) {
  return (
    <MathjaxRendererDiv>
      <img src={image} alt={props.equation} />
    </MathjaxRendererDiv>
  );
}
