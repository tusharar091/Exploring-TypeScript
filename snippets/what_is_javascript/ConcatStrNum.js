
/**
 * This function concats given string with a number
 * @param str :- String value required for concatenation
 * @param num :- Number value required for concatenation
 * @returns Concatenated string "str"+"num";
 */
function concatStringWithNum(str, num) {
    return str + num;
}
var num;
var concatenatedStr = concatStringWithNum("Hi, I am CR", num);
writeOnDoc(concatenatedStr);
num = 7;
concatenatedStr = concatStringWithNum("Hi, I am CR", num);
writeOnDoc(concatenatedStr);


/**
 * Renders @content - @type {any} using html,if script's context 
 * is "Web Browser" i.e. script is embedded into html and running in the browser,
 * On the other hand,if context is local javascript execution engine like Node , 
 * then it will print the @content on console.
 * 
 * @param {any} content - The value to be rendered/printed on webPage/console
 */
function writeOnDoc(content) {
    if (typeof window == 'undefined') {
        // We are in node.
        console.log(content + "\n");
        return;
    }
    // We are in browser.
    document.write(content);
    document.write("<br>");

}
