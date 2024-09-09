function findLucky(arr: number[]): number {
  const freq: number[] = new Array(501).fill(0);

  for (let i = 0; i < arr.length; i++) {
    freq[arr[i]]++;
  }

  for (let i = freq.length - 1; i > 0; i--) {
    if (freq[i] === i) return i;
  }

  return -1;
}
