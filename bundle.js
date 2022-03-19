/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/js/constants/constants.js":
/*!***************************************!*\
  !*** ./src/js/constants/constants.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALERT": () => (/* binding */ ALERT),
/* harmony export */   "API": () => (/* binding */ API),
/* harmony export */   "ERROR": () => (/* binding */ ERROR),
/* harmony export */   "LIMIT_VIDEO_COUNTS": () => (/* binding */ LIMIT_VIDEO_COUNTS),
/* harmony export */   "THROTTLE_DELAY": () => (/* binding */ THROTTLE_DELAY)
/* harmony export */ });
var ERROR = {
  MESSAGE: {
    EMPTY_INPUT: '빈값을 입력할 수 없습니다. 다시 입력해 주세요.'
  }
};
var ALERT = {
  MESSAGE: {
    DELETE_CONFRIM: '정말로 삭제하시겠습니까?'
  }
};
var API = {
  BASE_URL: 'https://liswktjs.netlify.app',
  RELATIVE_URL: 'youtube/v3/search',
  MAX_RESULT: 10,
  SEARCH_TYPE: 'video'
};
var THROTTLE_DELAY = 1000;
var LIMIT_VIDEO_COUNTS = 100;

/***/ }),

/***/ "./src/js/domain/YoutubeMachine.js":
/*!*****************************************!*\
  !*** ./src/js/domain/YoutubeMachine.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ YoutubeMachine)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/constants.js */ "./src/js/constants/constants.js");
/* harmony import */ var _util_general_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/general.js */ "./src/js/util/general.js");







function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }




var _searchResult = /*#__PURE__*/new WeakMap();

var _searchTarget = /*#__PURE__*/new WeakMap();

var YoutubeMachine = /*#__PURE__*/function () {
  function YoutubeMachine() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, YoutubeMachine);

    _classPrivateFieldInitSpec(this, _searchResult, {
      writable: true,
      value: {}
    });

    _classPrivateFieldInitSpec(this, _searchTarget, {
      writable: true,
      value: ''
    });
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(YoutubeMachine, [{
    key: "searchResult",
    get: function get() {
      return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _searchResult);
    },
    set: function set(searchResult) {
      (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _searchResult, searchResult);
    }
  }, {
    key: "searchTarget",
    set: function set(searchInput) {
      (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _searchTarget, searchInput);
    }
  }, {
    key: "search",
    value: function search(searchInput) {
      (0,_util_general_js__WEBPACK_IMPORTED_MODULE_7__.validateInput)(searchInput);

      (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _searchTarget, searchInput);
    }
  }, {
    key: "getURL",
    value: function getURL(nextPageToken) {
      var url = new URL(_constants_constants_js__WEBPACK_IMPORTED_MODULE_6__.API.RELATIVE_URL, _constants_constants_js__WEBPACK_IMPORTED_MODULE_6__.API.BASE_URL);
      var parameter = new URLSearchParams({
        part: 'snippet',
        maxResults: _constants_constants_js__WEBPACK_IMPORTED_MODULE_6__.API.MAX_RESULT,
        q: (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _searchTarget),
        pageToken: nextPageToken || '',
        type: _constants_constants_js__WEBPACK_IMPORTED_MODULE_6__.API.SEARCH_TYPE
      });
      url.search = parameter.toString();
      return url;
    }
  }, {
    key: "callSearchAPI",
    value: function () {
      var _callSearchAPI = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee() {
        var URL, response, searchResult;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                URL = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _searchResult) ? this.getURL((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _searchResult).nextPageToken) : this.getURL();
                _context.next = 3;
                return fetch(URL);

              case 3:
                response = _context.sent;

                if (!response.ok) {
                  _context.next = 9;
                  break;
                }

                _context.next = 7;
                return response.json();

              case 7:
                searchResult = _context.sent;
                return _context.abrupt("return", searchResult);

              case 9:
                throw new Error('search error');

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function callSearchAPI() {
        return _callSearchAPI.apply(this, arguments);
      }

      return callSearchAPI;
    }()
  }, {
    key: "updateSearchResult",
    value: function updateSearchResult(response) {
      (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _searchResult, response);
    }
  }, {
    key: "resetSearchResult",
    value: function resetSearchResult() {
      (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _searchResult, {});

      (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _searchTarget, '');
    }
  }]);

  return YoutubeMachine;
}();



/***/ }),

/***/ "./src/js/modules/handleSearchEvent.js":
/*!*********************************************!*\
  !*** ./src/js/modules/handleSearchEvent.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchEventHandler": () => (/* binding */ SearchEventHandler)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _storage_storage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storage/storage.js */ "./src/js/storage/storage.js");
/* harmony import */ var _domain_YoutubeMachine_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../domain/YoutubeMachine.js */ "./src/js/domain/YoutubeMachine.js");
/* harmony import */ var _ui_serachModalInterface_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/serachModalInterface.js */ "./src/js/ui/serachModalInterface.js");
/* harmony import */ var _util_general_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/general.js */ "./src/js/util/general.js");









var SearchEventHandler = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(function SearchEventHandler() {
  var _this = this;

  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, SearchEventHandler);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "youtubeMachine", new _domain_YoutubeMachine_js__WEBPACK_IMPORTED_MODULE_6__["default"]());

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "handleSearch", /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
    var searchInput, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            _this.youtubeMachine.resetSearchResult();

            _ui_serachModalInterface_js__WEBPACK_IMPORTED_MODULE_7__["default"].resetVideoList();
            searchInput = (0,_util_general_js__WEBPACK_IMPORTED_MODULE_8__.$)('#search-input-keyword').value.trim();

            _this.youtubeMachine.search(searchInput);

            _ui_serachModalInterface_js__WEBPACK_IMPORTED_MODULE_7__["default"].renderSkeletonUI();
            _context.next = 8;
            return _this.youtubeMachine.callSearchAPI();

          case 8:
            response = _context.sent;

            _this.youtubeMachine.updateSearchResult(response);

            _ui_serachModalInterface_js__WEBPACK_IMPORTED_MODULE_7__["default"].renderSearchResult(_this.youtubeMachine.searchResult);
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            alert(_context.t0.message);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  })));

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "handleScroll", /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2(e) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight)) {
                _context2.next = 7;
                break;
              }

              _ui_serachModalInterface_js__WEBPACK_IMPORTED_MODULE_7__["default"].renderSkeletonUI();
              _context2.next = 4;
              return _this.youtubeMachine.callSearchAPI();

            case 4:
              response = _context2.sent;

              _this.youtubeMachine.updateSearchResult(response);

              _ui_serachModalInterface_js__WEBPACK_IMPORTED_MODULE_7__["default"].renderNextSearchResult(_this.youtubeMachine.searchResult);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "handleSaveButtonClick", function (e) {
    if (!e.target.classList.contains('video-item__save-button')) {
      return;
    }

    e.target.closest('button').hidden = true;

    _this.youtubeMachine.searchResult.items.forEach(function (item) {
      if (item.id.videoId === e.target.parentElement.dataset.videoId) {
        _storage_storage_js__WEBPACK_IMPORTED_MODULE_5__["default"].saveVideo(item);
      }
    });
  });
});

