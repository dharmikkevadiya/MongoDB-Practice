const mongoose = require("mongoose");


//Connection creation && database creation if not present
mongoose.connect("mongodb://localhost:27017/db1", {useNewUrlParser: true, useUnifiedTopology: true})
.then( () => console.log("Connection successfull...."))
.catch( (err) => console.log(err));

const playlistSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    } 
});


////////////////////// CREATE DOCUMENT ///////////////////////

const Playlist = new mongoose.model("Playlist",playlistSchema);

const createDocument = async() => {
    
    try{
        const reactPlaylist = new Playlist({
            name: "React js",
            ctype: "Front end",
            videos: 80,
            author: "Thapa Technical",
            active: true
        });
        
        const jsPlaylist = new Playlist({
             name: "Javascript",
             ctype: "Front end",
             videos: 50,
             author: "Thapa technical",
             active: true
        });

        const javaPlaylist = new Playlist({
            name: "Java",
            ctype: "Back end",
            videos: 150,
            author: "Saurabh Shukla",
            active: true
        });
        
        //const result = await reactPlaylist.save();
        const result = await Playlist.insertMany([reactPlaylist,jsPlaylist,javaPlaylist]);
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
createDocument();

/*
////////////////////// READ DOCUMENT ///////////////////////

const getDocument = async()=>{
    const result = await Playlist.find();
    console.log(result);
}
getDocument(); 

////////////////////// UPDATE DOCUMENT ///////////////////////
const updateDocument = async(_id)=> {
    try{
        const result = await Playlist
        .findByIdAndUpdate({_id}, 
        {$set:{
            author: "Shaurabh shukla sir"
        }
        },{
            new: true,
            useFindAndMidify: false
    });
        
    console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

//updateDocument("61714d89c471a68e7d79c790");

////////////////////// DELETE DOCUMENT ///////////////////////

const deleteDocument = async(_id) => {
    try{
        const result = await Playlist.findByIdAndDelete({_id});
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
deleteDocument("61714a135e0f036a825a2a8e");



*/