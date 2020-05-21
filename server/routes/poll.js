const router = require('express').Router();
const handle = require('../handlers');
const auth = require('../middlewares/auth');


router.route('/').get(handle.showPolls).post(auth, handle.createPoll);

module.exports = router;

router.get('/user',auth,handle.usersPolls);
router.route('/:id').get().delete().post();