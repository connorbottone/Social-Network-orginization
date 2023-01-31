const router = require('express').Router();
//import functions created in userescontroller
const {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUser,
  deleteUser,
  newFriend,
  removeFriend
} = require('../../controllers/usersController');

//get and post methods for router using imported functions
router.route('/')
.get(getAllUsers)
.post(createNewUser);

//get put and delete methods with input of userid
router.route('/:userId')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

//route for posting and delte wiht user id and freind id being passed through
router.route('/:userId/friends/:friendId')
.post(newFriend)
.delete(removeFriend);

module.exports = router;