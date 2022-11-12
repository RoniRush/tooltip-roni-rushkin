export const checkEllipsisOverflow = (props) => {
    var _a;
    return (props.onlyEllipsis && ((_a = props.children) === null || _a === void 0 ? void 0 : _a.props.style['textOverflow']) === 'ellipsis') || !props.onlyEllipsis;
};
