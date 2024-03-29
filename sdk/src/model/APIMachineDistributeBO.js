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
    root.Api.APIMachineDistributeBO = factory(root.Api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The APIMachineDistributeBO model module.
   * @module model/APIMachineDistributeBO
   * @version 1.0
   */

  /**
   * Constructs a new <code>APIMachineDistributeBO</code>.
   * @alias module:model/APIMachineDistributeBO
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>APIMachineDistributeBO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APIMachineDistributeBO} obj Optional instance to populate.
   * @return {module:model/APIMachineDistributeBO} The populated <code>APIMachineDistributeBO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('createTime')) {
        obj['createTime'] = ApiClient.convertToType(data['createTime'], 'Date');
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
      if (data.hasOwnProperty('machineCode')) {
        obj['machineCode'] = ApiClient.convertToType(data['machineCode'], 'String');
      }
      if (data.hasOwnProperty('receiveTime')) {
        obj['receiveTime'] = ApiClient.convertToType(data['receiveTime'], 'Date');
      }
      if (data.hasOwnProperty('repairerId')) {
        obj['repairerId'] = ApiClient.convertToType(data['repairerId'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * 投放时间
   * @member {Date} createTime
   */
  exports.prototype['createTime'] = undefined;
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
   * @member {String} machineCode
   */
  exports.prototype['machineCode'] = undefined;
  /**
   * 分派时间
   * @member {Date} receiveTime
   */
  exports.prototype['receiveTime'] = undefined;
  /**
   * @member {Integer} repairerId
   */
  exports.prototype['repairerId'] = undefined;



  return exports;
}));


