var configuration = {
    imageUrl: "carcassonne.png",
    tileWidth: 32,
    tileHeight: 32,
    tiles: {
        "grass": {
            imageX: 166,
            imageY: 157,
            north: "grass-plain",
            south: "grass-plain",
            west: "grass-plain",
            east: "grass-plain"
        },
        "grass-road-w": {
            imageX: 299,
            imageY: 186,
            north: "grass-plain",
            south: "grass-plain",
            west: "grass-road",
            east: "grass-plain"
        },
        "grass-road-we": {
            imageX: 66,
            imageY: 32,
            north: "grass-plain",
            south: "grass-plain",
            west: "grass-road",
            east: "grass-road"
        },
        "grass-road-sw": {
            imageX: 66,
            imageY: 63,
            north: "grass-plain",
            south: "grass-road",
            west: "grass-road",
            east: "grass-plain"
        },
        "grass-road-swe": {
            imageX: 267,
            imageY: 62,
            north: "grass-plain",
            south: "grass-road",
            west: "grass-road",
            east: "grass-road"
        },
        "grass-road-nswe": {
            imageX: 266,
            imageY: 156,
            north: "grass-road",
            south: "grass-road",
            west: "grass-road",
            east: "grass-road"
        },
        "grass-city-road-we": {
            imageX: 33,
            imageY: 0,
            north: "grass-plain",
            south: "grass-city",
            west: "grass-road",
            east: "grass-road"
        },
        "grass-city-road-sw": {
            imageX: 133,
            imageY: 32,
            north: "grass-city",
            south: "grass-road",
            west: "grass-road",
            east: "grass-city"
        },
        "grass-city-road-swe": {
            imageX: 100,
            imageY: 33,
            north: "grass-road",
            south: "grass-city",
            west: "grass-road",
            east: "grass-road"
        },
        "grass-city-road-n": {
            imageX: 301,
            imageY: 218,
            north: "grass-road",
            south: "grass-plain",
            west: "grass-city",
            east: "grass-plain"
        },
        "grass-city-road-s": {
            imageX: 267,
            imageY: 218,
            north: "grass-plain",
            south: "grass-road",
            west: "grass-city",
            east: "grass-plain"
        },
        "grass-city-road-e": {
            imageX: 335,
            imageY: 218,
            north: "grass-plain",
            south: "grass-plain",
            west: "grass-city",
            east: "grass-road"
        },
        "grass-city-road-s2": {
            imageX: 199,
            imageY: 63,
            north: "grass-city",
            south: "grass-road",
            west: "grass-city",
            east: "grass-city"
        },
        "grass-city-nswe": {
            imageX: 333,
            imageY: 30,
            north: "grass-city",
            south: "grass-city",
            west: "grass-city",
            east: "grass-city"
        },
        "grass-city-swe": {
            imageX: 334,
            imageY: 0,
            north: "grass-plain",
            south: "grass-city",
            west: "grass-city",
            east: "grass-city"
        },
        "grass-city-we": {
            imageX: 301,
            imageY: 62,
            north: "grass-plain",
            south: "grass-plain",
            west: "grass-city",
            east: "grass-city"
        },
        "grass-city-se": {
            imageX: 300,
            imageY: 0,
            north: "grass-plain",
            south: "grass-city",
            west: "grass-plain",
            east: "grass-city"
        }
    },
    biomes: {
        "plains": {
            "grass": 100,
            "grass-road-w": 1,
            "grass-road-we": 50,
            "grass-road-sw": 60,
            "grass-road-swe": 30,
            "grass-road-nswe": 1,
            "grass-city-road-we": 15,
            "grass-city-road-sw": 15,
            "grass-city-road-swe": 15,
            "grass-city-road-swe": 15,
            "grass-city-road-s2": 15,
            "grass-city-road-n": 5,
            "grass-city-road-s": 5,
            "grass-city-road-e": 5,
            "grass-city-nswe": 5,
            "grass-city-swe": 3,
            "grass-city-we": 1,
            "grass-city-se": 3
        }
    }
};

function rotateTiles(configuration) {
    var tiles = {};
    for(var tileName in configuration.tiles) {
        var tile = configuration.tiles[tileName];
        tiles[tileName] = tile;
        tiles[tileName + '.rotate-90'] = {
            imageX: tile.imageX, 
            imageY: tile.imageY, 
            imageAngle: 0.5 * Math.PI, 
            north: tile.west, 
            south: tile.east, 
            west: tile.south,
            east: tile.north
        };
        tiles[tileName + '.rotate-180'] = {
            imageX: tile.imageX, 
            imageY: tile.imageY, 
            imageAngle: 1.0 * Math.PI, 
            north: tile.south, 
            south: tile.north, 
            west: tile.east,
            east: tile.west
        };
        tiles[tileName + '.rotate-270'] = {
            imageX: tile.imageX, 
            imageY: tile.imageY, 
            imageAngle: 1.5 * Math.PI, 
            north: tile.east, 
            south: tile.west, 
            west: tile.north,
            east: tile.south
        };
    }
    var biomes = {};
    for(var biomeName in configuration.biomes) {
        var oldBiome = configuration.biomes[biomeName];
        var biome = {};
        for(var name in oldBiome) {
            biome[name] = oldBiome[name];
            biome[name + '.rotate-90'] = oldBiome[name];
            biome[name + '.rotate-180'] = oldBiome[name];
            biome[name + '.rotate-270'] = oldBiome[name];
        }
        biomes[biomeName] = biome;
    }
    configuration.tiles = tiles;
    configuration.biomes = biomes;
    console.dir(configuration);
}