/***/ }),

/***/ "./src/js/modules/handleWatchLaterVideoEvent.js":
/*!******************************************************!*\
  !*** ./src/js/modules/handleWatchLaterVideoEvent.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WatchLaterVideoEventHandler": () => (/* binding */ WatchLaterVideoEventHandler)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _storage_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage/storage.js */ "./src/js/storage/storage.js");
/* harmony import */ var _ui_watchLaterInterface_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/watchLaterInterface.js */ "./src/js/ui/watchLaterInterface.js");
/* harmony import */ var _util_general_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/general.js */ "./src/js/util/general.js");
/* harmony import */ var _util_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/render.js */ "./src/js/util/render.js");







var WatchLaterVideoEventHandler = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function WatchLaterVideoEventHandler() {
  var _this = this;

  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, WatchLaterVideoEventHandler);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "handleWatchLater", function () {
    _this.toggleWatchLaterContent();

    _ui_watchLaterInterface_js__WEBPACK_IMPORTED_MODULE_4__["default"].renderWatchLaterVideos();
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "toggleWatchLaterContent", function () {
    if ((0,_util_general_js__WEBPACK_IMPORTED_MODULE_5__.$)('.watch-later-videos').classList.contains('hidden')) {
      (0,_util_general_js__WEBPACK_IMPORTED_MODULE_5__.$)('.watch-later-videos').classList.toggle('hidden');
      (0,_util_general_js__WEBPACK_IMPORTED_MODULE_5__.$)('.watch-later-nav-button').classList.toggle('is-active');
    }

    if (!(0,_util_general_js__WEBPACK_IMPORTED_MODULE_5__.$)('.watched-videos').classList.contains('hidden')) {
      (0,_util_general_js__WEBPACK_IMPORTED_MODULE_5__.$)('.watched-videos').classList.toggle('hidden');
      (0,_util_general_js__WEBPACK_IMPORTED_MODULE_5__.$)('.watched-nav-button').classList.toggle('is-active');
    }
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "handleWatchedButtonClick", function (e) {
    if (!e.target.classList.contains('video-item__watched-button')) {
      return;
    }

    _storage_storage_js__WEBPACK_IMPORTED_MODULE_3__["default"].toggleWatchedVideo(e.target.parentElement.parentElement.dataset.videoId);
    (0,_util_render_js__WEBPACK_IMPORTED_MODULE_6__.removeCheckedVideoItem)('.watch-later-video-item', e.target.parentElement.parentElement.dataset.videoId);
    _ui_watchLaterInterface_js__WEBPACK_IMPORTED_MODULE_4__["default"].renderEmptyImg();
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "handleDeleteButtonClick", function (e) {
    if (!e.target.classList.contains('video-item__delete-button')) {
      return;
    }

    if ((0,_util_general_js__WEBPACK_IMPORTED_MODULE_5__.confrimVideoDelete)()) {
      _storage_storage_js__WEBPACK_IMPORTED_MODULE_3__["default"].deleteSavedVideo(e.target.parentElement.parentElement.dataset.videoId);
      (0,_util_render_js__WEBPACK_IMPORTED_MODULE_6__.removeDeleteVideoItem)('.watch-later-video-item', e.target.parentElement.parentElement.dataset.videoId);
      _ui_watchLaterInterface_js__WEBPACK_IMPORTED_MODULE_4__["default"].renderEmptyImg();
    }
  });
});

/***/ }),

/***/ "./src/js/modules/handleWatchedVideoEvent.js":
/*!***************************************************!*\
  !*** ./src/js/modules/handleWatchedVideoEvent.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WatchedVideoEventHandler": () => (/* binding */ WatchedVideoEventHandler)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _storage_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage/storage.js */ "./src/js/storage/storage.js");
/* harmony import */ var _ui_watchedVideoInterface_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/watchedVideoInterface.js */ "./src/js/ui/watchedVideoInterface.js");
/* harmony import */ var _util_general_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/general.js */ "./src/js/util/general.js");
/* harmony import */ var _util_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/render.js */ "./src/js/util/render.js");







var WatchedVideoEventHandler = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function WatchedVideoEventHandler() {
  var _this = this;

  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, WatchedVideoEventHandler);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "handleWatchedVideo", function () {
    _this.toggleWatchedVideoContent();

    _ui_watchedVideoInterface_js__WEBPACK_IMPORTED_MODULE_4__["default"].renderWatchedVideos();
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "toggleWatchedVideoContent", function () {
    if (!(0,_util_general_js__WEBPACK_IMPORTED_MODULE_5__.$)('.watch-later-videos').classList.contains('hidden')) {
      (0,_util_general_js__WEBPACK_IMPORTED_MODULE_5__.$)('.watch-later-videos').classList.toggle('hidden');
      (0,_util_general_js__WEBPACK_IMPORTED_MODULE_5__.$)('.watch-later-nav-button').classList.toggle('is-active');
    }

    if ((0,_util_general_js__WEBPACK_IMPORTED_MODULE_5__.$)('.watched-videos').classList.contains('hidden')) {
      (0,_util_general_js__WEBPACK_IMPORTED_MODULE_5__.$)('.watched-videos').classList.toggle('hidden');
      (0,_util_general_js__WEBPACK_IMPORTED_MODULE_5__.$)('.watched-nav-button').classList.toggle('is-active');
    }
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "handledWatchedButtonClick", function (e) {
    if (!e.target.classList.contains('video-item__watched-button')) {
      return;
    }

    _storage_storage_js__WEBPACK_IMPORTED_MODULE_3__["default"].toggleWatchedVideo(e.target.parentElement.parentElement.dataset.videoId);
    (0,_util_render_js__WEBPACK_IMPORTED_MODULE_6__.removeCheckedVideoItem)('.watched-video-item', e.target.parentElement.parentElement.dataset.videoId);
    _ui_watchedVideoInterface_js__WEBPACK_IMPORTED_MODULE_4__["default"].renderEmptyImg();
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "handleDeleteButtonClick", function (e) {
    if (!e.target.classList.contains('video-item__delete-button')) {
      return;
    }

    if ((0,_util_general_js__WEBPACK_IMPORTED_MODULE_5__.confrimVideoDelete)()) {
      _storage_storage_js__WEBPACK_IMPORTED_MODULE_3__["default"].deleteSavedVideo(e.target.parentElement.parentElement.dataset.videoId);
      (0,_util_render_js__WEBPACK_IMPORTED_MODULE_6__.removeDeleteVideoItem)('.watched-video-item', e.target.parentElement.parentElement.dataset.videoId);
      _ui_watchedVideoInterface_js__WEBPACK_IMPORTED_MODULE_4__["default"].renderEmptyImg();
    }
  });
});

