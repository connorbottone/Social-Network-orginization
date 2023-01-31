//import models
const { Users, Thought } = require('../models');
//exporting all functions 
module.exports = {
 //function to retrive all users
  getAllUsers(req, res) {
    Users.find()
      .select('-__v')
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  //function to retrieve a user by given ID
  getUserById(req, res) {
    Users.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((users) =>
        !users
          ? res.status(404).json({ message: 'No user found with given ID' })
          : res.json(users)
      )
      .catch((err) => res.status(500).json(err));
  },
 //function to create a new user
  createNewUser(req, res) {
    Users.create(req.body)
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

 //function to update user by given ID
  updateUser(req, res) {
    Users.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      {
        runValidators: true,
        new: true
      }
    )
      .then((users) =>
        !users
          ? res.status(404).json({ message: 'No user found with given ID' })
          : res.json(users)
      )
      .catch((err) => res.status(500).json(err));
  },

//function to delete a user by given ID
  deleteUser(req, res) {
    Users.findOneAndDelete({ _id: req.params.userId })
      .then((users) =>
        !users
          ? res.status(404).json({ message: 'No user found with given ID' })
          
          : Thought.deleteMany({ _id: { $in: users.thoughts } })
      )
      .then(() => res.json({ message: 'User deleted sucsefully!' }))
      .catch((err) => res.status(500).json(err));
  },
//function to add a new freind to exsisting user 
  newFriend(req, res) {
    Users.findOneAndUpdate(
      { _id: req.params.usersId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    )
      .then((users) =>
        !users
          ? res.status(404).json({ message: 'No user found with given ID' })
          : res.json(users)
      )
      .catch((err) => res.status(500).json(err));
  },
//function to remove freind from users listed freinds by ID
  removeFriend(req, res) {
    Users.findOneAndUpdate(
      { _id: req.params.usersId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then((users) =>
        !users
          ? res.status(404).json({ message: 'No user found with given ID' })
          : res.json(users)
      )
      .catch((err) => res.status(500).json(err));
  },

};