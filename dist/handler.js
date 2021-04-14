"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFallbackHandlerDeployment = exports.getCompatibilityFallbackHandlerDeployment = exports.getDefaultCallbackHandlerDeployment = void 0;
const default_callback_handler_1_1_1_json_1 = __importDefault(require("./assets/default_callback_handler_1.1.1.json"));
const compatibility_fallback_handler_1_3_0_json_1 = __importDefault(require("./assets/compatibility_fallback_handler_1.3.0.json"));
const utils_1 = require("./utils");
// This is a sorted array (by preference)
const defaultCallbackHandlerDeployments = [
    default_callback_handler_1_1_1_json_1.default
];
const getDefaultCallbackHandlerDeployment = (filter) => {
    return utils_1.findDeployment(utils_1.applyFilterDefaults(filter), defaultCallbackHandlerDeployments);
};
exports.getDefaultCallbackHandlerDeployment = getDefaultCallbackHandlerDeployment;
// This is a sorted array (by preference)
const compatFallbackHandlerDeployments = [
    compatibility_fallback_handler_1_3_0_json_1.default
];
const getCompatibilityFallbackHandlerDeployment = (filter) => {
    return utils_1.findDeployment(utils_1.applyFilterDefaults(filter), compatFallbackHandlerDeployments);
};
exports.getCompatibilityFallbackHandlerDeployment = getCompatibilityFallbackHandlerDeployment;
// This is a sorted array (by preference)
const fallbackHandlerDeployments = [
    compatibility_fallback_handler_1_3_0_json_1.default, default_callback_handler_1_1_1_json_1.default
];
const getFallbackHandlerDeployment = (filter) => {
    return utils_1.findDeployment(utils_1.applyFilterDefaults(filter), fallbackHandlerDeployments);
};
exports.getFallbackHandlerDeployment = getFallbackHandlerDeployment;
