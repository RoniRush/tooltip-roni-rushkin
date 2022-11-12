import { ToolTip_Location } from "../constants";
export const getTooltipStyle = (updatedProps) => {
    var _a, _b, _c, _d;
    return {
        style: {
            color: updatedProps.style.color,
            backgroundColor: updatedProps.style.backgroundColor,
            border_radius: updatedProps.style.border_radius,
            font_size: updatedProps.style.font_size,
            font_family: updatedProps.style.font_family,
            margin: updatedProps.style.margin,
            padding: updatedProps.style.padding,
        },
        animation: {
            type: (_a = updatedProps.animation) === null || _a === void 0 ? void 0 : _a.type,
            durationInSec: ((_b = updatedProps.animation) === null || _b === void 0 ? void 0 : _b.durationInSec) && ((_c = updatedProps.animation) === null || _c === void 0 ? void 0 : _c.durationInSec) < updatedProps.duration / 1000 ? (_d = updatedProps.animation) === null || _d === void 0 ? void 0 : _d.durationInSec : updatedProps.duration / 1000
        },
        formatter: {
            maxHeight: updatedProps.formatter.maxHeight,
            maxWidth: updatedProps.formatter.maxWidth,
        },
    };
};
export const getTranslateY = (location) => {
    switch (location) {
        case ToolTip_Location.DOWN: return '100%';
        case ToolTip_Location.UP: return '-70%';
        default: return '-50%';
    }
};