/***/ }),

/***/ "./src/js/storage/storage.js":
/*!***********************************!*\
  !*** ./src/js/storage/storage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constants.js */ "./src/js/constants/constants.js");


var storage = {
  setLocalStorage: function setLocalStorage(video) {
    localStorage.setItem('savedVideoStorage', JSON.stringify(video));
  },
  getLocalStorage: function getLocalStorage() {
    return JSON.parse(localStorage.getItem('savedVideoStorage'));
  },
  updateLocalStorage: function updateLocalStorage(data) {
    var savedStorage = this.getLocalStorage();

    if (savedStorage.length > _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.LIMIT_VIDEO_COUNTS - 1) {
      return;
    }

    if (savedStorage.some(function (video) {
      return video.id === data.id;
    })) {
      return;
    }

    this.setLocalStorage([].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(savedStorage), [data]));
  },
  saveVideo: function saveVideo(item) {
    var video = {
      id: item.id.videoId,
      snippet: item.snippet,
      watched: false
    };
    var savedStorage = this.getLocalStorage();

    if (savedStorage) {
      this.updateLocalStorage(video);
      return;
    }

    this.setLocalStorage([video]);
  },
  toggleWatchedVideo: function toggleWatchedVideo(videoId) {
    var savedVideoStorage = this.getLocalStorage();
    var updatedVideoStorage = savedVideoStorage.map(function (item) {
      var video = {
        id: item.id,
        snippet: item.snippet,
        watched: item.watched
      };

      if (item.id === videoId) {
        video.watched = !item.watched;
      }

      return video;
    });
    this.setLocalStorage(updatedVideoStorage);
  },
  deleteSavedVideo: function deleteSavedVideo(videoId) {
    var savedVideoStorage = this.getLocalStorage();
    var updatedVideoStorage = savedVideoStorage.filter(function (item) {
      if (videoId !== item.id) {
        var video = {
          id: item.id,
          snippet: item.snippet,
          watched: item.watched
        };
        return video;
      }
    });
    this.setLocalStorage(updatedVideoStorage);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);

/***/ }),

/***/ "./src/js/ui/serachModalInterface.js":
/*!*******************************************!*\
  !*** ./src/js/ui/serachModalInterface.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_general_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/general.js */ "./src/js/util/general.js");
/* harmony import */ var _storage_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage/storage.js */ "./src/js/storage/storage.js");


