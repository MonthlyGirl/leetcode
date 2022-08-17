/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let maxNums = Infinity;
    for (let i = 0; i < nums.length; i++) {
        maxNums = Math.max(nums[i], maxNums);
        
    }

};
// @lc code=end

