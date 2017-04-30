"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const winston = require("winston");
const morgan = require("morgan");
const body_parser_1 = require("body-parser");
const config_1 = require("./config/config");
const routes_1 = require("./routes");
/**
 * Root class of your node server.
 * Can be used for basic configurations, for instance starting up the server or registering middleware.
 */
class Server {
    constructor() {
        this.config = new config_1.default();
        this.app = express();
        new routes_1.default(this.app).routes();
        this.app.use(body_parser_1.json());
        this.app.set('views', `./views`);
        this.app.engine('html', require('ejs').renderFile);
        this.app.set('view engine', 'html');
        this.app.use(morgan('combined'));
        this.app.listen(this.config.port, () => {
            winston.log('info', '--> Server successfully started at port %d', this.config.port);
        });
    }
}
exports.Server = Server;
new Server();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLGlDQUFpQztBQUNqQyw2Q0FBbUM7QUFNbkMsNENBQXNDO0FBQ3RDLHFDQUE4QjtBQUM5Qjs7O0dBR0c7QUFDSDtJQUlJO1FBSFEsV0FBTSxHQUFXLElBQUksZ0JBQU0sRUFBRSxDQUFDO1FBSWxDLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7UUFDckIsSUFBSSxnQkFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxrQkFBSSxFQUFFLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsNENBQTRDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQWhCRCx3QkFnQkM7QUFFRCxJQUFJLE1BQU0sRUFBRSxDQUFDIiwiZmlsZSI6InNyYy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgd2luc3RvbiBmcm9tICd3aW5zdG9uJztcbmltcG9ydCAqIGFzIG1vcmdhbiBmcm9tICdtb3JnYW4nO1xuaW1wb3J0IHsganNvbiB9IGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCB7XG4gICAgRXhwcmVzcyxcbiAgICBSZXF1ZXN0LFxuICAgIFJlc3BvbnNlXG59IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IENvbmZpZ8KgIGZyb20gJy4vY29uZmlnL2NvbmZpZyc7XG5pbXBvcnQgUm91dGVzIGZyb20gJy4vcm91dGVzJztcbi8qKlxuICogUm9vdCBjbGFzcyBvZiB5b3VyIG5vZGUgc2VydmVyLlxuICogQ2FuIGJlIHVzZWQgZm9yIGJhc2ljIGNvbmZpZ3VyYXRpb25zLCBmb3IgaW5zdGFuY2Ugc3RhcnRpbmcgdXAgdGhlIHNlcnZlciBvciByZWdpc3RlcmluZyBtaWRkbGV3YXJlLlxuICovXG5leHBvcnQgY2xhc3MgU2VydmVyIHtcbiAgICBwcml2YXRlIGNvbmZpZzogQ29uZmlnID0gbmV3IENvbmZpZygpO1xuICAgIHByaXZhdGUgYXBwOiBFeHByZXNzO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYXBwID0gZXhwcmVzcygpO1xuICAgICAgICBuZXcgUm91dGVzKHRoaXMuYXBwKS5yb3V0ZXMoKTtcbiAgICAgICAgdGhpcy5hcHAudXNlKGpzb24oKSk7XG4gICAgICAgIHRoaXMuYXBwLnNldCgndmlld3MnLCBgLi92aWV3c2ApO1xuICAgICAgICB0aGlzLmFwcC5lbmdpbmUoJ2h0bWwnLCByZXF1aXJlKCdlanMnKS5yZW5kZXJGaWxlKTtcbiAgICAgICAgdGhpcy5hcHAuc2V0KCd2aWV3IGVuZ2luZScsICdodG1sJyk7XG4gICAgICAgIHRoaXMuYXBwLnVzZShtb3JnYW4oJ2NvbWJpbmVkJykpO1xuICAgICAgICB0aGlzLmFwcC5saXN0ZW4odGhpcy5jb25maWcucG9ydCwgKCkgPT4ge1xuICAgICAgICAgICAgd2luc3Rvbi5sb2coJ2luZm8nLCAnLS0+IFNlcnZlciBzdWNjZXNzZnVsbHkgc3RhcnRlZCBhdCBwb3J0ICVkJywgdGhpcy5jb25maWcucG9ydCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxubmV3IFNlcnZlcigpO1xuIl19
