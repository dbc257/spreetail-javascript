const { question } = require("readline-sync");

// Creating the dictionary using a JavaScript Map
let dict = new Map();

async function run() {
  while (true) {
    console.log(
      "Please enter a command. Enter HELP for a list of the commands."
    );
    const input = question("> ");
    const splitInputArray = input.split(" ");

    // HELP
    // This is an extra command that allows the user to view a list of the commands.
    if (splitInputArray[0] == "HELP") {
      if (splitInputArray.length !== 1) {
        console.log(") ERROR, Incorrect number of arguments.\n");
      } else {
        console.log("ADD foo bar\t KEYS\t\t\t MEMBERS foo");
        console.log("REMOVE foo bar\t REMOVEALL foo\t\t CLEAR");
        console.log("KEYEXISTS foo\t MEMBEREXISTS foo bar\t ALLMEMBERS");
        console.log("ITEMS\t\t MAP\t\t\t HELP");
        console.log("EXIT");
      }
    }

    // ADD foo bar
    if (splitInputArray[0] == "ADD") {
      if (splitInputArray.length !== 3) {
        console.log(") ERROR, Incorrect number of arguments.\n");
      } else {
        if (dict.has(splitInputArray[1])) {
          let member = dict
            .get(splitInputArray[1])
            .find((m) => m == splitInputArray[2]);
          if (member) {
            console.log(") ERROR, member already exists for key.\n");
          } else {
            dict.set(
              splitInputArray[1],
              dict.get(splitInputArray[1]).concat([splitInputArray[2]])
            );
            console.log(") Added\n");
          }
        } else {
          dict.set(splitInputArray[1], [splitInputArray[2]]);
          console.log(") Added\n");
        }
      }
    }

    // KEYS
    if (splitInputArray[0] == "KEYS") {
      if (splitInputArray.length !== 1) {
        console.log(") ERROR, Incorrect number of arguments.\n");
      }
      if (dict.size == 0) {
        console.log("(empty set)\n");
      } else {
        let i = 0;
        for (const key of dict.keys()) {
          i++;
          console.log(`${i}) ${key}`);
        }
        console.log("");
      }
    }

    // MEMBERS foo
    if (splitInputArray[0] == "MEMBERS") {
      if (splitInputArray.length !== 2) {
        console.log(") ERROR, Incorrect number of arguments.\n");
      } else {
        if (dict.has(splitInputArray[1])) {
          for (let i = 0; i < dict.get(splitInputArray[1]).length; i++) {
            let value = dict.get(splitInputArray[1]);
            console.log(`${i + 1}) ${value[i]}`);
          }
          console.log("");
        } else {
          console.log(") ERROR, key does not exist.\n");
        }
      }
    }

    // REMOVE foo bar
    if (splitInputArray[0] == "REMOVE") {
      if (splitInputArray.length !== 3) {
        console.log(") ERROR, Incorrect number of arguments.\n");
      } else {
        if (dict.has(splitInputArray[1])) {
          let member = dict
            .get(splitInputArray[1])
            .find((m) => m == splitInputArray[2]);
          if (member) {
            let value = dict.get(splitInputArray[1]);
            for (let i = 0; i < value.length; i++) {
              if (value[i] == splitInputArray[2]) {
                value.splice(i, 1);
              }
            }
            if (dict.get(splitInputArray[1]).length == 0) {
              dict.delete(splitInputArray[1]);
            }
            console.log(") Removed\n");
          } else {
            console.log("ERROR, member does not exist.\n");
          }
        } else {
          console.log("ERROR, key does not exist.\n");
        }
      }
    }

    // REMOVEALL foo
    if (splitInputArray[0] == "REMOVEALL") {
      if (splitInputArray.length !== 2) {
        console.log(") ERROR, Incorrect number of arguments.\n");
      } else {
        if (dict.has(splitInputArray[1])) {
          dict.delete(splitInputArray[1]);
          console.log(") Removed\n");
        } else {
          console.log(") ERROR, key does not exist.\n");
        }
      }
    }

    // CLEAR
    if (splitInputArray[0] == "CLEAR") {
      if (splitInputArray.length !== 1) {
        console.log(") ERROR, Incorrect number of arguments.\n");
      } else {
        dict.clear();
        console.log(") Cleared\n");
      }
    }

    // KEYEXISTS foo
    if (splitInputArray[0] == "KEYEXISTS") {
      if (splitInputArray.length !== 2) {
        console.log(") ERROR, Incorrect number of arguments.\n");
      } else {
        if (dict.has(splitInputArray[1])) {
          console.log(") true\n");
        } else {
          console.log(") false\n");
        }
      }
    }

    // MEMBEREXISTS foo bar
    if (splitInputArray[0] == "MEMBEREXISTS") {
      if (splitInputArray.length !== 3) {
        console.log(") ERROR, Incorrect number of arguments.\n");
      } else {
        if (dict.has(splitInputArray[1])) {
          let member = dict
            .get(splitInputArray[1])
            .find((m) => m == splitInputArray[2]);
          if (member) {
            console.log(") true\n");
          } else {
            console.log(") false\n");
          }
        } else {
          console.log(") false\n");
        }
      }
    }

    // ALLMEMBERS
    if (splitInputArray[0] == "ALLMEMBERS") {
      if (splitInputArray.length !== 1) {
        console.log(") ERROR, Incorrect number of arguments.\n");
      } else {
        if (dict.size !== 0) {
          let j = 0;
          function logMapElements(value, key) {
            for (let i = 0; i < value.length; i++) {
              j++;
              console.log(`${j}) ${value[i]}`);
            }
          }
          dict.forEach(logMapElements);
          console.log("");
        } else {
          console.log("(empty set)\n");
        }
      }
    }

    // ITEMS
    if (splitInputArray[0] == "ITEMS") {
      if (splitInputArray.length !== 1) {
        console.log(") ERROR, Incorrect number of arguments.\n");
      } else {
        if (dict.size !== 0) {
          let j = 0;
          function logMapElements(value, key) {
            for (let i = 0; i < value.length; i++) {
              j++;
              console.log(`${j}) ${key}: ${value[i]}`);
            }
          }
          dict.forEach(logMapElements);
          console.log("");
        } else {
          console.log("(empty set)\n");
        }
      }
    }

    // MAP
    // This is an extra command that allows the user to view the JS Map
    if (splitInputArray[0] == "MAP") {
      if (splitInputArray.length !== 1) {
        console.log(") ERROR, Incorrect number of arguments.\n");
      } else {
        console.log("dictionary: ", dict, "\n");
      }
    }

    // EXIT
    // This is an extra command that allows the user to exit the app.
    if (splitInputArray[0] == "EXIT") {
      if (splitInputArray.length !== 1) {
        console.log(") ERROR, Incorrect number of arguments.\n");
      } else {
        return false;
      }
    }
  }
}

run().then();
