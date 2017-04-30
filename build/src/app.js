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
            winston.log('info', '--> Server successfully started at port %d', config.port);
        });
    }
}
exports.Server = Server;
new Server();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLGlDQUFpQztBQUNqQyw2Q0FBbUM7QUFNbkMscUNBQThCO0FBQzlCLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQzFDOzs7R0FHRztBQUNIO0lBR0k7UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO1FBQ3JCLElBQUksZ0JBQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsa0JBQUksRUFBRSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsNENBQTRDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25GLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBZkQsd0JBZUM7QUFFRCxJQUFJLE1BQU0sRUFBRSxDQUFDIiwiZmlsZSI6InNyYy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgd2luc3RvbiBmcm9tICd3aW5zdG9uJztcbmltcG9ydCAqIGFzIG1vcmdhbiBmcm9tICdtb3JnYW4nO1xuaW1wb3J0IHsganNvbiB9IGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCB7XG4gICAgRXhwcmVzcyxcbiAgICBSZXF1ZXN0LFxuICAgIFJlc3BvbnNlXG59IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IFJvdXRlcyBmcm9tICcuL3JvdXRlcyc7XG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZy9jb25maWcnKTtcbi8qKlxuICogUm9vdCBjbGFzcyBvZiB5b3VyIG5vZGUgc2VydmVyLlxuICogQ2FuIGJlIHVzZWQgZm9yIGJhc2ljIGNvbmZpZ3VyYXRpb25zLCBmb3IgaW5zdGFuY2Ugc3RhcnRpbmcgdXAgdGhlIHNlcnZlciBvciByZWdpc3RlcmluZyBtaWRkbGV3YXJlLlxuICovXG5leHBvcnQgY2xhc3MgU2VydmVyIHtcbiAgICBwcml2YXRlIGFwcDogRXhwcmVzcztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFwcCA9IGV4cHJlc3MoKTtcbiAgICAgICAgbmV3IFJvdXRlcyh0aGlzLmFwcCkucm91dGVzKCk7XG4gICAgICAgIHRoaXMuYXBwLnVzZShqc29uKCkpO1xuICAgICAgICB0aGlzLmFwcC5zZXQoJ3ZpZXdzJywgYC4vdmlld3NgKTtcbiAgICAgICAgdGhpcy5hcHAuZW5naW5lKCdodG1sJywgcmVxdWlyZSgnZWpzJykucmVuZGVyRmlsZSk7XG4gICAgICAgIHRoaXMuYXBwLnNldCgndmlldyBlbmdpbmUnLCAnaHRtbCcpO1xuICAgICAgICB0aGlzLmFwcC51c2UobW9yZ2FuKCdjb21iaW5lZCcpKTtcbiAgICAgICAgdGhpcy5hcHAubGlzdGVuKGNvbmZpZy5wb3J0LCAoKSA9PiB7XG4gICAgICAgICAgICB3aW5zdG9uLmxvZygnaW5mbycsICctLT4gU2VydmVyIHN1Y2Nlc3NmdWxseSBzdGFydGVkIGF0IHBvcnQgJWQnLCBjb25maWcucG9ydCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxubmV3IFNlcnZlcigpO1xuIl19
