"use strict";
exports.id = 2200;
exports.ids = [2200];
exports.modules = {

/***/ 39614:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ addPostSchema)
/* harmony export */ });
/* harmony import */ var shared_lib_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31353);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_lib_helpers__WEBPACK_IMPORTED_MODULE_0__]);
shared_lib_helpers__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const creator = new shared_lib_helpers__WEBPACK_IMPORTED_MODULE_0__/* .FieldCreator */ .sm();
const addPostSchema = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    message: creator.field("Post message", 8, 40),
    image: yup__WEBPACK_IMPORTED_MODULE_1__.mixed().required("post message is required")
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12200:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64425);
/* harmony import */ var widgets_Posts_store_thunks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15250);
/* harmony import */ var widgets_Posts_lib_formSchemes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39614);
/* harmony import */ var shared_lib_hooks_useForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28058);
/* harmony import */ var entities_Profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78849);
/* harmony import */ var widgets_Posts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46595);
/* harmony import */ var widgets_Profile_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14604);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([widgets_Posts_store_thunks__WEBPACK_IMPORTED_MODULE_3__, widgets_Posts_lib_formSchemes__WEBPACK_IMPORTED_MODULE_4__, shared_lib_hooks_useForm__WEBPACK_IMPORTED_MODULE_5__, entities_Profile__WEBPACK_IMPORTED_MODULE_6__, widgets_Posts__WEBPACK_IMPORTED_MODULE_7__]);
([widgets_Posts_store_thunks__WEBPACK_IMPORTED_MODULE_3__, widgets_Posts_lib_formSchemes__WEBPACK_IMPORTED_MODULE_4__, shared_lib_hooks_useForm__WEBPACK_IMPORTED_MODULE_5__, entities_Profile__WEBPACK_IMPORTED_MODULE_6__, widgets_Posts__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const AddPost = ({ close , setPage  })=>{
    const { reg , submit  } = (0,shared_lib_hooks_useForm__WEBPACK_IMPORTED_MODULE_5__/* .useForm */ .c)(widgets_Posts_lib_formSchemes__WEBPACK_IMPORTED_MODULE_4__/* .addPostSchema */ .y);
    const dispatch = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_2__/* .useDispatch */ .I0)();
    const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((values)=>{
        dispatch(widgets_Posts__WEBPACK_IMPORTED_MODULE_7__/* .postActions.setPage */ .rZ.setPage(0));
        dispatch((0,widgets_Posts_store_thunks__WEBPACK_IMPORTED_MODULE_3__/* .addPost */ .q)(values));
        close();
        setPage(widgets_Profile_types__WEBPACK_IMPORTED_MODULE_8__/* .WallPages.posts */ .O.posts);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(entities_Profile__WEBPACK_IMPORTED_MODULE_6__/* .AddPostTemplate */ .bv, {
        reg: reg,
        submit: submit(onSubmit),
        close: close
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddPost);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;