import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { InnerTooltip } from "../InnerTooltip/InnerTooltip";
import { StyledTooltipWrapper } from "./Tooltip.styled";
import { Event_Options, ToolTip_Display, ToolTip_Trigger } from "../constants";
import { getUpdatedProps } from "../helpers/getFullProps";
export const Tooltip = (props) => {
    const [showTooltip, setShowTooltip] = useState(ToolTip_Display.HIDE);
    const activated = useRef(false);
    const updatedProps = useMemo(() => {
        return getUpdatedProps(props);
    }, [props]);
    useEffect(() => {
        if (showTooltip === ToolTip_Display.WAIT) {
            const delayTimer = setTimeout(() => {
                setShowTooltip(ToolTip_Display.SHOW);
            }, updatedProps.delay);
            return () => clearTimeout(delayTimer);
        }
        if (showTooltip === ToolTip_Display.SHOW) {
            const showTimer = setTimeout(() => {
                activated.current = false;
                setShowTooltip(ToolTip_Display.HIDE);
            }, updatedProps.duration);
            return () => clearTimeout(showTimer);
        }
    }, [showTooltip, setShowTooltip, updatedProps.delay, updatedProps.duration]);
    const toggleTooltip = useCallback((event, openEvent, closeEvent) => {
        if (!activated.current && event.type === openEvent) {
            activated.current = true;
            setShowTooltip(ToolTip_Display.WAIT);
        }
        else {
            if (updatedProps.hideOnClick && event.type === closeEvent) {
                activated.current = false;
                setShowTooltip(ToolTip_Display.HIDE);
            }
        }
    }, [setShowTooltip, activated, updatedProps.hideOnClick]);
    let triggeredToolTip;
    console.log('updatedProps', updatedProps);
    switch (updatedProps.trigger) {
        case ToolTip_Trigger.FOCUS:
            triggeredToolTip = React.createElement(StyledTooltipWrapper, { "data-testid": "styledTooltip", className: 'onFocus tooltip-wrapper', onMouseDown: (event) => toggleTooltip(event, Event_Options.FOCUS, Event_Options.MOUSE_DOWN), onFocus: (event) => toggleTooltip(event, Event_Options.FOCUS, Event_Options.MOUSE_DOWN) },
                React.createElement(InnerTooltip, Object.assign({}, Object.assign({}, updatedProps), { showTooltip: showTooltip })));
            break;
        case ToolTip_Trigger.CLICK:
            triggeredToolTip = React.createElement(StyledTooltipWrapper, { "data-testid": "styledTooltip", className: 'onClick tooltip-wrapper', onClick: (event) => toggleTooltip(event, Event_Options.CLICK, Event_Options.CLICK) },
                React.createElement(InnerTooltip, Object.assign({}, Object.assign({}, updatedProps), { showTooltip: showTooltip })));
            break;
        case ToolTip_Trigger.HOVER:
            triggeredToolTip = React.createElement(StyledTooltipWrapper, { "data-testid": "styledTooltip", className: 'onHover tooltip-wrapper', onClick: (event) => toggleTooltip(event, Event_Options.HOVER, Event_Options.CLICK), onMouseEnter: (event) => toggleTooltip(event, Event_Options.HOVER, Event_Options.CLICK) },
                React.createElement(InnerTooltip, Object.assign({}, Object.assign({}, updatedProps), { showTooltip: showTooltip })));
            break;
        default:
            triggeredToolTip = React.createElement(StyledTooltipWrapper, null);
    }
    return React.createElement("div", null, triggeredToolTip);
};
