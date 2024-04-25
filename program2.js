function smallestMissingPositiveInteger(nums) {

  // Implement the function smallest_missing_positive_integer
  const n = nums.length;


  let i = 0;
  while (i < n) {
      if (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
          
          [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
      } else {
          i++;
      }
  }

  for (let j = 0; j < n; j++) {
      if (nums[j] !== j + 1) {
          return j + 1; 
      }
  }

  
  return n + 1;
}



module.exports = smallestMissingPositiveInteger;
