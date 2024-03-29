(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['superagent'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('superagent'));
    } else {
        // Browser globals (root is window)
        if (!root.Api) {
            root.Api = {};
        }
        root.Api.ApiClient = factory(root.superagent);
    }
}(this, function (superagent) {
    'use strict';

    /**
     * @module ApiClient
     * @version 1.0
     */

    /**
     * Manages low level client-server communications, parameter marshalling, etc. There should not be any need for an
     * application to use this class directly - the *Api and model classes provide the public API for the service. The
     * contents of this file should be regarded as internal but are documented for completeness.
     * @alias module:ApiClient
     * @class
     */
    var exports = function () {
        /**
         * The base URL against which to resolve every API call's (relative) path.
         * @type {String}
         * @default https://localhost:8083/    106.14.251.119:13020
         */
        this.basePath = getApp().globalData.apiPath.replace(/\/+$/, '');
        //this.basePath = 'http://120.24.252.218:14020/'.replace(/\/+$/, '');
        //this.basePath = 'http://192.168.1.14:8083/'.replace(/\/+$/, '');

        /**
         * The authentication methods to be included for all API calls.
         * @type {Array.<String>}
         */
        this.authentications = {
            'oauth2-clientcredentials': {type: 'oauth2'},
            'oauth2-password': {type: 'oauth2'}
        };
        /**
         * The default HTTP headers to be included for all API calls.
         * @type {Array.<String>}
         * @default {}
         */
        this.defaultHeaders = {};

        /**
         * The default HTTP timeout for all API calls.
         * @type {Number}
         * @default 60000
         */
        this.timeout = 60000;
    };

    /**
     * Returns a string representation for an actual parameter.
     * @param param The actual parameter.
     * @returns {String} The string representation of <code>param</code>.
     */
    exports.prototype.paramToString = function (param) {
        if (param == undefined || param == null) {
            return '';
        }
        if (param instanceof Date) {
            return param.toJSON();
        }
        return param.toString();
    };

    /**
     * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
     * NOTE: query parameters are not handled here.
     * @param {String} path The path to append to the base URL.
     * @param {Object} pathParams The parameter values to append.
     * @returns {String} The encoded path with parameter values substituted.
     */
    exports.prototype.buildUrl = function (path, pathParams) {
        if (!path.match(/^\//)) {
            path = '/' + path;
        }
        var url = this.basePath + path;
        var _this = this;
        url = url.replace(/\{([\w-]+)\}/g, function (fullMatch, key) {
            var value;
            if (pathParams.hasOwnProperty(key)) {
                value = _this.paramToString(pathParams[key]);
            } else {
                value = fullMatch;
            }
            return encodeURIComponent(value);
        });
        return url;
    };

    /**
     * Checks whether the given content type represents JSON.<br>
     * JSON content type examples:<br>
     * <ul>
     * <li>application/json</li>
     * <li>application/json; charset=UTF8</li>
     * <li>APPLICATION/JSON</li>
     * </ul>
     * @param {String} contentType The MIME content type to check.
     * @returns {Boolean} <code>true</code> if <code>contentType</code> represents JSON, otherwise <code>false</code>.
     */
    exports.prototype.isJsonMime = function (contentType) {
        return Boolean(contentType != null && contentType.match(/^application\/json(;.*)?$/i));
    };

    /**
     * Chooses a content type from the given array, with JSON preferred; i.e. return JSON if included, otherwise return the first.
     * @param {Array.<String>} contentTypes
     * @returns {String} The chosen content type, preferring JSON.
     */
    exports.prototype.jsonPreferredMime = function (contentTypes) {
        for (var i = 0; i < contentTypes.length; i++) {
            if (this.isJsonMime(contentTypes[i])) {
                return contentTypes[i];
            }
        }
        return contentTypes[0];
    };

    /**
     * Checks whether the given parameter value represents file-like content.
     * @param param The parameter to check.
     * @returns {Boolean} <code>true</code> if <code>param</code> represents a file.
     */
    exports.prototype.isFileParam = function (param) {
        // fs.ReadStream in Node.js (but not in runtime like browserify)
        /*
         if (typeof window === 'undefined' &&
         typeof require === 'function' &&
         require('fs') &&
         param instanceof require('fs').ReadStream) {
         return true;
         }
         */
        // Buffer in Node.js
        if (typeof Buffer === 'function' && param instanceof Buffer) {
            return true;
        }
        // Blob in browser
        if (typeof Blob === 'function' && param instanceof Blob) {
            return true;
        }
        // File in browser (it seems File object is also instance of Blob, but keep this for safe)
        if (typeof File === 'function' && param instanceof File) {
            return true;
        }
        return false;
    };

    /**
     * Normalizes parameter values:
     * <ul>
     * <li>remove nils</li>
     * <li>keep files and arrays</li>
     * <li>format to string with `paramToString` for other cases</li>
     * </ul>
     * @param {Object.<String, Object>} params The parameters as object properties.
     * @returns {Object.<String, Object>} normalized parameters.
     */
    exports.prototype.normalizeParams = function (params) {
        var newParams = {};
        for (var key in params) {
            if (params.hasOwnProperty(key) && params[key] != undefined && params[key] != null) {
                var value = params[key];
                if (this.isFileParam(value) || Array.isArray(value)) {
                    newParams[key] = value;
                } else {
                    newParams[key] = this.paramToString(value);
                }
            }
        }
        return newParams;
    };

    /**
     * Enumeration of collection format separator strategies.
     * @enum {String}
     * @readonly
     */
    exports.CollectionFormatEnum = {
        /**
         * Comma-separated values. Value: <code>csv</code>
         * @const
         */
        CSV: ',',
        /**
         * Space-separated values. Value: <code>ssv</code>
         * @const
         */
        SSV: ' ',
        /**
         * Tab-separated values. Value: <code>tsv</code>
         * @const
         */
        TSV: '\t',
        /**
         * Pipe(|)-separated values. Value: <code>pipes</code>
         * @const
         */
        PIPES: '|',
        /**
         * Native array. Value: <code>multi</code>
         * @const
         */
        MULTI: 'multi'
    };

    /**
     * Builds a string representation of an array-type actual parameter, according to the given collection format.
     * @param {Array} param An array parameter.
     * @param {module:ApiClient.CollectionFormatEnum} collectionFormat The array element separator strategy.
     * @returns {String|Array} A string representation of the supplied collection, using the specified delimiter. Returns
     * <code>param</code> as is if <code>collectionFormat</code> is <code>multi</code>.
     */
    exports.prototype.buildCollectionParam = function buildCollectionParam(param, collectionFormat) {
        if (param == null) {
            return null;
        }
        switch (collectionFormat) {
            case 'csv':
                return param.map(this.paramToString).join(',');
            case 'ssv':
                return param.map(this.paramToString).join(' ');
            case 'tsv':
                return param.map(this.paramToString).join('\t');
            case 'pipes':
                return param.map(this.paramToString).join('|');
            case 'multi':
                // return the array directly as SuperAgent will handle it as expected
                return param.map(this.paramToString);
            default:
                throw new Error('Unknown collection format: ' + collectionFormat);
        }
    };

    /**
     * Applies authentication headers to the request.
     * @param {Object} request The request object created by a <code>superagent()</code> call.
     * @param {Array.<String>} authNames An array of authentication method names.
     */
    exports.prototype.applyAuthToRequest = function (request, authNames) {
        var _this = this;
        authNames.forEach(function (authName) {
            var auth = _this.authentications[authName];
            switch (auth.type) {
                case 'basic':
                    if (auth.username || auth.password) {
                        request.auth(auth.username || '', auth.password || '');
                    }
                    break;
                case 'apiKey':
                    if (auth.apiKey) {
                        var data = {};
                        if (auth.apiKeyPrefix) {
                            data[auth.name] = auth.apiKeyPrefix + ' ' + auth.apiKey;
                        } else {
                            data[auth.name] = auth.apiKey;
                        }
                        if (auth['in'] === 'header') {
                            request.set(data);
                        } else {
                            request.query(data);
                        }
                    }
                    break;
                case 'oauth2':
                    auth.accessToken = wx.getStorageSync('access_token');
                    //console.log("auth.accessToken:" + auth.accessToken);
                    //console.log(wx.getStorageSync('access_token'));
                    if (auth.accessToken) {
                        request.set({'Authorization': 'Bearer ' + auth.accessToken});
                    }
                    break;
                default:
                    throw new Error('Unknown authentication type: ' + auth.type);
            }
        });
    };

    /**
     * Deserializes an HTTP response body into a value of the specified type.
     * @param {Object} response A SuperAgent response object.
     * @param {(String|Array.<String>|Object.<String, Object>|Function)} returnType The type to return. Pass a string for simple types
     * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
     * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
     * all properties on <code>data<code> will be converted to this type.
     * @returns A value of the specified type.
     */
    exports.prototype.deserialize = function deserialize(response, returnType) {
        if (response == null || returnType == null) {
            return null;
        }
        // Rely on SuperAgent for parsing response body.
        // See http://visionmedia.github.io/superagent/#parsing-response-bodies
        var data = response.body;
        if (data == null) {
            // SuperAgent does not always produce a body; use the unparsed response as a fallback
            data = response.text;
        }
        return exports.convertToType(data, returnType);
    };

    /**
     * Callback function to receive the result of the operation.
     * @callback module:ApiClient~callApiCallback
     * @param {String} error Error message, if any.
     * @param data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Invokes the REST service using the supplied settings and parameters.
     * @param {String} path The base URL to invoke.
     * @param {String} httpMethod The HTTP method to use.
     * @param {Object.<String, String>} pathParams A map of path parameters and their values.
     * @param {Object.<String, Object>} queryParams A map of query parameters and their values.
     * @param {Object.<String, Object>} headerParams A map of header parameters and their values.
     * @param {Object.<String, Object>} formParams A map of form parameters and their values.
     * @param {Object} bodyParam The value to pass as the request body.
     * @param {Array.<String>} authNames An array of authentication type names.
     * @param {Array.<String>} contentTypes An array of request MIME types.
     * @param {Array.<String>} accepts An array of acceptable response MIME types.
     * @param {(String|Array|ObjectFunction)} returnType The required type to return; can be a string for simple types or the
     * constructor for a complex type.
     * @param {module:ApiClient~callApiCallback} callback The callback function.
     * @returns {Object} The SuperAgent request object.
     */
    exports.prototype.callApi = function callApi(path, httpMethod, pathParams,
                                                 queryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts,
                                                 returnType, callback) {


        //console.log(this.normalizeParams(queryParams));
        wx.setStorage({
          key: 'qrcode',
          data: this.normalizeParams(queryParams),
        })

        var _this = this;
        var url = this.buildUrl(path, pathParams);
        var request = superagent(httpMethod, url);

        // apply authentications
        this.applyAuthToRequest(request, authNames);

        // set query parameters
        request.query(this.normalizeParams(queryParams));

        // set header parameters
        request.set(this.defaultHeaders).set(this.normalizeParams(headerParams));

        // set request timeout
        request.timeout(this.timeout);


        var contentType = this.jsonPreferredMime(contentTypes);
        //console.log(contentType);

        if (contentType) {
            request.type(contentType);
        } else if (!request.header['Content-Type']) {
            request.type('application/json');
        }
        if (contentType === 'application/x-www-form-urlencoded') {
            request.send(this.normalizeParams(formParams));
        } else if (contentType == 'multipart/form-data') {
            var _formParams = this.normalizeParams(formParams);
            for (var key in _formParams) {
                if (_formParams.hasOwnProperty(key)) {
                    if (this.isFileParam(_formParams[key])) {
                        // file field
                        request.attach(key, _formParams[key]);
                    } else {
                        request.field(key, _formParams[key]);
                    }
                }
            }
        }

        var accept = this.jsonPreferredMime(accepts);

        var _header = {contentType: contentType};
        Object.assign(_header, this.defaultHeaders, this.normalizeParams(headerParams));
        _header["Authorization"] = request.getHeader("Authorization");


        var queryString;
        var reqUrl = url;
        if (queryParams) {
            queryString = toQueryString(this.normalizeParams(queryParams));
            reqUrl = reqUrl + "?" + queryString
        }

        var handleRequestErr = function (res) {
            if (res.statusCode != 200) {
                // wx.showToast({
                //     title: "出错了..." + res.statusCode,
                //     duration: 3000
                // });
            }
            if (res.statusCode == 401) {
                //授权过期
                // wx.showLoading({
                //     title: '授权中...',
                //     mask: true
                // });

                getApp().globalData.userInfo = null;
                getApp().getUserInfo(function() {
                    _header["Authorization"] = 'Bearer ' + wx.getStorageSync('access_token');
                    if (bodyParam) {
                        wx.request({
                            url: reqUrl, //仅为示例，并非真实的接口地址
                            method: httpMethod,
                            data: bodyParam,
                            header: _header,
                            success: function (res) {
                                wx.hideLoading();
                                if (res.statusCode == 401) {
                                    wx.showModal({
                                        title: '提示信息',
                                        showCancel: false,
                                        content: "授权失败,请重试!",
                                        success: function (res) {
                                            if (callback) {
                                                handleRequestErr(res);
                                            }
                                        }
                                    });
                                }
                            }
                        });
                    } else {
                        wx.request({
                            url: reqUrl, //仅为示例，并非真实的接口地址
                            method: httpMethod,
                            header: _header,
                            success: function (res) {
                                wx.hideLoading();
                                handleRequestErr(res);
                            }
                        });
                    }
                });
            } else {
                if (callback && typeof callback == "function") {
                    callback(res);
                }
            }
        }

        if (bodyParam) {
            wx.request({
                url: reqUrl, //仅为示例，并非真实的接口地址
                method: httpMethod,
                data: bodyParam,
                header: _header,
                success: function (res) {
                    handleRequestErr(res);
                }
            });
        } else {
            wx.request({
                url: reqUrl, //仅为示例，并非真实的接口地址
                method: httpMethod,
                header: _header,
                success: function (res) {
                    //console.log(res);
                    handleRequestErr(res);
                }
            });
        }


        /*
         request.end(function(error, response) {
         if (callback) {
         var data = null;
         if (!error) {
         data = _this.deserialize(response, returnType);
         }
         callback(error, data, response);
         }
         });
         */

        return request;
    };

    function toQueryString(val) {
        if ('string' != typeof val) {
            return serialize(val);
        }
        return val;
    };

    /**
     * Serialize the given `obj`.
     *
     * @param {Object} obj
     * @return {String}
     * @api private
     */

    function serialize(obj) {
        if (!isObject(obj)) return obj;
        var pairs = [];
        for (var key in obj) {
            if (null != obj[key]) {
                pushEncodedKeyValuePair(pairs, key, obj[key]);
            }
        }
        return pairs.join('&');
    }

    function isObject(obj) {
        return obj === Object(obj);
    }

    /**
     * Helps 'serialize' with serializing arrays.
     * Mutates the pairs array.
     *
     * @param {Array} pairs
     * @param {String} key
     * @param {Mixed} val
     */

    function pushEncodedKeyValuePair(pairs, key, val) {
        if (Array.isArray(val)) {
            return val.forEach(function (v) {
                pushEncodedKeyValuePair(pairs, key, v);
            });
        }
        pairs.push(encodeURIComponent(key)
            + '=' + encodeURIComponent(val));
    }


    /**
     * Parses an ISO-8601 string representation of a date value.
     * @param {String} str The date value as a string.
     * @returns {Date} The parsed date object.
     */
    exports.parseDate = function (str) {
        return new Date(str.replace(/T/i, ' '));
    };

    /**
     * Converts a value to the specified type.
     * @param {(String|Object)} data The data to convert, as a string or object.
     * @param {(String|Array.<String>|Object.<String, Object>|Function)} type The type to return. Pass a string for simple types
     * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
     * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
     * all properties on <code>data<code> will be converted to this type.
     * @returns An instance of the specified type.
     */
    exports.convertToType = function (data, type) {
        switch (type) {
            case 'Boolean':
                return Boolean(data);
            case 'Integer':
                return parseInt(data, 10);
            case 'Number':
                return parseFloat(data);
            case 'String':
                return String(data);
            case 'Date':
                return this.parseDate(String(data));
            default:
                if (type === Object) {
                    // generic object, return directly
                    return data;
                } else if (typeof type === 'function') {
                    // for model type like: User
                    return type.constructFromObject(data);
                } else if (Array.isArray(type)) {
                    // for array type like: ['String']
                    var itemType = type[0];
                    return data.map(function (item) {
                        return exports.convertToType(item, itemType);
                    });
                } else if (typeof type === 'object') {
                    // for plain object type like: {'String': 'Integer'}
                    var keyType, valueType;
                    for (var k in type) {
                        if (type.hasOwnProperty(k)) {
                            keyType = k;
                            valueType = type[k];
                            break;
                        }
                    }
                    var result = {};
                    for (var k in data) {
                        if (data.hasOwnProperty(k)) {
                            var key = exports.convertToType(k, keyType);
                            var value = exports.convertToType(data[k], valueType);
                            result[key] = value;
                        }
                    }
                    return result;
                } else {
                    // for unknown type, return the data directly
                    return data;
                }
        }
    };

    /**
     * Constructs a new map or array model from REST data.
     * @param data {Object|Array} The REST data.
     * @param obj {Object|Array} The target object or array.
     */
    exports.constructFromObject = function (data, obj, itemType) {
        if (Array.isArray(data)) {
            for (var i = 0; i < data.length; i++) {
                if (data.hasOwnProperty(i))
                    obj[i] = exports.convertToType(data[i], itemType);
            }
        } else {
            for (var k in data) {
                if (data.hasOwnProperty(k))
                    obj[k] = exports.convertToType(data[k], itemType);
            }
        }
    };

    /**
     * The default API client implementation.
     * @type {module:ApiClient}
     */
    exports.instance = new exports();

    return exports;
}));
