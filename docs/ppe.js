// Created by Leighton Nylander on 1/29/2024
// Last edited: 5/02/2024

/*

    To Do:
        - Add a blurb on the main page about what the website is for 
        - Add percent total of subcategories (e.g. 'Abilities: 5/20 25%)

        - class-specific toggle is STILL showing non-class items for certain classes (for certain classes, I can't duplicate the bug)

*/

const allItems = ["heartfindDagger", "poisonFangDagger", "boneDagger", "misterMango", "spiritDagger", "corruptionCutter", "theRightHook", "chainDagger", "queensStinger", "duelingDaggers", "corrosionCutter", "dirkOfCronus", "avarice", "bountyHuntersDagger", "mischief", "fractalBlades", "cupidsBow", "brambleBow", "butterBow", "coralBow", "doomBow", "leafBow", "thousandShot", "bow", "sunsJudgement", "blazonBow", "bowOfTheVoid", "warmonger", "makakoyumi", "predatorBow", "clockworkRepeater", "hamaYumi", "staffOfAdoration", "staffOfTheCrystalSerpent", "kiddForce", "spiritStaff", "staffOfExtremePrejudice", "staffOfEsben", "tezcacoatlsTail", "staff", "foramiteStaff", "cometOfCalamity", "bogwoodCrook", "staffOfUnholySacrifice", "superior", "oppressorsStaff", "vigor", "mechanicalKogboldLimb", "steamPipe", "crystallizedWormSpellblade", "wandOfBuddingRomance", "spriteWand", "stAbrahamsWand", "caduceusOfCurrentCraziness", "crystalWand", "wandOfTheBulwark", "wandOfTheFallen", "conductingWand", "soulsGuidance", "warlordWand", "snowblindWand", "laserPointer", "duskyCatalyst", "lumiaire", "tyrantsWand", "fortitude", "beekeepersFlamethrower", "vinesword", "mmaceMmurderer", "crystalSword", "arcaneRapier", "demonBlade", "ancientStoneSword", "pirateKingsCutlass", "acidic", "gaseousGlaive", "swordOfTheColossus", "divinity", "henchmansClaymore", "atavisticSoulSabre", "barnacleBasher", "diamondBladedKatana", "bladeOfAges", "voidBlade", "dokuNoKen", "celestialBlade", "moonbeamBlade", "fireBlade", "rayKatana", "valor", "enforcer", "bladeOfTheAssailant", "socketBlade", "brambletoothTachi", "burialBlades", "mirrorCloak", "cloakOfThePlanewalker", "cloakOfCubicEnigma", "cloakOfTheMadGod", "cloakOfRefraction", "cloakOfBloodySurprises", "cloakOfTheDarkenedSun", "cocoonQuiver", "archerang", "doubleVisionDarts", "quiver", "beehemothQuiver", "quiverOfThunder", "quiverOfTheShadows", "madJavelin", "spellingSpell", "penetratingBlastSpell", "jadeStorm", "sporousSpraySpell", "recurringTerrorSpell", "tabletOfTheKingsAvatar", "genesisSpell", "cursedSpireSpell", "tomeOfMoralSupport", "necronomicon", "tomeOfPain", "tomeOfTheMushroomTribes", "tomeOfPurification", "tomeOfHolyFuror", "tomeOfHolyProtection", "chaoticScripture", "tomeOfTheTarnishedGods", "amberEncrustedHelmet", "challengerHelm", "tipsyTopper", "hivemasterHelm", "vanguardsVisage", "helmOfTheJuggernaut", "helmOfExaltedMight", "snakeskinShield", "shieldOfPogmur", "spitefulScutum", "shieldOfFlowingClarity", "kogboldCowerShield", "crystalShield", "shieldOfOgmur", "oryxsEscutcheon", "brutalBuckler", "sandstoneSeal", "sealOfEternalLife", "scholarsSeal", "sealOfCubicConundra", "sealOfBlasphemousPrayer", "marbleSeal", "sealOfTheBattleGod", "lightningInABottle", "mightyStein", "murkyToxin", "bottledMedusozoan", "plaguePoison", "crystallizedFangsVenom", "polarityPoison", "tyrantsToxin", "crackedCrystalSkull", "epiphanySkull", "skullishRemainsOfEsben", "sealedCrystalSkull", "perennialCranium", "brainCube", "skullOfEndlessTorment", "skullOfCorruptedSouls", "demonLordsSkull", "sulfuricStone", "heliumTrap", "deadlyKeg", "coralVenomTrap", "caveDwellerTrap", "rainMaker", "mimicryTrap", "trapOfTheVileSpirit", "blacklightArtifice", "orbOfSweetDemise", "karmaOrb", "enchantmentOrb", "orbOfAether", "orbOfConflict", "primalArcana", "orbOfConquest", "foolsPrism", "prismOfDancingSwords", "echoesPrism", "prismOfDireInstability", "ghostlyPrism", "prismimic", "gamblersFate", "prismOfShatteredLight", "honeyScepter", "honeyScepterSupreme", "scepterOfRust", "scepterOfFulmination", "cnidariaRod", "scepterOfDevastation", "tezutsuHanabi", "siegeScepter", "spiderShuriken", "unshuriken", "midnightStar", "hanagasaku", "starOfEnlightenment", "kageboshi", "ballisticStar", "rageClaws", "roninsWakizashi", "nsfwakizashi", "shadowSerpentSidearm", "wakizashiOfEasternWinds", "wakizashiOfCrossingFires", "fracturedGemstoneWakizashi", "kogboldMultitool", "sentinelsSidearm", "amaterasu", "lullaby", "snakeCharmerPungi", "wavecrestConcertina", "pharaohsRequiem", "taikoDrums", "nobleMandolin", "chiefsWarHorn", "recursionMace", "maceOfTheCelestialForest", "maceOfTheDepths", "crystalMace", "hivemindMace", "peacekeeper", "mechanicalMace", "paperMachete", "volcanicSheath", "quartermasterScabbard", "kaiken", "labrynthDwellersSheath", "elegantParasol", "irradianceSheath", "blitzSheath", "snakeskinArmor", "coralSilkArmor", "spectralClothArmor", "beehemothArmor", "cheaterLightArmor", "greaterHosen", "harlequinArmor", "leafDragonHideArmor", "fittedProtectiveMatrix", "etherealHappi", "armorOfNil", "vestOfAbandonedShadows", "turncoatCape", "centaursShielding", "squadronSheathing", "robeOfTlatoani", "woodlandRobe", "chasubleOfHolyLight", "tlatoanisShroud", "cheaterRobe", "robeOfTheMadScientist", "waterDragonSilkRobe", "magicProtectiveMatrix", "esbensShamanAttire", "floweringKimono", "ritualRobe", "mantleOfTheMonarchy", "diplomaticRobe", "vestureOfDuality", "judgesRobe", "cheaterHeavyArmor", "warpedMantle", "fireDragonBattleArmor", "heavyProtectiveMatrix", "fungalBreastplate", "caskCorslet", "resurrectedWarriorsArmor", "candyCoatedArmor", "sagesWakibiki", "breastplateOfNewLife", "royalGuardsCuirass", "gladiatorGuard", "aegisArmor", "corsairRing", "candyRing", "crystalBoneRing", "spidersEyeRing", "snakeEyeRing", "fairyRing", "coralRing", "captainsRing", "ringOfDivineFaith", "amuletOfDispersion", "experimentalRing", "lockedReactor", "ringOfDecades", "theForgottenRing", "esbensWeddingRing", "ringOfTheSphinx", "ringOfTheNile", "ringOfThePyramid", "thistleleafNecklace", "brewersBangle", "crystallisedMist", "eye", "tokenOfHappiness", "tokenOfWarmth", "overclockingAmulet", "magicalLodestone", "bloodshedRing", "sourcestone", "chancellorsCranium", "collectorsMonocle", "divineCoronation", "battalionBanner", "exaltedGodsHorn", "bracerOfTheGuardian", "theTwilightGemstone", "theForgottenCrown", "kagenohikari", "omnipotenceRing", "chrysalisOfEternity"];

