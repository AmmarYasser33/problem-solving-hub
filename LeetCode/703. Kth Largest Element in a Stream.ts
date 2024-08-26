class KthLargest {
  k: number;
  nums: number[];

  constructor(k: number, nums: number[]) {
    this.k = k;
    this.nums = nums.sort((a, b) => b - a);
  }

  add(val: number): number {
    let l = 0;
    let r = this.nums.length;

    while (l < r) {
      const mid = (l + r) >> 1;
      // const mid = Math.floor((l + r) / 2);
      if (this.nums[mid] > val) l = mid + 1;
      else r = mid;
    }

    this.nums.splice(l, 0, val);
    return this.nums[this.k - 1];
  }
}

// var obj = new KthLargest(3, [4, 5, 8, 2]);
// var param_1 = obj.add(3); // 4
// var param_1 = obj.add(5); // 5
// var param_1 = obj.add(10); // 5
// var param_1 = obj.add(9); // 8
// var param_1 = obj.add(4); // 8
