export const MAX_DELAY = 10000;
export const MAX_DURATION = 7000;
export const MIN_DELAY = 1;
export const MIN_DURATION = 2000;
export var ToolTip_Location;
(function (ToolTip_Location) {
    ToolTip_Location["UP"] = "up";
    ToolTip_Location["DOWN"] = "down";
    ToolTip_Location["RIGHT"] = "right";
    ToolTip_Location["LEFT"] = "left";
})(ToolTip_Location || (ToolTip_Location = {}));
export var ToolTip_Trigger;
(function (ToolTip_Trigger) {
    ToolTip_Trigger[ToolTip_Trigger["HOVER"] = 0] = "HOVER";
    ToolTip_Trigger[ToolTip_Trigger["CLICK"] = 1] = "CLICK";
    ToolTip_Trigger[ToolTip_Trigger["FOCUS"] = 2] = "FOCUS";
})(ToolTip_Trigger || (ToolTip_Trigger = {}));
export var ToolTip_Display;
(function (ToolTip_Display) {
    ToolTip_Display[ToolTip_Display["SHOW"] = 0] = "SHOW";
    ToolTip_Display[ToolTip_Display["HIDE"] = 1] = "HIDE";
    ToolTip_Display[ToolTip_Display["WAIT"] = 2] = "WAIT";
})(ToolTip_Display || (ToolTip_Display = {}));
export var Transition_Options;
(function (Transition_Options) {
    Transition_Options["FADE"] = "fade";
    Transition_Options["ZOOM"] = "zoom";
    Transition_Options["GRADIENT"] = "gradient";
    Transition_Options["WIGGLE"] = "wiggle";
})(Transition_Options || (Transition_Options = {}));
export var Event_Options;
(function (Event_Options) {
    Event_Options["CLICK"] = "click";
    Event_Options["FOCUS"] = "focus";
    Event_Options["HOVER"] = "mouseenter";
    Event_Options["MOUSE_DOWN"] = "mousedown";
})(Event_Options || (Event_Options = {}));
export const defaultPropsValues = {
    content: 'tip',
    location: ToolTip_Location.LEFT,
    trigger: ToolTip_Trigger.HOVER,
    duration: 20000,
    delay: 200,
    animation: {
        type: Transition_Options.FADE,
        durationInSec: 3,
    },
    style: {
        backgroundColor: 'black',
        color: 'white',
        border_radius: '3px',
        margin: '2px',
        padding: '4px',
        font_size: '15px',
        font_family: 'sans-serif',
    },
    formatter: {
        maxHeight: '200px',
        maxWidth: '200px',
    },
    hideOnClick: false,
    onlyEllipsis: false,
};
