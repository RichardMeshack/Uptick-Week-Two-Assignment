function twoSum(nums, target){
    const numToIndex ={};
    for (let i = 0; i<nums.length; i++){
        const complement = target-nums[i];
        
        if (numToIndex[complement] !== undefined){
            return [numToIndex[complement], i];
        } 
        numToIndex[nums[i]] = i
    }

    return 0;
}

const nums = [2,7,11,15];
const target = 10;
console.log(twoSum(nums, target));
