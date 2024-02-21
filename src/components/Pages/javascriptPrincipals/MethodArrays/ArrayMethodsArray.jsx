const ArrayMethodsArray = [
    {
        title: 'at()',
        description:
            'The at() method returns the element at the specified index in an array. You can use negative numbers to count from the end of the array. If the index is out of range, at() returns undefined.',
        example: `let myArray = [1, 2, 3, 4, 5];
myArray.at(0); // 1
myArray.at(-1); // 5
myArray.at(5); // undefined`,
        graphical: `🍏🍏🍊🍏.at(2) => 🍊`,
    },
    {
        title: 'concat()',
        description:
            'The concat() method creates a new array by combining two or more arrays. It does not change the original arrays.',
        example: `let myArray = [1, 2, 3];
let myOtherArray = [4, 5, 6];
let combinedArray = myArray.concat(myOtherArray); // [1, 2, 3, 4, 5, 6]`,
        graphical: `🍏🍏🍏.concat(🍊🍊🍊) => 🍏🍏🍏🍊🍊🍊`,
    },
    {
        title: 'copyWithin()',
        description:
            'The copyWithin() method copies a sequence of array elements within the array. It overwrites the existing elements and returns the modified array.',
        example: `let myArray = [1, 2, 3, 4, 5];
myArray.copyWithin(0, 3); // [4, 5, 3, 4, 5]`,
        graphical: `🍏🍏🍏🍏🍏.copyWithin(0, 3) => 🍊🍊🍊🍏🍏`,
    },
    {
        title: 'entries()',
        description:
            'The entries() method returns an array iterator object with key/value pairs.',
        example: `let myArray = [1, 2, 3];
let iterator = myArray.entries();
console.log(iterator.next().value); // [0, 1]
console.log(iterator.next().value); // [1, 2]
console.log(iterator.next().value); // [2, 3]`,
        graphical: `🍏🍏🍏.entries() => 🍊🍊🍊`,
    },
    {
        title: 'every()',
        description:
            'The every() method tests whether all elements in an array pass the test implemented by the provided function. It returns a boolean value.',
        example: `let myArray = [1, 2, 3, 4, 5];
let isBelowTen = (currentValue) => currentValue > 10;
myArray.every(isBelowTen); // false`,
    },
    {
        title: 'fill()',
        description:
            'The fill() method fills the specified elements in an array with a static value. It modifies the original array and returns the modified array.',
        example: `let myArray = [1, 2, 3, 4, 5];
myArray.fill(0, 2, 4); // [1, 2, 0, 0, 5]`,
        graphical: `["🍏", "🍏", "🍊", "🍏"].fill("🍊", 1, 3) => ["🍏", "🍊", "🍊", "🍏"]`,
    },
    {
        title: 'filter()',
        description:
            'The filter() method creates a new array with all elements that pass the test implemented by the provided function.',
        example: `let myArray = [1, 2, 3, 4, 5];
let evenNumbers = myArray.filter((number) => number % 2 === 0); // [2, 4]`,
    },
    {
        title: 'find()',
        description:
            'The find() method returns the value of the first element in an array that passes the test implemented by the provided function.',
        example: `let myArray = [1, 2, 3, 4, 5];
let firstEvenNumber = myArray.find((number) => number % 2 === 0); // 2`,
    },
    {
        title: 'findIndex()',
        description:
            'The findIndex() method returns the index of the first element in an array that passes the test implemented by the provided function.',
        example: `let myArray = [1, 2, 3, 4, 5];
let firstEvenNumberIndex = myArray.findIndex((number) => number % 2 === 0); // 1`,
    },
    {
        title: 'flat()',
        description:
            'The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.',
        example: `let myArray = [1, 2, [3, 4, [5, 6]]];
myArray.flat(); // [1, 2, 3, 4, [5, 6]]`,
    },
    {
        title: 'flatMap()',
        description:
            'The flatMap() method first maps each element using a mapping function, then flattens the result into a new array.',
        example: `let myArray = [1, 2, 3];
myArray.flatMap((number) => [number, number * 2]); // [1, 2, 2, 4, 3, 6]`,
    },
    {
        title: 'forEach()',
        description:
            'The forEach() method executes a provided function once for each array element.',
        example: `let myArray = [1, 2, 3];
myArray.forEach((number) => console.log(number)); // 1 2 3`,
    },
    {
        title: 'from()',
        description:
            'The from() method creates a new, shallow-copied array instance from an array-like or iterable object.',
        example: `let myArray = Array.from("hello"); // ["h", "e", "l", "l", "o"]`,
    },
    {
        title: 'includes()',
        description:
            'The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.',
        example: `let myArray = [1 ,2, 3];
myArray.includes(2); // true`,
    },
    {
        title: 'indexOf()',
        description:
            'The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.',
        example: `let myArray = [1, 2, 3, 4, 5];
myArray.indexOf(3); // 2`,
    },
    {
        title: 'isArray()',
        description:
            'The isArray() method determines whether the passed value is an Array.',
        example: `Array.isArray([1, 2, 3]); // true`,
    },
    {
        title: 'join()',
        description:
            'The join() method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.',
        example: `let myArray = [1, 2, 3];
myArray.join(); // "1,2,3"`,
    },
    {
        title: 'keys()',
        description:
            'The keys() method returns a new array iterator object that contains the keys for each index in the array.',
        example: `let myArray = [1, 2, 3];
let iterator = myArray.keys();
console.log(iterator.next().value); // 0
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2`,
    },
    {
        title: 'lastIndexOf()',
        description:
            'The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present.',
        example: `let myArray = [1, 2, 3, 4, 5, 3];
myArray.lastIndexOf(3); // 5`,
    },
    {
        title: 'length',
        description:
            'The length property of an object which is an instance of type Array sets or returns the number of elements in that array.',
        example: `let myArray = [1, 2, 3];
myArray.length; // 3`,
    },

    {
        title: 'map()',
        description:
            'The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.',
        example: `let myArray = [1, 2, 3];
let doubledArray = myArray.map((number) => number * 2); // [2, 4, 6]`,
    },
    {
        title: 'pop()',
        description:
            'The pop() method removes the last element from an array and returns that element. This method changes the length of the array.',
        example: `let myArray = [1, 2, 3];
myArray.pop(); // 3`,
    },
    {
        title: 'push()',
        description:
            'The push() method adds one or more elements to the end of an array and returns the new length of the array.',
        example: `let myArray = [1, 2, 3];
myArray.push(4, 5); // 5`,
    },
    {
        title: 'reduce()',
        description:
            'The reduce() method executes a reducer function on each element of the array, resulting in a single output value.',
        example: `let myArray = [1, 2, 3];
let sum = myArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // 6`,
    },
    {
        title: 'reduceRight()',
        description:
            'The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.',
        example: `let myArray = [1, 2, 3];    
let sum = myArray.reduceRight((accumulator, currentValue) => accumulator + currentValue, 0); // 6`,
    },
    {
        title: 'reverse()',
        description:
            'The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.',
        example: `let myArray = [1, 2, 3];
myArray.reverse(); // [3, 2, 1]`,
    },
    {
        title: 'shift()',
        description:
            'The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.',
        example: `let myArray = [1, 2, 3];
myArray.shift(); // 1`,
    },
    {
        title: 'slice()',
        description:
            'The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.',
        example: `let myArray = [1, 2, 3, 4, 5];
let slicedArray = myArray.slice(2, 4); // [3, 4]`,
    },
    {
        title: 'some()',
        description:
            'The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a boolean value.',
        example: `let myArray = [1, 2, 3, 4, 5];
let isBelowTen = (currentValue) => currentValue > 10;
myArray.some(isBelowTen); // false`,
        graphical: `🍏🍏🍏.some(🍊🍊🍊) => 🍏🍏🍏`,
    },
    {
        title: 'sort()',
        description:
            'The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending.',
        example: `let myArray = [3, 1, 2];
myArray.sort(); // [1, 2, 3]`,
    },
    {
        title: 'splice()',
        description:
            'The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.',
        example: `let myArray = [1, 2, 3, 4, 5];
myArray.splice(2, 0, 6); // [1, 2, 6, 3, 4, 5]`,
    },
    {
        title: 'toLocaleString()',
        description:
            'The toLocaleString() method returns a string representing the elements of the array. The elements are converted to strings using their toLocaleString methods and are separated by a locale-specific string (such as a comma “,”).',
        example: `let myArray = [1, 2, 3];
myArray.toLocaleString(); // "1,2,3"`,
    },
    {
        title: 'toString()',
        description:
            'The toString() method returns a string representing the specified array and its elements.',
        example: `let myArray = [1, 2, 3];
myArray.toString(); // "1,2,3"`,
    },
    {
        title: 'unshift()',
        description:
            'The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.',
        example: `let myArray = [1, 2, 3];
myArray.unshift(4, 5); // 5`,
    },
]

export default ArrayMethodsArray
