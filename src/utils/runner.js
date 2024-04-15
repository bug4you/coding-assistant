const {post} = require("axios");
const FormData = require("form-data");
const {getLangCode, langArgs} = require("./lang");

const JAVA_CODE_COMPILER_API = "https://www.compilejava.net/v1/compile";
const JAVA_SECOND_CODE_COMPILER_API = "https://rextester.com/rundotnet/Run?";

const runner = async (ctx, lang, code) => {
    // console.log("1st runner")
    if (lang) {
        try {
            let axiosResponse = await post(JAVA_SECOND_CODE_COMPILER_API, secondCodeRunnerApiOptions(getLangCode(lang), code, langArgs(lang)));
            let output = axiosResponse.data;
            if (output.Errors) {
                await ctx.reply(`Xatolik: \n${output.Errors}`);
            } else {
                await ctx.reply(`<i>Natija: <code>\n${output.Result}</code></i>`, {parse_mode: "HTML"});
            }
        } catch (e) {
            console.log(e);
        }
    }
}

function secondCodeRunnerApiOptions(langCode, code = "", args = "") {
    let data = new FormData();
    data.append("LanguageChoiceWrapper", langCode);
    data.append("EditorChoiceWrapper", 1);
    data.append("LayoutChoiceWrapper", 1);
    data.append("Program", code);
    data.append("CompilerArgs", args);
    data.append("Input", "");
    data.append("ShowWarnings", "false");
    data.append("Privacy", "");
    data.append("PrivacyUsers", "");
    data.append("Title", "");
    data.append("SavedOutput", "");
    data.append("WholeError", "");
    data.append("WholeWarning", "");
    data.append("StatsToSave", "");
    data.append("CodeGuid", "");
    data.append("IsInEditMode", "False");
    data.append("IsLive", "False");
    return data;
}

module.exports = {
    runner
};

// nodejs => 23
// python => 24
// java => 4
// php => 8
// rust => 46