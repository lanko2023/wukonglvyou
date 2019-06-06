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
    root.Api.APIRepairerBO = factory(root.Api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The APIRepairerBO model module.
   * @module model/APIRepairerBO
   * @version 1.0
   */

  /**
   * Constructs a new <code>APIRepairerBO</code>.
   * @alias module:model/APIRepairerBO
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>APIRepairerBO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APIRepairerBO} obj Optional instance to populate.
   * @return {module:model/APIRepairerBO} The populated <code>APIRepairerBO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('area')) {
        obj['area'] = ApiClient.convertToType(data['area'], 'String');
      }
      if (data.hasOwnProperty('headImgPath')) {
        obj['headImgPath'] = ApiClient.convertToType(data['headImgPath'], 'String');
      }
      if (data.hasOwnProperty('mobile')) {
        obj['mobile'] = ApiClient.convertToType(data['mobile'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('sex')) {
        obj['sex'] = ApiClient.convertToType(data['sex'], 'Integer');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * 所属区域
   * @member {String} area
   */
  exports.prototype['area'] = undefined;
  /**
   * @member {String} headImgPath
   */
  exports.prototype['headImgPath'] = undefined;
  /**
   * @member {String} mobile
   */
  exports.prototype['mobile'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Integer} sex
   */
  exports.prototype['sex'] = undefined;
  /**
   * 状态 1:正常 2禁用
   * @member {String} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


