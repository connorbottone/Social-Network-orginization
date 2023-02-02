# Social-Network-orginization 
[video demo](https://user-images.githubusercontent.com/42557300/216216491-750f01b1-b361-4f18-bd6d-b9962910b5b9.webm)


## Description
- This webpage was designed to mange a social media page and store
 - Users
 - Comments/thougths
 - And Reactions to comment/thought into a  Mongodb data base to help orginaze and manage a site
- Useres have the ability to Add and remove freinds
- aswell as post and react to comments and delete reactions/comments

 

 
 
 
## Table of Contents
 
 
 
- [Description](#description)
- [Resources](#resources)
- [Usage](#usage)
- [Author](#author)

 
 
 ## Resources
- `mongoose`
- `express`
- `Insomnia`
- `MongoDB`
 
 
## Usage
- To Run this program the user must first open the package.json in there terminal and run `npm i` to install all required packages.
- After the user can run the command `npm start to begin the server`
- The user can then load Insomnia or there preferd program and begin to
- With `http://localhost:3001/api/users/`
- Create new users
- Get all Users
- Get a single user by there assigned ID
- Update a users information by ID
- Delete a user by ID
- Add freinds to users freind list by IDs
- Remove freind from there freind list by IDs
- With `http://localhost:3001/api/thoughts/`
- Create a new Thought/comment
- Get all Thoughts/comments
- Update a Thought/comment by ID
- Delete a Thought/comment by ID
- With `http://localhost:3001/api/thoughts/:thought_id/reactions/`
- Post a reaction to and exsisting comment
- With `http://localhost:3001/api/thoughts/thougth_id/reactions/reactionID`
- And Delete reaction 



 
## Author
(email at : connorbottone@gmail.com)
