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
    define(['ApiClient', 'model/ApiActivityLogBO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ApiActivityLogBO'));
  } else {
    // Browser globals (root is window)
    if (!root.Api) {
      root.Api = {};
    }
    root.Api.ApiActivityBO = factory(root.Api.ApiClient, root.Api.ApiActivityLogBO);
  }
}(this, function(ApiClient, ApiActivityLogBO) {
  'use strict';




  /**
   * The ApiActivityBO model module.
   * @module model/ApiActivityBO
   * @version 1.0
   */

  /**
   * Constructs a new <code>ApiActivityBO</code>.
   * @alias module:model/ApiActivityBO
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>ApiActivityBO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiActivityBO} obj Optional instance to populate.
   * @return {module:model/ApiActivityBO} The populated <code>ApiActivityBO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('activityName')) {
        obj['activityName'] = ApiClient.convertToType(data['activityName'], 'String');
      }
      if (data.hasOwnProperty('beginDate')) {
        obj['beginDate'] = ApiClient.convertToType(data['beginDate'], 'Date');
      }
      if (data.hasOwnProperty('cover')) {
        obj['cover'] = ApiClient.convertToType(data['cover'], 'String');
      }
      if (data.hasOwnProperty('endDate')) {
        obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Date');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('introduce')) {
        obj['introduce'] = ApiClient.convertToType(data['introduce'], 'String');
      }
      if (data.hasOwnProperty('log')) {
        obj['log'] = ApiActivityLogBO.constructFromObject(data['log']);
      }
      if (data.hasOwnProperty('log_list')) {
        obj['log_list'] = ApiClient.convertToType(data['log_list'], [ApiActivityLogBO]);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Integer');
      }
      if (data.hasOwnProperty('totalNumber')) {
        obj['totalNumber'] = ApiClient.convertToType(data['totalNumber'], 'Integer');
      }
      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
      }
    }
    return obj;
  }

  /**
   * 活动名称
   * @member {String} activityName
   */
  exports.prototype['activityName'] = undefined;
  /**
   * 开始时间
   * @member {Date} beginDate
   */
  exports.prototype['beginDate'] = undefined;
  /**
   * 封面
   * @member {String} cover
   */
  exports.prototype['cover'] = undefined;
  /**
   * 结束时间
   * @member {Date} endDate
   */
  exports.prototype['endDate'] = undefined;
  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * 简介
   * @member {String} introduce
   */
  exports.prototype['introduce'] = undefined;
  /**
   * 用户的活动记录 
   * @member {module:model/ApiActivityLogBO} log
   */
  exports.prototype['log'] = undefined;
  /**
   * top10排名
   * @member {Array.<module:model/ApiActivityLogBO>} log_list
   */
  exports.prototype['log_list'] = undefined;
  /**
   * 用户参加活动状态 10 失败，20,活动进行中，30 已成功  ，40 未参加
   * @member {Integer} status
   */
  exports.prototype['status'] = undefined;
  /**
   * 参加总人数
   * @member {Integer} totalNumber
   */
  exports.prototype['totalNumber'] = undefined;
  /**
   * 用户id
   * @member {String} uid
   */
  exports.prototype['uid'] = undefined;



  return exports;
}));


