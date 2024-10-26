const buyPickaxe = require("./commands/buy-pickaxe");
const buyAxe = require("./commands/buy-pickaxe");
const buySeed = require("./commands/buy-seed");
const collectWater = require("./commands/collect-water");
const digWell = require("./commands/dig-well");
const plantSeed = require("./commands/plant-seed");
const cutTree = require("./commands/cut-tree");
const harvestSeed = require("./commands/harvest-seed");
const bakeBread = require("./commands/bake-bread");
const buildBarrel = require("./commands/build-barrel");
const buildStorage = require("./commands/build-storage");
const buildShip = require("./commands/build-ship");
const battleShip = require("./commands/battle-ship");
const treasureHunt = require("./commands/treasure-hunt");
const convertAmmo = require("./commands/convert-ammo");
const vote = require("./commands/vote");
const tipArtist = require("./commands/tip-artist");
const submitSong = require("./commands/submit-song");

const commands = {
  // resource management
  "!buy-axe": buyAxe,
  "!buy-pickaxe": buyPickaxe,
  "!buy-seed": buySeed,
  "!collect-water": collectWater,
  "!dig-well": digWell,
  "!plant-seed": plantSeed,
  "!cut-tree": cutTree,
  "!harvest-seed": harvestSeed,
  "!bake-bread": bakeBread,
  "!build-barrel": buildBarrel,
  "!build-storage": buildStorage,

  // pirate ship battle
  "!build-ship": buildShip,
  "!battle-ship": battleShip,
  "!treasure-hunt": treasureHunt,
  "!convert-ammo": convertAmmo,

  // artist related
  "!vote": vote,
  "!tip-artist": tipArtist,
  "!submit-song": submitSong,
};

module.exports = commands;
