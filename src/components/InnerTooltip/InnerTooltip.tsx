import React from 'react';
import {StyledTooltip} from "./InnerTooltip.styled";
import {ToolTip_Display} from "../constants";
import {getTooltipStyle, getTranslateY} from "../helpers/getTooltipStyling";
import {checkEllipsisOverflow} from "../helpers/showTooltipChecks";
import {InnerTooltipType} from "../types";

export const InnerTooltip = (props: InnerTooltipType) => {
    const newProps: InnerTooltipType = {...props, ...getTooltipStyle(props)}
    const translateY = getTranslateY(newProps.location)

    return <span>
        {newProps.children}
        {newProps.showTooltip === ToolTip_Display.SHOW && checkEllipsisOverflow(props) &&
            <StyledTooltip data-testid="styledInnerTooltip" translateY={translateY}
                           className={`tooltip ${newProps.location}`} {...newProps}>{props.content}</StyledTooltip>}
    </span>
}

