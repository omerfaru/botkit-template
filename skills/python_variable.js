//
// Command: variable
//
module.exports = function (controller) {

    controller.hears([/^python_variable$/], 'direct_message,direct_mention', function (bot, message) {
        var text = "Variables are nothing but reserved memory locations to store values. It means that when you create a variable, you reserve some space in the memory.Based on the data type of a variable, the interpreter allocates memory and decides what can be stored in the reserved memory. Therefore, by assigning different data types to the variables, you can store integers, decimals or characters in these variables.";
        bot.reply(message, text);
    });
}
