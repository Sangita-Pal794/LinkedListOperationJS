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
}