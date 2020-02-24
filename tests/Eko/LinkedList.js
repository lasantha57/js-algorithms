
function LinkedList() {
    this.head = null;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

LinkedList.prototype.addToTail = function (value) {
    let node = new ListNode(value);
    //Check if it is not the first element in list, if so, update the node next pointer to point to old head
    if (this.head) {
        node.next = this.head;
    }
    //Update the head of the list
    this.head = node;
}

function sumLinkedList(l1, l2) {

    const result = new LinkedList();

    let current = l1.head;
    let number1 = '';
    while (current) {
        number1 = current.value + number1;
        current = current.next;
    }

    current = l2.head;
    let number2 = '';
    while (current) {
        number2 = current.value + number2;
        current = current.next;
    }

    sum = parseInt(number1) + parseInt(number2);

    const sumString = sum.toString();

    for (let i = 0; i < sumString.length; i++) {
        const num = sumString[i];
        result.addToTail(num);
    }

    return result;

}

const l1 = {
    head: {
        value: 2,
        next: {
            value: 4,
            next: {
                value: 3,
                next: null
            }
        }
    }
}

const l2 = {
    head: {
        value: 5,
        next: {
            value: 6,
            next: {
                value: 4,
                next: null
            }
        }
    }
}

console.log(sumLinkedList(l1, l2))