"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const daysRoutes = (0, express_1.Router)();
const days_controller_1 = __importDefault(require("../controllers/days.controller"));
daysRoutes.post('/days', days_controller_1.default.days);
exports.default = daysRoutes;
