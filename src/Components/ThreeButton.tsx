import { ButtonGroup, Button, WithStyles, Box } from "@material-ui/core";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    Button: {
      width: "fit-content",
      cursor: "pointer",
      fontWeight: "bold",
    },
  });

interface ThreeButtonProps extends WithStyles<typeof styles> {
  selectedElement: number;
  setSelectedElement: CallableFunction;
  names: [string, string, string];
}

function ThreeButtonUnstyled(props: ThreeButtonProps) {
  return (
    <div>
      <Box display={"flex"} justifyContent={"flex-start"}>
        <ButtonGroup
          disableElevation
          size={"small"}
          aria-label="outlined primary button group"
        >
          <Button
            variant={props.selectedElement === 0 ? "contained" : "outlined"}
            className={props.classes.Button}
            color={props.selectedElement === 0 ? "primary" : "default"}
            onClick={() => props.setSelectedElement(0)}
          >
            {props.names[0]}
          </Button>
          <Button
            variant={props.selectedElement === 1 ? "contained" : "outlined"}
            className={props.classes.Button}
            color={props.selectedElement === 1 ? "primary" : "default"}
            onClick={() => props.setSelectedElement(1)}
          >
            {props.names[1]}
          </Button>
          <Button
            variant={props.selectedElement === 2 ? "contained" : "outlined"}
            className={props.classes.Button}
            color={props.selectedElement === 2 ? "primary" : "default"}
            onClick={() => props.setSelectedElement(2)}
          >
            {props.names[2]}
          </Button>
        </ButtonGroup>
      </Box>
    </div>
  );
}

const ThreeButton = withStyles(styles)(ThreeButtonUnstyled);

export { ThreeButton };
