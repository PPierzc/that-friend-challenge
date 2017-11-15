var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	const id = req.cookies['accessToken'];
	keystone.list('User').model.findById(id).exec(function (err, user) {
		user.friends.push(req.params.id);
		user.save(function (err) {
			res.redirect('back');
		});
	});
};
