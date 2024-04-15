require("dotenv").config();
const {Bot} = require("grammy");
const Command = require("./command/Command");
const {javaCodeRunner} = require("./on/Entities");

const bot = new Bot(process.env.TELEGRAM_BOT_TOKEN);

bot.command("start", Command.start);

bot.on("message", async (ctx) => {
    if (ctx.entities().length > 0) {
        ctx.entities("pre").forEach((entity) => {
            if (
                entity.language === "java" ||
                entity.language === "js" ||
                entity.language === "javascript" ||
                entity.language === "python" ||
                entity.language === "py" ||
                entity.language === "python3" ||
                entity.language === "nodejs" ||
                entity.language === "php" ||
                entity.language === "rust" ||
                entity.language === "rs" ||
                entity.language === "csharp" ||
                entity.language === "c#" ||
                entity.language === "vbnet" ||
                entity.language === "fsharp" ||
                entity.language === "cpp" ||
                entity.language === "c++" ||
                entity.language === "pascal" ||
                entity.language === "objectivec" ||
                entity.language === "haskell" ||
                entity.language === "ruby" ||
                entity.language === "rb" ||
                entity.language === "perl" ||
                entity.language === "go" ||
                entity.language === "golang" ||
                entity.language === "scala" ||
                entity.language === "c" ||
                entity.language === "cpp-clang" ||
                entity.language === "cpp-vc" ||
                entity.language === "c-vc" ||
                entity.language === "swift" ||
                entity.language === "kotlin" ||
                entity.language === "kt" ||
                entity.language === "assembly" ||
                entity.language === "asm"
            ) {
                javaCodeRunner(ctx, entity.language, entity.text);
            }
        });
    }
    console.log(ctx.message.from.first_name);
});


bot.start({
    allowed_updates: ["message"]
}).then(() => {
    console.log("Bot started");
    bot.api.getMe().then((me) => {
        console.log("Bot username:", me.username);
    });
}).catch((error) => {
    console.error("Error starting bot", error);
});