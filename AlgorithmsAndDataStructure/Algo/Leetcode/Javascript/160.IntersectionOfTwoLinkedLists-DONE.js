// Write a program to find the node at which the intersection of two singly linked lists begins.


// For example, the following two linked lists:

// A:          a1 → a2
//                    ↘
//                      c1 → c2 → c3
//                    ↗            
// B:     b1 → b2 → b3
// begin to intersect at node c1.

var getIntersectionNode = function (l1, l2) {
    if(!l1 || !l2) return null
    let len1 = length(l1);
    let len2 = length(l2);

    l1 = skip(l1,l1-l2);
    l2 = skip(l2, l2 - l1);

    let node1 = l1
    let node2 = l2

    while(node1 && node2){
        if(node1 === node2){
            return node1
        }
        node1 = node1.next;
        node2 = node2.next
    }
    return null
};

const length = list => {
    let len =0
    if (!head) {
        return len;
    }

    if (!head.next) {
        return 1;
    }
    while(list){
        len++
        list = list.next
    } 
    return len
}

const skip = (list, diff) => {
    while(diff>0){
        list = list.next;
        --diff
    }
    return list;
}

//-- -- -- -- -- -- -- -- --
//-- -- -- -- -- -- -- -- --
var getIntersectionNode = function (headA, headB) {
    let lengthA = getLinkedListLength(headA);
    let lengthB = getLinkedListLength(headB);

    if (!lengthA || !lengthB) {
        return null;
    }

    if (headA === headB) {
        return headA;
    }

    // Rewind longest linked list to the equal position.
    let headARewinded = headA;
    let headBRewinded = headB;

    if (lengthA > lengthB) {
        // Rewind A.
        let rewindCounter = lengthA - lengthB;
        while (rewindCounter) {
            headARewinded = headARewinded.next;
            rewindCounter--;
        }
    } else {
        // Rewind B.
        let rewindCounter = lengthB - lengthA;
        while (rewindCounter) {
            headBRewinded = headBRewinded.next;
            rewindCounter--;
        }
    }

    while (headARewinded) {
        if (headARewinded === headBRewinded) {
            return headARewinded;
        }

        headARewinded = headARewinded.next;
        headBRewinded = headBRewinded.next;
    }

    return null;
};

function getLinkedListLength(head) {
    if (!head) {
        return 0;
    }

    if (!head.next) {
        return 1;
    }

    let length = 1;
    let next = head.next;

    while (next) {
        length += 1;
        next = next.next;
    }

    return length;
}