"use strict";
exports.id = 433;
exports.ids = [433];
exports.modules = {

/***/ 433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useAuth),
/* harmony export */   "H": () => (/* binding */ AuthProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const baseUrl = "http://127.0.0.1:8000";
const tokenUrl = baseUrl + '/api/token/';


const AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
function useAuth() {
  const auth = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AuthContext);
  if (!auth) throw new Error('You forgot AuthProvider!');
  return auth;
}
function AuthProvider(props) {
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    tokens: null,
    user: null,
    login: login
  });

  async function login(username, password) {
    const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().post(tokenUrl, {
      username,
      password
    });
    const decodedAccess = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().decode(response.data.access);
    const newState = {
      tokens: response.data,
      user: {
        id: decodedAccess.user_id,
        username: decodedAccess.username,
        email: decodedAccess.email,
        summoner_name: decodedAccess.summoner_name,
        profile_icon: decodedAccess.profile_icon,
        summoner_server: decodedAccess.summoner_server,
        summoner_level: decodedAccess.summoner_level,
        summoner_rank: decodedAccess.summoner_rank,
        summoner_champion_mastery: decodedAccess.summoner_champion_mastery,
        summoner_match_history: decodedAccess.summoner_match_history
      }
    };
    localStorage.setItem("token", JSON.stringify(newState));
    setState(prevState => _objectSpread(_objectSpread({}, prevState), newState));
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const data = localStorage.getItem("token");

    if (data) {
      setState(JSON.parse(data));
    }
  }, {});
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(AuthContext.Provider, {
    value: state,
    children: props.children
  });
}

/***/ })

};
;