//
// Adds meta information about the bot, and exposes them at a public endpoint 
//
module.exports = function (controller, bot) {

    //
    // OVERRIDE WITH YOUR BOT INFORMATION
    //
    var botcommons = {

        // Bot description
        "description": " OmeraBot is a Cisco Webex Bot created By Omer Farook. ",

        // Where to get more information about the bot
        "url": " https://github.com/omerfaru/botkit-template ",

        // Legal owner
        "owner":  " OMER FAROOK ",

        // Contact name for support
        "support-contact": " Omer Farook <mailto:omerfarook515@gmail.com> ",

        // Messaging platform
        // [WORKAROUND] overriding Botkit's integrated support temporarly as 'ciscospark' is still returned
        //"plaform": bot.type,
        "Plaform": " Cisco Webex ",

        // the precise bot identity is loaded asynchronously, from a GET /people/me request
        "identity": "unknown",

        // Endpoint where to check the bot is alive
        "healthcheck": "https://" + controller.config.public_address + process.env.HEALTHCHECK_ROUTE,

        // BotCommons specifications version (should be an href)
        "botcommons": "draft",
    }

    //
    // Adding a metadata endpoint
    //
    controller.webserver.get(process.env.BOTCOMMONS_ROUTE, function (req, res) {
        // As the identity is load asynchronously from the access token, we need to check until it's fetched
        if ((botcommons.identity == "unknown") && (bot.botkit.identity)) {
            botcommons.identity = bot.botkit.identity.emails[0];
        }
        res.json(botcommons);
    });
    console.log("bot metadata available at: " + process.env.BOTCOMMONS_ROUTE);

    //
    // .botcommons skill
    //
    controller.hears([/^about$/, /^botcommons$/, /^\.commons$/, /^\.bot$/], 'direct_message,direct_mention', function (bot, message) {

        // Return metadata
        var metadata = '{\n'
            + '   "description" : "' + botcommons["description"] + '",\n'
            + '   "url"         : "' + botcommons["url"] + '",\n'
            + '   "owner"       : "' + botcommons["owner"] + '",\n'
            + '   "Plaform"     : "' + botcommons["Plaform"] + '",\n'
            + '   "support"     : "' + botcommons["support-contact"] + '",\n'
            + '   "healthcheck" : "' + botcommons["healthcheck"] + '",\n'
            + '}\n';

        bot.reply(message, '```json\n' + metadata + '\n```');
    });

}
