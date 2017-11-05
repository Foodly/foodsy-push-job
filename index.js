var Parse = require('parse/node').Parse;

Parse.initialize('cravely');
Parse.serverUrl = 'http://cravely.herokuapp.com/parse'

console.log('asdasd');

/*
Parse.Cloud.run('iosPushTest', { "channel": "droanrishi",
    "text": "asd"}).then(function(response) {
        console.log(response);
});

var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  alert("yay! it worked");
});
*/
var query = new Parse.Query("Ingredient");
query.find({
  success: function(users) {
    for (var i = 0; i < users.length; ++i) {
      console.log(users[i].get('name'));
    }
  },
  error: function(error) {
    console.log(error);
  },
});
