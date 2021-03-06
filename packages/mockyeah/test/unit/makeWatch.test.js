'use strict';

const { expect } = require('chai');

const { __restart } = require('../../app/makeAPI/makeWatch');

const mockApp = playingNames => {
  const called = {
    play: []
  };

  return {
    config: {
      suitesDir: './suites',
      fixturesDir: './fixtures'
    },
    locals: {
      playingSuites: playingNames ? [...playingNames] : [],
      playingAll: !playingNames
    },
    log: () => {},
    reset: () => {
      called.reset = true;
    },
    play: name => {
      called.play.push(name);
    },
    playAll: () => {
      called.playAll = true;
    },
    called
  };
};

describe('app watcher', () => {
  it('to call reset and play all without existing suites', () => {
    const app = mockApp();
    __restart(app);
    expect(app.called).to.deep.equal({
      reset: true,
      playAll: true,
      play: []
    });
  });

  it('to call reset and play existing suites', () => {
    const app = mockApp(['foo', 'bar']);
    __restart(app);
    expect(app.called).to.deep.equal({
      reset: true,
      play: ['foo', 'bar']
    });
  });
});
