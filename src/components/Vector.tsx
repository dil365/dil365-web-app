import "../styles/components/Vector.css";
import VectorsList from "../assets/vector-registeration";
import type { VectorComponentPropsType } from "../types/vector.types";
import colors from "../constants/colors";
import { generateUniqueId, stringToElement } from "../utils/generalHelpers"

const VectorComponentPropsDefaults: VectorComponentPropsType = {
    vector: "login",
    size: "1rem",
    color: colors["color-black"],
}

function VectorComponent(props: VectorComponentPropsType = VectorComponentPropsDefaults) {
    const stringVectorSVG = VectorsList[props.vector]!;
    const elementVectorSVG = stringToElement(stringVectorSVG)!;
    const elementVectorPath = elementVectorSVG.getElementsByTagName("path");
   
    if (elementVectorSVG) {
        elementVectorSVG.style.width = props.size!;
        elementVectorSVG.style.fill = props.color!;
        if(elementVectorPath.length > 0) {
            const targets = [...elementVectorPath].filter((path) => {
                return path.getAttribute("fill") === "$primary";
            });
            targets.forEach((path) => {
                path.setAttribute("fill", props.color!);
            });
        }
        
    }
    return <div id={generateUniqueId() + "_vector"} dangerouslySetInnerHTML={{ __html: elementVectorSVG.outerHTML }} />;
}

export default VectorComponent;
  