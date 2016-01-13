function chooseTile(tiles, biome, north, south, west, east) {
    var usableTileNames = [];
    var prevalenceSum = 0;
    var defaultPrevalence = 0;
    for(var tileName in tiles) {
        var tile = tiles[tileName];
        if(
            (north == null || tile.north == north) && 
            (south == null || tile.south == south) && 
            (west == null || tile.west == west) && 
            (east == null || tile.east == east)
        ) {
            usableTileNames.push(tileName);
            prevalenceSum += biome[tileName] || defaultPrevalence;
        }
    }
    if(prevalenceSum == 0) {
        defaultPrevalence = 1;
        prevalenceSum = usableTileNames.length;
    }
    var skip = Math.random() * prevalenceSum;
    for(var i = 0; i < usableTileNames.length; i++) {
        skip -= biome[usableTileNames[i]] || defaultPrevalence;
        if(skip < 0) return usableTileNames[i];
    }
    return null;
}

function chooseTileAt(configuration, map, x, y) {
    var tiles = configuration.tiles;
    var biome = configuration.biomes['plains']; // TODO
    var northName = map[x + ',' + (y - 1)];
    var southName = map[x + ',' + (y + 1)];
    var westName = map[(x - 1) + ',' + y];
    var eastName = map[(x + 1) + ',' + y];
    var north = northName != null ? tiles[northName].south : null;
    var south = southName != null ? tiles[southName].north : null;
    var west = westName != null ? tiles[westName].east : null;
    var east = eastName != null ? tiles[eastName].west : null;
    var tileName = chooseTile(tiles, biome, north, south, west, east);
    map[x + ',' + y] = tileName;
}

function fillGaps(configuration, map, x1, y1, x2, y2) {
    for(var full = 0; full <= 1; full++) {
        for(var x = x1; x <= x2; x++) {
            for(var y = y1; y <= y2; y++) {
                if(map[x + ',' + y] == null && (full == 1 || (x % 2 == 0 && y % 2 == 0))) {
                    chooseTileAt(configuration, map, x, y);
                }
            }
        }
    }
}
