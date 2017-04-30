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
        this.app.set('views', `${config.rootPath}/views`);
        this.app.engine('html', require('ejs').renderFile);
        this.app.set('view engine', 'html');
        this.app.use(morgan('dev'));
        this.app.listen(config.port, () => {
            winston.log('info', '--> Server successfully started at port %d', config.port);
        });
    }
}
exports.Server = Server;
new Server();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLGlDQUFpQztBQUNqQyw2Q0FBbUM7QUFNbkMscUNBQThCO0FBQzlCLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQzFDOzs7R0FHRztBQUNIO0lBR0k7UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO1FBQ3JCLElBQUksZ0JBQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsa0JBQUksRUFBRSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLFFBQVEsUUFBUSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSw0Q0FBNEMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkYsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7QUFmRCx3QkFlQztBQUVELElBQUksTUFBTSxFQUFFLENBQUMiLCJmaWxlIjoic3JjL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyB3aW5zdG9uIGZyb20gJ3dpbnN0b24nO1xuaW1wb3J0ICogYXMgbW9yZ2FuIGZyb20gJ21vcmdhbic7XG5pbXBvcnQgeyBqc29uIH0gZnJvbSAnYm9keS1wYXJzZXInO1xuaW1wb3J0IHtcbiAgICBFeHByZXNzLFxuICAgIFJlcXVlc3QsXG4gICAgUmVzcG9uc2Vcbn0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgUm91dGVzIGZyb20gJy4vcm91dGVzJztcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnL2NvbmZpZycpO1xuLyoqXG4gKiBSb290IGNsYXNzIG9mIHlvdXIgbm9kZSBzZXJ2ZXIuXG4gKiBDYW4gYmUgdXNlZCBmb3IgYmFzaWMgY29uZmlndXJhdGlvbnMsIGZvciBpbnN0YW5jZSBzdGFydGluZyB1cCB0aGUgc2VydmVyIG9yIHJlZ2lzdGVyaW5nIG1pZGRsZXdhcmUuXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXJ2ZXIge1xuICAgIHByaXZhdGUgYXBwOiBFeHByZXNzO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYXBwID0gZXhwcmVzcygpO1xuICAgICAgICBuZXcgUm91dGVzKHRoaXMuYXBwKS5yb3V0ZXMoKTtcbiAgICAgICAgdGhpcy5hcHAudXNlKGpzb24oKSk7XG4gICAgICAgIHRoaXMuYXBwLnNldCgndmlld3MnLCBgJHtjb25maWcucm9vdFBhdGh9L3ZpZXdzYCk7XG4gICAgICAgIHRoaXMuYXBwLmVuZ2luZSgnaHRtbCcsIHJlcXVpcmUoJ2VqcycpLnJlbmRlckZpbGUpO1xuICAgICAgICB0aGlzLmFwcC5zZXQoJ3ZpZXcgZW5naW5lJywgJ2h0bWwnKTtcbiAgICAgICAgdGhpcy5hcHAudXNlKG1vcmdhbignZGV2JykpO1xuICAgICAgICB0aGlzLmFwcC5saXN0ZW4oY29uZmlnLnBvcnQsICgpID0+IHtcbiAgICAgICAgICAgIHdpbnN0b24ubG9nKCdpbmZvJywgJy0tPiBTZXJ2ZXIgc3VjY2Vzc2Z1bGx5IHN0YXJ0ZWQgYXQgcG9ydCAlZCcsIGNvbmZpZy5wb3J0KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5uZXcgU2VydmVyKCk7XG4iXX0=