const daggers = ["heartfindDagger", "poisonFangDagger", "boneDagger", "misterMango", "spiritDagger", "corruptionCutter", "theRightHook", "chainDagger", "queensStinger", "duelingDaggers", "corrosionCutter", "dirkOfCronus", "avarice", "bountyHuntersDagger", "mischief", "fractalBlades"];

const bows = ["cupidsBow", "brambleBow", "butterBow", "coralBow", "doomBow", "leafBow", "thousandShot", "bow", "sunsJudgement", "blazonBow", "bowOfTheVoid", "warmonger", "makakoyumi", "predatorBow", "clockworkRepeater", "hamaYumi"];

const staves = ["staffOfAdoration", "staffOfTheCrystalSerpent", "kiddForce", "spiritStaff", "staffOfExtremePrejudice", "staffOfEsben", "tezcacoatlsTail", "staff", "foramiteStaff", "cometOfCalamity", "bogwoodCrook", "staffOfUnholySacrifice", "superior", "oppressorsStaff", "vigor", "mechanicalKogboldLimb", "steamPipe", "crystallizedWormSpellblade"];

const wands = ["wandOfBuddingRomance", "spriteWand", "stAbrahamsWand", "caduceusOfCurrentCraziness", "crystalWand", "wandOfTheBulwark", "wandOfTheFallen", "conductingWand", "soulsGuidance", "warlordWand", "snowblindWand", "laserPointer", "duskyCatalyst", "lumiaire", "tyrantsWand", "fortitude", "beekeepersFlamethrower"];

