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
    define(['ApiClient', 'model/ListResponseOfAPIAgentBO', 'model/SingleResponseOfAPIUmHomeBO', 'model/SingleResponseOfAPIAgentBO', 'model/SingleResponseOfAPIUmMachineBO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ListResponseOfAPIAgentBO'), require('../model/SingleResponseOfAPIUmHomeBO'), require('../model/SingleResponseOfAPIAgentBO'), require('../model/SingleResponseOfAPIUmMachineBO'));
  } else {
    // Browser globals (root is window)
    if (!root.Api) {
      root.Api = {};
    }
    root.Api.UmmachinecontrollerApi = factory(root.Api.ApiClient, root.Api.ListResponseOfAPIAgentBO, root.Api.SingleResponseOfAPIUmHomeBO, root.Api.SingleResponseOfAPIAgentBO, root.Api.SingleResponseOfAPIUmMachineBO);
  }
}(this, function(ApiClient, ListResponseOfAPIAgentBO, SingleResponseOfAPIUmHomeBO, SingleResponseOfAPIAgentBO, SingleResponseOfAPIUmMachineBO) {
  'use strict';

  /**
   * Ummachinecontroller service.
   * @module api/UmmachinecontrollerApi
   * @version 1.0
   */

  /**
   * Constructs a new UmmachinecontrollerApi. 
   * @alias module:api/UmmachinecontrollerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the findAgentByDescUsingGET operation.
     * @callback module:api/UmmachinecontrollerApi~findAgentByDescUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListResponseOfAPIAgentBO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 根据描述查找代理点
     * @param {String} desc 描述
     * @param {Object} opts Optional parameters
     * @param {String} opts.pointType 坐标系类型,默认百度,百度坐标（BD09）、国测局坐标（火星坐标，GCJ02）、和WGS84坐标系
     * @param {module:api/UmmachinecontrollerApi~findAgentByDescUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListResponseOfAPIAgentBO}
     */
    this.findAgentByDescUsingGET = function(desc, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'desc' is set
      if (desc == undefined || desc == null) {
        throw "Missing the required parameter 'desc' when calling findAgentByDescUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'desc': desc,
        'pointType': opts['pointType']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2-password'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ListResponseOfAPIAgentBO;

      return this.apiClient.callApi(
        '/api/um_machine/agent_list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findByLocationAndDistanceUsingGET operation.
     * @callback module:api/UmmachinecontrollerApi~findByLocationAndDistanceUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SingleResponseOfAPIUmHomeBO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 根据位置查找金箍棒机与代理点
     * 根据位置查找棒机
     * 新增加的字段
     * 产品的id productTypeID
     * @param {Number} x 经度
     * @param {Number} y 纬度
     * @param {Integer} distance 距离
     * @param {Object} opts Optional parameters
     * @param {String} opts.dataType 查找数据类型,all,machine,agent
     * @param {String} opts.pointType 坐标系类型,默认百度坐标（BD09）、国测局坐标（火星坐标，GCJ02）、WGS84
     * @param {module:api/UmmachinecontrollerApi~findByLocationAndDistanceUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SingleResponseOfAPIUmHomeBO}
     */
    this.findByLocationAndDistanceUsingGET = function (productTypeID, x, y, distance, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'productTypeID' is set
      if (productTypeID == undefined || productTypeID == null) {
        throw "Missing the required parameter 'productTypeID' when calling findByLocationAndDistanceUsingGET";
      }

      // verify the required parameter 'x' is set
      if (x == undefined || x == null) {
        throw "Missing the required parameter 'x' when calling findByLocationAndDistanceUsingGET";
      }

      // verify the required parameter 'y' is set
      if (y == undefined || y == null) {
        throw "Missing the required parameter 'y' when calling findByLocationAndDistanceUsingGET";
      }

      // verify the required parameter 'distance' is set
      if (distance == undefined || distance == null) {
        throw "Missing the required parameter 'distance' when calling findByLocationAndDistanceUsingGET";
      }

      var pathParams = {
        
      };
      var queryParams = {
        'productTypeID': productTypeID,
        'x': x,
        'y': y,
        'distance': distance,
        'dataType': opts['dataType'],
        'pointType': opts['pointType']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2-clientcredentials'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SingleResponseOfAPIUmHomeBO;

      return this.apiClient.callApi(
        '/api/um_machine/find_by_location', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAgentUsingGET operation.
     * @callback module:api/UmmachinecontrollerApi~getAgentUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SingleResponseOfAPIAgentBO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 获取代理点信息
     * @param {Integer} code 代理点id
     * @param {Object} opts Optional parameters
     * @param {String} opts.pointType 坐标系类型,默认百度,百度坐标（BD09）、国测局坐标（火星坐标，GCJ02）、和WGS84坐标系
     * @param {module:api/UmmachinecontrollerApi~getAgentUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SingleResponseOfAPIAgentBO}
     */
    this.getAgentUsingGET = function(code, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'code' is set
      if (code == undefined || code == null) {
        throw "Missing the required parameter 'code' when calling getAgentUsingGET";
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
      var returnType = SingleResponseOfAPIAgentBO;

      return this.apiClient.callApi(
        '/api/um_machine/get_agent', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMachineUsingGET operation.
     * @callback module:api/UmmachinecontrollerApi~getMachineUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SingleResponseOfAPIUmMachineBO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 获取棒机信息
     * @param {String} code 编号
     * @param {Object} opts Optional parameters
     * @param {String} opts.pointType 坐标系类型,默认百度,百度坐标（BD09）、国测局坐标（火星坐标，GCJ02）、和WGS84坐标系
     * @param {module:api/UmmachinecontrollerApi~getMachineUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SingleResponseOfAPIUmMachineBO}
     */
    this.getMachineUsingGET = function(code, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'code' is set
      if (code == undefined || code == null) {
        throw "Missing the required parameter 'code' when calling getMachineUsingGET";
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
      var returnType = SingleResponseOfAPIUmMachineBO;

      return this.apiClient.callApi(
        '/api/um_machine/get_machine', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
