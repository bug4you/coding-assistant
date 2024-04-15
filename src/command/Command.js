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
        await ctx.reply("<i>Ushbu bot guruhlarda daasturchilar uchun mavjud kodlarni osongina tekshirib ko'rish uchun yaratilgan maxsus bot</i>", {
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
}

module.exports = Command;