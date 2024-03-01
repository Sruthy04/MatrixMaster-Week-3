function thirdHighest(X){
    let first = 0;
    let second = 0;
    let third = 0;
    for (let i = 0; i < X.length; i++) {
        if (X[i] > first) {
            third = second;
            second = first;
            first = X[i];
        } else if (X[i] > second) {
            third = second;
            second = X[i];
        } else if (X[i] > third) {
            third = X[i];
        }
    }
    return third;
}

console.log(thirdHighest([2, 5, 3, 1, 4]));