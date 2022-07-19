/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0;
    while (x !== 0) {
        result = result * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    if (result < Math.pow(-2,31) || result > Math.pow(2,31)-1) {
        return 0
    }
    return result;
};
// @lc code=end

