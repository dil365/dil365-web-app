import "../styles/components/Icon.css";
import IconsList from "../assets/flowbite-icons";
import type { IconComponentPropsType } from "../types/icon.types";
import { stringToElement } from "../utils/generalHelpers"
import colors from "../constants/colors";
const IconComponentPropsDefaults: IconComponentPropsType = {
    icon: "warning",
    size: "1rem",
    color: colors["color-black"],
    fill: false
}

function IconComponent(props: IconComponentPropsType = IconComponentPropsDefaults) {
    const stringIconSVG: string = IconsList[props.icon][props.fill ? "fill" : "simple"];
    const elementIconSVG = stringToElement(stringIconSVG)!;
    if (elementIconSVG) {
        elementIconSVG.style.width = props.size!;
        elementIconSVG.style.height = props.size!;
        elementIconSVG.style.color = props.color!;
    }
    return <div className="icon__element-custom" dangerouslySetInnerHTML={{ __html: elementIconSVG.outerHTML }} />;
}

export default IconComponent;
