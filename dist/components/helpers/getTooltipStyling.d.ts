import { ToolTip_Styling, TooltipProps, TransitionProps } from "../types";
import { ToolTip_Location } from "../constants";
export declare const getTooltipStyle: (updatedProps: TooltipProps) => {
    style: ToolTip_Styling;
    animation: TransitionProps;
    formatter: {
        maxHeight?: string;
        maxWidth?: string;
    };
};
export declare const getTranslateY: (location: ToolTip_Location) => "100%" | "-30%" | "-50%";
