"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("./components/errors/errors");
const index_1 = require("./api/vision/index");
class default_1 {
    constructor(app) {
        this.app = app;
        this.errors = new errors_1.default();
        this.visionApi = new index_1.default();
    }
    routes() {
        // Enable CORS
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Headers, Authorization, X-Requested-With');
            res.header('Access-Control-Max-Age', '3600');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            next();
        });
        // Insert routes below
        this.app.use('/api/vision', this.visionApi.routes());
        // All undefined asset or api routes should return a 404
        this.app.route('/:url(api|auth|components|app|bower_components|assets)/*')
            .get(this.errors['pageNotFound']);
        // All other routes should redirect to the index.html
        this.app.route('/*')
            .get((req, res) => {
            res.status(200).send('Server running ...');
        });
    }
}
exports.default = default_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx1REFBZ0Q7QUFTaEQsOENBQTJDO0FBRTNDO0lBR0UsWUFBb0IsR0FBUTtRQUFSLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGdCQUFNLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksZUFBUyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELE1BQU07UUFDSixjQUFjO1FBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCO1lBQzNELEdBQUcsQ0FBQyxNQUFNLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDL0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsRUFBRSwrR0FBK0csQ0FBQyxDQUFDO1lBQzVKLEdBQUcsQ0FBQyxNQUFNLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDN0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsRUFBRSxpQ0FBaUMsQ0FBQyxDQUFDO1lBQzlFLElBQUksRUFBRSxDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQUM7UUFDSCxzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNyRCx3REFBd0Q7UUFDeEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsMERBQTBELENBQUM7YUFDdkUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUVwQyxxREFBcUQ7UUFDckQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2FBQ2pCLEdBQUcsQ0FBQyxDQUFDLEdBQVksRUFBRSxHQUFhO1lBQy9CLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0Y7QUE3QkQsNEJBNkJDIiwiZmlsZSI6InNyYy9yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBFcnJvcnMgZnJvbSAnLi9jb21wb25lbnRzL2Vycm9ycy9lcnJvcnMnO1xuaW1wb3J0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5pbXBvcnQge1xuICAgIEV4cHJlc3MsXG4gICAgUmVxdWVzdCxcbiAgICBSZXNwb25zZSxcbiAgICBOZXh0RnVuY3Rpb25cbn0gZnJvbSAnZXhwcmVzcyc7XG5cbmltcG9ydCBWaXNpb25BcGkgZnJvbSAnLi9hcGkvdmlzaW9uL2luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBlcnJvcnM6IEVycm9ycztcbiAgdmlzaW9uQXBpOiBWaXNpb25BcGk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwOiBhbnkpIHtcbiAgICB0aGlzLmVycm9ycyA9IG5ldyBFcnJvcnMoKTtcbiAgICB0aGlzLnZpc2lvbkFwaSA9IG5ldyBWaXNpb25BcGkoKTtcbiAgfVxuXG4gIHJvdXRlcygpIHtcbiAgICAvLyBFbmFibGUgQ09SU1xuICAgIHRoaXMuYXBwLnVzZSgocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJyk7XG4gICAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJywgJ09yaWdpbiwgWC1SZXF1ZXN0ZWQtV2l0aCwgQ29udGVudC1UeXBlLCBBY2NlcHQsIEFjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMsIEF1dGhvcml6YXRpb24sIFgtUmVxdWVzdGVkLVdpdGgnKTtcbiAgICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLU1heC1BZ2UnLCAnMzYwMCcpO1xuICAgICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsICdHRVQsIFBPU1QsIFBVVCwgREVMRVRFLCBPUFRJT05TJyk7XG4gICAgICBuZXh0KCk7XG4gICAgfSk7XG4gICAgLy8gSW5zZXJ0IHJvdXRlcyBiZWxvd1xuICAgIHRoaXMuYXBwLnVzZSgnL2FwaS92aXNpb24nLCB0aGlzLnZpc2lvbkFwaS5yb3V0ZXMoKSk7XG4gICAgLy8gQWxsIHVuZGVmaW5lZCBhc3NldCBvciBhcGkgcm91dGVzIHNob3VsZCByZXR1cm4gYSA0MDRcbiAgICB0aGlzLmFwcC5yb3V0ZSgnLzp1cmwoYXBpfGF1dGh8Y29tcG9uZW50c3xhcHB8Ym93ZXJfY29tcG9uZW50c3xhc3NldHMpLyonKVxuICAgICAgLmdldCh0aGlzLmVycm9yc1sncGFnZU5vdEZvdW5kJ10pO1xuXG4gICAgLy8gQWxsIG90aGVyIHJvdXRlcyBzaG91bGQgcmVkaXJlY3QgdG8gdGhlIGluZGV4Lmh0bWxcbiAgICB0aGlzLmFwcC5yb3V0ZSgnLyonKVxuICAgICAgLmdldCgocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKCdTZXJ2ZXIgcnVubmluZyAuLi4nKTtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=
