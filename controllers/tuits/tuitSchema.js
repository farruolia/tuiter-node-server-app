import mongoose, {Schema} from 'mongoose';

const tuitsSchema = new mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    userName: String,
    image: String,
    time: String,
    handle: String,
    replies: Number,
    dislikes: Number,
    disliked: Boolean,
    retuits: Number,
    topic: String,
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: "UserModel"
    },
}, {collection: 'tuits'});

export default tuitsSchema;