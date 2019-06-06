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
    define(['ApiClient', 'model/APIOrderWorkBO', 'model/Point'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APIOrderWorkBO'), require('./Point'));
  } else {
    // Browser globals (root is window)
    if (!root.Api) {
      root.Api = {};
    }
    root.Api.APIAgentBO = factory(root.Api.ApiClient, root.Api.APIOrderWorkBO, root.Api.Point);
  }
}(this, function(ApiClient, APIOrderWorkBO, Point) {
  'use strict';




  /**
   * The APIAgentBO model module.
   * @module model/APIAgentBO
   * @version 1.0
   */

  /**
   * Constructs a new <code>APIAgentBO</code>.
   * @alias module:model/APIAgentBO
   * @class
   */
  var exports = function() {
    var _this = this;




















  };

  /**
   * Constructs a <code>APIAgentBO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APIAgentBO} obj Optional instance to populate.
   * @return {module:model/APIAgentBO} The populated <code>APIAgentBO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agentName')) {
        obj['agentName'] = ApiClient.convertToType(data['agentName'], 'String');
      }
      if (data.hasOwnProperty('agentPhone')) {
        obj['agentPhone'] = ApiClient.convertToType(data['agentPhone'], 'String');
      }
      if (data.hasOwnProperty('areaId')) {
        obj['areaId'] = ApiClient.convertToType(data['areaId'], 'String');
      }
      if (data.hasOwnProperty('businessTime')) {
        obj['businessTime'] = ApiClient.convertToType(data['businessTime'], 'String');
      }
      if (data.hasOwnProperty('contactMobile')) {
        obj['contactMobile'] = ApiClient.convertToType(data['contactMobile'], 'String');
      }
      if (data.hasOwnProperty('contactName')) {
        obj['contactName'] = ApiClient.convertToType(data['contactName'], 'String');
      }
      if (data.hasOwnProperty('distance')) {
        obj['distance'] = ApiClient.convertToType(data['distance'], 'Number');
      }
      if (data.hasOwnProperty('doingOrderWorks')) {
        obj['doingOrderWorks'] = ApiClient.convertToType(data['doingOrderWorks'], [APIOrderWorkBO]);
      }
      if (data.hasOwnProperty('existUmbrellNum')) {
        obj['existUmbrellNum'] = ApiClient.convertToType(data['existUmbrellNum'], 'Integer');
      }
      if (data.hasOwnProperty('idCard')) {
        obj['idCard'] = ApiClient.convertToType(data['idCard'], 'String');
      }
      if (data.hasOwnProperty('isBankCardNull')) {
        obj['isBankCardNull'] = ApiClient.convertToType(data['isBankCardNull'], 'Boolean');
      }
      if (data.hasOwnProperty('isPayPasswordNull')) {
        obj['isPayPasswordNull'] = ApiClient.convertToType(data['isPayPasswordNull'], 'Boolean');
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = Point.constructFromObject(data['location']);
      }
      if (data.hasOwnProperty('locationAddress')) {
        obj['locationAddress'] = ApiClient.convertToType(data['locationAddress'], 'String');
      }
      if (data.hasOwnProperty('locationDesc')) {
        obj['locationDesc'] = ApiClient.convertToType(data['locationDesc'], 'String');
      }
      if (data.hasOwnProperty('mobile')) {
        obj['mobile'] = ApiClient.convertToType(data['mobile'], 'String');
      }
      if (data.hasOwnProperty('money')) {
        obj['money'] = ApiClient.convertToType(data['money'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Integer');
      }
      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * 代理点名称
   * @member {String} agentName
   */
  exports.prototype['agentName'] = undefined;
  /**
   * 代理点电话
   * @member {String} agentPhone
   */
  exports.prototype['agentPhone'] = undefined;
  /**
   * @member {String} areaId
   */
  exports.prototype['areaId'] = undefined;
  /**
   * 营业时间
   * @member {String} businessTime
   */
  exports.prototype['businessTime'] = undefined;
  /**
   * 联系人电话
   * @member {String} contactMobile
   */
  exports.prototype['contactMobile'] = undefined;
  /**
   * 联系人姓名
   * @member {String} contactName
   */
  exports.prototype['contactName'] = undefined;
  /**
   * 距离
   * @member {Number} distance
   */
  exports.prototype['distance'] = undefined;
  /**
   * @member {Array.<module:model/APIOrderWorkBO>} doingOrderWorks
   */
  exports.prototype['doingOrderWorks'] = undefined;
  /**
   * 存在的金箍棒数量
   * @member {Integer} existUmbrellNum
   */
  exports.prototype['existUmbrellNum'] = undefined;
  /**
   *  联系人身份证
   * @member {String} idCard
   */
  exports.prototype['idCard'] = undefined;
  /**
   * 银行卡记录是否为空，true 空，false非空
   * @member {Boolean} isBankCardNull
   */
  exports.prototype['isBankCardNull'] = undefined;
  /**
   * 提现密码是否为空，true 空，false非空
   * @member {Boolean} isPayPasswordNull
   */
  exports.prototype['isPayPasswordNull'] = undefined;
  /**
   * @member {module:model/Point} location
   */
  exports.prototype['location'] = undefined;
  /**
   * 经纬度转换的地址
   * @member {String} locationAddress
   */
  exports.prototype['locationAddress'] = undefined;
  /**
   * 地址详情
   * @member {String} locationDesc
   */
  exports.prototype['locationDesc'] = undefined;
  /**
   * 手机
   * @member {String} mobile
   */
  exports.prototype['mobile'] = undefined;
  /**
   * 余额
   * @member {Number} money
   */
  exports.prototype['money'] = undefined;
  /**
   * 状态 1：正常，2禁用 
   * @member {Integer} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Integer} uid
   */
  exports.prototype['uid'] = undefined;



  return exports;
}));


