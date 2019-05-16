//
// Simplest use of Botkit's conversation system
//
module.exports = function (controller) {

    controller.hears([/^variables$/], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {
            convo.say('Variables are nothing but reserved memory locations to store values. It means that when you create a variable, you reserve some space in the memory.Based on the data type of a variable, the interpreter allocates memory and decides what can be stored in the reserved memory. Therefore, by assigning different data types to the variables, you can store integers, decimals or characters in these variables.');

        });

    });
};
