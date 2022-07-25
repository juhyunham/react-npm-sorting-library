"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function SortableListItem(_ref) {
  var index = _ref.index,
      draggable = _ref.draggable,
      children = _ref.children,
      onDragStart = _ref.onDragStart,
      onDragEnd = _ref.onDragEnd,
      onClickItem = _ref.onClickItem;
  var refItem = (0, _react.useRef)(null);

  var handleDragStart = function handleDragStart() {
    refItem.current.classList.add("dragstart");
    onDragStart && onDragStart(index);
  };

  var handleDragEnd = function handleDragEnd() {
    refItem.current.classList.remove("dragstart");
  };

  var handleDragEnter = function handleDragEnter() {
    refItem.current.classList.add("dragover");
  };

  var handleDragLeave = function handleDragLeave() {
    refItem.current.classList.remove("dragover");
  };

  var handleDragOver = function handleDragOver(event) {
    event.preventDefault();
  };

  var handleDrop = function handleDrop() {
    refItem.current.classList.remove("dragover");
    onDragEnd(index);
  };

  var handleClick = function handleClick() {
    onClickItem && onClickItem(index);
  };

  return /*#__PURE__*/_react.default.createElement("li", {
    ref: refItem,
    className: "sortable-item",
    draggable: draggable ? draggable : false,
    onDragStart: handleDragStart,
    onDragEnd: handleDragEnd,
    onDragEnter: handleDragEnter,
    onDragLeave: handleDragLeave,
    onDragOver: handleDragOver,
    onDrop: handleDrop,
    onClick: handleClick
  }, children);
}

var _default = SortableListItem;
exports.default = _default;