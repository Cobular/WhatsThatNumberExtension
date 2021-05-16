import {MathJaxContext, MathJax, MathJax3Config} from "better-react-mathjax";

const config: MathJax3Config =  {
  startup: {

  }
}

function Mathjax(props: {latex: string}) {
  return (
      <div>
        <p>
          {props.latex}
        </p>
      </div>
  )
}
