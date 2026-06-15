class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hasSeen = new Map();
        for (let i=0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (hasSeen.has(diff)) {
                return [hasSeen.get(diff), i]
            }

            hasSeen.set(nums[i], i)
        }

        return [];
    }
}
