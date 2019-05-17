//
// Command: list
//
module.exports = function (controller) {

    controller.hears([/^list$/], 'direct_message,direct_mention', function (bot, message) {
        var text = "In Python, list is a type of container in Data Structures, which is used to store multiple data at the same time. Unlike Sets, the list in Python are ordered and have a definite count. The elements in a list are indexed according to a definite sequence and the indexing of a list is done with 0 being the first index.";
        bot.reply(message, text);
    });
}