const swords = ["vinesword", "mmaceMmurderer", "crystalSword", "arcaneRapier", "demonBlade", "ancientStoneSword", "pirateKingsCutlass", "acidic", "gaseousGlaive", "swordOfTheColossus", "divinity", "henchmansClaymore", "atavisticSoulSabre", "barnacleBasher"];

const katanas = ["diamondBladedKatana", "bladeOfAges", "voidBlade", "dokuNoKen", "celestialBlade", "moonbeamBlade", "fireBlade", "rayKatana", "valor", "enforcer", "bladeOfTheAssailant", "socketBlade", "brambletoothTachi", "burialBlades"];

const cloaks = ["mirrorCloak", "cloakOfThePlanewalker", "cloakOfCubicEnigma", "cloakOfTheMadGod", "cloakOfRefraction", "cloakOfBloodySurprises", "cloakOfTheDarkenedSun"];

const quivers = ["cocoonQuiver", "archerang", "doubleVisionDarts", "quiver", "beehemothQuiver", "quiverOfThunder", "quiverOfTheShadows", "madJavelin"];

const spells = ["spellingSpell", "penetratingBlastSpell", "jadeStorm", "sporousSpraySpell", "recurringTerrorSpell", "tabletOfTheKingsAvatar", "genesisSpell", "cursedSpireSpell"];

const tomes = ["tomeOfMoralSupport", "necronomicon", "tomeOfPain", "tomeOfTheMushroomTribes", "tomeOfPurification", "tomeOfHolyFuror", "tomeOfHolyProtection", "chaoticScripture", "tomeOfTheTarnishedGods"];

const helms = ["amberEncrustedHelmet", "challengerHelm", "tipsyTopper", "hivemasterHelm", "vanguardsVisage", "helmOfTheJuggernaut", "helmOfExaltedMight"];

const shields = ["snakeskinShield", "shieldOfPogmur", "spitefulScutum", "shieldOfFlowingClarity", "kogboldCowerShield", "crystalShield", "shieldOfOgmur", "oryxsEscutcheon", "brutalBuckler"];

const seals = ["sandstoneSeal", "sealOfEternalLife", "scholarsSeal", "sealOfCubicConundra", "sealOfBlasphemousPrayer", "marbleSeal", "sealOfTheBattleGod"];

const poisons = ["lightningInABottle", "mightyStein", "murkyToxin", "bottledMedusozoan", "plaguePoison", "crystallizedFangsVenom", "polarityPoison", "tyrantsToxin"];

const skulls = ["crackedCrystalSkull", "epiphanySkull", "skullishRemainsOfEsben", "sealedCrystalSkull", "perennialCranium", "brainCube", "skullOfEndlessTorment", "skullOfCorruptedSouls", "demonLordsSkull"];

const traps = ["sulfuricStone", "heliumTrap", "deadlyKeg", "coralVenomTrap", "caveDwellerTrap", "rainMaker", "mimicryTrap", "trapOfTheVileSpirit", "blacklightArtifice"];

const orbs = ["orbOfSweetDemise", "karmaOrb", "enchantmentOrb", "orbOfAether", "orbOfConflict", "primalArcana", "orbOfConquest"];

