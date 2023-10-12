function continuousadd() {
    let arr = [];
    return function curried_add(num) {
        arr.push(num);
        console.log(arr.reduce( (accum, ele) => accum + ele));
        return curried_add;
    }
}

const sum = continuousadd()

numArgs takes in a singular number
function curriedSum(numArgs) {
    let arr = [];

    return function _curriedSum(num) {
        arr.push(num);

        //when the arr's length is equal to the numArgs, it's ready to add
        if (arr.length === numArgs) {
            return arr.reduce( (accum, ele) => accum + ele);
        } else {
            return _curriedSum;
        }
    }
}

const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1)); // => 56

Function.prototype.curry = function(numArgs) {
    let arr = [];
    let that = this;

    return function _curriedSum(num) {
        arr.push(num);

        if (arr.length === numArgs) {
            return that.apply(that, arr)
        } else {
            return _curriedSum;
        }
    }
}

function sumArr(...arr) {
    console.log(arr)
    return arr.reduce( (accum, ele) => accum + ele);
}
// console.log(sumArr([1,2,3]));
const sumCurry = sumArr.curry(5);
console.log(sumCurry(7)(30)(20)(1)(0));