"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);

// src/utils/logger.ts
var _colors;
var Logger = class {
  constructor() {
    __privateAdd(this, _colors, {
      info: "\x1B[32m",
      warn: "\x1B[33m",
      error: "\x1B[31m"
    });
  }
  log(type, message) {
    const color = __privateGet(this, _colors)[type] || "";
    console.log(`${color}[${type.toUpperCase()}] ${message}\x1B[0m`);
  }
  warn(message) {
    this.log("warn", message);
  }
  info(message) {
    this.log("info", message);
  }
  error(message) {
    this.log("error", message);
  }
};
_colors = new WeakMap();
var logger = new Logger();

// src/utils/index.ts
var getRealEcmaVersion = (target) => {
  let ecmaVersion = "";
  switch (target) {
    case "es6":
      ecmaVersion = "6";
      break;
    case "es7":
      ecmaVersion = "7";
      break;
    case "es8":
      ecmaVersion = "8";
      break;
    case "es9":
      ecmaVersion = "9";
      break;
    case "es10":
      ecmaVersion = "10";
      break;
    case "es11":
      ecmaVersion = "11";
      break;
    case "es12":
      ecmaVersion = "12";
      break;
    case "es2015":
      ecmaVersion = "6";
      break;
    case "es2016":
      ecmaVersion = "7";
      break;
    case "es2017":
      ecmaVersion = "8";
      break;
    case "es2018":
      ecmaVersion = "9";
      break;
    case "es2019":
      ecmaVersion = "10";
      break;
    case "es2020":
      ecmaVersion = "2020";
      break;
    case "es2021":
      ecmaVersion = "2021";
      break;
    case "es2022":
      ecmaVersion = "2022";
      break;
    case "es2023":
      ecmaVersion = "2023";
      break;
    default:
      logger.error("Invalid ecmaScript version, The default version(es6) will be selected.");
      ecmaVersion = "6";
  }
  return ecmaVersion;
};

// src/index.ts
var fg = require("fast-glob");
var fs = require("fs-extra");
var path = require("path");
var babelParser = require("@babel/parser");
var traverse = require("@babel/traverse").default;
var coreCheck = async (files, options) => {
  const { dir = "./" } = options;
  const fileNames = await fg(files, {
    cwd: dir,
    onlyFiles: true
  });
  fileNames.forEach(async (file) => {
    const fullPath = path.join(dir, file);
    const code = await fs.readFile(fullPath, "utf8");
    const ast = babelParser.parse(code, {
      sourceType: "module",
      plugins: ["jsx", "typescript"]
    });
    traverse(ast, {
      enter(path2) {
        console.error("enterPath", path2);
      }
    });
  });
};
var ecmaCheck = (filesArgs, target = "es6", config) => {
  if (!filesArgs) {
    return logger.warn("filesArgs cannot be empty.");
  }
  let files = [];
  if (typeof filesArgs === "string") {
    files = [filesArgs];
  } else {
    files = filesArgs;
  }
  const esVersion = getRealEcmaVersion(target);
  const options = {
    target: esVersion,
    ...config
  };
  coreCheck(files, options);
};
var src_default = ecmaCheck;
ecmaCheck("test1.js", "es6", {
  dir: "../test/es6"
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
