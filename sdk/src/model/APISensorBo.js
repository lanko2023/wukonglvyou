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
    root.Api.APISensorBo = factory(root.Api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The APISensorBo model module.
   * @module model/APISensorBo
   * @version 1.0
   */

  /**
   * Constructs a new <code>APISensorBo</code>.
   * @alias module:model/APISensorBo
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>APISensorBo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APISensorBo} obj Optional instance to populate.
   * @return {module:model/APISensorBo} The populated <code>APISensorBo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('altitude')) {
        obj['altitude'] = ApiClient.convertToType(data['altitude'], 'Integer');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('humidity')) {
        obj['humidity'] = ApiClient.convertToType(data['humidity'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('isDeleted')) {
        obj['isDeleted'] = ApiClient.convertToType(data['isDeleted'], 'Boolean');
      }
      if (data.hasOwnProperty('lastUpdateTime')) {
        obj['lastUpdateTime'] = ApiClient.convertToType(data['lastUpdateTime'], 'Date');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('pressure')) {
        obj['pressure'] = ApiClient.convertToType(data['pressure'], 'Number');
      }
      if (data.hasOwnProperty('rainLevel')) {
        obj['rainLevel'] = ApiClient.convertToType(data['rainLevel'], 'String');
      }
      if (data.hasOwnProperty('rainfall')) {
        obj['rainfall'] = ApiClient.convertToType(data['rainfall'], 'Number');
      }
      if (data.hasOwnProperty('temperature')) {
        obj['temperature'] = ApiClient.convertToType(data['temperature'], 'Number');
      }
      if (data.hasOwnProperty('windDirectionMapping')) {
        obj['windDirectionMapping'] = ApiClient.convertToType(data['windDirectionMapping'], 'String');
      }
      if (data.hasOwnProperty('windSpeedMapping')) {
        obj['windSpeedMapping'] = ApiClient.convertToType(data['windSpeedMapping'], 'String');
      }
    }
    return obj;
  }

  /**
   * 海拔
   * @member {Integer} altitude
   */
  exports.prototype['altitude'] = undefined;
  /**
   * 设备编号
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * 湿度
   * @member {Number} humidity
   */
  exports.prototype['humidity'] = undefined;
  /**
   * 设备id
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * 是否删除
   * @member {Boolean} isDeleted
   */
  exports.prototype['isDeleted'] = undefined;
  /**
   * 最后修改时间
   * @member {Date} lastUpdateTime
   */
  exports.prototype['lastUpdateTime'] = undefined;
  /**
   * 设备名称
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * 气压
   * @member {Number} pressure
   */
  exports.prototype['pressure'] = undefined;
  /**
   * 雨量级别，no:无雨，small:小雨，rainy:多雨，heavy:大雨
   * @member {String} rainLevel
   */
  exports.prototype['rainLevel'] = undefined;
  /**
   * 降雨量
   * @member {Number} rainfall
   */
  exports.prototype['rainfall'] = undefined;
  /**
   * 温度
   * @member {Number} temperature
   */
  exports.prototype['temperature'] = undefined;
  /**
   * 风向 
   * @member {String} windDirectionMapping
   */
  exports.prototype['windDirectionMapping'] = undefined;
  /**
   * 风速
   * @member {String} windSpeedMapping
   */
  exports.prototype['windSpeedMapping'] = undefined;



  return exports;
}));


