// 基本类型（如数字、字符串）：在 forEach 回调中修改 item 不会影响原数组，因为基本类型是按值传递的。
// 引用类型（如对象、数组）：在 forEach 回调中修改 item 会影响原数组，因为引用类型是按引用传递的。

let a = [1, 2];

a.forEach((item) => {
  item = item * 2;
});

console.log("a >> ", a);


let b = [{ value: 1 }, { value: 2 }];

b.forEach((item) => {
    item.value = item.value * 2
})

console.log('b >> ', b)