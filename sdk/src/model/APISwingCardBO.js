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
    define(['ApiClient', 'model/APIUmOrderBO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APIUmOrderBO'));
  } else {
    // Browser globals (root is window)
    if (!root.Api) {
      root.Api = {};
    }
    root.Api.APISwingCardBO = factory(root.Api.ApiClient, root.Api.APIUmOrderBO);
  }
}(this, function(ApiClient, APIUmOrderBO) {
  'use strict';




  /**
   * The APISwingCardBO model module.
   * @module model/APISwingCardBO
   * @version 1.0
   */

  /**
   * Constructs a new <code>APISwingCardBO</code>.
   * @alias module:model/APISwingCardBO
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>APISwingCardBO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APISwingCardBO} obj Optional instance to populate.
   * @return {module:model/APISwingCardBO} The populated <code>APISwingCardBO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('borrowQrCode')) {
        obj['borrowQrCode'] = ApiClient.convertToType(data['borrowQrCode'], 'String');
      }
      if (data.hasOwnProperty('borrowQrCodeExpire')) {
        obj['borrowQrCodeExpire'] = ApiClient.convertToType(data['borrowQrCodeExpire'], 'Integer');
      }
      if (data.hasOwnProperty('isBorrow')) {
        obj['isBorrow'] = ApiClient.convertToType(data['isBorrow'], 'Boolean');
      }
      if (data.hasOwnProperty('isDistribute')) {
        obj['isDistribute'] = ApiClient.convertToType(data['isDistribute'], 'Boolean');
      }
      if (data.hasOwnProperty('isReturn')) {
        obj['isReturn'] = ApiClient.convertToType(data['isReturn'], 'Boolean');
      }
      if (data.hasOwnProperty('returnOrder')) {
        obj['returnOrder'] = APIUmOrderBO.constructFromObject(data['returnOrder']);
      }
    }
    return obj;
  }

  /**
   * 借金箍棒码
   * @member {String} borrowQrCode
   */
  exports.prototype['borrowQrCode'] = undefined;
  /**
   * 借金箍棒码有效时间
   * @member {Integer} borrowQrCodeExpire
   */
  exports.prototype['borrowQrCodeExpire'] = undefined;
  /**
   * 借金箍棒
   * @member {Boolean} isBorrow
   */
  exports.prototype['isBorrow'] = undefined;
  /**
   * 是否平台派发
   * @member {Boolean} isDistribute
   */
  exports.prototype['isDistribute'] = undefined;
  /**
   * 还金箍棒
   * @member {Boolean} isReturn
   */
  exports.prototype['isReturn'] = undefined;
  /**
   * 还金箍棒的订单
   * @member {module:model/APIUmOrderBO} returnOrder
   */
  exports.prototype['returnOrder'] = undefined;



  return exports;
}));


