var keystone = require('keystone');
var Cookies = require('cookies');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	const User = keystone.list('User');
	User.model.findOne().where('login', req.body.login).exec(function (searchErr, user) {
		if (user) {
			user._.password.compare(req.body.pass, function (err, success) {
				if (success) {
					res.cookie('accessToken', user._id);
					res.redirect('/account');
				} else {
					res.redirect('/');
				}
			});
		} else {
			res.redirect('/');
		}
	});
};
