class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class singleLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    /*to insert first node*/
    insertNodeFirst = (data) => {
        this.head = new Node(data, this.head);
        this.size++;
    }
    
    /*to insert last node*/
    insertNodeLast = (data) => {
        let node = new Node(data);
        let present = 0;
        if (this.head == null) {
            this.head = node;
        }
        else {
            present = this.head;
            while (present.next != null) {
                present = present.next;
            }
            present.next = node;
        }
        this.size++;
    }
    
    /*to insert node at specified index*/
    insertNodeIndex = (data, index) => {
        if (index < 0 && index > this.size) {
            console.log("Index Out Of Bound");
            return;
        }
        if (index == 0) {
            this.insertNodeFirst(data);
            return;
        }
        const node = new Node(data);
        let present, previous;
        /*if index is first node*/
        present = this.head;
        let size = 0;

        while (size < index && present.next != null) {
            /*Swaping between previous node & present node*/
            previous = present;
            size++;
            present = present.next;
        }
        /*if index is last node*/
        if (present.next == null) {
            present.next = node;
            return;
        }
        node.next = present;
        previous.next = node;
        this.size++;
    }
}
