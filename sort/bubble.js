// 冒泡排序
// 冒泡排序只会操作相邻的两个数据。每次冒泡操作都会对相邻的两个元素进行比较，看是否满足大小关系要求。
// 如果不满足就让它俩互换。一次冒泡会让至少一个元素移动到它应该在的位置，重复 n 次，
// 就完成了 n 个数据的排序工作。
// 冒泡排序其实就是交互两个元素，直到交换n轮即可找到
// 所以第一层循环是轮数，第二层循环是交互方式
// 可以定个标志位，来看是否有交换，无交换的循环一次直接退出即可，提高效率
function buble(arr) {
  for (let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length -i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  console.log(arr)
  return arr
}

buble([2,4,1,5,6])

function buble2(arr) {
  let len = arr.length
  let flag = false
  for (let i =0; i < len; i++){
    for (let j =0; j < len -1 -i; j++){
      if (arr[j] > arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
        flag = true
      }
    }
    console.log(arr)
    if (!flag) return arr
  }
  console.log(arr)
  return arr
}

buble2([1,2,3,4,5,6])