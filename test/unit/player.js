/* jshint expr:true */

'use strict';

var expect    = require('chai').expect,
    Player    = require('../../server/models/player'),
    dbConnect = require('../../server/lib/mongodb'),
    cp        = require('child_process'),
    db        = 'mongodb://localhost/mpp-test';

describe('Player', function(){
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
    it('should create a new Player object', function(){
      var p = new Player({name:'a', coins:1, stars:1});
      expect(p).to.be.instanceof(Player);
    });
  });
  describe('.add', function(){
    it('should add a player', function(done){
      Player.add({name:'Jimmy', coins:33, stars:11}, function(err, player){
        expect(player).to.be.ok;
        done();
      });
    });
  });
});

