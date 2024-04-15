const LANG = {
    ASSEMBLY: 15,
    JAVA: 4,
    PYTHON: 24,
    NODEJS: 23,
    PHP: 8,
    RUST: 46,
    CSHARP: 1,
    VBNET: 2,
    FSHARP: 3,
    CPP: 7,
    PASCAL: 9,
    OBJECTIVEC: 10,
    HASKELL: 11,
    RUBY: 12,
    PERL: 13,
    GO: 20,
    SCALA: 21,
    C: 26,
    CPP_CLANG: 27,
    CPP_VC: 28,
    C_VC: 29,
    SWIFT: 37,
    KOTLIN: 43,
};

function getLangCode(lang = "") {
    switch (lang) {
        case "java":
            return LANG.JAVA;
        case "python":
        case "py":
        case "python3":
            return LANG.PYTHON;
        case "nodejs":
        case "js":
        case "javascript":
            return LANG.NODEJS;
        case "php":
            return LANG.PHP;
        case "rust":
        case "rs":
            return LANG.RUST;
        case "csharp":
        case "c#":
            return LANG.CSHARP;
        case "vbnet":
            return LANG.VBNET;
        case "fsharp":
            return LANG.FSHARP;
        case "cpp":
        case "c++":
            return LANG.CPP;
        case "pascal":
            return LANG.PASCAL;
        case "objectivec":
            return LANG.OBJECTIVEC;
        case "haskell":
            return LANG.HASKELL;
        case "ruby":
        case "rb":
            return LANG.RUBY;
        case "perl":
            return LANG.PERL;
        case "go":
        case "golang":
            return LANG.GO;
        case "scala":
            return LANG.SCALA;
        case "c":
            return LANG.C;
        case "cpp-clang":
            return LANG.CPP_CLANG;
        case "cpp-vc":
            return LANG.CPP_VC;
        case "c-vc":
            return LANG.C_VC;
        case "swift":
            return LANG.SWIFT;
        case "kotlin":
        case "kt":
            return LANG.KOTLIN;
        case "assembly":
        case "asm":
            return LANG.ASSEMBLY;
        default:
            return 0;
    }
}

function langArgs(lang) {
    console.log(lang);
    switch (lang) {
        case "go":
        case "golang":
            return "-o a.out source_file.go";
        default:
            return "";
    }
}

module.exports = {
    getLangCode,
    langArgs
};