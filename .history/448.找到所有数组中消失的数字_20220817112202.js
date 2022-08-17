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

// 适当的写一些题解。

/**
 * 首先，数组中的数 是乱序的，如果
 * 1. 遍历数组，将数组中的数据按序排放至它理应出现的位置
 * 数组的数有重复，所以某个 idx 上可能会有重复的两个数
 * 
 * 2. 再次遍历，如果当前位置上没有对应正确的数，则是该数组中没有出现的数
 * 
 * 
 */
var findDisappearedNumbers = function(nums) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] === i + 1) {
            i++;
            continue;
        }
        const idx = nums[i] - 1;
        if (nums[i] === nums[idx]) {
            i++;
            continue;
        }
        [nums[idx], nums[i]] = [nums[idx], nums[idx]]
    }

    const res = [];
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] !== i+1) {
            res.push(i + 1);
        }
    }
    return res;

};
// @lc code=end

