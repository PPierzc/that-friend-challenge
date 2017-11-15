var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	res.clearCookie('accessToken', {path:'/'});
	res.redirect('/');
};
