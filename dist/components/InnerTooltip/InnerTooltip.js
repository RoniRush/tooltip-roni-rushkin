import React from 'react';
import { StyledTooltip } from "./InnerTooltip.styled";
import { ToolTip_Display } from "../constants";
import { getTooltipStyle, getTranslateY } from "../helpers/getTooltipStyling";
import { checkEllipsisOverflow } from "../helpers/showTooltipChecks";
export const InnerTooltip = (props) => {
    const newProps = Object.assign(Object.assign({}, props), getTooltipStyle(props));
    const translateY = getTranslateY(props.location);
    return React.createElement("span", null,
        props.children,
        props.showTooltip === ToolTip_Display.SHOW && checkEllipsisOverflow(props) &&
            React.createElement(StyledTooltip, Object.assign({ "data-testid": "styledInnerTooltip", translateY: translateY, className: `tooltip ${props.location}` }, newProps), props.content));
};
