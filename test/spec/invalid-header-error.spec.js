import {expect} from 'chai';
import InvalidHeaderError from '../../src/invalid-header-error';

describe('InvalidHeaderError', () => {
  it('should inherit from TypeError', () => {
    expect(new InvalidHeaderError()).to.be.an.instanceof(TypeError);
  });

  it('should set given message', () => {
    expect(new InvalidHeaderError('foobar').message).to.equal('foobar');
  });
});
