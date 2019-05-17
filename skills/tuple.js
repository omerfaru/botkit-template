//
// Command: tuple
//
module.exports = function (controller) {

    controller.hears([/^tuple$/], 'direct_message,direct_mention', function (bot, message) {
        var text = "A tuple is a sequence of immutable Python objects. Tuples are sequences, just like lists. The main difference between the tuples and the lists is that the tuples cannot be changed unlike lists. Tuples use parentheses, whereas lists use square brackets.Creating a tuple is as simple as putting different comma-separated values. Optionally, you can put these comma-separated values between parentheses also.";
        bot.reply(message, text);
    });
}
