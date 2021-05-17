import { ThreeButton } from "./ThreeButton";
import { ResultBox } from "./ResultBox";
import { Textbox } from "./Textbox";
import { Box, WithStyles } from "@material-ui/core";
import { createStyles, withStyles } from "@material-ui/core/styles";
import { useMemo, useState } from "react";
import { IrrationalManager } from "whatsthatnumber-lib";
import { ProcessNumberResultsItem } from "whatsthatnumber-lib/dist/Utils";

const style = createStyles({
  RootDiv: {
    margin: 50,
    width: 500,
    height: 400,
    background: "lightcyan",
    padding: 7,
  },
});

function MainAreaUnstyled(props: WithStyles<typeof style>) {
  const modes: [string, string, string] = ["Default", "Calculus", "Polar"];
  const [selectedMode, setSelectedMode] = useState<0 | 1 | 2>(0);

  const granularities: [string, string, string] = ["Coarse", "Normal", "Fine"];
  const [selectedGranularity, setSelectedGranularity] = useState<0 | 1 | 2>(1);

  const [enteredNumber, setEnteredNumber] =
    useState<number | undefined>(undefined);

  const manager = useMemo(() => new IrrationalManager(false, "latex"), []);
  const calculated_irrational = useMemo(() => {
    if (enteredNumber === 0)
      return undefined
    if (enteredNumber !== undefined)
      return manager.find_best_fraction(enteredNumber);
  }, [manager, enteredNumber]);

  function ChooseResultBox(input: ProcessNumberResultsItem | undefined) {
    console.log(input)
    if (input === undefined || typeof input[0] !== "string")
      return <ResultBox equation={"???"} />
    else
      return <ResultBox equation={input[0]} />
  }

  return (
    <Box className={props.classes.RootDiv}>
      <Box display={"flex"} flexDirection={"column"} height={"100%"}>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
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
        </Box>
        <Box
          flexGrow={3}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Textbox setState={setEnteredNumber} />
        </Box>
        <Box
          flexGrow={5}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          {ChooseResultBox(calculated_irrational)}
        </Box>
      </Box>
    </Box>
  );
}

const MainArea = withStyles(style)(MainAreaUnstyled);

export { MainArea };
