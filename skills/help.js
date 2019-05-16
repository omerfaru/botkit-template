//
// Command: help
//
module.exports = function (controller) {

    controller.hears([/^help$/], 'direct_message,direct_mention', function (bot, message) {
        var text = "Here are my skills:";
        text += "\n- " + bot.appendMention(message, "variable") + ": explanation on python variables";
        text += "\n- " + bot.appendMention(message, "operators") + ": explanation on python basic operators";
        text += "\n- " + bot.appendMention(message, "decision") + ": explanation on python decision making";
        text += "\n- " + bot.appendMention(message, "loops") + ": explanation on python loops";
        text += "\n- " + bot.appendMention(message, "numbers") + ": explanation on python numbers";
        text += "\n- " + bot.appendMention(message, "string") + ": explanation on python string";
        text += "\n- " + bot.appendMention(message, "list") + ": explanation on python list";
        text += "\n- " + bot.appendMention(message, "tuple") + ": explanation on python tuple";
        text += "\n\nI also understand:";
        text += "\n- " + bot.appendMention(message, "about") + ": shows metadata about myself";
        text += "\n- " + bot.appendMention(message, "help") + ": spreads the word about my skills";
        text += "\n- " + bot.appendMention(message, "show [skill]") + ": display the code of the specified skill";
        bot.reply(message, text);
    });
}
