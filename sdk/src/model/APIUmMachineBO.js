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
    define(['ApiClient', 'model/APIOrderWorkBO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APIOrderWorkBO'));
  } else {
    // Browser globals (root is window)
    if (!root.Api) {
      root.Api = {};
    }
    root.Api.APIUmMachineBO = factory(root.Api.ApiClient, root.Api.APIOrderWorkBO);
  }
}(this, function(ApiClient, APIOrderWorkBO) {
  'use strict';




  /**
   * The APIUmMachineBO model module.
   * @module model/APIUmMachineBO
   * @version 1.0
   */

  /**
   * Constructs a new <code>APIUmMachineBO</code>.
   * @alias module:model/APIUmMachineBO
   * @class
   */
  var exports = function() {
    var _this = this;



















  };

  /**
   * Constructs a <code>APIUmMachineBO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APIUmMachineBO} obj Optional instance to populate.
   * @return {module:model/APIUmMachineBO} The populated <code>APIUmMachineBO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('areaId')) {
        obj['areaId'] = ApiClient.convertToType(data['areaId'], 'String');
      }
      if (data.hasOwnProperty('assetNumber')) {
        obj['assetNumber'] = ApiClient.convertToType(data['assetNumber'], 'String');
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
      if (data.hasOwnProperty('idlePositionNum')) {
        obj['idlePositionNum'] = ApiClient.convertToType(data['idlePositionNum'], 'Integer');
      }
      if (data.hasOwnProperty('lastHeartbeat')) {
        obj['lastHeartbeat'] = ApiClient.convertToType(data['lastHeartbeat'], 'Date');
      }
      if (data.hasOwnProperty('lastLocationTime')) {
        obj['lastLocationTime'] = ApiClient.convertToType(data['lastLocationTime'], 'Date');
      }
      if (data.hasOwnProperty('locationAddress')) {
        obj['locationAddress'] = ApiClient.convertToType(data['locationAddress'], 'String');
      }
      if (data.hasOwnProperty('locationDesc')) {
        obj['locationDesc'] = ApiClient.convertToType(data['locationDesc'], 'String');
      }
      if (data.hasOwnProperty('locationLat')) {
        obj['locationLat'] = ApiClient.convertToType(data['locationLat'], 'Number');
      }
      if (data.hasOwnProperty('locationLon')) {
        obj['locationLon'] = ApiClient.convertToType(data['locationLon'], 'Number');
      }
      if (data.hasOwnProperty('onofList')) {
        obj['onofList'] = ApiClient.convertToType(data['onofList'], ['Boolean']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Integer');
      }
      if (data.hasOwnProperty('typeCode')) {
        obj['typeCode'] = ApiClient.convertToType(data['typeCode'], 'String');
      }
      if (data.hasOwnProperty('typeId')) {
        obj['typeId'] = ApiClient.convertToType(data['typeId'], 'Integer');
      }
      if (data.hasOwnProperty('typeName')) {
        obj['typeName'] = ApiClient.convertToType(data['typeName'], 'String');
      }
      if (data.hasOwnProperty('umbrellCodes')) {
        obj['umbrellCodes'] = ApiClient.convertToType(data['umbrellCodes'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {String} areaId
   */
  exports.prototype['areaId'] = undefined;
  /**
   * 棒机编号
   * @member {String} assetNumber
   */
  exports.prototype['assetNumber'] = undefined;
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
   * 空闲的位置
   * @member {Integer} idlePositionNum
   */
  exports.prototype['idlePositionNum'] = undefined;
  /**
   * 最后心跳时间
   * @member {Date} lastHeartbeat
   */
  exports.prototype['lastHeartbeat'] = undefined;
  /**
   * 最后位置修改时间
   * @member {Date} lastLocationTime
   */
  exports.prototype['lastLocationTime'] = undefined;
  /**
   * @member {String} locationAddress
   */
  exports.prototype['locationAddress'] = undefined;
  /**
   * @member {String} locationDesc
   */
  exports.prototype['locationDesc'] = undefined;
  /**
   * @member {Number} locationLat
   */
  exports.prototype['locationLat'] = undefined;
  /**
   * @member {Number} locationLon
   */
  exports.prototype['locationLon'] = undefined;
  /**
   * 通道开关情况
   * @member {Array.<Boolean>} onofList
   */
  exports.prototype['onofList'] = undefined;
  /**
   * 棒机状态 1正常，2禁用
   * @member {Integer} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} typeCode
   */
  exports.prototype['typeCode'] = undefined;
  /**
   * @member {Integer} typeId
   */
  exports.prototype['typeId'] = undefined;
  /**
   * @member {String} typeName
   */
  exports.prototype['typeName'] = undefined;
  /**
   * 机器上的所有金箍棒
   * @member {Array.<String>} umbrellCodes
   */
  exports.prototype['umbrellCodes'] = undefined;



  return exports;
}));


