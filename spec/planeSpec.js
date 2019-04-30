'use strict';

describe('Plane', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    // airport = spyOn(airport, ['land']);
  });

  it('can land at airport', function(){
    expect(plane.land).not.toBeUndefined()
  });
});