var searchVideoTemplate = {
  skeletonUI: "<li class=\"skeleton\">\n  <div class=\"image\"></div>\n  <p class=\"line\"></p>\n  <p class=\"line\"></p>\n</li>",
  videoItem: function videoItem(item) {
    return "\n      <li class=\"video-item\" data-video-id='".concat(item.id.videoId, "'>\n        <img\n          src='").concat(item.snippet.thumbnails.high.url, "'\n          alt=\"video-item-thumbnail\"\n          class=\"video-item__thumbnail\"\n        />\n        <h4 class=\"video-item__title\">").concat(item.snippet.title, "</h4>\n        <p class=\"video-item__channel-name\">").concat(item.snippet.channelTitle, "</p>\n        <p class=\"video-item__published-date\">").concat(item.snippet.publishTime, "</p>\n        <button class=\"video-item__save-button button\">\u2B07 \uC800\uC7A5</button>\n      </li>\n  ");
  }
};
var searchModalInterface = {
  resetSearchInput: function resetSearchInput() {
    (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('#search-input-keyword').value = '';
  },
  resetVideoList: function resetVideoList() {
    (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.video-list').replaceChildren();
  },
  renderSkeletonUI: function renderSkeletonUI() {
    (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.search-result').classList.remove('search-result--no-result');
    (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.no-result').hidden = true;
    (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.video-list').classList.remove('hide');
    (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.video-list').insertAdjacentHTML('beforeEnd', searchVideoTemplate.skeletonUI.repeat(10));
    this.resetSearchInput();
  },
  removeSkeletonUI: function removeSkeletonUI() {
    (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$$)('.skeleton').forEach(function (element) {
      return element.remove();
    });
  },
  removeSavedVideoButton: function removeSavedVideoButton() {
    var savedStorage = _storage_storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLocalStorage();

    if (savedStorage) {
      savedStorage.forEach(function (video) {
        if ((0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.video-list').lastElementChild.dataset.videoId === video.id) {
          (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.video-list').lastElementChild.lastElementChild.hidden = true;
        }
      });
    }
  },
  renderVideoItems: function renderVideoItems(_ref) {
    var _this = this;

    var items = _ref.items;
    this.removeSkeletonUI();
    items.forEach(function (item) {
      (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.video-list').insertAdjacentHTML('beforeEnd', searchVideoTemplate.videoItem(item));

      _this.removeSavedVideoButton();
    });
  },
  renderNoResult: function renderNoResult() {
    this.removeSkeletonUI();
    (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.search-result').classList.add('search-result--no-result');
    (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.no-result').hidden = false;
    (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.video-list').classList.add('hide');
  },
  renderSearchResult: function renderSearchResult(response) {
    if (response.length === 0) {
      this.renderNoResult();
      return;
    }

    this.renderVideoItems(response);
  },
  renderNextSearchResult: function renderNextSearchResult(response) {
    this.renderVideoItems(response);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchModalInterface);

/***/ }),

/***/ "./src/js/ui/watchLaterInterface.js":
/*!******************************************!*\
  !*** ./src/js/ui/watchLaterInterface.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storage_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage/storage.js */ "./src/js/storage/storage.js");
/* harmony import */ var _util_general_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/general.js */ "./src/js/util/general.js");
/* harmony import */ var _util_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/render.js */ "./src/js/util/render.js");



var watchLaterInterface = {
  renderEmptyImg: function renderEmptyImg() {
    var savedVideoData = _storage_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLocalStorage();

    if (!savedVideoData) {
      console.log(!savedVideoData);
      (0,_util_render_js__WEBPACK_IMPORTED_MODULE_2__.showEmptyImg)('.watch-later-empty-img-container');
      return;
    }

    var watchLaterVideos = savedVideoData.filter(function (item) {
      if (item.watched === false) {
        return item;
      }
    });

    if (watchLaterVideos.length === 0) {
      (0,_util_render_js__WEBPACK_IMPORTED_MODULE_2__.showEmptyImg)('.watch-later-empty-img-container');
      return;
    }
  },
  renderWatchLaterVideos: function renderWatchLaterVideos() {
    (0,_util_render_js__WEBPACK_IMPORTED_MODULE_2__.removeEmptyImg)('.watch-later-empty-img-container');
    this.renderEmptyImg();
    (0,_util_render_js__WEBPACK_IMPORTED_MODULE_2__.clearVideoItems)('.watch-later-video-item');
    var savedVideoData = _storage_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLocalStorage();

    if (!savedVideoData) {
      return;
    }

    var watchLaterVideos = savedVideoData.filter(function (item) {
      if (item.watched === false) {
        return item;
      }
    });
    watchLaterVideos.forEach(function (item) {
      (0,_util_general_js__WEBPACK_IMPORTED_MODULE_1__.$)('.watch-later-videos-container ul').insertAdjacentHTML('beforeEnd', _util_render_js__WEBPACK_IMPORTED_MODULE_2__.videoItemTemplate.videoItem('watch-later-video-item', item));
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (watchLaterInterface);

/***/ }),

/***/ "./src/js/ui/watchedVideoInterface.js":
/*!********************************************!*\
  !*** ./src/js/ui/watchedVideoInterface.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_general_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/general.js */ "./src/js/util/general.js");
/* harmony import */ var _storage_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage/storage.js */ "./src/js/storage/storage.js");
/* harmony import */ var _util_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/render.js */ "./src/js/util/render.js");



var watchedVideoInterface = {
  renderEmptyImg: function renderEmptyImg() {
    var savedVideoData = _storage_storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLocalStorage();

    if (!savedVideoData) {
      (0,_util_render_js__WEBPACK_IMPORTED_MODULE_2__.showEmptyImg)('.watched-empty-img-container');
      return;
    }

    var watchedVideos = savedVideoData.filter(function (item) {
      if (item.watched) {
        return item;
      }
    });

    if (watchedVideos.length === 0) {
      (0,_util_render_js__WEBPACK_IMPORTED_MODULE_2__.showEmptyImg)('.watched-empty-img-container');
    }
  },
  renderWatchedVideos: function renderWatchedVideos() {
    (0,_util_render_js__WEBPACK_IMPORTED_MODULE_2__.removeEmptyImg)('.watched-empty-img-container');
    this.renderEmptyImg();
    (0,_util_render_js__WEBPACK_IMPORTED_MODULE_2__.clearVideoItems)('.watched-video-item');
    var savedVideoData = _storage_storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLocalStorage();

    if (!savedVideoData) {
      return;
    }

    var watchedVideos = savedVideoData.filter(function (item) {
      if (item.watched) {
        return item;
      }
    });
    watchedVideos.forEach(function (item) {
      (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.watched-videos-container ul').insertAdjacentHTML('beforeEnd', _util_render_js__WEBPACK_IMPORTED_MODULE_2__.videoItemTemplate.videoItem('watched-video-item', item));
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (watchedVideoInterface);

/***/ }),

/***/ "./src/js/util/general.js":
/*!********************************!*\
  !*** ./src/js/util/general.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "$$": () => (/* binding */ $$),
/* harmony export */   "confrimVideoDelete": () => (/* binding */ confrimVideoDelete),
/* harmony export */   "quickModalElement": () => (/* binding */ quickModalElement),
/* harmony export */   "validateInput": () => (/* binding */ validateInput)
/* harmony export */ });
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants.js */ "./src/js/constants/constants.js");
/* harmony import */ var _ui_watchedVideoInterface_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/watchedVideoInterface.js */ "./src/js/ui/watchedVideoInterface.js");
/* harmony import */ var _ui_watchLaterInterface_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/watchLaterInterface.js */ "./src/js/ui/watchLaterInterface.js");



var $ = function $(selector) {
  return document.querySelector(selector);
};
var $$ = function $$(selector) {
  return document.querySelectorAll(selector);
};
var validateInput = function validateInput(input) {
  if (input === '') {
    throw new Error(_constants_constants_js__WEBPACK_IMPORTED_MODULE_0__.ERROR.MESSAGE.EMPTY_INPUT);
  }
};
var quickModalElement = function quickModalElement(e) {
  e.preventDefault();

  if (!$('.modal-container').classList.contains('hide')) {
    $('.modal-container').classList.toggle('hide');

    if ($('.watch-later-videos').classList.contains('hidden')) {
      _ui_watchedVideoInterface_js__WEBPACK_IMPORTED_MODULE_1__["default"].renderWatchedVideos();
    }

    if ($('.watched-videos').classList.contains('hidden')) {
      _ui_watchLaterInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].renderWatchLaterVideos();
    }
  }
};
var confrimVideoDelete = function confrimVideoDelete() {
  return window.confirm(_constants_constants_js__WEBPACK_IMPORTED_MODULE_0__.ALERT.MESSAGE.DELETE_CONFRIM);
};

/***/ }),

/***/ "./src/js/util/render.js":
/*!*******************************!*\
  !*** ./src/js/util/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearVideoItems": () => (/* binding */ clearVideoItems),
/* harmony export */   "removeCheckedVideoItem": () => (/* binding */ removeCheckedVideoItem),
/* harmony export */   "removeDeleteVideoItem": () => (/* binding */ removeDeleteVideoItem),
/* harmony export */   "removeEmptyImg": () => (/* binding */ removeEmptyImg),
/* harmony export */   "showEmptyImg": () => (/* binding */ showEmptyImg),
/* harmony export */   "videoItemTemplate": () => (/* binding */ videoItemTemplate)
/* harmony export */ });
/* harmony import */ var _general_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general.js */ "./src/js/util/general.js");

