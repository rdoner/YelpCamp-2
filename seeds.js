var mongoose   = require("mongoose");
var Campground = require("./models/campground");
var Comment    = require("./models/comment");

var data = [
    {
        name: "God's Thumb",
        image: "https://c1.staticflickr.com/9/8336/8388612906_ec820d0c9a_b.jpg",
        description: "Onions!!!"
    },   
    {
        name: "Camp",
        image: "http://wetu.com/Resources/14916/olivers-camp-fly-camping-fire.jpg",
        description: "Fire!!!"
    },    
    {
        name: "Lake",
        image: "http://survivallife.com/wp-content/uploads/2016/06/basin-creek-campground.jpg",
        description: "Water!!!"
    }
];



function seedDB(){
    //remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } 
        console.log("removed campgrounds");
        //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else{
                    console.log("Added a campground");
                    //create a comment 
                    Comment.create(
                        {
                            text: "Where are you supposed to poop?",
                            author: "Captain Jack"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else{
                                campground.comments.push(comment);
                                campground.save();
                                console.log("created new comment");
                            }
                        }); 
                }
            });
        });
    });
}

module.exports = seedDB;