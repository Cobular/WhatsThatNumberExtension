import {
  Box,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";
import {Dropdown} from "./Dropdown";
import {MathJaxComp} from "./Mathjax";


interface ResultBoxProps {
  equation: string;
}

export function ResultBox(props: ResultBoxProps) {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Card>
        <CardContent>
          <MathJaxComp latex={props.equation} />
        </CardContent>
        <CardActions>
          <Dropdown options={['Latex', 'Python', 'Unicode']} />
        </CardActions>
      </Card>
    </Box>
  );
}
