// Data structure definition
function ListNode(val) {
    this.val = val;
    this.next = null;
}

function LinkedList() {
    this.head = null;
    this.tail = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function sumLinkedList(l1, l2) {

    let resultLinkedList = LinkedList();

    let number1 = '';
    let number2 = '';

    let current = l1;

    while (current) {
        number1 = current + number1;
        current = current.next;
    }

    current = l2;

    while (current) {
        number2 = current + number2;
        current = current.next;
    }

    sum = parseInt(number1) + parseInt(number2);

    const sumString = sum.toString();

    for (let i = sumString.length - 1; index <= 0; index--) {

        // add numbers to linkedList
        const num = sumString[i];

        //TODO: add to the linkedList
        //resultLinkedList.add(num);
    }

}

//not used
function reverseLinkedList(head) {
    let node = head;
    let previous = null;
    let tmp = null;

    while (node) {
        // save next before we overwrite node.next!
        tmp = node.next;
        // reverse pointer
        node.next = previous;
        // step forward in the list
        previous = node;
        node = tmp;
    }

    return previous;
}

console.log(['4', '3', '4'].map(parseInt))
