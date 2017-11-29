var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
};

// Setup Route Bindings
exports = module.exports = function (app) {
	// Views
	app.get('/', routes.views.index);
	app.get('/account', routes.views.account);
	app.get('/rejestracja', routes.views.rejestracja);
	app.get('/api/users', routes.views.users);
	app.get('/api/logout', routes.views.logout);
	
	app.post('/api/auth', routes.views.auth);
	app.post('/api/addfriend/:id', routes.views.addfriend);
	app.post('/api/removefriend/:id', routes.views.removefriend);
	app.post('/api/newuser/', routes.views.newuser);

};
