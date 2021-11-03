// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

// 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出：6
// 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
// 栈的实现方式
function trap(height) {
  let sum = 0
  let stack = []
  let current = 0
  // 循环一遍的方式
  while(current < height.length) {
    while (stack.length && height[current] > height[stack[stack.length-1]]) {
      let h = height[stack[stack.length-1]]
      stack.pop()
      if (!stack.length) break;
      let min = Math.min(height[current], height[stack[stack.length-1]])
      let distance = current - stack[stack.length-1] - 1
      sum = sum +(min-h)*distance
    }
    stack.push(current)
    current++;
  }
  console.log(sum)
  return sum
}

trap([0,1,0,2,1,0,1,3,2,1,2,1])