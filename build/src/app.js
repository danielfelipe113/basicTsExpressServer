"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const winston = require("winston");
const morgan = require("morgan");
const body_parser_1 = require("body-parser");
const routes_1 = require("./routes");
const config = require('./config/config');
/**
 * Root class of your node server.
 * Can be used for basic configurations, for instance starting up the server or registering middleware.
 */
class Server {
    constructor() {
        this.app = express();
        new routes_1.default(this.app).routes();
        this.app.use(body_parser_1.json());
        this.app.set('views', `./views`);
        this.app.engine('html', require('ejs').renderFile);
        this.app.set('view engine', 'html');
        this.app.use(morgan('combined'));
        this.app.listen(config.port, () => {
            console.log(config);
            winston.log('info', '--> Server successfully started at port %d', config.port);
        });
    }
}
exports.Server = Server;
new Server();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLGlDQUFpQztBQUNqQyw2Q0FBbUM7QUFNbkMscUNBQThCO0FBQzlCLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQzFDOzs7R0FHRztBQUNIO0lBR0k7UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO1FBQ3JCLElBQUksZ0JBQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsa0JBQUksRUFBRSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSw0Q0FBNEMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkYsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7QUFoQkQsd0JBZ0JDO0FBRUQsSUFBSSxNQUFNLEVBQUUsQ0FBQyIsImZpbGUiOiJzcmMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIHdpbnN0b24gZnJvbSAnd2luc3Rvbic7XG5pbXBvcnQgKiBhcyBtb3JnYW4gZnJvbSAnbW9yZ2FuJztcbmltcG9ydCB7IGpzb24gfSBmcm9tICdib2R5LXBhcnNlcic7XG5pbXBvcnQge1xuICAgIEV4cHJlc3MsXG4gICAgUmVxdWVzdCxcbiAgICBSZXNwb25zZVxufSBmcm9tICdleHByZXNzJztcbmltcG9ydCBSb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcvY29uZmlnJyk7XG4vKipcbiAqIFJvb3QgY2xhc3Mgb2YgeW91ciBub2RlIHNlcnZlci5cbiAqIENhbiBiZSB1c2VkIGZvciBiYXNpYyBjb25maWd1cmF0aW9ucywgZm9yIGluc3RhbmNlIHN0YXJ0aW5nIHVwIHRoZSBzZXJ2ZXIgb3IgcmVnaXN0ZXJpbmcgbWlkZGxld2FyZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFNlcnZlciB7XG4gICAgcHJpdmF0ZSBhcHA6IEV4cHJlc3M7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hcHAgPSBleHByZXNzKCk7XG4gICAgICAgIG5ldyBSb3V0ZXModGhpcy5hcHApLnJvdXRlcygpO1xuICAgICAgICB0aGlzLmFwcC51c2UoanNvbigpKTtcbiAgICAgICAgdGhpcy5hcHAuc2V0KCd2aWV3cycsIGAuL3ZpZXdzYCk7XG4gICAgICAgIHRoaXMuYXBwLmVuZ2luZSgnaHRtbCcsIHJlcXVpcmUoJ2VqcycpLnJlbmRlckZpbGUpO1xuICAgICAgICB0aGlzLmFwcC5zZXQoJ3ZpZXcgZW5naW5lJywgJ2h0bWwnKTtcbiAgICAgICAgdGhpcy5hcHAudXNlKG1vcmdhbignY29tYmluZWQnKSk7XG4gICAgICAgIHRoaXMuYXBwLmxpc3Rlbihjb25maWcucG9ydCwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coY29uZmlnKVxuICAgICAgICAgICAgd2luc3Rvbi5sb2coJ2luZm8nLCAnLS0+IFNlcnZlciBzdWNjZXNzZnVsbHkgc3RhcnRlZCBhdCBwb3J0ICVkJywgY29uZmlnLnBvcnQpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm5ldyBTZXJ2ZXIoKTtcbiJdfQ==
