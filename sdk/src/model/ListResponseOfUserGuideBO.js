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
    define(['ApiClient', 'model/UserGuideBO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserGuideBO'));
  } else {
    // Browser globals (root is window)
    if (!root.Api) {
      root.Api = {};
    }
    root.Api.ListResponseOfUserGuideBO = factory(root.Api.ApiClient, root.Api.UserGuideBO);
  }
}(this, function(ApiClient, UserGuideBO) {
  'use strict';




  /**
   * The ListResponseOfUserGuideBO model module.
   * @module model/ListResponseOfUserGuideBO
   * @version 1.0
   */

  /**
   * Constructs a new <code>ListResponseOfUserGuideBO</code>.
   * @alias module:model/ListResponseOfUserGuideBO
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ListResponseOfUserGuideBO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListResponseOfUserGuideBO} obj Optional instance to populate.
   * @return {module:model/ListResponseOfUserGuideBO} The populated <code>ListResponseOfUserGuideBO</code> instance.
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
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [UserGuideBO]);
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
   * @member {Array.<module:model/UserGuideBO>} items
   */
  exports.prototype['items'] = undefined;
  /**
   * @member {Boolean} success
   */
  exports.prototype['success'] = undefined;



  return exports;
}));


