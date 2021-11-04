// 插入排序背景
// 我们先来看一个问题。一个有序的数组，我们往里面添加一个新的数据后，
// 如何继续保持数据有序呢？很简单，我们只要遍历数组，找到数据应该插入的位置将其插入即可。
// 具体描述可以参考这里https://zhuanlan.zhihu.com/p/122293204
// 类似于打牌插入。排序中，将第二个数字为插入元素，像左插入

function insert(arr) {
  let len = arr.length
  for (let i = 1; i<len;i ++ ) {
    // 待插入有序列表
    // 当前元素
    let current = arr[i]
    for (let j = i-1; j >= 0; j --) {
      if(current<arr[j]) {
        arr[j+1] = arr[j]
        arr[j] = current
      } else {
        break
      }
    }
  }
  console.log(arr)
}

insert([4,2,1,5,7,6])


// 插入排序就像是打牌，在认为有序的情况下，
// 依次从后找到前，插进去。因此，通常将元素第二个为要插入对象，元素第一个为有序序列。
// 这样依次可以插入到数据中
// 在写一遍
function insert2(arr) {
  let len = arr.length
  for (let i=1; i<len; i++) {
    let current = arr[i]
    for(let j=i-1;j>=0;j--){
      if (current < arr[j]) {
        arr[j+1] = arr[j]
        arr[j] = current
      } else {
        break
      }
    }
  }
  console.log(arr)
  return arr
}

insert2([4,2,1,5,7,6])