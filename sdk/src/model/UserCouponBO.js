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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Api) {
      root.Api = {};
    }
    root.Api.UserCouponBO = factory(root.Api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserCouponBO model module.
   * @module model/UserCouponBO
   * @version 1.0
   */

  /**
   * Constructs a new <code>UserCouponBO</code>.
   * @alias module:model/UserCouponBO
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>UserCouponBO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserCouponBO} obj Optional instance to populate.
   * @return {module:model/UserCouponBO} The populated <code>UserCouponBO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('cityId')) {
        obj['cityId'] = ApiClient.convertToType(data['cityId'], 'String');
      }
      if (data.hasOwnProperty('cityName')) {
        obj['cityName'] = ApiClient.convertToType(data['cityName'], 'String');
      }
      if (data.hasOwnProperty('expireDate')) {
        obj['expireDate'] = ApiClient.convertToType(data['expireDate'], 'Date');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * @member {String} cityId
   */
  exports.prototype['cityId'] = undefined;
  /**
   * @member {String} cityName
   */
  exports.prototype['cityName'] = undefined;
  /**
   * 过期时间
   * @member {Date} expireDate
   */
  exports.prototype['expireDate'] = undefined;
  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * 来源
   * @member {String} source
   */
  exports.prototype['source'] = undefined;



  return exports;
}));


