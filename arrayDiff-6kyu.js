// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]


const arrayDiff = (a, b) => {
    let answer = a

    for (let i = 0; i < b.length; i++) {
        if (a.includes(b[i])) {
            for (let k = 0; k < a.length; k++) {
                if (answer[k] === b[i]) {
                    answer.splice(k, 1, null)
                }
            }

        }
    }
    return answer.filter(elem => elem !== null)
}


console.log(arrayDiff([1, 2, 2], [1])) //[2, 2]
console.log(arrayDiff([1, 2, 2], [2])) //[1]
console.log(arrayDiff([1, 2, 3], [1, 2])) //[3]
console.log(arrayDiff([], [1, 2])) //[]