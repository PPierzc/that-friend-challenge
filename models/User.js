var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var User = new keystone.List('User');

User.add({
	name: { type: Types.Name, required: true, index: true },
	login: { type: String, unique: true, index: true, initial: true,},
	email: { type: Types.Email },
	password: { type: Types.Password, initial: true, required: true },
	friends: {
		type: Types.Relationship,
		ref: 'User',
		label: 'Znajomi',
		many: true,
	},
}, 'Permissions', {
	show: { type: Boolean, label: 'Show in app?', index: true },
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
});

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});


/**
 * Registration
 */
User.defaultColumns = 'name, isAdmin';
User.register();
