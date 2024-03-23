// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val;
//   this.next = next === undefined ? null : next;
// }

var reorderList = function (head) {
  let node = head;
  const arr = [node];

  while (node.next) (node = node.next), arr.push(node);

  let l = 0,
    r = arr.length - 1;

  while (r > l) {
    arr[l].next = arr[r];
    l++;

    arr[r].next = arr[l];
    r--;
  }

  arr[l].next = null;
};

// const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
// reorderList(head);
// console.log(head); // 1 -> 4 -> 2 -> 3

// const head = new ListNode(
//   1,
//   new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
// );
// reorderList(head);
// console.log(head); // 1 -> 5 -> 2 -> 4 -> 3
