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
    root.Api.APIOrderWorkBO = factory(root.Api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The APIOrderWorkBO model module.
   * @module model/APIOrderWorkBO
   * @version 1.0
   */

  /**
   * Constructs a new <code>APIOrderWorkBO</code>.
   * @alias module:model/APIOrderWorkBO
   * @class
   */
  var exports = function() {
    var _this = this;





































  };

  /**
   * Constructs a <code>APIOrderWorkBO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APIOrderWorkBO} obj Optional instance to populate.
   * @return {module:model/APIOrderWorkBO} The populated <code>APIOrderWorkBO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agentLocationAddress')) {
        obj['agentLocationAddress'] = ApiClient.convertToType(data['agentLocationAddress'], 'String');
      }
      if (data.hasOwnProperty('agentLocationDesc')) {
        obj['agentLocationDesc'] = ApiClient.convertToType(data['agentLocationDesc'], 'String');
      }
      if (data.hasOwnProperty('agentLocationLat')) {
        obj['agentLocationLat'] = ApiClient.convertToType(data['agentLocationLat'], 'Number');
      }
      if (data.hasOwnProperty('agentLocationLon')) {
        obj['agentLocationLon'] = ApiClient.convertToType(data['agentLocationLon'], 'Number');
      }
      if (data.hasOwnProperty('agentName')) {
        obj['agentName'] = ApiClient.convertToType(data['agentName'], 'String');
      }
      if (data.hasOwnProperty('agentPhone')) {
        obj['agentPhone'] = ApiClient.convertToType(data['agentPhone'], 'String');
      }
      if (data.hasOwnProperty('beginLat')) {
        obj['beginLat'] = ApiClient.convertToType(data['beginLat'], 'Number');
      }
      if (data.hasOwnProperty('beginLon')) {
        obj['beginLon'] = ApiClient.convertToType(data['beginLon'], 'Number');
      }
      if (data.hasOwnProperty('beginPlace')) {
        obj['beginPlace'] = ApiClient.convertToType(data['beginPlace'], 'String');
      }
      if (data.hasOwnProperty('beginTime')) {
        obj['beginTime'] = ApiClient.convertToType(data['beginTime'], 'Date');
      }
      if (data.hasOwnProperty('completeStatus')) {
        obj['completeStatus'] = ApiClient.convertToType(data['completeStatus'], 'Integer');
      }
      if (data.hasOwnProperty('createTime')) {
        obj['createTime'] = ApiClient.convertToType(data['createTime'], 'Date');
      }
      if (data.hasOwnProperty('dealImgs')) {
        obj['dealImgs'] = ApiClient.convertToType(data['dealImgs'], ['String']);
      }
      if (data.hasOwnProperty('dealRemark')) {
        obj['dealRemark'] = ApiClient.convertToType(data['dealRemark'], 'String');
      }
      if (data.hasOwnProperty('faultImgs')) {
        obj['faultImgs'] = ApiClient.convertToType(data['faultImgs'], ['String']);
      }
      if (data.hasOwnProperty('finishLat')) {
        obj['finishLat'] = ApiClient.convertToType(data['finishLat'], 'Number');
      }
      if (data.hasOwnProperty('finishLon')) {
        obj['finishLon'] = ApiClient.convertToType(data['finishLon'], 'Number');
      }
      if (data.hasOwnProperty('finishPlace')) {
        obj['finishPlace'] = ApiClient.convertToType(data['finishPlace'], 'String');
      }
      if (data.hasOwnProperty('finishTime')) {
        obj['finishTime'] = ApiClient.convertToType(data['finishTime'], 'Date');
      }
      if (data.hasOwnProperty('launchTime')) {
        obj['launchTime'] = ApiClient.convertToType(data['launchTime'], 'Date');
      }
      if (data.hasOwnProperty('machineCode')) {
        obj['machineCode'] = ApiClient.convertToType(data['machineCode'], 'String');
      }
      if (data.hasOwnProperty('machineLocationDesc')) {
        obj['machineLocationDesc'] = ApiClient.convertToType(data['machineLocationDesc'], 'String');
      }
      if (data.hasOwnProperty('machineLocationDetails')) {
        obj['machineLocationDetails'] = ApiClient.convertToType(data['machineLocationDetails'], 'String');
      }
      if (data.hasOwnProperty('machineLocationLon')) {
        obj['machineLocationLon'] = ApiClient.convertToType(data['machineLocationLon'], 'Number');
      }
      if (data.hasOwnProperty('machineLocationlat')) {
        obj['machineLocationlat'] = ApiClient.convertToType(data['machineLocationlat'], 'Number');
      }
      if (data.hasOwnProperty('orderCode')) {
        obj['orderCode'] = ApiClient.convertToType(data['orderCode'], 'String');
      }
      if (data.hasOwnProperty('rejectTime')) {
        obj['rejectTime'] = ApiClient.convertToType(data['rejectTime'], 'Date');
      }
      if (data.hasOwnProperty('repairerId')) {
        obj['repairerId'] = ApiClient.convertToType(data['repairerId'], 'Integer');
      }
      if (data.hasOwnProperty('repairerJoinTime')) {
        obj['repairerJoinTime'] = ApiClient.convertToType(data['repairerJoinTime'], 'Date');
      }
      if (data.hasOwnProperty('repairerStatus')) {
        obj['repairerStatus'] = ApiClient.convertToType(data['repairerStatus'], 'Integer');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Integer');
      }
      if (data.hasOwnProperty('typeGroup')) {
        obj['typeGroup'] = ApiClient.convertToType(data['typeGroup'], 'String');
      }
      if (data.hasOwnProperty('typeId')) {
        obj['typeId'] = ApiClient.convertToType(data['typeId'], 'String');
      }
      if (data.hasOwnProperty('typeName')) {
        obj['typeName'] = ApiClient.convertToType(data['typeName'], 'String');
      }
      if (data.hasOwnProperty('updateTime')) {
        obj['updateTime'] = ApiClient.convertToType(data['updateTime'], 'Date');
      }
      if (data.hasOwnProperty('workDesc')) {
        obj['workDesc'] = ApiClient.convertToType(data['workDesc'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} agentLocationAddress
   */
  exports.prototype['agentLocationAddress'] = undefined;
  /**
   * @member {String} agentLocationDesc
   */
  exports.prototype['agentLocationDesc'] = undefined;
  /**
   * @member {Number} agentLocationLat
   */
  exports.prototype['agentLocationLat'] = undefined;
  /**
   * @member {Number} agentLocationLon
   */
  exports.prototype['agentLocationLon'] = undefined;
  /**
   * @member {String} agentName
   */
  exports.prototype['agentName'] = undefined;
  /**
   * @member {String} agentPhone
   */
  exports.prototype['agentPhone'] = undefined;
  /**
   * @member {Number} beginLat
   */
  exports.prototype['beginLat'] = undefined;
  /**
   * @member {Number} beginLon
   */
  exports.prototype['beginLon'] = undefined;
  /**
   * 接单地点全路径
   * @member {String} beginPlace
   */
  exports.prototype['beginPlace'] = undefined;
  /**
   * 接单时间
   * @member {Date} beginTime
   */
  exports.prototype['beginTime'] = undefined;
  /**
   * 工单完成状态 1,正常完成，2 异常完成 
   * @member {Integer} completeStatus
   */
  exports.prototype['completeStatus'] = undefined;
  /**
   * @member {Date} createTime
   */
  exports.prototype['createTime'] = undefined;
  /**
   * @member {Array.<String>} dealImgs
   */
  exports.prototype['dealImgs'] = undefined;
  /**
   * @member {String} dealRemark
   */
  exports.prototype['dealRemark'] = undefined;
  /**
   * 故障图片列表
   * @member {Array.<String>} faultImgs
   */
  exports.prototype['faultImgs'] = undefined;
  /**
   * @member {Number} finishLat
   */
  exports.prototype['finishLat'] = undefined;
  /**
   * @member {Number} finishLon
   */
  exports.prototype['finishLon'] = undefined;
  /**
   * @member {String} finishPlace
   */
  exports.prototype['finishPlace'] = undefined;
  /**
   * 完成时间
   * @member {Date} finishTime
   */
  exports.prototype['finishTime'] = undefined;
  /**
   * 发起时间
   * @member {Date} launchTime
   */
  exports.prototype['launchTime'] = undefined;
  /**
   * 设备编码
   * @member {String} machineCode
   */
  exports.prototype['machineCode'] = undefined;
  /**
   * @member {String} machineLocationDesc
   */
  exports.prototype['machineLocationDesc'] = undefined;
  /**
   * @member {String} machineLocationDetails
   */
  exports.prototype['machineLocationDetails'] = undefined;
  /**
   * @member {Number} machineLocationLon
   */
  exports.prototype['machineLocationLon'] = undefined;
  /**
   * @member {Number} machineLocationlat
   */
  exports.prototype['machineLocationlat'] = undefined;
  /**
   * @member {String} orderCode
   */
  exports.prototype['orderCode'] = undefined;
  /**
   * 拒绝时间
   * @member {Date} rejectTime
   */
  exports.prototype['rejectTime'] = undefined;
  /**
   * @member {Integer} repairerId
   */
  exports.prototype['repairerId'] = undefined;
  /**
   * 维保人加入时间
   * @member {Date} repairerJoinTime
   */
  exports.prototype['repairerJoinTime'] = undefined;
  /**
   * 维保状态,10 待处理，20 已拒绝, 30进行中，40已完成
   * @member {Integer} repairerStatus
   */
  exports.prototype['repairerStatus'] = undefined;
  /**
   * 工单状态,10 待处理，30进行中，40已完成
   * @member {Integer} status
   */
  exports.prototype['status'] = undefined;
  /**
   * 故障分组,agent 代理点，machine 机器
   * @member {String} typeGroup
   */
  exports.prototype['typeGroup'] = undefined;
  /**
   * @member {String} typeId
   */
  exports.prototype['typeId'] = undefined;
  /**
   * 故障类似名称
   * @member {String} typeName
   */
  exports.prototype['typeName'] = undefined;
  /**
   * @member {Date} updateTime
   */
  exports.prototype['updateTime'] = undefined;
  /**
   * 任务描述
   * @member {String} workDesc
   */
  exports.prototype['workDesc'] = undefined;



  return exports;
}));


