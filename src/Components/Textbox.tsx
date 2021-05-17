import styled from "styled-components";
import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
  WithStyles,
} from "@material-ui/core";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import React, { useState } from "react";

const styles = (theme: Theme) =>
  createStyles({
    TextField: {
      "&[type=number]": {
        "-moz-appearance": "textfield",
      },
      "&::-webkit-outer-spin-button": {
        "-webkit-appearance": "none",
        margin: 0,
      },
      "&::-webkit-inner-spin-button": {
        "-webkit-appearance": "none",
        margin: 0,
      },
    },
  });

interface TextboxProps extends WithStyles<typeof styles> {
  setState: React.Dispatch<number | undefined>;
}

function TextboxUnstyled(props: TextboxProps) {
  const [internalTextFieldState, setInternalTextFieldState] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(internalTextFieldState)
    let num
    if ((num = Number(internalTextFieldState)) !== 0 || num !== undefined)
    props.setState(num);
  }

  return (
    <Box display={"flex"} justifyContent={"center"}>
      <form onSubmit={handleSubmit}>
        <FormControl variant="outlined" className={props.classes.TextField}>
          <InputLabel htmlFor="component-outlined">Number</InputLabel>
          <OutlinedInput
            id="component-outlined"
            onChange={(event) => setInternalTextFieldState(event.target.value)}
            label="Number"
          />
        </FormControl>
        {/*<TextField*/}
        {/*  id="standard-basic"*/}
        {/*  label="Number"*/}
        {/*  type={"Number"}*/}
        {/*  variant={"outlined"}*/}
        {/*  onChange={}*/}
        {/*  Input={}*/}
        {/*/>*/}
      </form>
    </Box>
  );
}

const Textbox = withStyles(styles)(TextboxUnstyled);

export { Textbox };
