class Solution {
    topKFrequent(nums: number[], k: number): number[] {
        const count = new Map<number, number>();
        for (let i = 0; i < nums.length; i++) {
            count.set(nums[i], (count.get(nums[i]) || 0) + 1);
        }

        // Micro-optimization 1: Pre-allocate array size and use a fast native loop
        const freq: number[][] = new Array(nums.length + 1);
        for (let i = 0; i < freq.length; i++) {
            freq[i] = [];
        }
        
        // Micro-optimization 2: Use Map.forEach, which is faster than iterating keys/entries
        count.forEach((numFreq, num) => {
            freq[numFreq].push(num);
        });

        const result: number[] = [];

        for (let i = freq.length - 1; i > 0; i--) {
            const bucket = freq[i];
            // Micro-optimization 3: Standard for-loop is faster than for-of
            for (let j = 0; j < bucket.length; j++) {
                result.push(bucket[j]);
                if (result.length === k) {
                    return result;
                }
            }
        }

        return result;
    }
}