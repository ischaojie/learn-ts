// 基础类型
// string number boolean

// Arrays
const arr: number[] = [1, 2, 3];

// any 可以赋值给任意类型
const n: any = 1;


// type annotation


// 可选的
let name ?: string = "mine";

// union
let name: string | number = "mine";


// 声明新类型
type numberOrString = number | string;

// type 和 interface 很像，不同的是 interface 是接口，可扩展