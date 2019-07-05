/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var types_ethereum_base_pb = require('../../types/ethereum/base_pb.js');
goog.object.extend(proto, types_ethereum_base_pb);
var types_chain_chain_pb = require('../../types/chain/chain_pb.js');
goog.object.extend(proto, types_chain_chain_pb);
goog.exportSymbol('proto.common.AccountInstance', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.common.AccountInstance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.common.AccountInstance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.common.AccountInstance.displayName = 'proto.common.AccountInstance';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.common.AccountInstance.prototype.toObject = function(opt_includeInstance) {
  return proto.common.AccountInstance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.common.AccountInstance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.AccountInstance.toObject = function(includeInstance, msg) {
  var f, obj = {
    chain: (f = msg.getChain()) && types_chain_chain_pb.Chain.toObject(includeInstance, f),
    account: (f = msg.getAccount()) && types_ethereum_base_pb.Account.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.common.AccountInstance}
 */
proto.common.AccountInstance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.common.AccountInstance;
  return proto.common.AccountInstance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.common.AccountInstance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.common.AccountInstance}
 */
proto.common.AccountInstance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_chain_chain_pb.Chain;
      reader.readMessage(value,types_chain_chain_pb.Chain.deserializeBinaryFromReader);
      msg.setChain(value);
      break;
    case 2:
      var value = new types_ethereum_base_pb.Account;
      reader.readMessage(value,types_ethereum_base_pb.Account.deserializeBinaryFromReader);
      msg.setAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.common.AccountInstance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.common.AccountInstance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.common.AccountInstance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.AccountInstance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChain();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      types_chain_chain_pb.Chain.serializeBinaryToWriter
    );
  }
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      types_ethereum_base_pb.Account.serializeBinaryToWriter
    );
  }
};


/**
 * optional chain.Chain chain = 1;
 * @return {?proto.chain.Chain}
 */
proto.common.AccountInstance.prototype.getChain = function() {
  return /** @type{?proto.chain.Chain} */ (
    jspb.Message.getWrapperField(this, types_chain_chain_pb.Chain, 1));
};


/** @param {?proto.chain.Chain|undefined} value */
proto.common.AccountInstance.prototype.setChain = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.common.AccountInstance.prototype.clearChain = function() {
  this.setChain(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.common.AccountInstance.prototype.hasChain = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ethereum.Account account = 2;
 * @return {?proto.ethereum.Account}
 */
proto.common.AccountInstance.prototype.getAccount = function() {
  return /** @type{?proto.ethereum.Account} */ (
    jspb.Message.getWrapperField(this, types_ethereum_base_pb.Account, 2));
};


/** @param {?proto.ethereum.Account|undefined} value */
proto.common.AccountInstance.prototype.setAccount = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.common.AccountInstance.prototype.clearAccount = function() {
  this.setAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.common.AccountInstance.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.common);
