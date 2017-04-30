"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vision_controller_1 = require("./vision.controller");
const colors = require('colors/safe');
class default_1 {
    constructor() {
        this.controller = new vision_controller_1.default();
        this.router = express_1.Router();
    }
    routes() {
        this.router.get('/', this.controller.analysePhoto);
        this.router.post('/', this.controller.analysePhoto);
        return this.router;
    }
}
exports.default = default_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGkvdmlzaW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQWlDO0FBQ2pDLDJEQUE2QztBQUM3QyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFdEM7SUFHRTtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSwyQkFBVSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQkFBTSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVwRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0NBQ0Q7QUFkRiw0QkFjRSIsImZpbGUiOiJzcmMvYXBpL3Zpc2lvbi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi92aXNpb24uY29udHJvbGxlcic7XG5jb25zdCBjb2xvcnMgPSByZXF1aXJlKCdjb2xvcnMvc2FmZScpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnRyb2xsZXI6IENvbnRyb2xsZXI7XG4gIHJvdXRlcjogUm91dGVyO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcigpO1xuICAgIHRoaXMucm91dGVyID0gUm91dGVyKCk7XG4gIH1cblxuICByb3V0ZXMoKSB7XG4gICAgdGhpcy5yb3V0ZXIuZ2V0KCcvJywgdGhpcy5jb250cm9sbGVyLmFuYWx5c2VQaG90byk7XG4gICAgdGhpcy5yb3V0ZXIucG9zdCgnLycsIHRoaXMuY29udHJvbGxlci5hbmFseXNlUGhvdG8pO1xuXG4gICAgcmV0dXJuIHRoaXMucm91dGVyO1xuICB9XG4gfSJdfQ==
