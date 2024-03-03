/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let fir = head;
  let sec = head;

  for (let i = 0; i < n; i++) fir = fir.next;
  if (!fir) return head.next;

  while (fir.next) {
    fir = fir.next;
    sec = sec.next;
  }
  sec.next = sec.next.next;

  return head;
};

// const head = new ListNode(
//   1,
//   new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
// );
// console.log(removeNthFromEnd(head, 2)); // [1,2,3,5]

// const head2 = new ListNode(1);
// console.log(removeNthFromEnd(head2, 1)); // []

// const head3 = new ListNode(1, new ListNode(2));
// console.log(removeNthFromEnd(head3, 1)); // [1]
