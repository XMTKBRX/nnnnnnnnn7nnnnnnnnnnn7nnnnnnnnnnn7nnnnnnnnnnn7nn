const { spawn: s } = require("child_process");
const l = require("./main/utils/log");
const sr = (m) => {
    l('く愛[.]↬ BOT LUNNA↫🇩🇿',"⟦ STARTING ⟧⪼ ")
    const c = s("node", ["--trace-warnings", "--async-stack-traces", "lunar.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });
    c.on("close", async (e) => {
        if (e == 1) return sr("🔄 BOT ĐANG KHỞI ĐỘNG LẠI!!!");
        else if (String(e).startsWith("2")) {
            await new Promise((r) => setTimeout(r, parseInt(e.replace('2', '')) * 1000));
              sr("🤖 BOT ĐÃ ĐƯỢC KÍCH HOẠT, VUI LÒNG CHỜ MỘT CHÚT!!!");
        }
    });
    c.on("error", (error) => l("Đã xảy ra lỗi: " + JSON.stringify(error), "[ Khởi động ]"));
};
sr();ماعندي اداة بس لو بدك تبحث اكتب 
JavaScript unobfiscator
