const express 	= require('express');
const router  	= express.Router();
/**		MODELS		**/
const User		= require('../models/user');

/**		INDEX 		**/
router.get('/', async (req, res) => {

	try {
		const allUsers = await User.find();
		console.log('all users: ', allUsers);

		res.json({
			status: 200,
			data: allUsers
		});
	} catch(err){
		res.send(err);
	}	
});

/**		POST		**/
router.post('/', async (req, res) => {
	console.log(req.body, '<---- req body');
	try {
		const newUser = await User.create(req.body)
		console.log('new user: ', newUser);

		res.json({
			status: 200,
			data: newUser
		});
	} catch(err){
		res.send(err);
	}
});

/**		SHOW		**/
router.get('/:id', async (req, res) => {
	
	try {
		const foundUser = await User.findById(req.params.id);
		console.log('found user: ', foundUser);

		res.json({
			status: 200,
			data: foundUser
		});
	} catch(err){
		res.send(err);
	}
});


module.exports = router;