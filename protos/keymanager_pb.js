// source: keymanager.proto
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

var google_api_annotations_pb = require('./google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.ethereum.validator.accounts.v2.ListPublicKeysResponse', null, global);
goog.exportSymbol('proto.ethereum.validator.accounts.v2.SignRequest', null, global);
goog.exportSymbol('proto.ethereum.validator.accounts.v2.SignResponse', null, global);
goog.exportSymbol('proto.ethereum.validator.accounts.v2.SignResponse.Status', null, global);
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
proto.ethereum.validator.accounts.v2.ListPublicKeysResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ethereum.validator.accounts.v2.ListPublicKeysResponse.repeatedFields_, null);
};
goog.inherits(proto.ethereum.validator.accounts.v2.ListPublicKeysResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ethereum.validator.accounts.v2.ListPublicKeysResponse.displayName = 'proto.ethereum.validator.accounts.v2.ListPublicKeysResponse';
}
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
proto.ethereum.validator.accounts.v2.SignRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ethereum.validator.accounts.v2.SignRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ethereum.validator.accounts.v2.SignRequest.displayName = 'proto.ethereum.validator.accounts.v2.SignRequest';
}
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
proto.ethereum.validator.accounts.v2.SignResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ethereum.validator.accounts.v2.SignResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ethereum.validator.accounts.v2.SignResponse.displayName = 'proto.ethereum.validator.accounts.v2.SignResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ethereum.validator.accounts.v2.ListPublicKeysResponse.repeatedFields_ = [2];



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
proto.ethereum.validator.accounts.v2.ListPublicKeysResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ethereum.validator.accounts.v2.ListPublicKeysResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ethereum.validator.accounts.v2.ListPublicKeysResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ethereum.validator.accounts.v2.ListPublicKeysResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    validatingPublicKeysList: msg.getValidatingPublicKeysList_asB64()
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
 * @return {!proto.ethereum.validator.accounts.v2.ListPublicKeysResponse}
 */
proto.ethereum.validator.accounts.v2.ListPublicKeysResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ethereum.validator.accounts.v2.ListPublicKeysResponse;
  return proto.ethereum.validator.accounts.v2.ListPublicKeysResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ethereum.validator.accounts.v2.ListPublicKeysResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ethereum.validator.accounts.v2.ListPublicKeysResponse}
 */
proto.ethereum.validator.accounts.v2.ListPublicKeysResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addValidatingPublicKeys(value);
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
proto.ethereum.validator.accounts.v2.ListPublicKeysResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ethereum.validator.accounts.v2.ListPublicKeysResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ethereum.validator.accounts.v2.ListPublicKeysResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ethereum.validator.accounts.v2.ListPublicKeysResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValidatingPublicKeysList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      2,
      f
    );
  }
};


/**
 * repeated bytes validating_public_keys = 2;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.ethereum.validator.accounts.v2.ListPublicKeysResponse.prototype.getValidatingPublicKeysList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * repeated bytes validating_public_keys = 2;
 * This is a type-conversion wrapper around `getValidatingPublicKeysList()`
 * @return {!Array<string>}
 */
proto.ethereum.validator.accounts.v2.ListPublicKeysResponse.prototype.getValidatingPublicKeysList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getValidatingPublicKeysList()));
};


/**
 * repeated bytes validating_public_keys = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValidatingPublicKeysList()`
 * @return {!Array<!Uint8Array>}
 */
proto.ethereum.validator.accounts.v2.ListPublicKeysResponse.prototype.getValidatingPublicKeysList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getValidatingPublicKeysList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.ethereum.validator.accounts.v2.ListPublicKeysResponse} returns this
 */
proto.ethereum.validator.accounts.v2.ListPublicKeysResponse.prototype.setValidatingPublicKeysList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.ethereum.validator.accounts.v2.ListPublicKeysResponse} returns this
 */
proto.ethereum.validator.accounts.v2.ListPublicKeysResponse.prototype.addValidatingPublicKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ethereum.validator.accounts.v2.ListPublicKeysResponse} returns this
 */
proto.ethereum.validator.accounts.v2.ListPublicKeysResponse.prototype.clearValidatingPublicKeysList = function() {
  return this.setValidatingPublicKeysList([]);
};





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
proto.ethereum.validator.accounts.v2.SignRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ethereum.validator.accounts.v2.SignRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ethereum.validator.accounts.v2.SignRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ethereum.validator.accounts.v2.SignRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    publicKey: msg.getPublicKey_asB64(),
    signingRoot: msg.getSigningRoot_asB64()
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
 * @return {!proto.ethereum.validator.accounts.v2.SignRequest}
 */
