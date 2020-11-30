let util = require("./list.js");
let readlineSync = require('readline-sync');
console.log("Welcome to singly Linkedlist Programme!!");
/**To take user choice */
userInput = function () {
    let flag = true;
    while (flag == true) {
        let option = readlineSync.question("\nEner your choice:\n1.Inser node first\n2.Insert node last\n3.Insert at Index\n4.Remove from Index\n5.print LinkList\n6.DeleteLinkList\n7.Search by value\n8.exit\n");
        switch (option) {
            case '1':
                let valueFirst = readlineSync.question("Enter node value to insert node at first:");
                util.insertNodeFirst(valueFirst);
                break;
            case '2':
                let valueLast = readlineSync.question("Enter node value to insert node at last:");
                util.insertNodeLast(valueLast);
                break;
            case '3':
                let valueForIndex = readlineSync.question("Enter node value for specified index:");
                let indexValue = readlineSync.question("Enter Index where you want to enter:");
                util.insertNodeIndex(valueForIndex, indexValue);
                break;
            case '4':
                let deleteIndexValue = readlineSync.question("Enter index which you want to remove:");
                util.deleteAt(deleteIndexValue);
                break;    
            case '5':
                util.displayList();
                break; 
            case '6':
                util.deleteList();
                break;
            case '7':
                let searchValue = readlineSync.question("Enter the value to search:");
                util.searchbyValue(searchValue);
                break;
            case '8': 
                flag = false;
                break;
            default: console.log("Invalid choice!!Please enter valid choice");
        }
    }
}
userInput();
