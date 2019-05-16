//
// Command: pyvariable
//
module.exports = function (controller) {

    controller.hears([/^pyvariable$/], 'direct_message,direct_mention', function (bot, message) {
        var text = "Variables are nothing but reserved memory locations to store values.";
        bot.reply(message, text);
    });
}
