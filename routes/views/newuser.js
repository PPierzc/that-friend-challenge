var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	const User = keystone.list('User');
	
	if(req.body.first && req.body.last && req.body.login && req.body.pass) {

		var newUser = new User.model({
			name: {
				first: req.body.first,
				last: req.body.last,
			},
			login: req.body.login,
			password: req.body.pass,
			show: true,
		});
		newUser.save(function (err) {
			console.log(err);
			res.redirect('/');
		});
	}
	
	else {
		res.redirect('/rejestracja');
	}
};
