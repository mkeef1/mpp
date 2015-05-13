'use strict';

// var bcrypt = require('bcrypt'),
//     Mongo  = require('mongodb');

function Game(o){
  this.players = [{name: o.players.name, coins: o.players.coins, stars: o.players.stars}];
}

Object.defineProperty(Game, 'collection', {
  get: function(){return global.mongodb.collection('games');}
});

// Player.findById = function(id, cb){
//   var _id = Mongo.ObjectID(id);
//   Player.collection.findOne({_id:_id}, cb);
// };

Game.create = function(o, cb){
  var p = new Game(o);
  Game.collection.save(p, cb);
};

module.exports = Game;
