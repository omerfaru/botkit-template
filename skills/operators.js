//
// Command: operators
//
module.exports = function (controller) {

    controller.hears([/^operators$/], 'direct_message,direct_mention', function (bot, message) {
        var text = "Operators are used to perform operations on variables and values.Python divides the operators in the following:Arithmetic operators,Assignment operators,Comparison operators,Logical operators,Identity operators,Membership operators,Bitwise operators.;
        bot.reply(message, text);
    });
}
