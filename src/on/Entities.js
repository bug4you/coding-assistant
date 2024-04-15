const {runner} = require("../utils/runner");
const axios = require("axios");

const SOLOLEARN_COMPILER_URL = "https://api2.sololearn.com/v2/codeplayground/v2/compile";

const javaCodeRunner = async (ctx, lang, code) => {
    if (lang === "java") {
        await javaCodeCompile(ctx, lang, code);
    } else {
        await runner(ctx, lang, code);
    }
};

const javaCodeCompile =async (ctx, lang, code) => {
    let response = await axios.request({
        method: "POST",
        url: SOLOLEARN_COMPILER_URL,
        headers: {
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36 Edg/123.0.0.0"
        },
        data: {
            code: code,
            language: lang
        }
    });
    if (response.data.success) {
        await ctx.reply(`<i>Natija: <code>\n${response.data.data.output}</code></i>`, {parse_mode: "HTML"});
    }
}

module.exports = {
    javaCodeRunner
};