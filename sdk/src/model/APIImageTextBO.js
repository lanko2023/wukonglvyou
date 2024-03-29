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
    root.Api.APIImageTextBO = factory(root.Api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The APIImageTextBO model module.
   * @module model/APIImageTextBO
   * @version 1.0
   */

  /**
   * Constructs a new <code>APIImageTextBO</code>.
   * @alias module:model/APIImageTextBO
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>APIImageTextBO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APIImageTextBO} obj Optional instance to populate.
   * @return {module:model/APIImageTextBO} The populated <code>APIImageTextBO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('cover')) {
        obj['cover'] = ApiClient.convertToType(data['cover'], 'String');
      }
      if (data.hasOwnProperty('createTime')) {
        obj['createTime'] = ApiClient.convertToType(data['createTime'], 'Date');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('readTimes')) {
        obj['readTimes'] = ApiClient.convertToType(data['readTimes'], 'Integer');
      }
      if (data.hasOwnProperty('remark')) {
        obj['remark'] = ApiClient.convertToType(data['remark'], 'String');
      }
      if (data.hasOwnProperty('shareTimes')) {
        obj['shareTimes'] = ApiClient.convertToType(data['shareTimes'], 'Integer');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('voiceUrl')) {
        obj['voiceUrl'] = ApiClient.convertToType(data['voiceUrl'], 'String');
      }
    }
    return obj;
  }

  /**
   * 内容
   * @member {String} content
   */
  exports.prototype['content'] = undefined;
  /**
   * 图文封面图片
   * @member {String} cover
   */
  exports.prototype['cover'] = undefined;
  /**
   * 创建时间 
   * @member {Date} createTime
   */
  exports.prototype['createTime'] = undefined;
  /**
   * 图文id
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * 阅读次数 
   * @member {Integer} readTimes
   */
  exports.prototype['readTimes'] = undefined;
  /**
   * 图文摘要 
   * @member {String} remark
   */
  exports.prototype['remark'] = undefined;
  /**
   * 分享次数 
   * @member {Integer} shareTimes
   */
  exports.prototype['shareTimes'] = undefined;
  /**
   * 图文标题
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * 音频文件 
   * @member {String} voiceUrl
   */
  exports.prototype['voiceUrl'] = undefined;



  return exports;
}));