const prisms = ["foolsPrism", "prismOfDancingSwords", "echoesPrism", "prismOfDireInstability", "ghostlyPrism", "prismimic", "gamblersFate", "prismOfShatteredLight"];

const scepters = ["honeyScepter", "honeyScepterSupreme", "scepterOfRust", "scepterOfFulmination", "cnidariaRod", "scepterOfDevastation", "tezutsuHanabi", "siegeScepter"];

const stars = ["spiderShuriken", "unshuriken", "midnightStar", "hanagasaku", "starOfEnlightenment", "kageboshi", "ballisticStar"];

const wakizashi = ["rageClaws", "roninsWakizashi", "nsfwakizashi", "shadowSerpentSidearm", "wakizashiOfEasternWinds", "wakizashiOfCrossingFires", "fracturedGemstoneWakizashi", "kogboldMultitool", "sentinelsSidearm", "amaterasu"];

const lutes = ["lullaby", "snakeCharmerPungi", "wavecrestConcertina", "pharaohsRequiem", "taikoDrums", "nobleMandolin", "chiefsWarHorn"];

const maces = ["recursionMace", "maceOfTheCelestialForest", "maceOfTheDepths", "crystalMace", "hivemindMace", "peacekeeper", "mechanicalMace"];

const sheaths = ["paperMachete", "volcanicSheath", "quartermasterScabbard", "kaiken", "labrynthDwellersSheath", "elegantParasol", "irradianceSheath", "blitzSheath"];

const lightArmor = ["snakeskinArmor", "coralSilkArmor", "spectralClothArmor", "beehemothArmor", "cheaterLightArmor", "greaterHosen", "harlequinArmor", "leafDragonHideArmor", "fittedProtectiveMatrix", "etherealHappi", "armorOfNil", "vestOfAbandonedShadows", "turncoatCape", "centaursShielding", "squadronSheathing"];

const robes = ["robeOfTlatoani", "woodlandRobe", "chasubleOfHolyLight", "tlatoanisShroud", "cheaterRobe", "robeOfTheMadScientist", "waterDragonSilkRobe", "magicProtectiveMatrix", "esbensShamanAttire", "floweringKimono", "ritualRobe", "mantleOfTheMonarchy", "diplomaticRobe", "vestureOfDuality", "judgesRobe"];

const heavyArmor = ["cheaterHeavyArmor", "warpedMantle", "fireDragonBattleArmor", "heavyProtectiveMatrix", "fungalBreastplate", "caskCorslet", "resurrectedWarriorsArmor", "candyCoatedArmor", "sagesWakibiki", "breastplateOfNewLife", "royalGuardsCuirass", "gladiatorGuard", "aegisArmor"];

const accessories = ["corsairRing", "candyRing", "crystalBoneRing", "spidersEyeRing", "snakeEyeRing", "fairyRing", "coralRing", "captainsRing", "ringOfDivineFaith", "amuletOfDispersion", "experimentalRing", "lockedReactor", "ringOfDecades", "theForgottenRing", "esbensWeddingRing", "ringOfTheSphinx", "ringOfTheNile", "ringOfThePyramid", "thistleleafNecklace", "brewersBangle", "crystallisedMist", "eye", "tokenOfHappiness", "tokenOfWarmth", "overclockingAmulet", "magicalLodestone", "bloodshedRing", "sourcestone", "chancellorsCranium", "collectorsMonocle", "divineCoronation", "battalionBanner", "exaltedGodsHorn", "bracerOfTheGuardian", "theTwilightGemstone", "theForgottenCrown", "kagenohikari", "omnipotenceRing", "chrysalisOfEternity"];

const rogueItems = daggers.concat(cloaks, lightArmor, accessories);

const archerItems = bows.concat(quivers, lightArmor, accessories);

const wizardItems = staves.concat(spells, robes, accessories);

const priestItems = wands.concat(tomes, robes, accessories);

const warriorItems = swords.concat(helms, heavyArmor, accessories);

const knightItems = swords.concat(shields, heavyArmor, accessories);

const paladinItems = swords.concat(seals, heavyArmor, accessories);

const assassinItems = daggers.concat(poisons, lightArmor, accessories);

const necromancerItems = staves.concat(skulls, robes, accessories);

const huntressItems = bows.concat(traps, lightArmor, accessories);

const mysticItems = staves.concat(orbs, robes, accessories);

