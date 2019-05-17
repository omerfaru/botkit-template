//
// Command: numbers
//
module.exports = function (controller) {

    controller.hears([/^numbers$/], 'direct_message,direct_mention', function (bot, message) {
        var text = "Number data types store numeric values. They are immutable data types. This means, changing the value of a number data type results in a newly allocated object.There are three numeric types in Python. 1.int 2.float 3.complex.";
        bot.reply(message, text);
    });
}
