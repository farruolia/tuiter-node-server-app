import posts from "./tuits.js";
let tuits = posts;

const TuitsController = (app) => {
    app.get('/api/tuits', findTuits);
    app.post('/api/tuits', createTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
    app.put('/api/tuits/:tid', updateTuit);
}

const findTuits = (req, res) =>
    res.json(tuits);

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
    newTuit.userName = "Farida Olia";
    newTuit.image = "farru.jpeg";
    newTuit.time = "now";
    newTuit.handle = "@farruolia";
    newTuit.replies = 0;
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.dislikes = 0;
    newTuit.disliked = false;
    newTuit.retuits = 0;
    tuits.push(newTuit);
    res.json(newTuit);
}

const deleteTuit = (req, res) => {
    const tuitIdToDelete = req.params['tid'];
    tuits = tuits.filter(t =>
            t._id !== tuitIdToDelete
        );
    res.sendStatus(200);
}

const updateTuit = (req, res) => {
    const tuitIdToUpdate = req.params.tid;
    const updates = req.body;
    const tuitIndex = tuits.findIndex(
        (t) => t._id === tuitIdToUpdate)
    tuits[tuitIndex] =
        {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);
}

export default TuitsController
