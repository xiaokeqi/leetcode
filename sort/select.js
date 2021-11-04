// 选择排序
// 它的工作原理是：第一次从待排序的数据元素中选出最小（或最大）的一个元素，
// 存放在序列的起始位置，然后再从剩余的未排序元素中寻找到最小（大）元素，
// 然后放到已排序的序列的末尾。 以此类推，直到全部待排序的数据元素的个数为零。
// 冒泡是频繁交换，而选择排序是频繁比较最后交换一次，这就是其中区别，均为O(n2)
function seletor(arr) {
  let len = arr.length
  for(let i = 0; i<len; i++){
    let min = i
    for (let j = i+1; j < len; j++) {
      if (arr[j]< arr[min]) {
        min = j
      }
    }
    let temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp
  }
  console.log(arr)
  return arr
}

seletor([2,4,6,8,3,1,7])