var videoItemTemplate = {
  videoItem: function videoItem(className, item) {
    return "\n      <li class=\"".concat(className, " video-item\" data-video-id='").concat(item.id, "'>\n      <img\n        src='").concat(item.snippet.thumbnails.high.url, "'\n        alt=\"video-item-thumbnail\"\n        class=\"video-item__thumbnail\"\n      />\n      <h4 class=\"video-item__title\">").concat(item.snippet.title, "</h4>\n      <p class=\"video-item__channel-name\">").concat(item.snippet.channelTitle, "</p>\n      <p class=\"video-item__published-date\">").concat(item.snippet.publishTime, "</p>\n      <div class=\"button-container ").concat(className, "-button-group\">\n          <button type=\"button\" class=\"video-item__watched-button button\">\u2705</button>\n          <button type=\"button\" class=\"video-item__delete-button button\">\uD83D\uDDD1\uFE0F</button>\n      </div>\n    </li>\n      ");
  },
  emptyImageItem: '<div class="empty-img-container"><label for="empty-img" hidden>저장된 비디오가 없습니다! 비디오를 저장해주세요</label><img id="empty-img" name="empty-img" src="./assets/empty_img.png"/></div>'
};
var removeDeleteVideoItem = function removeDeleteVideoItem(selector, videoId) {
  (0,_general_js__WEBPACK_IMPORTED_MODULE_0__.$$)(selector).forEach(function (element) {
    if (element.dataset.videoId === videoId) {
      element.remove();
    }
  });
};
var clearVideoItems = function clearVideoItems(selector) {
  (0,_general_js__WEBPACK_IMPORTED_MODULE_0__.$$)(selector).forEach(function (element) {
    return element.remove();
  });
};
var removeCheckedVideoItem = function removeCheckedVideoItem(selector, videoId) {
  (0,_general_js__WEBPACK_IMPORTED_MODULE_0__.$$)(selector).forEach(function (element) {
    if (element.dataset.videoId === videoId) {
      element.remove();
    }
  });
};
var showEmptyImg = function showEmptyImg(selector) {
  (0,_general_js__WEBPACK_IMPORTED_MODULE_0__.$)(selector).insertAdjacentHTML('beforeEnd', videoItemTemplate.emptyImageItem);
};
var removeEmptyImg = function removeEmptyImg(selector) {
  if ((0,_general_js__WEBPACK_IMPORTED_MODULE_0__.$)(selector).hasChildNodes()) {
    (0,_general_js__WEBPACK_IMPORTED_MODULE_0__.$)(selector).removeChild((0,_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.empty-img-container'));
  }
};

/***/ }),

/***/ "./src/js/util/throttle.js":
/*!*********************************!*\
  !*** ./src/js/util/throttle.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyThrottle": () => (/* binding */ applyThrottle)
/* harmony export */ });
var applyThrottle = function applyThrottle(func, delayTime) {
  var throttle;
  return function () {
    clearTimeout(throttle);

    for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
      arg[_key] = arguments[_key];
    }

    throttle = setTimeout(func.bind.apply(func, [null].concat(arg)), delayTime);
  };
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/app.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_color_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./color.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/color.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_color_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  padding: 64px 0;\n  font-size: 16px;\n}\n\n#app {\n  max-width: 1020px;\n  margin: 0 auto;\n}\n\n.classroom-container__title {\n  text-align: center;\n  font-weight: bold;\n  font-size: 34px;\n  line-height: 36px;\n  margin-bottom: 64px;\n}\n\n.nav {\n  display: flex;\n  justify-content: space-between;\n}\n\n.button {\n  cursor: pointer;\n  border-radius: 4px;\n  border: none;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  letter-spacing: 1.25px;\n}\n\n.nav__button {\n  width: 80px;\n  height: 36px;\n  background: var(--nav-button-background-color);\n}\n\n.nav__button:hover {\n  background: var(--nav-button-hover-color);\n}\n\n.hidden {\n  display: none;\n  visibility: hidden;\n}\n\n.videos-button-container button {\n  width: 117px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/app.css"],"names":[],"mappings":"AACA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,8CAA8C;AAChD;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd","sourcesContent":["@import url('./color.css');\nbody {\n  padding: 64px 0;\n  font-size: 16px;\n}\n\n#app {\n  max-width: 1020px;\n  margin: 0 auto;\n}\n\n.classroom-container__title {\n  text-align: center;\n  font-weight: bold;\n  font-size: 34px;\n  line-height: 36px;\n  margin-bottom: 64px;\n}\n\n.nav {\n  display: flex;\n  justify-content: space-between;\n}\n\n.button {\n  cursor: pointer;\n  border-radius: 4px;\n  border: none;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  letter-spacing: 1.25px;\n}\n\n.nav__button {\n  width: 80px;\n  height: 36px;\n  background: var(--nav-button-background-color);\n}\n\n.nav__button:hover {\n  background: var(--nav-button-hover-color);\n}\n\n.hidden {\n  display: none;\n  visibility: hidden;\n}\n\n.videos-button-container button {\n  width: 117px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/color.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/color.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --nav-button-background-color: #f5f5f5;\n  --nav-button-hover-color: #ebebeb;\n  --dimmer-background-color: rgba(0, 0, 0, 0.5);\n  --search-modal-background-color: #ffffff;\n  --search-modal-border-color: rgba(0, 0, 0, 0.12);\n  --search-input-border-color: #b4b4b4;\n  --search-input-placeholder-color: #8b8b8b;\n  --search-button-background-color: #00bcd4;\n  --search-button-font-color: #ffffff;\n  --save-button-background-color: #f9f9f9;\n  --save-button-hover-color: #efefef;\n  --skeleton-background-linear-start-color: #e0e0e0;\n  --skeleton-background-linear-medium-color: #ededed;\n  --skeleton-background-linear-end-color: #e0e0e0;\n  --is-active-color: #00bcd41f;\n}\n", "",{"version":3,"sources":["webpack://./src/css/color.css"],"names":[],"mappings":"AAAA;EACE,sCAAsC;EACtC,iCAAiC;EACjC,6CAA6C;EAC7C,wCAAwC;EACxC,gDAAgD;EAChD,oCAAoC;EACpC,yCAAyC;EACzC,yCAAyC;EACzC,mCAAmC;EACnC,uCAAuC;EACvC,kCAAkC;EAClC,iDAAiD;EACjD,kDAAkD;EAClD,+CAA+C;EAC/C,4BAA4B;AAC9B","sourcesContent":[":root {\n  --nav-button-background-color: #f5f5f5;\n  --nav-button-hover-color: #ebebeb;\n  --dimmer-background-color: rgba(0, 0, 0, 0.5);\n  --search-modal-background-color: #ffffff;\n  --search-modal-border-color: rgba(0, 0, 0, 0.12);\n  --search-input-border-color: #b4b4b4;\n  --search-input-placeholder-color: #8b8b8b;\n  --search-button-background-color: #00bcd4;\n  --search-button-font-color: #ffffff;\n  --save-button-background-color: #f9f9f9;\n  --save-button-hover-color: #efefef;\n  --skeleton-background-linear-start-color: #e0e0e0;\n  --skeleton-background-linear-medium-color: #ededed;\n  --skeleton-background-linear-end-color: #e0e0e0;\n  --is-active-color: #00bcd41f;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./skeleton.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/skeleton.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_color_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./color.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/color.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./responsive.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/responsive.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_video_content_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./video-content.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/video-content.css");
// Imports








