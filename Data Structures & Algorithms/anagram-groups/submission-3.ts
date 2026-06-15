class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const baseChar = 'a'.charCodeAt(0)
        const result = {}

        for (let str of strs) {
            const count = new Array(26).fill(0);
            for (let char of str) {
                count[char.charCodeAt(0) - baseChar] = (count[char.charCodeAt(0) - baseChar] || 0) + 1;
            }
            const key = count.join(',');

            if (!result[key]) {
                result[key] = [];
            }
            result[key].push(str);
        }
        return Object.values(result)
    }
}
