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
    define(['ApiClient', 'model/APIUmHomeBO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APIUmHomeBO'));
  } else {
    // Browser globals (root is window)
    if (!root.Api) {
      root.Api = {};
    }
    root.Api.SingleResponseOfAPIUmHomeBO = factory(root.Api.ApiClient, root.Api.APIUmHomeBO);
  }
}(this, function(ApiClient, APIUmHomeBO) {
  'use strict';




  /**
   * The SingleResponseOfAPIUmHomeBO model module.
   * @module model/SingleResponseOfAPIUmHomeBO
   * @version 1.0
   */

  /**
   * Constructs a new <code>SingleResponseOfAPIUmHomeBO</code>.
   * @alias module:model/SingleResponseOfAPIUmHomeBO
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>SingleResponseOfAPIUmHomeBO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SingleResponseOfAPIUmHomeBO} obj Optional instance to populate.
   * @return {module:model/SingleResponseOfAPIUmHomeBO} The populated <code>SingleResponseOfAPIUmHomeBO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
      if (data.hasOwnProperty('error_description')) {
        obj['error_description'] = ApiClient.convertToType(data['error_description'], 'String');
      }
      if (data.hasOwnProperty('item')) {
        obj['item'] = APIUmHomeBO.constructFromObject(data['item']);
      }
      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} error
   */
  exports.prototype['error'] = undefined;
  /**
   * @member {String} error_description
   */
  exports.prototype['error_description'] = undefined;
  /**
   * @member {module:model/APIUmHomeBO} item
   */
  exports.prototype['item'] = undefined;
  /**
   * @member {Boolean} success
   */
  exports.prototype['success'] = undefined;



  return exports;
}));


