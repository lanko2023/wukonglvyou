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
    define(['ApiClient', 'model/SingleResponseOfAPIUmbrellaBO', 'model/SimpleResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/SingleResponseOfAPIUmbrellaBO'), require('../model/SimpleResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Api) {
      root.Api = {};
    }
    root.Api.UmbrellacontrollerApi = factory(root.Api.ApiClient, root.Api.SingleResponseOfAPIUmbrellaBO, root.Api.SimpleResponse);
  }
}(this, function(ApiClient, SingleResponseOfAPIUmbrellaBO, SimpleResponse) {
  'use strict';

  /**
   * Umbrellacontroller service.
   * @module api/UmbrellacontrollerApi
   * @version 1.0
   */

  /**
   * Constructs a new UmbrellacontrollerApi. 
   * @alias module:api/UmbrellacontrollerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getUmbrellaUsingGET operation.
     * @callback module:api/UmbrellacontrollerApi~getUmbrellaUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SingleResponseOfAPIUmbrellaBO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 获取金箍棒信息
     * @param {String} code 金箍棒编号
     * @param {Object} opts Optional parameters
     * @param {String} opts.pointType 坐标系类型,默认百度,百度坐标（BD09）、国测局坐标（火星坐标，GCJ02）、和WGS84坐标系
     * @param {module:api/UmbrellacontrollerApi~getUmbrellaUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SingleResponseOfAPIUmbrellaBO}
     */
    this.getUmbrellaUsingGET = function(code, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'code' is set
      if (code == undefined || code == null) {
        throw "Missing the required parameter 'code' when calling getUmbrellaUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'code': code,
        'pointType': opts['pointType']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2-password'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SingleResponseOfAPIUmbrellaBO;

      return this.apiClient.callApi(
        '/api/um_umbrella/get_umbrella', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the turnOnOrOffLampUsingGET operation.
     * @callback module:api/UmbrellacontrollerApi~turnOnOrOffLampUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SimpleResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 远程控制棒的开关灯
     * 远程控制棒的开关灯
     * @param {String} identification 开关标识 open 开灯，close 关灯
     * @param {module:api/UmbrellacontrollerApi~turnOnOrOffLampUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SimpleResponse}
     */
    this.turnOnOrOffLampUsingGET = function(identification, callback) {
      var postBody = null;

      // verify the required parameter 'identification' is set
      if (identification == undefined || identification == null) {
        throw "Missing the required parameter 'identification' when calling turnOnOrOffLampUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'identification': identification
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
        '/api/um_umbrella/turn_on_off', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));