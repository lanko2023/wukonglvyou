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
    define(['ApiClient', 'model/APIMessageBO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APIMessageBO'));
  } else {
    // Browser globals (root is window)
    if (!root.Api) {
      root.Api = {};
    }
    root.Api.PageResponseOfAPIMessageBO = factory(root.Api.ApiClient, root.Api.APIMessageBO);
  }
}(this, function(ApiClient, APIMessageBO) {
  'use strict';




  /**
   * The PageResponseOfAPIMessageBO model module.
   * @module model/PageResponseOfAPIMessageBO
   * @version 1.0
   */

  /**
   * Constructs a new <code>PageResponseOfAPIMessageBO</code>.
   * @alias module:model/PageResponseOfAPIMessageBO
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>PageResponseOfAPIMessageBO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PageResponseOfAPIMessageBO} obj Optional instance to populate.
   * @return {module:model/PageResponseOfAPIMessageBO} The populated <code>PageResponseOfAPIMessageBO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], [APIMessageBO]);
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
      if (data.hasOwnProperty('error_description')) {
        obj['error_description'] = ApiClient.convertToType(data['error_description'], 'String');
      }
      if (data.hasOwnProperty('first')) {
        obj['first'] = ApiClient.convertToType(data['first'], 'Boolean');
      }
      if (data.hasOwnProperty('last')) {
        obj['last'] = ApiClient.convertToType(data['last'], 'Boolean');
      }
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'Integer');
      }
      if (data.hasOwnProperty('searchDate')) {
        obj['searchDate'] = ApiClient.convertToType(data['searchDate'], 'Date');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Integer');
      }
      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
      }
      if (data.hasOwnProperty('totalElements')) {
        obj['totalElements'] = ApiClient.convertToType(data['totalElements'], 'Integer');
      }
      if (data.hasOwnProperty('totalPages')) {
        obj['totalPages'] = ApiClient.convertToType(data['totalPages'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/APIMessageBO>} content
   */
  exports.prototype['content'] = undefined;
  /**
   * @member {String} error
   */
  exports.prototype['error'] = undefined;
  /**
   * @member {String} error_description
   */
  exports.prototype['error_description'] = undefined;
  /**
   * @member {Boolean} first
   */
  exports.prototype['first'] = undefined;
  /**
   * @member {Boolean} last
   */
  exports.prototype['last'] = undefined;
  /**
   * @member {Integer} number
   */
  exports.prototype['number'] = undefined;
  /**
   * @member {Date} searchDate
   */
  exports.prototype['searchDate'] = undefined;
  /**
   * @member {Integer} size
   */
  exports.prototype['size'] = undefined;
  /**
   * @member {Boolean} success
   */
  exports.prototype['success'] = undefined;
  /**
   * @member {Integer} totalElements
   */
  exports.prototype['totalElements'] = undefined;
  /**
   * @member {Integer} totalPages
   */
  exports.prototype['totalPages'] = undefined;



  return exports;
}));


