import { defaultPropsValues, MAX_DELAY, MAX_DURATION, MIN_DELAY, MIN_DURATION } from "../constants";
export const getUpdatedProps = (props) => {
    const getUpdatedAnimation = () => {
        var _a, _b;
        return {
            type: ((_a = props.animation) === null || _a === void 0 ? void 0 : _a.type) || defaultPropsValues.animation.type,
            durationInSec: ((_b = props.animation) === null || _b === void 0 ? void 0 : _b.durationInSec) || defaultPropsValues.animation.durationInSec,
        };
    };
    const getUpdatedStyle = () => {
        var _a, _b, _c, _d, _e, _f, _g;
        return {
            backgroundColor: ((_a = props.style) === null || _a === void 0 ? void 0 : _a.backgroundColor) || defaultPropsValues.style.backgroundColor,
            color: ((_b = props.style) === null || _b === void 0 ? void 0 : _b.color) || defaultPropsValues.style.color,
            border_radius: ((_c = props.style) === null || _c === void 0 ? void 0 : _c.border_radius) || defaultPropsValues.style.border_radius,
            margin: ((_d = props.style) === null || _d === void 0 ? void 0 : _d.margin) || defaultPropsValues.style.margin,
            padding: ((_e = props.style) === null || _e === void 0 ? void 0 : _e.padding) || defaultPropsValues.style.padding,
            font_size: ((_f = props.style) === null || _f === void 0 ? void 0 : _f.font_size) || defaultPropsValues.style.font_size,
            font_family: ((_g = props.style) === null || _g === void 0 ? void 0 : _g.font_family) || defaultPropsValues.style.font_family,
        };
    };
    const getUpdatedFormatter = () => {
        var _a, _b;
        return {
            maxHeight: ((_a = props.formatter) === null || _a === void 0 ? void 0 : _a.maxHeight) || defaultPropsValues.formatter.maxHeight,
            maxWidth: ((_b = props.formatter) === null || _b === void 0 ? void 0 : _b.maxWidth) || defaultPropsValues.formatter.maxWidth,
        };
    };
    const newProps = {
        trigger: props.trigger || defaultPropsValues.trigger,
        duration: props.duration && props.duration <= MAX_DURATION && props.duration > MIN_DURATION ? props.duration : defaultPropsValues.duration,
        delay: props.delay && props.delay < MAX_DELAY && props.delay >= MIN_DELAY ? props.delay : defaultPropsValues.delay,
        content: props.content || defaultPropsValues.content,
        location: props.location || defaultPropsValues.location,
        animation: getUpdatedAnimation(),
        style: getUpdatedStyle(),
        formatter: getUpdatedFormatter(),
        hideOnClick: props.hideOnClick || defaultPropsValues.hideOnClick,
        onlyEllipsis: props.onlyEllipsis || defaultPropsValues.onlyEllipsis,
    };
    if (props.children)
        return Object.assign(Object.assign({}, newProps), { children: props.children });
    return newProps;
};
