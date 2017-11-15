var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	const accessToken = req.cookies.accessToken;
	keystone.list('User').model.findById(accessToken).populate('friends').exec(function (err, result) {
		if (result) {
			locals.friends = result.friends;
			locals.name = result.name;
			view.render('account');
		}
		else {
			res.redirect('/');
		}
	});
};
