/**
 * 彩虹共享雨金箍棒api
 * Android、iOS操作类
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/SimpleResponse', 'model/PageResponseOfAPIMessageBO', 'model/SingleResponseOfAPIMessageBO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/SimpleResponse'), require('../model/PageResponseOfAPIMessageBO'), require('../model/SingleResponseOfAPIMessageBO'));
  } else {
    // Browser globals (root is window)
    if (!root.Api) {
      root.Api = {};
    }
    root.Api.MessagecontrollerApi = factory(root.Api.ApiClient, root.Api.SimpleResponse, root.Api.PageResponseOfAPIMessageBO, root.Api.SingleResponseOfAPIMessageBO);
  }
}(this, function(ApiClient, SimpleResponse, PageResponseOfAPIMessageBO, SingleResponseOfAPIMessageBO) {
  'use strict';

  /**
   * Messagecontroller service.
   * @module api/MessagecontrollerApi
   * @version 1.0
   */

  /**
   * Constructs a new MessagecontrollerApi. 
   * @alias module:api/MessagecontrollerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addShareTimesUsingPOST operation.
     * @callback module:api/MessagecontrollerApi~addShareTimesUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SimpleResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 增加图文分享次数
     * 增加图文分享次数
     * @param {Integer} id 系统消息id不存在
     * @param {module:api/MessagecontrollerApi~addShareTimesUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SimpleResponse}
     */
    this.addShareTimesUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling addShareTimesUsingPOST";
      }


      var pathParams = {
      };
      var queryParams = {
        'id': id
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2-password'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SimpleResponse;

      return this.apiClient.callApi(
        '/api/message/addShareTimes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sysListUsingGET operation.
     * @callback module:api/MessagecontrollerApi~sysListUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResponseOfAPIMessageBO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 拉取系统消息
     * 拉取系统消息.基于 sendTime 倒序查询
     * @param {String} userType userType,2:个人用户,3:维保,4:代理点用户
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.ltTime ltTime
     * @param {module:api/MessagecontrollerApi~sysListUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResponseOfAPIMessageBO}
     */
    this.sysListUsingGET = function(userType, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userType' is set
      if (userType == undefined || userType == null) {
        throw "Missing the required parameter 'userType' when calling sysListUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'userType': userType,
        'ltTime': opts['ltTime']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2-password'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResponseOfAPIMessageBO;

      return this.apiClient.callApi(
        '/api/message/sys_list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sysMessageDetailUsingPOST operation.
     * @callback module:api/MessagecontrollerApi~sysMessageDetailUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SingleResponseOfAPIMessageBO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 系统消息详情
     * @param {Integer} id id
     * @param {module:api/MessagecontrollerApi~sysMessageDetailUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SingleResponseOfAPIMessageBO}
     */
    this.sysMessageDetailUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling sysMessageDetailUsingPOST";
      }


      var pathParams = {
      };
      var queryParams = {
        'id': id
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2-password'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SingleResponseOfAPIMessageBO;

      return this.apiClient.callApi(
        '/api/message/sys_message_detail', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
