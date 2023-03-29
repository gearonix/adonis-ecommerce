"use strict";
exports.id = 8521;
exports.ids = [8521];
exports.modules = {

/***/ 19024:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ postsApi)
/* harmony export */ });
/* harmony import */ var shared_config_consts_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26481);
/* harmony import */ var shared_config_consts_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86676);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_config_consts_axios__WEBPACK_IMPORTED_MODULE_0__]);
shared_config_consts_axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const endpoint = shared_config_consts_endpoints__WEBPACK_IMPORTED_MODULE_1__/* ["default"].POSTS */ .Z.POSTS;
const postsApi = {
    getPosts (userId, page) {
        return shared_config_consts_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`${endpoint.getPosts}/${userId}?page=${page}`);
    },
    add (message) {
        return shared_config_consts_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(endpoint.addPost, {
            message
        });
    },
    setImage (image, postId) {
        return shared_config_consts_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`${endpoint.setPostImage}?post_id=${postId}`, image);
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56389:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F5": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_2__.F),
/* harmony export */   "Tc": () => (/* binding */ AddPost),
/* harmony export */   "Um": () => (/* reexport safe */ _store_selectors_post_selectors__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "h2": () => (/* reexport safe */ _store_slice_postsReducer__WEBPACK_IMPORTED_MODULE_1__.h),
/* harmony export */   "nH": () => (/* binding */ MyPosts),
/* harmony export */   "rZ": () => (/* reexport safe */ _store_slice_postsReducer__WEBPACK_IMPORTED_MODULE_1__.r)
/* harmony export */ });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21229);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_slice_postsReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98521);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19024);
/* harmony import */ var _store_selectors_post_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30064);
/* harmony import */ var _store_slice_initialState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3971);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_slice_postsReducer__WEBPACK_IMPORTED_MODULE_1__, _api__WEBPACK_IMPORTED_MODULE_2__]);
([_store_slice_postsReducer__WEBPACK_IMPORTED_MODULE_1__, _api__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

const MyPosts = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(()=>__webpack_require__.e(/* import() */ 6594).then(__webpack_require__.bind(__webpack_require__, 86594)), {
    loadableGenerated: {
        modules: [
            "../widgets/Posts/index.ts -> " + "./ui/UserPosts/Posts"
        ]
    }
});
const AddPost = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(()=>__webpack_require__.e(/* import() */ 6935).then(__webpack_require__.bind(__webpack_require__, 16935)), {
    loadableGenerated: {
        modules: [
            "../widgets/Posts/index.ts -> " + "./ui/AddPost/AddPost"
        ]
    }
});





__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 30064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const PostSelectors = {
    posts: ({ posts  })=>posts.data,
    count: ({ posts  })=>posts.count,
    page: ({ posts  })=>posts.page,
    isLoading: ({ posts  })=>posts.isLoading
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostSelectors);


/***/ }),

/***/ 3971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ postsInitialState)
/* harmony export */ });
const postsInitialState = {
    data: [],
    page: 0,
    count: 0,
    isLoading: false
};


/***/ }),

