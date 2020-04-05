var maxArea = function(height) {
  let area = 0;
  let left = 0,right = height.length-1;
  while(left != right){
      area = Math.max(area,(right-left)*Math.min(height[left],height[right]));
      height[left] < height[right]?(left++):(right--);
  }
  return area;
};

