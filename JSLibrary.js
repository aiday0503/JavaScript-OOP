< !doctype html >
    <
    html lang = "en" >
    <
    head >
    <
    script >

    function each(arr, callback) {
        for (var i = 0; i < arr.length; i++) {
            callback(arr[i]);
        }
    }
each([1, 2, 3, 4, 5], function(num) {
    console.log(num + ' i am the first');
})


var _ = {
        map: function(arr, callback) {
            var array = [];
            for (var i = 0; i < arr.length; i++) {
                arr[i] = array.push(callback(arr[i]))
            }
            return array
        }

    },
    reduce: function(arr, callback, memo) {
        var memo = 0;
        for (var i = 0; i < arr.length; i++) {
            memo = callback(memo, arr[i])

        }
        return memo
    },
    find: function(arr, callback) {
        for (var i = 0; i < arr.length; i++) {
            if (callback(arr[i])) {
                return arr[i]
            }
        }
    },
    filter: function(arr, callback) {
        var newarr = [];
        for (var i = 0; i < arr.length; i++) {
            if (callback(arr[i])) {
                newarr.push(arr[i])
            }
        }
        return newarr
    }

},
reject: function(arr, callback) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
}
console.log(_.map([1, 2, 3, 4, ], function(num) { return num * 3; });)
console.log(_.reduce([1, 2, 3], function(memo, num) { return memo + num; }, 0);)
console.log(_.find(arr, function callback(x) { return x === 15; }));
console.log(_.filter(arr, function(x) { return x > 20; }));
console.log(_.reject([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });)


<
/script>  < /
head > <
    body >
    <
    /body>  < /
    html >