var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_color_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_video_content_css__WEBPACK_IMPORTED_MODULE_7__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nhtml,\nbody {\n  height: 100%;\n  -webkit-font-smoothing: antialiased;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAOA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;;EAEE,YAAY;EACZ,mCAAmC;AACrC;;AAEA;;;;EAIE,aAAa;AACf","sourcesContent":["@import './app.css';\n@import './modal.css';\n@import './skeleton.css';\n@import './color.css';\n@import './responsive.css';\n@import './video-content.css';\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nhtml,\nbody {\n  height: 100%;\n  -webkit-font-smoothing: antialiased;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/modal.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n\n.modal-container.hide {\n  display: none;\n}\n\n.dimmer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: var(--dimmer-background-color);\n}\n\n.search-modal {\n  position: relative;\n  width: 1080px;\n  height: 727px;\n  background: var(--search-modal-background-color);\n  border: 1px solid var(--search-modal-border-color);\n  border-radius: 4px;\n  padding: 50px 30px 32px 30px;\n}\n\n.search-modal__title {\n  font-weight: bold;\n  font-size: 34px;\n  line-height: 36px;\n  text-align: center;\n  margin-bottom: 40px;\n}\n\n.search-input {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 40px;\n}\n\n.search-input__keyword {\n  width: 400px;\n  height: 36px;\n  margin-right: 20px;\n  padding: 4px 8px;\n  border: 1px solid var(--search-input-border-color);\n  border-radius: 4px;\n}\n\n.search-input__keyword::placeholder {\n  color: var(--search-input-placeholder-color);\n  font-size: 16px;\n}\n\n.search-input__search-button {\n  width: 72px;\n  height: 36px;\n  background: var(--search-button-background-color);\n  color: var(--search-button-font-color);\n}\n.search-input__search-button:hover {\n  background-color: var(--search-input-placeholder-color);\n}\n\n.search-result--no-result {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.no-result__image {\n  width: 190px;\n  height: 140px;\n  margin-bottom: 32px;\n}\n\n.no-result__description {\n  font-size: 16px;\n  line-height: 150%;\n  text-align: center;\n  letter-spacing: 0.5px;\n}\n\n.video-list {\n  width: 1040px;\n  height: 493px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 32px 20px;\n  overflow-y: scroll;\n}\n\n.video-item {\n  position: relative;\n  width: 240px;\n  height: 255px;\n}\n\n.video-list.hide {\n  display: none;\n}\n\n.video-item__thumbnail {\n  width: 100%;\n  height: 135px;\n}\n\n.video-item__title {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: 4px 0;\n}\n\n.video-item__channel-name {\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.video-item__published-date {\n  font-size: 12px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n\n.video-item__save-button {\n  position: absolute;\n  right: 0;\n  width: 80px;\n  height: 36px;\n  background: var(--save-button-background-color);\n  margin-top: 4px;\n}\n\n.video-item__save-button:hover {\n  background: var(--save-button-hover-color);\n}\n", "",{"version":3,"sources":["webpack://./src/css/modal.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,MAAM;EACN,OAAO;AACT;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,0CAA0C;AAC5C;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,aAAa;EACb,gDAAgD;EAChD,kDAAkD;EAClD,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,kDAAkD;EAClD,kBAAkB;AACpB;;AAEA;EACE,4CAA4C;EAC5C,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iDAAiD;EACjD,sCAAsC;AACxC;AACA;EACE,uDAAuD;AACzD;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,+CAA+C;EAC/C,eAAe;AACjB;;AAEA;EACE,0CAA0C;AAC5C","sourcesContent":[".modal-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n\n.modal-container.hide {\n  display: none;\n}\n\n.dimmer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: var(--dimmer-background-color);\n}\n\n.search-modal {\n  position: relative;\n  width: 1080px;\n  height: 727px;\n  background: var(--search-modal-background-color);\n  border: 1px solid var(--search-modal-border-color);\n  border-radius: 4px;\n  padding: 50px 30px 32px 30px;\n}\n\n.search-modal__title {\n  font-weight: bold;\n  font-size: 34px;\n  line-height: 36px;\n  text-align: center;\n  margin-bottom: 40px;\n}\n\n.search-input {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 40px;\n}\n\n.search-input__keyword {\n  width: 400px;\n  height: 36px;\n  margin-right: 20px;\n  padding: 4px 8px;\n  border: 1px solid var(--search-input-border-color);\n  border-radius: 4px;\n}\n\n.search-input__keyword::placeholder {\n  color: var(--search-input-placeholder-color);\n  font-size: 16px;\n}\n\n.search-input__search-button {\n  width: 72px;\n  height: 36px;\n  background: var(--search-button-background-color);\n  color: var(--search-button-font-color);\n}\n.search-input__search-button:hover {\n  background-color: var(--search-input-placeholder-color);\n}\n\n.search-result--no-result {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.no-result__image {\n  width: 190px;\n  height: 140px;\n  margin-bottom: 32px;\n}\n\n.no-result__description {\n  font-size: 16px;\n  line-height: 150%;\n  text-align: center;\n  letter-spacing: 0.5px;\n}\n\n.video-list {\n  width: 1040px;\n  height: 493px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 32px 20px;\n  overflow-y: scroll;\n}\n\n.video-item {\n  position: relative;\n  width: 240px;\n  height: 255px;\n}\n\n.video-list.hide {\n  display: none;\n}\n\n.video-item__thumbnail {\n  width: 100%;\n  height: 135px;\n}\n\n.video-item__title {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: 4px 0;\n}\n\n.video-item__channel-name {\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.video-item__published-date {\n  font-size: 12px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n\n.video-item__save-button {\n  position: absolute;\n  right: 0;\n  width: 80px;\n  height: 36px;\n  background: var(--save-button-background-color);\n  margin-top: 4px;\n}\n\n.video-item__save-button:hover {\n  background: var(--save-button-hover-color);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/responsive.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/responsive.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* \n gutter: 20px \n col: 240px (- video item의 대략적인 width) \n*/\n\n.watch-later-videos-container ul {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n}\n.watched-videos-container ul {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n}\n\n@media screen and (max-width: 600px) {\n  .classroom-container {\n    margin: 0 20px !important;\n  }\n  .nav {\n    max-width: 567px;\n  }\n  .watch-later-videos-container ul {\n    width: 100%;\n    grid-template-columns: repeat(1, 240px);\n    column-gap: 10px;\n  }\n  .watched-videos-container ul {\n    width: 100%;\n    grid-template-columns: repeat(1, 240px);\n    column-gap: 10px;\n  }\n}\n\n@media screen and (min-width: 600px) and (max-width: 960px) {\n  .classroom-container {\n    margin: 0 45px !important;\n  }\n  .watch-later-videos-container ul {\n    width: 100%;\n    grid-template-columns: repeat(2, 240px);\n    column-gap: 10px;\n  }\n  .watched-videos-container ul {\n    width: 100%;\n    grid-template-columns: repeat(2, 240px);\n    column-gap: 10px;\n  }\n}\n\n@media screen and (min-width: 960px) and (max-width: 1280px) {\n  .classroom-container {\n    margin: 0 94px !important;\n  }\n  .watch-later-videos-container ul {\n    width: 100%;\n    grid-template-columns: repeat(3, 240px);\n    column-gap: 10px;\n  }\n  .watched-videos-container ul {\n    width: 100%;\n    grid-template-columns: repeat(3, 240px);\n    column-gap: 10px;\n  }\n}\n\n@media screen and (min-width: 1280px) {\n  .watch-later-videos-container ul {\n    grid-template-columns: repeat(4, 1fr);\n    column-gap: 10px;\n  }\n  .watched-videos-container ul {\n    grid-template-columns: repeat(4, 1fr);\n    column-gap: 10px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/css/responsive.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;AACvB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE;IACE,yBAAyB;EAC3B;EACA;IACE,gBAAgB;EAClB;EACA;IACE,WAAW;IACX,uCAAuC;IACvC,gBAAgB;EAClB;EACA;IACE,WAAW;IACX,uCAAuC;IACvC,gBAAgB;EAClB;AACF;;AAEA;EACE;IACE,yBAAyB;EAC3B;EACA;IACE,WAAW;IACX,uCAAuC;IACvC,gBAAgB;EAClB;EACA;IACE,WAAW;IACX,uCAAuC;IACvC,gBAAgB;EAClB;AACF;;AAEA;EACE;IACE,yBAAyB;EAC3B;EACA;IACE,WAAW;IACX,uCAAuC;IACvC,gBAAgB;EAClB;EACA;IACE,WAAW;IACX,uCAAuC;IACvC,gBAAgB;EAClB;AACF;;AAEA;EACE;IACE,qCAAqC;IACrC,gBAAgB;EAClB;EACA;IACE,qCAAqC;IACrC,gBAAgB;EAClB;AACF","sourcesContent":["/* \n gutter: 20px \n col: 240px (- video item의 대략적인 width) \n*/\n\n.watch-later-videos-container ul {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n}\n.watched-videos-container ul {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n}\n\n@media screen and (max-width: 600px) {\n  .classroom-container {\n    margin: 0 20px !important;\n  }\n  .nav {\n    max-width: 567px;\n  }\n  .watch-later-videos-container ul {\n    width: 100%;\n    grid-template-columns: repeat(1, 240px);\n    column-gap: 10px;\n  }\n  .watched-videos-container ul {\n    width: 100%;\n    grid-template-columns: repeat(1, 240px);\n    column-gap: 10px;\n  }\n}\n\n@media screen and (min-width: 600px) and (max-width: 960px) {\n  .classroom-container {\n    margin: 0 45px !important;\n  }\n  .watch-later-videos-container ul {\n    width: 100%;\n    grid-template-columns: repeat(2, 240px);\n    column-gap: 10px;\n  }\n  .watched-videos-container ul {\n    width: 100%;\n    grid-template-columns: repeat(2, 240px);\n    column-gap: 10px;\n  }\n}\n\n@media screen and (min-width: 960px) and (max-width: 1280px) {\n  .classroom-container {\n    margin: 0 94px !important;\n  }\n  .watch-later-videos-container ul {\n    width: 100%;\n    grid-template-columns: repeat(3, 240px);\n    column-gap: 10px;\n  }\n  .watched-videos-container ul {\n    width: 100%;\n    grid-template-columns: repeat(3, 240px);\n    column-gap: 10px;\n  }\n}\n\n@media screen and (min-width: 1280px) {\n  .watch-later-videos-container ul {\n    grid-template-columns: repeat(4, 1fr);\n    column-gap: 10px;\n  }\n  .watched-videos-container ul {\n    grid-template-columns: repeat(4, 1fr);\n    column-gap: 10px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/skeleton.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/skeleton.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".skeleton {\n  width: 236px;\n}\n\n.skeleton .image,\n.skeleton .line {\n  background-image: linear-gradient(\n    90deg,\n    var(--skeleton-background-linear-start-color) 0,\n    var(--skeleton-background-linear-medium-color) 30px,\n    var(--skeleton-background-linear-end-color) 60px\n  );\n  animation: refresh 2s infinite ease-out;\n}\n\n.skeleton .image {\n  height: 150px;\n  margin-bottom: 16px;\n}\n\n.skeleton .line {\n  height: 16px;\n}\n\n.skeleton .line:first-child {\n  width: 50%;\n}\n\n.skeleton .line:last-child {\n  width: 80%;\n  margin-top: 16px;\n}\n\n@keyframes refresh {\n  0% {\n    background-position: calc(-100px);\n  }\n  40%,\n  100% {\n    background-position: 320px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/css/skeleton.css"],"names":[],"mappings":"AAAA;EACE,YAAY;AACd;;AAEA;;EAEE;;;;;GAKC;EACD,uCAAuC;AACzC;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE;IACE,iCAAiC;EACnC;EACA;;IAEE,0BAA0B;EAC5B;AACF","sourcesContent":[".skeleton {\n  width: 236px;\n}\n\n.skeleton .image,\n.skeleton .line {\n  background-image: linear-gradient(\n    90deg,\n    var(--skeleton-background-linear-start-color) 0,\n    var(--skeleton-background-linear-medium-color) 30px,\n    var(--skeleton-background-linear-end-color) 60px\n  );\n  animation: refresh 2s infinite ease-out;\n}\n\n.skeleton .image {\n  height: 150px;\n  margin-bottom: 16px;\n}\n\n.skeleton .line {\n  height: 16px;\n}\n\n.skeleton .line:first-child {\n  width: 50%;\n}\n\n.skeleton .line:last-child {\n  width: 80%;\n  margin-top: 16px;\n}\n\n@keyframes refresh {\n  0% {\n    background-position: calc(-100px);\n  }\n  40%,\n  100% {\n    background-position: 320px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/video-content.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/video-content.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_color_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./color.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/color.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_color_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".is-active {\n  background-color: var(--is-active-color);\n}\n\n.watch-later-videos-container {\n  margin-top: 40px;\n}\n\n.watched-videos-container {\n  margin-top: 40px;\n  width: 100%;\n}\n.empty-img-container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  justify-items: center;\n  flex-wrap: wrap;\n}\n\n#empty-img {\n  width: 700px;\n  height: auto;\n}\n\n.watch-later-video-item {\n  margin-bottom: 20px;\n}\n\n.watched-video-item {\n  margin-bottom: 20px;\n}\n\n.button-container {\n  display: flex;\n  justify-content: end;\n}\n\n.button-container button {\n  width: 36px;\n  height: 36px;\n}\n\n.button-container button:hover {\n  background-color: var(--nav-button-hover-color);\n}\n\n.video-item__watched-button {\n  margin-right: 8px;\n}\n\n.watched-video-item-button-group > .video-item__watched-button {\n  background-color: var(--is-active-color);\n}\n", "",{"version":3,"sources":["webpack://./src/css/video-content.css"],"names":[],"mappings":"AACA;EACE,wCAAwC;AAC1C;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,WAAW;AACb;AACA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,+CAA+C;AACjD;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,wCAAwC;AAC1C","sourcesContent":["@import url('./color.css');\n.is-active {\n  background-color: var(--is-active-color);\n}\n\n.watch-later-videos-container {\n  margin-top: 40px;\n}\n\n.watched-videos-container {\n  margin-top: 40px;\n  width: 100%;\n}\n.empty-img-container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  justify-items: center;\n  flex-wrap: wrap;\n}\n\n#empty-img {\n  width: 700px;\n  height: auto;\n}\n\n.watch-later-video-item {\n  margin-bottom: 20px;\n}\n\n.watched-video-item {\n  margin-bottom: 20px;\n}\n\n.button-container {\n  display: flex;\n  justify-content: end;\n}\n\n.button-container button {\n  width: 36px;\n  height: 36px;\n}\n\n.button-container button:hover {\n  background-color: var(--nav-button-hover-color);\n}\n\n.video-item__watched-button {\n  margin-right: 8px;\n}\n\n.watched-video-item-button-group > .video-item__watched-button {\n  background-color: var(--is-active-color);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/images/empty_img.png":
/*!*****************************************!*\
  !*** ./src/assets/images/empty_img.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/empty_img.png");

/***/ }),

/***/ "./src/assets/images/not_found.png":
/*!*****************************************!*\
  !*** ./src/assets/images/not_found.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/not_found.png");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classApplyDescriptorGet)
/* harmony export */ });
function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classApplyDescriptorSet)
/* harmony export */ });
function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }

    descriptor.value = value;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classExtractFieldDescriptor)