proto.ethereum.validator.accounts.v2.SignRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ethereum.validator.accounts.v2.SignRequest;
  return proto.ethereum.validator.accounts.v2.SignRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ethereum.validator.accounts.v2.SignRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ethereum.validator.accounts.v2.SignRequest}
 */
proto.ethereum.validator.accounts.v2.SignRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPublicKey(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSigningRoot(value);
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
proto.ethereum.validator.accounts.v2.SignRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ethereum.validator.accounts.v2.SignRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ethereum.validator.accounts.v2.SignRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ethereum.validator.accounts.v2.SignRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getSigningRoot_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes public_key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ethereum.validator.accounts.v2.SignRequest.prototype.getPublicKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes public_key = 1;
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {string}
 */
proto.ethereum.validator.accounts.v2.SignRequest.prototype.getPublicKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPublicKey()));
};


/**
 * optional bytes public_key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {!Uint8Array}
 */
proto.ethereum.validator.accounts.v2.SignRequest.prototype.getPublicKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPublicKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ethereum.validator.accounts.v2.SignRequest} returns this
 */
proto.ethereum.validator.accounts.v2.SignRequest.prototype.setPublicKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes signing_root = 2;
 * @return {!(string|Uint8Array)}
 */
proto.ethereum.validator.accounts.v2.SignRequest.prototype.getSigningRoot = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes signing_root = 2;
 * This is a type-conversion wrapper around `getSigningRoot()`
 * @return {string}
 */
proto.ethereum.validator.accounts.v2.SignRequest.prototype.getSigningRoot_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSigningRoot()));
};


/**
 * optional bytes signing_root = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSigningRoot()`
 * @return {!Uint8Array}
 */
proto.ethereum.validator.accounts.v2.SignRequest.prototype.getSigningRoot_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSigningRoot()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ethereum.validator.accounts.v2.SignRequest} returns this
 */
proto.ethereum.validator.accounts.v2.SignRequest.prototype.setSigningRoot = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





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
proto.ethereum.validator.accounts.v2.SignResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ethereum.validator.accounts.v2.SignResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ethereum.validator.accounts.v2.SignResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ethereum.validator.accounts.v2.SignResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    signature: msg.getSignature_asB64(),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.ethereum.validator.accounts.v2.SignResponse}
 */
proto.ethereum.validator.accounts.v2.SignResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ethereum.validator.accounts.v2.SignResponse;
  return proto.ethereum.validator.accounts.v2.SignResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ethereum.validator.accounts.v2.SignResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ethereum.validator.accounts.v2.SignResponse}
 */
proto.ethereum.validator.accounts.v2.SignResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    case 2:
      var value = /** @type {!proto.ethereum.validator.accounts.v2.SignResponse.Status} */ (reader.readEnum());
      msg.setStatus(value);
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
proto.ethereum.validator.accounts.v2.SignResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ethereum.validator.accounts.v2.SignResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ethereum.validator.accounts.v2.SignResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ethereum.validator.accounts.v2.SignResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.ethereum.validator.accounts.v2.SignResponse.Status = {
  UNKNOWN: 0,
  SUCCEEDED: 1,
  DENIED: 2,
  FAILED: 3
};

/**
 * optional bytes signature = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ethereum.validator.accounts.v2.SignResponse.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes signature = 1;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.ethereum.validator.accounts.v2.SignResponse.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.ethereum.validator.accounts.v2.SignResponse.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ethereum.validator.accounts.v2.SignResponse} returns this
 */
proto.ethereum.validator.accounts.v2.SignResponse.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional Status status = 2;
 * @return {!proto.ethereum.validator.accounts.v2.SignResponse.Status}
 */
proto.ethereum.validator.accounts.v2.SignResponse.prototype.getStatus = function() {
  return /** @type {!proto.ethereum.validator.accounts.v2.SignResponse.Status} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ethereum.validator.accounts.v2.SignResponse.Status} value
 * @return {!proto.ethereum.validator.accounts.v2.SignResponse} returns this
 */
proto.ethereum.validator.accounts.v2.SignResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


goog.object.extend(exports, proto.ethereum.validator.accounts.v2);
