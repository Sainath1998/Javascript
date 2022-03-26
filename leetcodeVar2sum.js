var twoSum = function(nums, target) {
    let a = nums
    console.log(target)
    temp = target
    for(let i = 0 ; i < nums.length ; i++)
    {
        for(let j = 0 ; j < nums.length ; j++)
        {
            if((a[i] + a[j]) == temp )
            {
                return [i,j]
            }
            
        }
    }
}
nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
target = 5
console.log(twoSum(nums,target))