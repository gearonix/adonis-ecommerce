"use strict";
exports.id = 8230;
exports.ids = [8230];
exports.modules = {

/***/ 38230:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Posts": () => (/* binding */ Posts),
/* harmony export */   "PostsWithReducer": () => (/* binding */ PostsWithReducer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64425);
/* harmony import */ var widgets_Posts_store_thunks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15250);
/* harmony import */ var entities_Profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78849);
/* harmony import */ var widgets_Posts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46595);
/* harmony import */ var shared_ui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11042);
/* harmony import */ var app_config_globals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90504);
/* harmony import */ var shared_lib_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(62920);
/* harmony import */ var shared_ui_kit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74918);
/* harmony import */ var shared_ui_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(36857);
/* harmony import */ var widgets_Profile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(46899);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([widgets_Posts_store_thunks__WEBPACK_IMPORTED_MODULE_3__, entities_Profile__WEBPACK_IMPORTED_MODULE_4__, widgets_Posts__WEBPACK_IMPORTED_MODULE_5__, shared_ui_material__WEBPACK_IMPORTED_MODULE_6__, shared_lib_components__WEBPACK_IMPORTED_MODULE_8__, shared_ui_kit__WEBPACK_IMPORTED_MODULE_9__, widgets_Profile__WEBPACK_IMPORTED_MODULE_11__]);
([widgets_Posts_store_thunks__WEBPACK_IMPORTED_MODULE_3__, entities_Profile__WEBPACK_IMPORTED_MODULE_4__, widgets_Posts__WEBPACK_IMPORTED_MODULE_5__, shared_ui_material__WEBPACK_IMPORTED_MODULE_6__, shared_lib_components__WEBPACK_IMPORTED_MODULE_8__, shared_ui_kit__WEBPACK_IMPORTED_MODULE_9__, widgets_Profile__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Posts = ()=>{
    const posts = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_2__/* .useSelector */ .v9)(widgets_Posts__WEBPACK_IMPORTED_MODULE_5__/* .PostSelectors.posts */ .Um.posts);
    const isLoading = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_2__/* .useSelector */ .v9)(widgets_Posts__WEBPACK_IMPORTED_MODULE_5__/* .PostSelectors.isLoading */ .Um.isLoading);
    const dispatch = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_2__/* .useDispatch */ .I0)();
    const page = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_2__/* .useSelector */ .v9)(widgets_Posts__WEBPACK_IMPORTED_MODULE_5__/* .PostSelectors.page */ .Um.page);
    const totalCount = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_2__/* .useSelector */ .v9)(widgets_Posts__WEBPACK_IMPORTED_MODULE_5__/* .PostSelectors.count */ .Um.count);
    const userId = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_2__/* .useSelector */ .v9)(widgets_Profile__WEBPACK_IMPORTED_MODULE_11__/* .UserSelectors.userId */ .G0.userId);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        dispatch((0,widgets_Posts_store_thunks__WEBPACK_IMPORTED_MODULE_3__/* .getUserPosts */ .w)(page));
    }, [
        page,
        userId
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return ()=>{
            dispatch(widgets_Posts__WEBPACK_IMPORTED_MODULE_5__/* .postActions.clearPosts */ .rZ.clearPosts());
        };
    }, []);
    const onPageChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((page)=>{
        dispatch(widgets_Posts__WEBPACK_IMPORTED_MODULE_5__/* .postActions.setPage */ .rZ.setPage(page));
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_kit__WEBPACK_IMPORTED_MODULE_9__/* .WithLoading */ .uQ, {
            when: !posts.length,
            title: "Posts_n",
            Icon: shared_ui_icons__WEBPACK_IMPORTED_MODULE_10__/* .AiOutlineFileSearch */ .Eh,
            loading: isLoading,
            children: [
                posts.map((post)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(entities_Profile__WEBPACK_IMPORTED_MODULE_4__/* .Post */ .SO, {
                        post: post
                    }, post.postId);
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_6__/* .Pagination */ .tl, {
                    count: totalCount / app_config_globals__WEBPACK_IMPORTED_MODULE_7__/* .PAGE_LIMIT */ .pg,
                    onChange: onPageChange,
                    page: page
                })
            ]
        })
    });
};
const PostsWithReducer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_lib_components__WEBPACK_IMPORTED_MODULE_8__/* .DynamicModuleLoader */ .Wp, {
        name: "posts",
        reducer: widgets_Posts__WEBPACK_IMPORTED_MODULE_5__/* .postSlice */ .h2,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Posts, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostsWithReducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;