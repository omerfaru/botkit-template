//
// Command: pyvariable
//
module.exports = function (controller) {

    controller.hears([/^pyvariable$/], 'direct_message,direct_mention', function (bot, message) {
        var text = "In Python, variables are a storage placeholder for texts and numbers. It must have a name so that you are able to find it again. The variable is always assigned with the equal sign, followed by the value of the variable.";
        bot.reply(message, text);
    });
}
