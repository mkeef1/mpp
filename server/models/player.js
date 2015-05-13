'use strict';

// var bcrypt = require('bcrypt'),
//     Mongo  = require('mongodb');

function Player(o){
  this.name = o.name;
  this.coins = o.coins;
  this.stars = o.stars;
}

Object.defineProperty(Player, 'collection', {
  get: function(){return global.mongodb.collection('players');}
});

// Player.findById = function(id, cb){
//   var _id = Mongo.ObjectID(id);
//   Player.collection.findOne({_id:_id}, cb);
// };

Player.add = function(o, cb){
  var p = new Player(o);
  Player.collection.save(p, cb);
};


module.exports = Player;