/* harmony export */ });
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }

  return privateMap.get(receiver);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classPrivateFieldGet)
/* harmony export */ });
/* harmony import */ var _classApplyDescriptorGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classApplyDescriptorGet.js */ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js");
/* harmony import */ var _classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classExtractFieldDescriptor.js */ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js");


function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = (0,_classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__["default"])(receiver, privateMap, "get");
  return (0,_classApplyDescriptorGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(receiver, descriptor);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classPrivateFieldSet)
/* harmony export */ });
/* harmony import */ var _classApplyDescriptorSet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classApplyDescriptorSet.js */ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js");
/* harmony import */ var _classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classExtractFieldDescriptor.js */ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js");


function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = (0,_classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__["default"])(receiver, privateMap, "set");
  (0,_classApplyDescriptorSet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(receiver, descriptor, value);
  return value;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ "./src/css/index.css");
/* harmony import */ var _assets_images_not_found_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/not_found.png */ "./src/assets/images/not_found.png");
/* harmony import */ var _assets_images_empty_img_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/empty_img.png */ "./src/assets/images/empty_img.png");
/* harmony import */ var _util_general_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/general.js */ "./src/js/util/general.js");
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/constants.js */ "./src/js/constants/constants.js");
/* harmony import */ var _util_throttle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/throttle.js */ "./src/js/util/throttle.js");
/* harmony import */ var _modules_handleSearchEvent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/handleSearchEvent.js */ "./src/js/modules/handleSearchEvent.js");
/* harmony import */ var _modules_handleWatchLaterVideoEvent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/handleWatchLaterVideoEvent.js */ "./src/js/modules/handleWatchLaterVideoEvent.js");
/* harmony import */ var _modules_handleWatchedVideoEvent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/handleWatchedVideoEvent.js */ "./src/js/modules/handleWatchedVideoEvent.js");
/* harmony import */ var _ui_watchLaterInterface_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/watchLaterInterface.js */ "./src/js/ui/watchLaterInterface.js");










