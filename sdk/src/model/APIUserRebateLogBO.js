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
    root.Api.APIUserRebateLogBO = factory(root.Api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The APIUserRebateLogBO model module.
   * @module model/APIUserRebateLogBO
   * @version 1.0
   */

  /**
   * Constructs a new <code>APIUserRebateLogBO</code>.
   * @alias module:model/APIUserRebateLogBO
   * @class
   */
  var exports = function() {
    var _this = this;
















  };

  /**
   * Constructs a <code>APIUserRebateLogBO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APIUserRebateLogBO} obj Optional instance to populate.
   * @return {module:model/APIUserRebateLogBO} The populated <code>APIUserRebateLogBO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agentId')) {
        obj['agentId'] = ApiClient.convertToType(data['agentId'], 'Integer');
      }
      if (data.hasOwnProperty('createTime')) {
        obj['createTime'] = ApiClient.convertToType(data['createTime'], 'Date');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('orderCode')) {
        obj['orderCode'] = ApiClient.convertToType(data['orderCode'], 'String');
      }
      if (data.hasOwnProperty('orderId')) {
        obj['orderId'] = ApiClient.convertToType(data['orderId'], 'Integer');
      }
      if (data.hasOwnProperty('raxRate')) {
        obj['raxRate'] = ApiClient.convertToType(data['raxRate'], 'Number');
      }
      if (data.hasOwnProperty('rebateAmount')) {
        obj['rebateAmount'] = ApiClient.convertToType(data['rebateAmount'], 'Number');
      }
      if (data.hasOwnProperty('rebateModel')) {
        obj['rebateModel'] = ApiClient.convertToType(data['rebateModel'], 'String');
      }
      if (data.hasOwnProperty('rebateRate')) {
        obj['rebateRate'] = ApiClient.convertToType(data['rebateRate'], 'Number');
      }
      if (data.hasOwnProperty('rebateType')) {
        obj['rebateType'] = ApiClient.convertToType(data['rebateType'], 'String');
      }
      if (data.hasOwnProperty('sendStatus')) {
        obj['sendStatus'] = ApiClient.convertToType(data['sendStatus'], 'Boolean');
      }
      if (data.hasOwnProperty('sendTime')) {
        obj['sendTime'] = ApiClient.convertToType(data['sendTime'], 'Date');
      }
      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'Integer');
      }
      if (data.hasOwnProperty('umbrellaCode')) {
        obj['umbrellaCode'] = ApiClient.convertToType(data['umbrellaCode'], 'String');
      }
      if (data.hasOwnProperty('umbrellaId')) {
        obj['umbrellaId'] = ApiClient.convertToType(data['umbrellaId'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} agentId
   */
  exports.prototype['agentId'] = undefined;
  /**
   * 创建时间
   * @member {Date} createTime
   */
  exports.prototype['createTime'] = undefined;
  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} orderCode
   */
  exports.prototype['orderCode'] = undefined;
  /**
   * @member {Integer} orderId
   */
  exports.prototype['orderId'] = undefined;
  /**
   * @member {Number} raxRate
   */
  exports.prototype['raxRate'] = undefined;
  /**
   * 收益金额
   * @member {Number} rebateAmount
   */
  exports.prototype['rebateAmount'] = undefined;
  /**
   * @member {String} rebateModel
   */
  exports.prototype['rebateModel'] = undefined;
  /**
   * @member {Number} rebateRate
   */
  exports.prototype['rebateRate'] = undefined;
  /**
   * 反润类型：'BORROW'借,'RETURN'还
   * @member {String} rebateType
   */
  exports.prototype['rebateType'] = undefined;
  /**
   * @member {Boolean} sendStatus
   */
  exports.prototype['sendStatus'] = undefined;
  /**
   * 收益时间
   * @member {Date} sendTime
   */
  exports.prototype['sendTime'] = undefined;
  /**
   * @member {Integer} uid
   */
  exports.prototype['uid'] = undefined;
  /**
   * @member {String} umbrellaCode
   */
  exports.prototype['umbrellaCode'] = undefined;
  /**
   * @member {Integer} umbrellaId
   */
  exports.prototype['umbrellaId'] = undefined;



  return exports;
}));


