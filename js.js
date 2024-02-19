// @ts-check
"use strict";

document.body.addEventListener("contextmenu", (event) => {
    event.preventDefault();

    const menu = document.getElementById("context_menu");

    if (menu === null)
    {
        return; 
    }

    menu.style.left = `${event.pageX}px`;
    menu.style.top = `${event.pageY}px`;
    menu.style.display = "block";

    document.addEventListener("click", () => {
        menu.style.display = "none";
    });
});

function ChangeBackground(color)
{
    document.body.style.background = color;
}

/////////////////////////////////////////////////////////////////////

const LogDesigner = (time_mode, sender, sernder_mode, msg, msg_mode, style) => {
    var time = "";

    switch (time_mode)
    {
        case "Brackets Everything": time = `[${new Date().toLocaleString()}]`;     break;
        case "Brackets OnlyTime":   time = `[${new Date().toLocaleTimeString()}]`; break;
        case "Brackets OnlyDate":   time = `[${new Date().toLocaleDateString()}]`; break;
        case "Everything":          time = `${new Date().toLocaleString()}`;       break;
        case "OnlyTime":            time = `${new Date().toLocaleTimeString()}`;   break;
        case "OnlyDate":            time = `${new Date().toLocaleDateString()}`;   break;
    }

    switch (sernder_mode)
    {
        case "Brackets": sender = `[${sender}]`;       break;
        case "Lines":    sender = `| ${sender} |`;     break;
        case "Brackets": sender = `Sender: ${sender}`; break;
    }

    switch (msg_mode)
    {
        case "Brackets": sender = `[${sender}]`;       break;
        case "Lines":    sender = `| ${sender} |`;     break;
        case "Brackets": sender = `Sender: ${sender}`; break;
    }

    console.log(`%c${time} ${sender}: ${msg}`, style);
}