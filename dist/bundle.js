/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * This is our "Entry Point"
	 */
	'use strict';
	
	var _controllerSurveyForm = __webpack_require__(/*! ./controller/surveyForm */ 1);
	
	function init() {
	  var surveyForm = new _controllerSurveyForm.SurveyForm();
	  surveyForm.render('#root');
	}
	init();

/***/ }),
/* 1 */
/*!**************************************!*\
  !*** ./src/controller/surveyForm.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 2)['default'];
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 6)['default'];
	
	var _defineProperty = __webpack_require__(/*! babel-runtime/helpers/define-property */ 7)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _templateQuestionTemplate = __webpack_require__(/*! ../template/questionTemplate */ 8);
	
	var _utils = __webpack_require__(/*! ./utils */ 9);
	
	var SurveyForm = (function () {
	    function SurveyForm() {
	        var surveyAPI = arguments.length <= 0 || arguments[0] === undefined ? 'http://localhost:3000/surveyData' : arguments[0];
	
	        _classCallCheck(this, SurveyForm);
	
	        this.surveyQuesions = [];
	        this.answers = [];
	
	        this.surveyAPI = surveyAPI;
	    }
	
	    _createClass(SurveyForm, [{
	        key: 'dataHandler',
	        value: function dataHandler(parentElementID) {
	            var _this = this;
	
	            document.querySelector(parentElementID).innerHTML = (0, _templateQuestionTemplate.questionTemplate)(1, this.surveyQuesions[0], this.surveyQuesions.length);
	            document.querySelector('.surveyContainer .footerButton').addEventListener('click', function () {
	                (0, _utils.moveToNextQuestion)(_this.surveyQuesions);
	            });
	            document.querySelector('.surveyContainer .continueButton').addEventListener('click', function () {
	                var selected = [];
	                var inputs = document.querySelectorAll('.inputGroup input');
	                for (var i = 0; i < inputs.length; i++) {
	                    if (inputs[i].checked) {
	                        selected.push(inputs[i].value);
	                    }
	                }
	                var currentQuestion = parseInt(document.querySelector('.surveyContainer #questionNumber').textContent, 10);
	                if (selected.length !== 0) {
	                    _this.answers.push(_defineProperty({}, 'questionID' + currentQuestion, selected.join(',')));
	                }
	                if (currentQuestion === _this.surveyQuesions.length) {
	                    console.log(_this.answers);
	                }
	                (0, _utils.moveToNextQuestion)(_this.surveyQuesions);
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render(parentElementID) {
	            var _this2 = this;
	
	            var localStorageObj = JSON.parse(localStorage.getItem('questionsData'));
	            if (localStorageObj) {
	                this.surveyQuesions = localStorageObj;
	                this.dataHandler(parentElementID);
	            } else {
	                fetch(this.surveyAPI).then(function (response) {
	                    return response.json();
	                }).then(function (myJson) {
	                    localStorage.setItem("questionsData", JSON.stringify(myJson));
	                    _this2.surveyQuesions = myJson;
	                    _this2.dataHandler(parentElementID);
	                });
	            }
	        }
	    }]);
	
	    return SurveyForm;
	})();

	exports.SurveyForm = SurveyForm;

/***/ }),
/* 2 */
/*!*************************************************!*\
  !*** ./~/babel-runtime/helpers/create-class.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(/*! babel-runtime/core-js/object/define-property */ 3)["default"];
	
	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	
	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();
	
	exports.__esModule = true;

/***/ }),
/* 3 */
/*!***********************************************************!*\
  !*** ./~/babel-runtime/core-js/object/define-property.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ 4), __esModule: true };

/***/ }),
/* 4 */
/*!********************************************************!*\
  !*** ./~/core-js/library/fn/object/define-property.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(/*! ../../modules/$ */ 5);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ }),
/* 5 */
/*!****************************************!*\
  !*** ./~/core-js/library/modules/$.js ***!
  \****************************************/
/***/ (function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ }),
/* 6 */
/*!*****************************************************!*\
  !*** ./~/babel-runtime/helpers/class-call-check.js ***!
  \*****************************************************/
/***/ (function(module, exports) {

	"use strict";
	
	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ }),
/* 7 */
/*!****************************************************!*\
  !*** ./~/babel-runtime/helpers/define-property.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(/*! babel-runtime/core-js/object/define-property */ 3)["default"];
	
	exports["default"] = function (obj, key, value) {
	  if (key in obj) {
	    _Object$defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};
	
	exports.__esModule = true;

/***/ }),
/* 8 */
/*!******************************************!*\
  !*** ./src/template/questionTemplate.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.questionTemplate = questionTemplate;
	
	var _controllerUtils = __webpack_require__(/*! ../controller/utils */ 9);
	
	function questionTemplate(questionNumber, questionObj, surveyLength) {
	    var formContent = "" + (0, _controllerUtils.updateOptions)(questionObj);
	    var templateGenerated = "<div class='surveyContainer'>\n    <div class=\"questionHeading\"> Question <span id=\"questionNumber\">" + questionNumber + "</span> / " + surveyLength + " </div>\n    <div id=\"questionText\"> " + questionObj.question.text + " </div>\n    <form class=\"form\">" + formContent + "</form>\n    <div class=\"footer\">\n    <button class=\"footerButton\">Skip</button>\n    <button class=\"footerButton continueButton\">Continue</button>\n    </div>\n    <link href=\"https://fonts.googleapis.com/css?family=Fira+Sans\" rel=\"stylesheet\">\n    </div>\n    ";
	    return templateGenerated;
	}

/***/ }),
/* 9 */
/*!*********************************!*\
  !*** ./src/controller/utils.js ***!
  \*********************************/
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.updateOptions = updateOptions;
	exports.moveToNextQuestion = moveToNextQuestion;
	
	function updateOptions(questionObj) {
	    var options = '';
	    if (questionObj.multiSelect) {
	        for (var i = 0; i < questionObj.options.length; i++) {
	            options += '<div class="inputGroup">\n            <input id="option' + i + '" name="option' + i + '" type="checkbox" value="' + questionObj.options[i].value + '"/>\n            <label for="option' + i + '">' + questionObj.options[i].label.text + '</label>\n            <div class="imageContainer">\n            <img src ="' + questionObj.options[i].img.src + '"/>\n            </div>\n          </div>';
	        }
	    } else {
	        for (var i = 0; i < questionObj.options.length; i++) {
	            options += '<div class="inputGroup">\n            <input id="radio' + i + '" name="radio" type="radio" value="' + questionObj.options[i].value + '"/>\n            <label for="radio' + i + '">' + questionObj.options[i].label.text + '</label>\n          </div>';
	        }
	    }
	    return options;
	}
	
	function moveToNextQuestion(surveyQuesions) {
	    var currentQuestion = parseInt(document.querySelector('.surveyContainer #questionNumber').textContent, 10);
	    var nextQuestionNumber = currentQuestion + 1;
	    var nextQuestionObj = surveyQuesions[nextQuestionNumber - 1];
	    if (nextQuestionObj) {
	        document.querySelector('.surveyContainer #questionNumber').textContent = nextQuestionNumber;
	        document.querySelector('.surveyContainer #questionText').textContent = nextQuestionObj.question.text;
	        document.querySelector('.surveyContainer form').innerHTML = updateOptions(nextQuestionObj);
	    }
	}

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map