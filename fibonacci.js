let arr = [0, 1]
let temp=0;

for (let i = 1; i<=10; i++){
    temp = arr[i]+arr[i-1];
    arr.push(temp);
}
console.log(arr);