//
// Command: loops
//
module.exports = function (controller) {

    controller.hears([/^loops$/], 'direct_message,direct_mention', function (bot, message) {
        var text = "A loop statement allows us to execute a statement or group of statements multiple times.Python programming language provides the following types of loops to handle looping requirements.1.while loop 2.for loop 3.nested loops.";
        bot.reply(message, text);
    });
}
