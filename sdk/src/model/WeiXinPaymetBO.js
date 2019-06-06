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
    root.Api.WeiXinPaymetBO = factory(root.Api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The WeiXinPaymetBO model module.
   * @module model/WeiXinPaymetBO
   * @version 1.0
   */

  /**
   * Constructs a new <code>WeiXinPaymetBO</code>.
   * @alias module:model/WeiXinPaymetBO
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>WeiXinPaymetBO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WeiXinPaymetBO} obj Optional instance to populate.
   * @return {module:model/WeiXinPaymetBO} The populated <code>WeiXinPaymetBO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('appId')) {
        obj['appId'] = ApiClient.convertToType(data['appId'], 'String');
      }
      if (data.hasOwnProperty('nonceStr')) {
        obj['nonceStr'] = ApiClient.convertToType(data['nonceStr'], 'String');
      }
      if (data.hasOwnProperty('package1')) {
        obj['package1'] = ApiClient.convertToType(data['package1'], 'String');
      }
      if (data.hasOwnProperty('partnerId')) {
        obj['partnerId'] = ApiClient.convertToType(data['partnerId'], 'String');
      }
      if (data.hasOwnProperty('prepayId')) {
        obj['prepayId'] = ApiClient.convertToType(data['prepayId'], 'String');
      }
      if (data.hasOwnProperty('sign')) {
        obj['sign'] = ApiClient.convertToType(data['sign'], 'String');
      }
      if (data.hasOwnProperty('timeStamp')) {
        obj['timeStamp'] = ApiClient.convertToType(data['timeStamp'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} appId
   */
  exports.prototype['appId'] = undefined;
  /**
   * @member {String} nonceStr
   */
  exports.prototype['nonceStr'] = undefined;
  /**
   * @member {String} package1
   */
  exports.prototype['package1'] = undefined;
  /**
   * @member {String} partnerId
   */
  exports.prototype['partnerId'] = undefined;
  /**
   * @member {String} prepayId
   */
  exports.prototype['prepayId'] = undefined;
  /**
   * @member {String} sign
   */
  exports.prototype['sign'] = undefined;
  /**
   * @member {String} timeStamp
   */
  exports.prototype['timeStamp'] = undefined;



  return exports;
}));


