// Реализация фукции
function asyncForeach(arr, log, end) {
    var i = 0;

    return (function () {
        if (i < arr.length) {
            log(arr[i], i, arguments.callee);
            i++;
        } else {
            end()
        }
    }())
}

// Тест фукции
asyncTest("asyncForeach per second", function () {
    expect(3);
    asyncForeach([1, 2, 3], function (item, index, done) {

        setTimeout(function () {
            console.log(item);

            ok(item , "Passed and ready to resume!");

            done();

        }, 1000);
    }, function () {
        start();
        console.log('end');
    });
});