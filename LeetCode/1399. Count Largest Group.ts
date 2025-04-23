function countLargestGroup(n: number): number {
  const groups: Map<number, number> = new Map();

  const getDigitSum = (num: number): number => {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  };

  for (let i = 1; i <= n; i++) {
    const digitSum = getDigitSum(i);
    groups.set(digitSum, (groups.get(digitSum) || 0) + 1);
  }

  let maxSize = 0;
  for (const count of groups.values()) {
    maxSize = Math.max(maxSize, count);
  }

  let result = 0;
  for (const count of groups.values()) {
    if (count === maxSize) {
      result++;
    }
  }

  return result;
}
