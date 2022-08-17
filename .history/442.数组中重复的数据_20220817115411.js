/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * 给 数组中 的每个数 加上负号 表示  这个数已经出现过一次
 * 1. 遍历数组，加上负号；
 * 2. 如果 nums[nums[i] - 1] 是正数，说明 nums[i]还没有出现过，加上负号
 * 3. 如果 nums[nums[i] - 1] 是负数，说明 nums[i] 已经出现过了
 * 4. 需要考虑到 nums[i] 原为 负号，所以需要对每个数 取绝对值
 */
var findDuplicates = function(nums) {
    const n = nums.length;
    const res = [];
    for (let i = 0; i < n; i++) {
        const j = Math.abs(nums[i]);
        if (num[j - 1] > 0) {
            nums[j - 1] = -nums[j - 1];
        } else {
            res.push(j)
        }
    }
    return res;
};
// @lc code=end