/***/ 98521:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ postSlice),
/* harmony export */   "r": () => (/* binding */ postActions)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var widgets_Posts_store_slice_initialState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3971);
/* harmony import */ var widgets_Posts_store_thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85588);
/* harmony import */ var shared_lib_helpers_others_reduxHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7129);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([widgets_Posts_store_thunks__WEBPACK_IMPORTED_MODULE_2__]);
widgets_Posts_store_thunks__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const postReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "posts",
    initialState: widgets_Posts_store_slice_initialState__WEBPACK_IMPORTED_MODULE_1__/* .postsInitialState */ .n,
    reducers: {
        setPosts (state, { payload  }) {
            state.data = payload.data;
            state.count = payload.count;
        },
        clearPosts () {
            return widgets_Posts_store_slice_initialState__WEBPACK_IMPORTED_MODULE_1__/* .postsInitialState */ .n;
        },
        addPost (state, { payload  }) {
            state.data.unshift(payload);
            state.count += 1;
        },
        setPage (state, { payload  }) {
            state.page = payload;
        }
    },
    extraReducers: (builder)=>{
        (0,shared_lib_helpers_others_reduxHelpers__WEBPACK_IMPORTED_MODULE_3__/* .withLoading */ .V)(builder, widgets_Posts_store_thunks__WEBPACK_IMPORTED_MODULE_2__/* .getUserPosts */ .w);
    }
});
const postActions = postReducer.actions;
const postSlice = postReducer.reducer;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 91522:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ addPost)
/* harmony export */ });
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98429);
/* harmony import */ var widgets_Posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56389);
/* harmony import */ var app_config_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(579);
/* harmony import */ var shared_lib_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95575);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([widgets_Posts__WEBPACK_IMPORTED_MODULE_1__, shared_lib_helpers__WEBPACK_IMPORTED_MODULE_3__]);
([widgets_Posts__WEBPACK_IMPORTED_MODULE_1__, shared_lib_helpers__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const addPost = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_0__/* .createThunk */ .L3)("posts/ADD_POST", async (values, { dispatch , extra  })=>{
    const newPost = await extra.api.posts.add(values.message);
    if ((0,shared_lib_helpers__WEBPACK_IMPORTED_MODULE_3__/* .isError */ .VZ)(newPost)) return;
    const createFormData = (0,shared_lib_helpers__WEBPACK_IMPORTED_MODULE_3__/* .withFormData */ .IZ)(app_config_globals__WEBPACK_IMPORTED_MODULE_2__/* .UploadProperties.POST_IMAGES */ .W8.POST_IMAGES);
    const formData = createFormData(values.image);
    const response = await extra.api.posts.setImage(formData, newPost.data.postId);
    if ((0,shared_lib_helpers__WEBPACK_IMPORTED_MODULE_3__/* .isError */ .VZ)(response)) return;
    const image = response.data.fileUrl;
    dispatch(widgets_Posts__WEBPACK_IMPORTED_MODULE_1__/* .postActions.addPost */ .rZ.addPost({
        ...newPost.data,
        image
    }));
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19490:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ getUserPosts)
/* harmony export */ });
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98429);
/* harmony import */ var widgets_Posts_store_slice_postsReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98521);
/* harmony import */ var shared_lib_helpers_others_httpHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17333);
/* harmony import */ var widgets_Profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37782);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([widgets_Posts_store_slice_postsReducer__WEBPACK_IMPORTED_MODULE_1__, shared_lib_helpers_others_httpHelpers__WEBPACK_IMPORTED_MODULE_2__, widgets_Profile__WEBPACK_IMPORTED_MODULE_3__]);
([widgets_Posts_store_slice_postsReducer__WEBPACK_IMPORTED_MODULE_1__, shared_lib_helpers_others_httpHelpers__WEBPACK_IMPORTED_MODULE_2__, widgets_Profile__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const getUserPosts = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_0__/* .createThunk */ .L3)("posts/GET_USER_POSTS", async (page, { dispatch , getState , extra  })=>{
    const userId = widgets_Profile__WEBPACK_IMPORTED_MODULE_3__/* .UserSelectors.userId */ .G0.userId(getState());
    if (!userId) return;
    const response = await extra.api.posts.getPosts(userId, page);
    if ((0,shared_lib_helpers_others_httpHelpers__WEBPACK_IMPORTED_MODULE_2__/* .isError */ .V)(response)) return;
    dispatch(widgets_Posts_store_slice_postsReducer__WEBPACK_IMPORTED_MODULE_1__/* .postActions.setPosts */ .r.setPosts(response.data));
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 85588:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* reexport safe */ _addPost_addPost__WEBPACK_IMPORTED_MODULE_1__.q),
/* harmony export */   "w": () => (/* reexport safe */ _getUserPosts_getUserPosts__WEBPACK_IMPORTED_MODULE_0__.w)
/* harmony export */ });
/* harmony import */ var _getUserPosts_getUserPosts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19490);
/* harmony import */ var _addPost_addPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91522);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getUserPosts_getUserPosts__WEBPACK_IMPORTED_MODULE_0__, _addPost_addPost__WEBPACK_IMPORTED_MODULE_1__]);
([_getUserPosts_getUserPosts__WEBPACK_IMPORTED_MODULE_0__, _addPost_addPost__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;