const tricksterItems = daggers.concat(prisms, lightArmor, accessories);

const sorcererItems = wands.concat(scepters, robes, accessories);

const ninjaItems = katanas.concat(stars, lightArmor, accessories);

const samuraiItems = katanas.concat(wakizashi, heavyArmor, accessories);

const bardItems = bows.concat(lutes, robes, accessories);

const summonerItems = wands.concat(maces, robes, accessories);

const kenseiItems = katanas.concat(sheaths, heavyArmor, accessories);

const weaponList = daggers.concat(bows, staves, wands, swords, katanas);

const armorList = lightArmor.concat(robes, heavyArmor);

const abilityList = cloaks.concat(quivers, spells, tomes, helms, shields, seals, poisons, skulls, traps, orbs, prisms, scepters, stars, wakizashi, lutes, maces, sheaths);

let characterArray = getCharacters();

class Character
{
    constructor(id, characterClass)
    {
        this.id = id;
        this.characterClass = characterClass;
        this.foundItems = [];
        this.foundClassItems = [];
        this.classOnlyChecked = false;
        this.classItemList = setClassItemList(this.characterClass);
    }
}

let currentCharacter = new Character("template", "wizard");

function deleteChildren(idName) {

    while (document.getElementById(idName).hasChildNodes())
    {
        document.getElementById(idName).removeChild(document.getElementById(idName).firstChild);
    }    

}

function showAllItems() {

    for (i = 0; i < allItems.length; i++) {

        showElementInline(allItems[i]);

    }

}

function showClassOnlyItems(classItemList) {

    for (i = 0; i < allItems.length; i++) {

        hideElement(allItems[i]);

    }

    for (i = 0; i < classItemList.length; i++) {

        showElementInline(classItemList[i]);

    }

}

function setClassItemList(characterClass) {

    switch (characterClass) {

        case "rogue":
            return rogueItems;
            break;
        case "archer":
            return archerItems;
            break;
        case "wizard":
            return wizardItems;
            break;
        case "priest":
            return priestItems;
            break;
        case "warrior":
            return warriorItems;
            break;
        case "knight":
            return knightItems;
            break;
        case "paladin":
            return paladinItems;
            break;
        case "assassin":
            return assassinItems;
            break;
        case "necromancer":
            return necromancerItems;
            break;
        case "huntress":
            return huntressItems;
            break;
        case "mystic":
            return mysticItems;
            break;
        case "trickster":
            return tricksterItems;
            break;
        case "sorcerer":
            return sorcererItems;
            break;
        case "ninja":
            return ninjaItems;
            break;
        case "samurai":
            return samuraiItems;
            break;
        case "bard":
            return bardItems;
            break;
        case "summoner":
            return summonerItems;
            break;
        case "kensei":
            return kenseiItems;
            break;

    }

    return wizardItems;

}

function setupEventListeners()
{

    const classList = ["rogue", "archer", "wizard", "priest", "warrior", "knight", "paladin", "assassin", "necromancer", "huntress", "mystic", "trickster", "sorcerer", "ninja", "samurai", "bard", "summoner", "kensei"];

    for (let c = 0; c < classList.length; c++)
    {
        document.getElementById(classList[c]).addEventListener("click", function()
        {
            createCharacter(characterArray, classList[c]);
        }
        );
    }

}

function toggleCheckbox(character) {

    character.classOnlyChecked = !character.classOnlyChecked;
    saveCharacter(character);

    var decider = document.getElementById("showClassOnly");

    if (decider.checked) {

        // Show ONLY class-specific Items
        
        document.getElementById("checklistDiv").innerHTML = 
        '<input type="checkbox" id="showClassOnly" name="showClassOnly" onclick="toggleCheckbox(currentCharacter)" checked/> <label for="showClassOnly">Show Class-specific Items Only</label>';

        showClassOnlyItems(character.classItemList);
        showPercentCompletion(character.foundClassItems, character.classItemList);

    } else { 

        //show ALL items

        document.getElementById("checklistDiv").innerHTML = 
        '<input type="checkbox" id="showClassOnly" name="showClassOnly" onclick="toggleCheckbox(currentCharacter)"/> <label for="showClassOnly">Show Class-specific Items Only</label>';

        showAllItems();
        showPercentCompletion(character.foundItems, allItems);

    }

}

function hideElement(elementName)
{
    document.getElementById(elementName).style.display = "none";
}

