class Command {

    static async start(ctx) {
        await ctx.reply("Bot successfully running", {
            reply_to_message_id: ctx.message.message_id
        });
    }
}

module.exports = Command;