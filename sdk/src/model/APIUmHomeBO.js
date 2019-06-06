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
    define(['ApiClient', 'model/APIAgentBO', 'model/APIUmMachineBO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APIAgentBO'), require('./APIUmMachineBO'));
  } else {
    // Browser globals (root is window)
    if (!root.Api) {
      root.Api = {};
    }
    root.Api.APIUmHomeBO = factory(root.Api.ApiClient, root.Api.APIAgentBO, root.Api.APIUmMachineBO);
  }
}(this, function(ApiClient, APIAgentBO, APIUmMachineBO) {
  'use strict';




  /**
   * The APIUmHomeBO model module.
   * @module model/APIUmHomeBO
   * @version 1.0
   */

  /**
   * Constructs a new <code>APIUmHomeBO</code>.
   * @alias module:model/APIUmHomeBO
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>APIUmHomeBO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APIUmHomeBO} obj Optional instance to populate.
   * @return {module:model/APIUmHomeBO} The populated <code>APIUmHomeBO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agentList')) {
        obj['agentList'] = ApiClient.convertToType(data['agentList'], [APIAgentBO]);
      }
      if (data.hasOwnProperty('machineList')) {
        obj['machineList'] = ApiClient.convertToType(data['machineList'], [APIUmMachineBO]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/APIAgentBO>} agentList
   */
  exports.prototype['agentList'] = undefined;
  /**
   * @member {Array.<module:model/APIUmMachineBO>} machineList
   */
  exports.prototype['machineList'] = undefined;



  return exports;
}));