function showElementBlock(elementName)
{
    document.getElementById(elementName).style.display = "block";
}

function showElementInline(elementName)
{
    document.getElementById(elementName).style.display = "inline";
}

function loadAllItems()
{

    for (let i = 0; i < weaponList.length; i++) {

        let newItem = document.createElement("img");
        newItem.setAttribute("src", "assets/" + weaponList[i] + ".png");
        newItem.setAttribute("alt", weaponList[i]);
        newItem.setAttribute("title", weaponList[i]);
        newItem.setAttribute("width", "40");
        newItem.setAttribute("height", "40");
        newItem.setAttribute("id", weaponList[i]);
        newItem.setAttribute("class", "unfound");

        document.getElementById("weapons").appendChild(newItem);

    }

    for (let i = 0; i < armorList.length; i++) {

        let newItem = document.createElement("img");
        newItem.setAttribute("src", "assets/" + armorList[i] + ".png");
        newItem.setAttribute("alt", armorList[i]);
        newItem.setAttribute("title", armorList[i]);
        newItem.setAttribute("width", "40");
        newItem.setAttribute("height", "40");
        newItem.setAttribute("id", armorList[i]);
        newItem.setAttribute("class", "unfound");

        document.getElementById("armor").appendChild(newItem);

    }

    for (let i = 0; i < abilityList.length; i++) {

        let newItem = document.createElement("img");
        newItem.setAttribute("src", "assets/" + abilityList[i] + ".png");
        newItem.setAttribute("alt", abilityList[i]);
        newItem.setAttribute("title", abilityList[i]);
        newItem.setAttribute("width", "40");
        newItem.setAttribute("height", "40");
        newItem.setAttribute("id", abilityList[i]);
        newItem.setAttribute("class", "unfound");

        document.getElementById("abilities").appendChild(newItem);

    }

    for (let i = 0; i < accessories.length; i++) {

        let newItem = document.createElement("img");
        newItem.setAttribute("src", "assets/" + accessories[i] + ".png");
        newItem.setAttribute("alt", accessories[i]);
        newItem.setAttribute("title", accessories[i]);
        newItem.setAttribute("width", "40");
        newItem.setAttribute("height", "40");
        newItem.setAttribute("id", accessories[i]);
        newItem.setAttribute("class", "unfound");

        document.getElementById("accessories").appendChild(newItem);

    }

    for (let i = 0; i < allItems.length; i++)
    {

        document.getElementById(allItems[i]).addEventListener("click", function()
        {
            if (document.getElementById(allItems[i]).className == "found")
            {
                document.getElementById(allItems[i]).className = "unfound";
                const updatedItemList = [];
                const updatedClassItemList = [];

                for (let j = 0; j < currentCharacter.foundItems.length; j++)
                {
                    if (currentCharacter.foundItems[j] != allItems[i])
                    {
                        updatedItemList.push(currentCharacter.foundItems[j]);
                    }
                }

                for (let j = 0; j < currentCharacter.foundClassItems.length; j++)
                {
                    if (currentCharacter.foundClassItems[j] != allItems[i])
                    {
                        updatedClassItemList.push(currentCharacter.foundItems[j]);
                    }
                }

                currentCharacter.foundItems = updatedItemList;
                currentCharacter.foundClassItems = updatedClassItemList;
            } else
            {
                document.getElementById(allItems[i]).className = "found";
                currentCharacter.foundItems.push(allItems[i]);

                if (currentCharacter.classItemList.includes(allItems[i])) {

                    currentCharacter.foundClassItems.push(allItems[i]);

                }

            }

            loadPercentage(currentCharacter);
            saveCharacter(currentCharacter);

        }
        );

    }
}

function showPercentCompletion(foundItems, itemList) {

    showElementBlock("characterInfo");
    showElementInline("percentCompletion");

    deleteChildren("percentCompletion");

    let totalFound = foundItems.length;
    let totalItems = itemList.length;
    let totalPercentage = ((totalFound / totalItems) * 100).toFixed(2);

    let itemPercentage = document.createElement("p");
    itemPercentage.innerText = "Items obtained: ".concat(totalFound, " / ", totalItems, " (", totalPercentage, "%)");

    let characterImage = document.createElement("img");

    characterImage.setAttribute("src", "assets/" + currentCharacter.characterClass + ".png");
    characterImage.setAttribute("alt", currentCharacter.characterClass);
    characterImage.setAttribute("title", currentCharacter.characterClass);
    characterImage.setAttribute("width", "40");
    characterImage.setAttribute("height", "40");

    document.getElementById("percentCompletion").appendChild(characterImage);
    document.getElementById("percentCompletion").appendChild(itemPercentage);

}

