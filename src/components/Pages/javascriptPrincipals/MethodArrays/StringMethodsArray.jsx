const StringMethodsArray = [
    {
        title: 'at()',
        description:
            'Returns the letter at the specified index. If the index is negative, the letter is taken from the end of the array. The difference between at() and charAt() is that at() can take negative indexes.',
        example: `const string = "hello";
        string.at(1) => "e"`,
        graphical: `🍏🍌🍉🍇🍓🍈🍒🍑.at(6) => 🍒`,
    },
    {
        title: 'charAt()',
        description:
            'Returns the character at the specified index. If the index is negative, the character is taken from the end of the array. The difference between at() and charAt() is that at() can take negative indexes.',
        example: `const string = "hello";
        string.charAt(1) => "e"`,
        graphical: `🍇🍓🍊🍏.charAt(2) => 🍊`,
    },
    {
        title: 'charCodeAt()',
        description:
            'Returns the Unicode value of the character at the specified index.',
        example: `const string = "hello";
        string.charCodeAt(1) => 101`,
        graphical: `🍇🍓🍊🍏.charCodeAt(2) => 101`,
    },
    {
        title: 'concat()',
        description:
            'Joins two or more strings and returns a new string. This method does not change the existing strings.',
        example: `const string1 = "hello";
        const string2 = "world";
        string1.concat(string2) => "helloworld"`,
        graphical: `🍇🍓🍊🍏.concat(🍇🍓🍊🍏) => 🍇🍓🍊🍏🍇🍓🍊🍏`,
    },
    {
        title: 'endsWith()',
        description:
            'Checks if a string ends with the specified value and returns true or false.',
        example: `const string = "hello";
        string.endsWith("o") => true`,
    },
    {
        title: 'includes()',
        description:
            'Checks if a string contains the specified value and returns true or false.',
        example: `const string = "hello";
        string.includes("e") => true`,
        graphical: `🍇🍓🍊🍏.includes(🍊) => true`,
    },
    {
        title: 'indexOf()',
        description:
            'Returns the first index at which a specified value is found in a string. If the value is not found, it returns -1.',
        example: `const string = "hello";
        string.indexOf("e") => 1`,
        graphical: `🍇🍓🍊🍏.indexOf(🍊) => 2`,
    },
    {
        title: 'lastIndexOf()',
        description:
            'Returns the last index at which a specified value is found in a string. If the value is not found, it returns -1.',
        example: `const string = "hello";
        string.lastIndexOf("l") => 3`,
        graphical: `🍇🍓🍊🍏.lastIndexOf(🍊) => 2`,
    },
    {
        title: 'match()',
        description:
            'Searches a string for a specified value and returns the value if found. If the value is not found, it returns null.',
        example: `const string = "hello";
        string.match("e") => "e"`,
        graphical: `🍇🍓🍊🍏.match(🍊) => 🍊`,
    },
    {
        title: 'repeat()',
        description:
            'Returns a new string with a specified number of copies of the string it was called on.',
        example: `const string = "hello";
        string.repeat(2) => "hellohello"`,
        graphical: `🍇🍓🍊🍏.repeat(2) => 🍇🍓🍊🍏🍇🍓🍊🍏`,
    },
    {
        title: 'replace()',
        description:
            'Searches a string for a specified value and returns a new string where the value is replaced with another value.',
        example: `const string = "hello";
        string.replace("h", "j") => "jello"`,
        graphical: `🍇🍓🍊🍏.replace(🍇, 🍓) => 🍓🍓🍊🍏`,
    },
    {
        title: 'search()',
        description:
            'Searches a string for a specified value and returns the position of the match. If the value is not found, it returns -1.',
        example: `const string = "hello";
        string.search("e") => 1`,
        graphical: `🍇🍓🍊🍏.search(🍊) => 2`,
    },
    {
        title: 'slice()',
        description:
            'Extracts a section of a string and returns a new string without modifying the original string.',
        example: `const string = "hello";
        string.slice(1, 3) => "el"`,
        graphical: `🍇🍓🍊🍏.slice(1, 3) => 🍓🍊`,
    },
    {
        title: 'split()',
        description:
            'Splits a string into an array of substrings and returns the array.',
        example: `const string = "hello";
        string.split("l") => ["he", "", "o"]`,
    },
    {
        title: 'startsWith()',
        description:
            'Checks if a string starts with the specified value and returns true or false.',
        example: `const string = "hello";
        string.startsWith("h") => true`,
        graphical: `🍇🍓🍊🍏.startsWith(🍇) => true`,
    },
    {
        title: 'substr()',
        description:
            'Extracts a specified number of characters from a string, starting at a specified index.',
        example: `const string = "hello";
        string.substr(1, 3) => "ell"`,
    },
    {
        title: 'substring()',
        description:
            'Extracts a section of a string and returns a new string without modifying the original string.',
        example: `const string = "hello";
        string.substring(1, 3) => "el"`,
    },
    {
        title: 'toLowerCase()',
        description: 'Converts a string to lowercase letters.',
        example: `const string = "HELLO";
        string.toLowerCase() => "hello"`,
    },
    {
        title: 'toUpperCase()',
        description: 'Converts a string to uppercase letters.',
        example: `const string = "hello";
        string.toUpperCase() => "HELLO"`,
    },
    {
        title: 'trim()',
        description: 'Removes whitespace from both ends of a string.',
        example: `const string = " hello ";
        string.trim() => "hello"`,
    },
    {
        title: 'valueOf()',
        description: 'Returns the primitive value of a string.',
        example: `const string = "hello";
        string.valueOf() => "hello"`,
    },
]

export default StringMethodsArray;