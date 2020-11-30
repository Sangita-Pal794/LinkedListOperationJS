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
}
