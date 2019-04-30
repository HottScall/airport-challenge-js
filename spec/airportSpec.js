'use strict'

describe ('Airport', function(){

 var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  it('allows a plane to land', function(){
    expect(airport.planes()).toEqual([]);
    });
});
