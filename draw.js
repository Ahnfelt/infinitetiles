function loadTileImage(configuration, callback) {
    var image = new Image();
    var tileWidth = configuration.tileWidth;
    var tileHeight = configuration.tileHeight;
    function drawTile(context, tileName, x, y) {
        var offsetX = x * tileWidth;
        var offsetY = y * tileHeight;
        var tile = configuration.tiles[tileName];
        context.translate(offsetX + 0.5 * tileWidth, offsetY + 0.5 * tileHeight);
        context.rotate(tile.imageAngle);
        context.drawImage(image, tile.imageX, tile.imageY, tileWidth, tileHeight, -(0.5 * tileWidth), -(0.5 * tileHeight), tileWidth, tileHeight);
        context.rotate(-tile.imageAngle);
        context.translate(-(offsetX + 0.5 * tileWidth), -(offsetY + 0.5 * tileHeight));
    };
    image.onload = function() {
        callback(drawTile); 
    };
    image.src = configuration.imageUrl;
}

function drawTileMap(context, drawTile, map, x1, y1, x2, y2) {
    for(var x = x1; x <= x2; x++) {
        for(var y = y1; y <= y2; y++) {
            var tileName = map[x + ',' + y];
            if(tileName != null) {
                drawTile(context, tileName, x, y);
            }
        }
    }
}
