class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const count = new Map<number, number>();
        for (const num of nums) {
            count.set(num, (count.get(num) || 0) + 1);
        }

        const freq = Array.from({ length: nums.length + 1 }, () => []);
        
        for (const [num, numFreq] of count.entries()) {
            freq[numFreq].push(num);
        }

        const result: number[] = [];

        for (let i = freq.length - 1; i > 0; i--) {
            for (const n of freq[i]) {
                result.push(n);
                if (result.length === k) {
                    return result;
                }
            }
        }

        return result;
    }
}