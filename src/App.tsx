import React, { useState } from "react";
import styled from "styled-components";
import { ThreeButton } from "./Components/ThreeButton";
import { ResultBox } from "./Components/ResultBox";
import { Textbox } from "./Components/Textbox";

const RootDiv = styled.div`
  margin: 50px;
  width: 500px;
  height: 400px;
  background: lightcyan;
  padding: 6px;
`;

const ButtonWidthDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export function App() {
  const modes: [string, string, string] = ["Default", "Calculus", "Polar"];
  const [selectedMode, setSelectedMode] = useState<0 | 1 | 2>(0);

  const granularities: [string, string, string] = ["Coarse", "Normal", "Fine"];
  const [selectedGranularity, setSelectedGranularity] = useState<0 | 1 | 2>(1);

  return (
    <RootDiv>
      <ButtonWidthDiv>
        <ThreeButton
          selectedElement={selectedMode}
          setSelectedElement={setSelectedMode}
          names={modes}
        />
        <ThreeButton
          selectedElement={selectedGranularity}
          setSelectedElement={setSelectedGranularity}
          names={granularities}
        />
      </ButtonWidthDiv>
      <p>
        Mode: {modes[selectedMode]} || Granularity:{" "}
        {granularities[selectedGranularity]}
      </p>
      <Textbox />
      <ResultBox equation={"(pi*2)/1"} />
    </RootDiv>
  );
}
