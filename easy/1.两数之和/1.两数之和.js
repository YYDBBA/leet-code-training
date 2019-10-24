/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @description 算法复杂度为O(n)
 */
let twoSum = function(nums, target) {
    let myMap = {}
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (target - n in myMap) {
            return [myMap[target - n], i]
        } else {
            myMap[n] = i
        }
    }
}

// 算法复杂度为O(n^2)
let twoSum = function(nums, target) {
    const tem = []
    for (let i = 0; i < nums.length; i++) {
        let a = nums[i]
        for (let j = 0; j < nums.length; j++) {
            let b = nums[j]
            if (i !== j && (a + b) === target && i < j) {
                tem.push(i)
                tem.push(j)
            }
        }
    }
    return tem
}