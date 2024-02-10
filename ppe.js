// Created by Leighton Nylander on 1/29/2024
// Last edited: 2/8/2024

/*

TO DO:
    - initialize all "has[item]" variables and set to false when a new character is created
    - Add "are you sure you want to delete" menu when deleting characters
    - Add "show class-specific uniques" and "show ALL uniques" buttons

*/

const allItems = ["heartfindDagger", "poisonFangDagger"];

class Character
{
    constructor(id, characterClass)
    {
        this.id = id;
        this.characterClass = characterClass;
        this.foundItems = [];

    }

}

function setupEventListeners()
{

    const classList = ["rogue", "archer", "wizard", "priest", "warrior", "knight", "paladin", "assassin", "necromancer", "huntress", "mystic", "trickster", "sorcerer", "ninja", "samurai", "bard", "summoner", "kensei"]

    for (let c = 0; c < classList.length; c++)
    {
        document.getElementById(classList[c]).addEventListener("click", function()
        {
            createCharacter(characterArray, classList[c]);
        }
        );
    }

}

function closeItems()
{
    while (document.getElementById("items").hasChildNodes())
    {
        document.getElementById("items").removeChild(document.getElementById("items").firstChild);
    }
}

function loadItems(character)
{

    closeItems();

    for (let i = 0; i < allItems.length; i++)
    {
        let newItem = document.createElement("img");
        newItem.setAttribute("src", "images/items/" + allItems[i] + ".png");
        newItem.setAttribute("alt", allItems[i]);
        newItem.setAttribute("title", allItems[i]);
        newItem.setAttribute("width", "50");
        newItem.setAttribute("height", "50");
        newItem.setAttribute("id", allItems[i]);


        let isFound = false;
        for (let j = 0; j < character.foundItems.length; j++)
        {
            if (allItems[i] == character.foundItems[j])
            {
                isFound = true;
            }
        }

        if (isFound)
        {
            newItem.setAttribute("class", "found");
        } else
        {
            newItem.setAttribute("class", "unfound");
        }

        document.getElementById("items").appendChild(newItem);

        document.getElementById(allItems[i]).addEventListener("click", function()
        {
            if (document.getElementById(allItems[i]).className == "found")
            {
                document.getElementById(allItems[i]).className = "unfound";
                const updatedItemList = [];
                for (let j = 0; j < character.foundItems.length; j++)
                {
                    if (character.foundItems[j] != allItems[i])
                    {
                        updatedItemList.push(character.foundItems[j]);
                    }
                }
                character.foundItems = updatedItemList;
                console.log(character.foundItems);
            } else
            {
                document.getElementById(allItems[i]).className = "found";
                character.foundItems.push(allItems[i]);
                console.log(character.foundItems);
            }

            saveCharacter(character);

        }
        );

    }

    for (let i = 0; i < character.foundItems; i++)
    {
        document.getElementById(foundItems[i]).className = "found";
    }

}

function saveCharacter(character)
{
    localStorage.setItem(character.id, JSON.stringify(character));
}

function selectCharacter(character)
{
    closeOptions();

    loadItems(character);

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
    console.log(characterArray);

    //rewrite characters in local storage
    localStorage.clear();
    for (let char = 0; char < characterArray.length; char++)
    {
        saveCharacter(characterArray[char]);
    }

    updateCharacterSelection(characterArray);
    closeOptions();
    closeItems();

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

    console.log(charArray);
    return charArray;

}

function closeOptions()
{
    while (document.getElementById("characterOptions").hasChildNodes())
    {
        document.getElementById("characterOptions").removeChild(document.getElementById("characterOptions").firstChild);
    }
}

function showOptions(character)
{

    // Closes options
    for (let e = 0; e < document.getElementById("characterOptions").children.length; e++)
    {
        if(document.getElementById("characterOptions").children.item(e).id == character.id)
        {
            console.log("Closing options");
            closeOptions();
            return 0;
        }
    }

    closeOptions();
    closeItems();

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
        deleteCharacter(character);
    }
    );
    document.getElementById("selectButton").addEventListener("click", function()
    {
        selectCharacter(character);
    }
    );

}

function toggleCharacterSelection() //TO DO: Make it so that if a character is clicked while the class selection screen is open, the class selection screen closes. Figure out a better system for opening and closing divs in general.
{

    closeOptions();
    closeItems();

    let classSelectionScreen = document.getElementById("classSelection");
    if (classSelectionScreen.style.display == "none")
    {
        classSelectionScreen.style.display = "block";
    } else
    {
        classSelectionScreen.style.display = "none";
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
        characterImage.setAttribute("src", "images/" + charArray[character].characterClass +".png");
        characterImage.setAttribute("alt", charArray[character].characterClass);
        characterImage.setAttribute("title", charArray[character].characterClass);
        characterImage.setAttribute("width", "50");
        characterImage.setAttribute("height", "50");
        characterImage.setAttribute("class", "character");
        characterImage.setAttribute("id", charArray[character].id);
        document.getElementById("characters").appendChild(characterImage);

        document.getElementById(charArray[character].id).addEventListener("click", function()
        {
            showOptions(charArray[character]);
        }
        );

    }

    let newCharacterImage = document.createElement("img");
    newCharacterImage.setAttribute("src", "images/silhouette.png");
    newCharacterImage.setAttribute("alt", "new character button");
    newCharacterImage.setAttribute("title", "new character button");
    newCharacterImage.setAttribute("width", "50");
    newCharacterImage.setAttribute("height", "50");
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
    charArray.push(new Character("character" + (numCharacters + 1), className));
    saveCharacter(charArray[charArray.length - 1]);
    updateCharacterSelection(charArray);
    closeItems();

    characterArray = charArray;

}

function startUp()
{
    setupEventListeners();
    updateCharacterSelection(characterArray);
}

let characterArray = getCharacters();

startUp();
