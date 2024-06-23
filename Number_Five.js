// Definition for a singly-linked list node
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Function to insert a node into a sorted linked list
function insertIntoSortedLinkedList(head, value) {
    const new_node = new ListNode(value);
    
    // Case: empty list or inserting before the head
    if (!head || value < head.val) {
        new_node.next = head;
        return new_node;
    }
    
    let current = head;
    
    // Traverse the list to find the insertion point
    while (current.next !== null && current.next.val < value) {
        current = current.next;
    }
    
    // Insert the new node after current
    new_node.next = current.next;
    current.next = new_node;
    
    return head;
}

//to convert linked list to array (for demonstration)
function linkedListToArray(head) {
    const result = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// Example
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(4);
head.next.next.next = new ListNode(5);

// Insert value 3
head = insertIntoSortedLinkedList(head, 3);

// Convert linked list back to array and print
const resultArray = linkedListToArray(head);
console.log(resultArray);
