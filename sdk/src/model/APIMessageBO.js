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
    define(['ApiClient', 'model/APIVoiceBO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APIVoiceBO'));
  } else {
    // Browser globals (root is window)
    if (!root.Api) {
      root.Api = {};
    }
    root.Api.APIMessageBO = factory(root.Api.ApiClient, root.Api.APIVoiceBO);
  }
}(this, function(ApiClient, APIVoiceBO) {
  'use strict';




  /**
   * The APIMessageBO model module.
   * @module model/APIMessageBO
   * @version 1.0
   */

  /**
   * Constructs a new <code>APIMessageBO</code>.
   * @alias module:model/APIMessageBO
   * @class
   */
  var exports = function() {
    var _this = this;


















  };

  /**
   * Constructs a <code>APIMessageBO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APIMessageBO} obj Optional instance to populate.
   * @return {module:model/APIMessageBO} The populated <code>APIMessageBO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bizId')) {
        obj['bizId'] = ApiClient.convertToType(data['bizId'], 'String');
      }
      if (data.hasOwnProperty('bizType')) {
        obj['bizType'] = ApiClient.convertToType(data['bizType'], 'Integer');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('cover')) {
        obj['cover'] = ApiClient.convertToType(data['cover'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('imageTextId')) {
        obj['imageTextId'] = ApiClient.convertToType(data['imageTextId'], 'Integer');
      }
      if (data.hasOwnProperty('introduction')) {
        obj['introduction'] = ApiClient.convertToType(data['introduction'], 'String');
      }
      if (data.hasOwnProperty('isImageText')) {
        obj['isImageText'] = ApiClient.convertToType(data['isImageText'], 'Boolean');
      }
      if (data.hasOwnProperty('linkName')) {
        obj['linkName'] = ApiClient.convertToType(data['linkName'], 'String');
      }
      if (data.hasOwnProperty('linkUrl')) {
        obj['linkUrl'] = ApiClient.convertToType(data['linkUrl'], 'String');
      }
      if (data.hasOwnProperty('readTimes')) {
        obj['readTimes'] = ApiClient.convertToType(data['readTimes'], 'Integer');
      }
      if (data.hasOwnProperty('remark')) {
        obj['remark'] = ApiClient.convertToType(data['remark'], 'String');
      }
      if (data.hasOwnProperty('sendTime')) {
        obj['sendTime'] = ApiClient.convertToType(data['sendTime'], 'Date');
      }
      if (data.hasOwnProperty('shareTimes')) {
        obj['shareTimes'] = ApiClient.convertToType(data['shareTimes'], 'Integer');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('toUserType')) {
        obj['toUserType'] = ApiClient.convertToType(data['toUserType'], 'String');
      }
      if (data.hasOwnProperty('voices')) {
        obj['voices'] = ApiClient.convertToType(data['voices'], [APIVoiceBO]);
      }
    }
    return obj;
  }

  /**
   * 业务ID
   * @member {String} bizId
   */
  exports.prototype['bizId'] = undefined;
  /**
   *  50,普通图文消息，51活动消息,52旅游区消息 
   * @member {Integer} bizType
   */
  exports.prototype['bizType'] = undefined;
  /**
   * @member {String} content
   */
  exports.prototype['content'] = undefined;
  /**
   * 封面
   * @member {String} cover
   */
  exports.prototype['cover'] = undefined;
  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * 图文消息ID
   * @member {Integer} imageTextId
   */
  exports.prototype['imageTextId'] = undefined;
  /**
   * 介绍
   * @member {String} introduction
   */
  exports.prototype['introduction'] = undefined;
  /**
   * 是否图文
   * @member {Boolean} isImageText
   */
  exports.prototype['isImageText'] = undefined;
  /**
   * 外部链接名称
   * @member {String} linkName
   */
  exports.prototype['linkName'] = undefined;
  /**
   * 外部链接
   * @member {String} linkUrl
   */
  exports.prototype['linkUrl'] = undefined;
  /**
   * 阅读次数
   * @member {Integer} readTimes
   */
  exports.prototype['readTimes'] = undefined;
  /**
   * 摘要
   * @member {String} remark
   */
  exports.prototype['remark'] = undefined;
  /**
   * @member {Date} sendTime
   */
  exports.prototype['sendTime'] = undefined;
  /**
   * 分享次数
   * @member {Integer} shareTimes
   */
  exports.prototype['shareTimes'] = undefined;
  /**
   * 标题
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * 接收用户的类型(3:维保) 
   * @member {String} toUserType
   */
  exports.prototype['toUserType'] = undefined;
  /**
   * 音频文件
   * @member {Array.<module:model/APIVoiceBO>} voices
   */
  exports.prototype['voices'] = undefined;



  return exports;
}));

