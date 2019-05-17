//
// Command: string
//
module.exports = function (controller) {

    controller.hears([/^string$/], 'direct_message,direct_mention', function (bot, message) {
        var text = "Strings are amongst the most popular types in Python. We can create them simply by enclosing characters in quotes. Python treats single quotes the same as double quotes. Creating strings is as simple as assigning a value to a variable.";
        bot.reply(message, text);
    });
}
