// @ts-check
"use strict";

const HelpLogDesig = () => {
    console.log("=== Manual for using the library ===");

    console.groupCollapsed('Ready themes');

    console.log(`The library has prepared topics:

    For debugging: LogDebug(sender, msg)
    For information: LogInfo(sender, msg)
    For warning: LogWarning(sender, msg)
    For error: LogError(sender, msg)
    For a fatal error: LogFatalError(sender, msg)

    sender - the place where it was called from (method, function...)
    msg - message to be output`);

    console.groupCollapsed('LogDesignerSettings');
    console.log('Хранит общие настройки для отображения:');

    console.groupCollapsed('time_mode');
    console.log(`Possible options (written as a string):
    [Brackets] Everything
    [Brackets] OnlyTime
    [Brackets] OnlyDate`);
    console.groupEnd();

    console.groupCollapsed('time_mode');
    console.log(`Possible options (written as a string):
    *Nothing*
    Brackets
    Lines`);
    console.groupEnd();

    console.groupCollapsed('msg_mode');
    console.log(`Possible options (written as a string):
    *Nothing*
    Brackets
    Colon
    Arrow`);
    console.groupEnd();

    console.groupEnd();
    console.groupEnd();

    console.groupCollapsed('LogDesigner');
    console.log(`Function for constructing any log. Parameters:
    prefex - line before the entire log
    time_mode - accepts values by type as in LogDesignerSettings
    sender - the place where it was called from (method, function...)
    sernder_mode - accepts values by type as in LogDesignerSettings
    msg - message for output,
    msg_mode - accepts values by type as in LogDesignerSettings
    sufix - line after the entire log
    style - CSS styles`);
    console.groupEnd();
}

var LogDesignerSettings = {
    time_mode: "Brackets OnlyTime",
    sernder_mode: "",
    msg_mode: "Colon",
};

const LogDesigner = (prefex, time_mode, sender, sernder_mode, msg, msg_mode, sufix, style) => {
    var time = "";

    switch (time_mode)
    {
        case "Brackets Everything": time = `[${new Date().toLocaleString()}] `;     break;
        case "Brackets OnlyTime":   time = `[${new Date().toLocaleTimeString()}] `; break;
        case "Brackets OnlyDate":   time = `[${new Date().toLocaleDateString()}] `; break;
        case "Everything":          time = `${new Date().toLocaleString()} `;       break;
        case "OnlyTime":            time = `${new Date().toLocaleTimeString()} `;   break;
        case "OnlyDate":            time = `${new Date().toLocaleDateString()} `;   break;
    }

    switch (sernder_mode)
    {
        case "Brackets": sender = `[${sender}]`;       break;
        case "Lines":    sender = `| ${sender} |`;     break;
    }

    switch (msg_mode)
    {
        case "Brackets": msg = ` [${msg}]`;  break;
        case "Colon":    msg = `: ${msg}`;   break;
        case "Arrow":    msg = ` -> ${msg}`; break;
    }

    console.log(`%c${prefex}${time}${sender}${msg}${sufix}`, style);
}

const LogDebug  = (sender, msg) => {
    LogDesigner(
        "🪲 ", 
        LogDesignerSettings.time_mode, 
        sender, 
        LogDesignerSettings.sernder_mode, 
        msg, 
        LogDesignerSettings.msg_mode, 
        "", 
        "color: #22B14C; padding: 5px;"
    );
}

const LogInfo = (sender, msg) => {
    LogDesigner(
        "📃 ", 
        LogDesignerSettings.time_mode, 
        sender, 
        LogDesignerSettings.sernder_mode, 
        msg, 
        LogDesignerSettings.msg_mode, 
        "", 
        "color: #C3C3C3; padding: 5px;"
    );
}

const LogWarning = (sender, msg) => {
    LogDesigner(
        "⚠️ ", 
        LogDesignerSettings.time_mode, 
        sender, 
        LogDesignerSettings.sernder_mode, 
        msg, 
        LogDesignerSettings.msg_mode, 
        "", 
        "#FFF200; padding: 5px;"
    );
}

const LogError = (sender, msg) => {
    LogDesigner(
        "😡 ", 
        LogDesignerSettings.time_mode, 
        sender, 
        LogDesignerSettings.sernder_mode, 
        msg, 
        LogDesignerSettings.msg_mode, 
        "!", 
        "color: #ED1C24; padding: 5px;"
    );
}

const LogFatalError = (sender, msg) => {
    LogDesigner(
        "🤬 ", 
        LogDesignerSettings.time_mode, 
        sender, 
        LogDesignerSettings.sernder_mode, 
        msg, 
        LogDesignerSettings.msg_mode, 
        "!!!", 
        "color: #ED1C24; padding: 5px; text-decoration: underline;"
    );
}