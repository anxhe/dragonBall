function generateRandomPositions(quantity) {
  var positions = [];
  while (positions.length != quantity) {
    var positionX = Math.floor(Math.random() * 20) * 50;
    var positionY = Math.floor(Math.random() * 14) * 50;
    var position = positionX + ',' + positionY;
    if (positions.indexOf(position) == -1){
      positions.push(position);
    }
  }
   positions = positions.map(function(p){
     p = p.split(',');
     return { x: parseInt(p[0]), y: parseInt(p[1]) };
   });
  return positions;
};
