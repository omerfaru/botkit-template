//
// Command: decision
//
module.exports = function (controller) {

    controller.hears([/^decision$/], 'direct_message,direct_mention', function (bot, message) {
        var text = "Decision structures evaluate multiple expressions, which produce TRUE or FALSE as the outcome. You need to determine which action to take and which statements to execute if the outcome is TRUE or FALSE otherwise.";
        bot.reply(message, text);
    });
}
