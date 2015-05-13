/* jshint expr:true */

'use strict';

var expect    = require('chai').expect,
    Game      = require('../../server/models/game'),
    dbConnect = require('../../server/lib/mongodb'),
    cp        = require('child_process'),
    db        = 'mongodb://localhost/mpp-test';

describe('Game', function(){
  before(function(done){
    dbConnect(db, function(){
      done();
    });
  });

  beforeEach(function(done){
    cp.execFile(__dirname + '/../scripts/clean-db.sh', ['mpp-test'], {cwd:__dirname + '/../scripts'}, function(err, stdout, stderr){
      done();
    });
  });

  describe('constructor', function(){
    it('should create a new Game object', function(){
      var p = new Game({players:[{name:'a', coins:1, stars:1}, {name:'b', coins:2, stars:2}, {name:'c', coins:3, stars:3}]});
      expect(p).to.be.instanceof(Game);
    });
  });

  describe('.create', function(){
    it('should create a new game', function(done){
      Game.create({players:[{name:'a', coins:1, stars:1}, {name:'b', coins:2, stars:2}, {name:'c', coins:3, stars:3}]}, function(err, game){
        expect(game).to.be.ok;
        done();
      });
    });
  });
});

