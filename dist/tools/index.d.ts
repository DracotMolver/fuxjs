declare const _exports: {
    readonly upperParagraph: typeof upperParagraph;
    readonly camelCase: typeof camelCase;
    readonly compress: typeof compress;
    readonly compose: typeof compose;
    readonly obj2Arr: typeof obj2Arr;
    readonly pipeVal: typeof pipeVal;
    readonly clone: typeof clone;
    readonly pipe: typeof pipe;
};
export = _exports;
/**
 * It will upper case the first letter of a text. It will look for the first word of
 * a paragraph and any other word after a dot.
 *
 * @param {string} text   - The text to be parsed
 * @param {boolean} byWord - True if you want to upper the first letter of each word
 * @returns {string} The parsed content
 */
declare function upperParagraph(text: string, byWord?: boolean): string;
/**
 * It will convert the string to a Lower Camel Case format.
 *
 * @example
 * camelCase('user_name'); // userName
 *
 * @param {string} text - The text to be converted.
 * @returns {string}
 */
declare function camelCase(text: string): string;
/**
 * It will make an Array of Objects using the key and value you
 * choose from the given Object or a new Object based on this condition.
 *
 * @param {array} array  - The Array of Object where to extract the keys.
 * @param {string} key   - The name of the attribute to use as a key.
 * @param {string} value - The name of the attribute to use as a value.
 * @returns {object}
 */
declare function compress(array: any[], key: string, value: string): any;
/**
 * It will receive several function that are going to `compose` into one function.
 * If you add more than one value, only the first function will receive them and
 * the result of it will be passed down to the rest of the functions.
 * This is read from right to left.
 *
 * You can pass multiple variables, but then the result of the first function
 * will be passing through the rest of the functions.
 *
 * @param {array} func            - A set of functions
 * @returns {function(any): any} - A function that will accept only one param.
 */
declare function compose(...func: any[]): (arg0: any) => any;
/**
 * It will create an Object into an Array of Objects keeping the original keys of the given Object.
 *
 * @example
 * util.obj2Arr({ b: '3', c: true, d: [4] });
 * // [{ b: '3' }, { c: true }, { d: [4] }]
 *
 * @param {object}  obj - the object to seek for
 * @returns {array}
 */
declare function obj2Arr(obj: any): any[];
/**
 * It will call a single function for several independents values.
 * It will return array of N values.
 *
 * @param {function} func         - The function to use.
 * @returns {function(any): any} - The result of passing all the values through the function.
 */
declare function pipeVal(func: Function): (arg0: any) => any;
/**
 * It will merge Arrays or Objects at first level returning a new Object or Array.
 * Be carful with the order of the values you are passing when they are objects.
 *
 * @example
 * clone({a: 'aA'}, {b: 'bB', a: 'AA'});
 * // {a: 'AA', b: 'bB'};
 *
 * @param  {(array|object)} obj1 - The base Array or Object
 * @param  {(array|object)} obj2 - The Array or Object to merge on the base Array or Object.
 * @returns {(array|object)}
 */
declare function clone(obj1: any, obj2: any): any;
/**
 * It will concat and execute several functions to the given values.
 * If you add more than one value, only the first function will receive them and
 * the result of it will be passed down to the rest of the functions.
 * This is read from left to right.
 *
 * @param {array} func            - All the Functions to be executed.
 * @returns {function(any): any} - The result of passing all the values through the functions.
 */
declare function pipe(...func: any[]): (arg0: any) => any;