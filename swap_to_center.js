function swap_to_center(arr){
    for (var i = 0; i < arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length -i -1] = temp;
    }
    return arr;
}
var y=swap_to_center([3,4,1,7,5,8])
console.log(y);