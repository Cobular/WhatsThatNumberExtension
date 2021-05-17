import {
  MathJaxContext,
  MathJax,
  MathJax3Config,
  MathJaxBaseContext,
  MathJax2Object,
  MathJax3Object,
} from "better-react-mathjax";
import { Box, makeStyles, WithStyles } from "@material-ui/core";
import { createStyles, withStyles } from "@material-ui/core/styles";
import {useContext, useEffect, useRef} from "react";

const config: MathJax3Config = {
  tex: {
    packages: { "[+]": ["html"] },
    inlineMath: [
        ["$", "$"]
    ],
    displayMath: [
      ["$$", "$$"],
    ]
  },
  startup: {
    typeset: false,
  }
};

const style = createStyles({
  Mathjax: {
    fontSize: "2em"
  },
});

interface MathJaxCompProps extends WithStyles<typeof style> {
  latex: string;
}

function MathJaxCompUnstyled(props: MathJaxCompProps) {
  return (
    <div>
      <MathJaxContext
        onError={(error) =>
          console.error("Mathjax has failed to load!" + error)
        }
        config={config}
        hideUntilTypeset={"every"}
      >
        <Box display={"flex"} justifyContent={"center"}>
          <MathJaxCompChild latex={props.latex} />
        </Box>
      </MathJaxContext>
    </div>
  );
}

function MathJaxCompChildUnstyled(props: MathJaxCompProps) {
  const mjContext = useContext(MathJaxBaseContext);
  const mathBlock = useRef(null);


  useEffect(() => {
    if (mjContext && mathBlock) {
      mjContext.promise.then((mathJax: any) => {
        mathJax.startup.promise.then(() => {
          mathJax.typesetClear([mathBlock.current]);
          mathJax.typesetPromise([mathBlock.current]);
        });
      });
    }
  });

  return (
    <div className={props.classes.Mathjax} ref={mathBlock}>
      {`$${props.latex}$`}
    </div>
  );
}

const MathJaxComp = withStyles(style)(MathJaxCompUnstyled);
const MathJaxCompChild = withStyles(style)(MathJaxCompChildUnstyled);

export { MathJaxComp };
