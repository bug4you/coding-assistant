const getRepo = require("../utils/repoApi");
const {InlineKeyboard} = require("grammy");
const langs = ["java", 'python', 'nodejs', 'php', 'rust', 'c#', 'vbnet', 'f#', 'c++', 'pascal', 'objectivec', 'haskell', 'ruby', 'perl', 'go', 'scala', 'c', 'cpp-clang', 'cpp-vc', 'c-vc', 'swift', 'kotlin', 'assembly'];

class Command {

    static async start(ctx) {
        await ctx.reply("<b>Bu bot sizga kodlarni natijasini tekshirish uchun yordam beruvchi maxsus bot</b>", {
            reply_to_message_id: ctx.message.message_id,
            parse_mode: "HTML"
        });
    }

    static async help(ctx) {
        await ctx.reply(`<i>Hurmatli <a href="tg://user?id=${ctx.message.from.id}">foydalanuvchi</a>\n\nUshbu bot guruhlarda daasturchilar uchun mavjud kodlarni osongina tekshirib ko'rish uchun yaratilgan maxsus bot.\nBot kommanddalari:\n/start\n/help\n/about\n/author\nUshbu kommandalar orqali ko'proq ma'lumotga ega bo'lishingiz mumkin</i>`, {
            reply_to_message_id: ctx.message.message_id,
            parse_mode: "HTML"
        });
    }

    static async about(ctx) {
        await ctx.reply(`<i>Ushbu bot guruhlarda daasturchilar uchun mavjud kodlarni osongina tekshirib ko'rish uchun yaratilgan maxsus bot\n\nUshbu botda <code>${langs.join(", ")}</code> tillarni qo'llab quvvatlaydi.</i>`, {
            reply_to_message_id: ctx.message.message_id,
            parse_mode: "HTML"
        });
    }

    static async author(ctx) {
        await ctx.reply("<i>Bot yaratuvchisi: <a href='tg://user?id=709958895'>Dilshod Fayzullayev</a></i>", {
            reply_to_message_id: ctx.message.message_id,
            parse_mode: "HTML"
        });
    }

    static async getRepoCommands(ctx, bot) {
        let oldMessage = await ctx.reply("Ma'lumotlar yuklanmoqda, iltimos kuting...");
        const repo = ctx.message.text.split(" ");
        if (repo.length > 1) {
            const repository = repo[0].startsWith("/") ? repo[0].slice(1) : repo[0];
            const repoName = repo[1];
            let data = await getRepo(repository, repoName);
            if (data) {
                try {
                    await bot.api.deleteMessage(ctx.message.chat.id, oldMessage.message_id);
                } catch (e) {
                }
                await ctx.reply(
                    `<i>
                    Loyiha: <code>${data.name}</code>\nLoyiha litsenziyasi: <code>${data.repository_license}</code>\nJoriy Versiyasi: <code>${data.latest_stable_release_number}</code>\nHissalar soni: <code>${data.contributions_count}</code>\nQo'llanilgan til: <code>${data.language}</code>\nRank: <code>${data.rank}</code>\nYulduzchalar soni: <code>${data.stars}</code>\nLoyiha haqida: <a href="${data.homepage}">Batafsil</a>\nTavsifi: <code>${data.description}</code>\nBarcha versiyalari soni: <code>${data.versions.length}</code>\n
                    </i>`,
                    {
                        reply_to_message_id: ctx.message.message_id,
                        parse_mode: "HTML",
                        reply_markup: new InlineKeyboard().url(data.platform, data.homepage).url("Batafsil", data.repository_url)
                    });
            } else {
                await ctx.reply("Ma'lumotlar yuklanmadi, iltimos qayta urinib ko'ring...");
            }
        }
    }
}

module.exports = Command;