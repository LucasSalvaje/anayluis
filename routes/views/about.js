var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'image, pantalla';

	locals.data = {
		images: [],
		pantallas: [],
	};

	// Load the galleries by sortOrder
	view.query('pantallas', keystone.list('Pantalla').model.find().where('name', "About"));
	view.query('images', keystone.list('Image').model.find().sort('sortOrder'));

	// Render the view
	view.render('about');

};
