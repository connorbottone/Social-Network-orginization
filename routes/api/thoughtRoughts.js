const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtByID,
    createNewThought,
    updateThought,
    deleteThought,
    addNewReaction,
    deleteReaction

} = require('../../controllers/thoughtConroller');


router.route('/')
    .get(getAllThoughts)
    .post(createNewThought);

router.route('/:thoughtId')
    .get(getThoughtByID)
    .put(updateThought)
    .delete(deleteThought);

router.route('/:thoughtId/reactions/')
    .post(addNewReaction)

router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;