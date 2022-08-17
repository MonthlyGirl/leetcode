/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    const n = nums.length;
    const res = [];
    for (let i = 0; i < n; i++) {
        const x = Math.abs(nums[i]);
        if (nums[x - 1] > 0) {
            nums[x - 1] = -nums[x - 1];
        } else {
            res.push(x);
        }
    }
    return res.length

};
// @lc code=end

