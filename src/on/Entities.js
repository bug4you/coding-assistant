const {runner} = require("../utils/runner");
const javaCodeRunner = async (ctx, lang, code) => {
    await runner(ctx, lang, code);
};

module.exports = {
    javaCodeRunner
};