function loadPercentage(character) {

    if (character.classOnlyChecked) {

        //show ONLY class-specific items

        document.getElementById("checklistDiv").innerHTML = 
        '<input type="checkbox" id="showClassOnly" name="showClassOnly" onclick="toggleCheckbox(currentCharacter)" checked/> <label for="showClassOnly">Show Class-specific Items Only</label>';

        showPercentCompletion(character.foundClassItems, character.classItemList);

    } else {

        //show ALL items

        document.getElementById("checklistDiv").innerHTML = 
        '<input type="checkbox" id="showClassOnly" name="showClassOnly" onclick="toggleCheckbox(currentCharacter)"/> <label for="showClassOnly">Show Class-specific Items Only</label>';

        showPercentCompletion(character.foundItems, allItems);

    }

}

function loadCharacterItems(character)
{

    if (character.foundItems) {
        for (let i = 0; i < character.foundItems.length; i++) {
            document.getElementById(character.foundItems[i]).className = "found";
        }
    }

    showElementBlock("items");

    if (character.classOnlyChecked) {

        //show ONLY class-specific items

        document.getElementById("checklistDiv").innerHTML = 
        '<input type="checkbox" id="showClassOnly" name="showClassOnly" onclick="toggleCheckbox(currentCharacter)" checked/> <label for="showClassOnly">Show Class-specific Items Only</label>';

        showClassOnlyItems(character.classItemList);
        showPercentCompletion(character.foundClassItems, character.classItemList);

    } else {

        //show ALL items

        document.getElementById("checklistDiv").innerHTML = 
        '<input type="checkbox" id="showClassOnly" name="showClassOnly" onclick="toggleCheckbox(currentCharacter)"/> <label for="showClassOnly">Show Class-specific Items Only</label>';

        showAllItems();
        showPercentCompletion(character.foundItems, allItems);

    }

}

function clearCharacterItems()
{
    for (i = 0; i < currentCharacter.foundItems.length; i++)
    {
        document.getElementById(currentCharacter.foundItems[i]).className = "unfound";
    }
}

function saveCharacter(character)
{
    localStorage.setItem(character.id, JSON.stringify(character));
}

function displayCharacterInformation(character) {

    deleteChildren("percentCompletion");

    loadPercentage(character);

}

function selectCharacter(character)
{
    closeOptions();
    hideElement("items");
    clearCharacterItems();
    currentCharacter = character;
    loadCharacterItems(character);
    displayCharacterInformation(character);

    hideElement("characterSelectionBox");
    showElementBlock("returnToCharacters");

}
function deleteCharacter(character)
{
    //rewrite array of characters with new updated IDs
    const newCharacterArray = [];
    let found = false;
    for (let char = 0; char < characterArray.length; char++)
    {
        if (!found)
        {
            if (characterArray[char].id != character.id)
            {
                newCharacterArray.push(characterArray[char]);
            } else
            {
                found = true;
            }
        } else
        {
            characterArray[char].id = "character" + char;
            newCharacterArray.push(characterArray[char]);
        }
    }
    characterArray = newCharacterArray;

    //rewrite characters in local storage
    localStorage.clear();
    for (let char = 0; char < characterArray.length; char++)
    {
        saveCharacter(characterArray[char]);
    }

    updateCharacterSelection(characterArray);
    closeOptions();

}

function getCharacters()
{
    let charArray = [];
    let numChars = 0;

    while(localStorage.getItem("character" + (numChars + 1)) != null)
    {
        charArray[numChars] = JSON.parse(localStorage.getItem("character" + (numChars + 1)));
        numChars += 1;
    }

    return charArray;

}

function closeOptions()
{
    deleteChildren("characterOptions");
    hideElement("characterInfo");
}

