var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb+srv://DBS311:Qwerty1234@hpatel311-cluster.lehvill.mongodb.net/test");

var personSchema = new Schema({
    "firstName": String,
    "lastName": String,
    "Age": Number
});

var Person = mongoose.model("person", personSchema);

// create
var person = new Person(
    {
        firstName: "Hari",
        lastName: "Patel",
        Age: 18
    }
)

person.save().then(()=>{
    console.log("The Person data was saved to the person collection");
}).catch(err => {
    console.log("There was an error saving Person data");
});

// read
Person.find({}, {firstName: 1, Age: 1})
.exec()
.then((people) => {
    people = people.map(value => value.toObject());
    console.log(people);
});

// update
Person.updateOne({firstName: "Hari"}, {$set: { firstName: "Harikrishna" }})
.exec()
.then(() => {
    console.log("updated name: Hari to Harikrishna");
}).catch(err =>{
    console.log("failed to update name");
})

// delete
Person.deleteOne({firstName: "Harikrishna"})
.exec()
.then(() => {
    console.log("removed successfuly person data");
}).catch(err =>{
    console.log("failed to remove person data");
})
