"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const port = process.env.PORT || 80;
// heartbeat
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Its working!' });
});
// routes
const days_routes_1 = __importDefault(require("./routes/days.routes"));
app.use('/api/v1/', days_routes_1.default);
// server
app.listen(port, () => {
    console.log('server started on PORT: ' + port);
});