function showOptions(character)
{

    // Closes options
    for (let e = 0; e < document.getElementById("characterOptions").children.length; e++)
    {
        if(document.getElementById("characterOptions").children.item(e).id == character.id)
        {
            closeOptions();
            return 0;
        }
    }

    closeOptions();

    // Makes sure class selection interface closes if it's open
    hideElement("classSelection");

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "DELETE CHARACTER";
    deleteButton.setAttribute("type", "button");
    deleteButton.setAttribute("id", "deleteButton");

    let selectButton = document.createElement("button");
    selectButton.innerHTML = "SELECT CHARACTER";
    selectButton.setAttribute("type", "button");
    selectButton.setAttribute("id", "selectButton");

    let name = document.createElement("h1");
    name.innerHTML = character.id;
    name.setAttribute("id", character.id);

    document.getElementById("characterOptions").appendChild(name);
    document.getElementById("characterOptions").appendChild(selectButton);
    document.getElementById("characterOptions").appendChild(deleteButton);

    document.getElementById("deleteButton").addEventListener("click", function()
    {
        closeOptions();

        let yesButton = document.createElement("button");
        yesButton.innerHTML = "YES";
        yesButton.setAttribute("type", "button");
        yesButton.setAttribute("id", "yesButton");

        let noButton = document.createElement("button");
        noButton.innerHTML = "NO";
        noButton.setAttribute("type", "button");
        noButton.setAttribute("id", "noButton");

        let warning = document.createElement("p");
        warning.setAttribute("id", "characterDeletionWarning");
        warning.innerHTML = "Are you SURE you want to delete this character?";
        document.getElementById("characterOptions").appendChild(warning);
        document.getElementById("characterOptions").appendChild(yesButton);
        document.getElementById("characterOptions").appendChild(noButton);

        document.getElementById("yesButton").addEventListener("click", function() {
            deleteCharacter(character);
        });

        document.getElementById("noButton").addEventListener("click", function() {
            closeOptions();
        });
    }
    );
    document.getElementById("selectButton").addEventListener("click", function()
    {
        selectCharacter(character);
    }
    );

}

function toggleCharacterSelection()
{

    closeOptions();
    hideElement("items");

    let classSelectionScreen = document.getElementById("classSelection");
    if (classSelectionScreen.style.display == "none")
    {
        classSelectionScreen.style.display = "block";
    } else
    {
        classSelectionScreen.style.display = "none";
        showElementBlock("items");
    }
}

function updateCharacterSelection(charArray)
{

    document.getElementById("classSelection").style.display = "none";

    while (document.getElementById("characters").hasChildNodes())
    {
        document.getElementById("characters").removeChild(document.getElementById("characters").firstChild);
    }

    for (let character = 0; character < charArray.length; character++)
    {
        let characterImage = document.createElement("img");
        characterImage.setAttribute("src", "assets/" + charArray[character].characterClass +".png");
        characterImage.setAttribute("alt", charArray[character].characterClass);
        characterImage.setAttribute("title", charArray[character].characterClass);
        characterImage.setAttribute("width", "40");
        characterImage.setAttribute("height", "40");
        characterImage.setAttribute("class", "character");
        characterImage.setAttribute("id", charArray[character].id);
        document.getElementById("characters").appendChild(characterImage);

        document.getElementById(charArray[character].id).addEventListener("click", function()
        {
            hideElement("items");
            showOptions(charArray[character]);
        }
        );

    }

    let newCharacterImage = document.createElement("img");
    newCharacterImage.setAttribute("src", "assets/silhouette.png");
    newCharacterImage.setAttribute("alt", "new character button");
    newCharacterImage.setAttribute("title", "new character button");
    newCharacterImage.setAttribute("width", "40");
    newCharacterImage.setAttribute("height", "40");
    newCharacterImage.setAttribute("id", "newCharacterButton");
    document.getElementById("characters").appendChild(newCharacterImage);

    document.getElementById("newCharacterButton").addEventListener("click", function()
    {
        toggleCharacterSelection();
    }
    );

}

function createCharacter(charArray, className)
{

    let numCharacters = charArray.length;
    let newChar = new Character("character" + (numCharacters + 1), className);
    charArray.push(newChar);
    saveCharacter(charArray[charArray.length - 1]);
    updateCharacterSelection(charArray);
    selectCharacter(newChar);

    characterArray = charArray;

}

function startUp()
{
    setupEventListeners();
    updateCharacterSelection(characterArray);
    loadAllItems();
    hideElement("items");
    hideElement("returnToCharacters");
}