function App() {
  var handleSearchEvent = new _modules_handleSearchEvent_js__WEBPACK_IMPORTED_MODULE_6__.SearchEventHandler();
  var handleWatchLaterEvent = new _modules_handleWatchLaterVideoEvent_js__WEBPACK_IMPORTED_MODULE_7__.WatchLaterVideoEventHandler();
  var handleWatchedVideoEvent = new _modules_handleWatchedVideoEvent_js__WEBPACK_IMPORTED_MODULE_8__.WatchedVideoEventHandler();
  _ui_watchLaterInterface_js__WEBPACK_IMPORTED_MODULE_9__["default"].renderWatchLaterVideos();
  (0,_util_general_js__WEBPACK_IMPORTED_MODULE_3__.$)('#search-modal-button').addEventListener('click', function () {
    (0,_util_general_js__WEBPACK_IMPORTED_MODULE_3__.$)('.modal-container').classList.toggle('hide');
  });
  (0,_util_general_js__WEBPACK_IMPORTED_MODULE_3__.$)('#search-button').addEventListener('click', handleSearchEvent.handleSearch);
  (0,_util_general_js__WEBPACK_IMPORTED_MODULE_3__.$)('#search-input-keyword').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') handleSearchEvent.handleSearch();
  });
  (0,_util_general_js__WEBPACK_IMPORTED_MODULE_3__.$)('.video-list').addEventListener('scroll', (0,_util_throttle_js__WEBPACK_IMPORTED_MODULE_5__.applyThrottle)(handleSearchEvent.handleScroll, _constants_constants_js__WEBPACK_IMPORTED_MODULE_4__.THROTTLE_DELAY));
  (0,_util_general_js__WEBPACK_IMPORTED_MODULE_3__.$)('.video-list').addEventListener('click', handleSearchEvent.handleSaveButtonClick);
  (0,_util_general_js__WEBPACK_IMPORTED_MODULE_3__.$)('.dimmer').addEventListener('click', _util_general_js__WEBPACK_IMPORTED_MODULE_3__.quickModalElement);
  (0,_util_general_js__WEBPACK_IMPORTED_MODULE_3__.$)('.watch-later-nav-button').addEventListener('click', handleWatchLaterEvent.handleWatchLater);
  (0,_util_general_js__WEBPACK_IMPORTED_MODULE_3__.$)('.watched-nav-button').addEventListener('click', handleWatchedVideoEvent.handleWatchedVideo);
  (0,_util_general_js__WEBPACK_IMPORTED_MODULE_3__.$)('.watch-later-videos-container ul').addEventListener('click', handleWatchLaterEvent.handleWatchedButtonClick);
  (0,_util_general_js__WEBPACK_IMPORTED_MODULE_3__.$)('.watch-later-videos-container ul').addEventListener('click', handleWatchLaterEvent.handleDeleteButtonClick);
  (0,_util_general_js__WEBPACK_IMPORTED_MODULE_3__.$)('.watched-videos-container ul').addEventListener('click', handleWatchedVideoEvent.handledWatchedButtonClick);
  (0,_util_general_js__WEBPACK_IMPORTED_MODULE_3__.$)('.watched-videos-container ul').addEventListener('click', handleWatchedVideoEvent.handleDeleteButtonClick);
}
App();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map