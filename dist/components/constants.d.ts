import { TooltipProps } from "./types";
export declare const MAX_DELAY = 10000;
export declare const MAX_DURATION = 7000;
export declare const MIN_DELAY = 1;
export declare const MIN_DURATION = 2000;
export declare enum ToolTip_Location {
    UP = "up",
    DOWN = "down",
    RIGHT = "right",
    LEFT = "left"
}
export declare enum ToolTip_Trigger {
    HOVER = 0,
    CLICK = 1,
    FOCUS = 2
}
export declare enum ToolTip_Display {
    SHOW = 0,
    HIDE = 1,
    WAIT = 2
}
export declare enum Transition_Options {
    FADE = "fade",
    ZOOM = "zoom",
    GRADIENT = "gradient",
    WIGGLE = "wiggle"
}
export declare enum Event_Options {
    CLICK = "click",
    FOCUS = "focus",
    HOVER = "mouseenter",
    MOUSE_DOWN = "mousedown"
}
export declare const defaultPropsValues: TooltipProps;
