// A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

// Return a deep copy of the list.

function RandomListNode(val) {
  this.val = val;
  this.next = this.random = null;
}

var copyRandomList = function(head) {
  // Lets start by replicating linkedList
  let p = head;
  while (p) {
    let copied = new RandomListNode(p.value)
    copied.next = p.next
    p.next = copied
    p = p.next.next
  }

  p = head;
  while(p){
    if(p.random)p.next.random = p.random.next
    p = p.next.next
  }

  //// till here we have all in one list with head ...need to separate
  const dummy = new RandomListNode(0);
  dummy.next = head
  p = dummy

  while(p && p.next){
    const orignal = p.next
    p.next = orignal.next // p or dummy will point to copied list elements
    orignal.next = orignal.next.next 
    p = p.next
  }
  return dummy.next
}