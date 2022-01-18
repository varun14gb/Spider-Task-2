//some variables for customization
var bgColor = "black";
var clr = "green";
var nclr = "white";
var h = 5;
var m = 7;
var s = 9;
var v = 5;

var username = null;
var password = null;

//signin
signin = () => {
    var uname = document.querySelector("#username").value;
    var pass = document.querySelector("#password").value;
    if (uname === '' || pass === '') {
        alert("Username and password cannot be empty");
    } else {
        username = uname;
        password = pass;
        document.querySelector(".login").classList.add("hidden");
        document.querySelector("body").classList.add("scroll");
        setInterval(() => {
            audio.play();
            audio.volume = 0.1 * v;
        }, 1000);
    }
}

//audio
var uso = "data:audio/mp3;base64,SUQzAwAAAAAfdlBSSVYAAAAOAABQZWFrVmFsdWUA/n8AAFBSSVYAAAARAABBdmVyYWdlTGV2ZWwAkicAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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JEeBvT5xkWdEoF/asrq3xbePjW6v965r0jpZwxSOZkHJW2t6i29vr3i8FRGICBwHAAomU1lxsDsclCRRbBEKn5dj/rDx6bYcsXtkQAAkJEpEpUXGw5Xkpj49JVG0oA+1rmNesuW9ztqj03ZiIzC+eRMoUBHBYTPAjTjAo6lr5NDNE49p1aswlT1JY1u3ur2NU9lQAQAiJqpcwyK8tj86RAVbrebCRgLDJ3B/cfm4n4nu2tRuMhcjScbrLSAmS7Vsz/n9+5mW+ZLzup6sNAH0BaZpprwXyYrLmMwqm3ef8///vlmKk//95jkQCAiRKRKUFh9OwkhHwdSqgIys6KVlR6Ps1t/L88/7ld7fIrfl0cPQ4CPDm0gtB1pWt0Elu40Xpegm629lUsL2L4j35WpARAhJCq6mK2EEVaQh3av/oQK+MkEeJJNTGLbLQVosnUpFfQI/QCW7MFEjO6OlZWFIBEx0EKwynXJ0HCiMNdavkff/+pNEchJvgAKxKVTx6zLaRiM6jzFmSQsE20nGNGthMwzpfJYhJFNiOGhwwoBCpJQZCbA0eyK+RqW60teKqgJGRptpt4JNgqSWDwSshJCdoEXbNUerOLstOrM0j0mtrANgXM9MrE9mnSY8YFDYUBpq9YTSdEQGnVBVy8Kiz26JVxIGNT/VmRFLcXwECm1VKAfbihWB9DifuGNH8c4CSBomrd6+s+nexYL3Va6smFQRM1GKqFlUUsqopWqzaEs+1pw2NXGVLImrzygRItNy7LCuKKwhsJ435QX///yf53Gkz7fwKaUaAJJKSRMYGfWcDoRoWSUkU4BmPMtqEtzl7Zi+uvHxxE8hZWRIc0qGWbjG49VCk1v955fLVkHQFPK+Isi3Cgdyvhzlixv///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////qTRMOQjIAC1CZLYe9KWkSkCU0x6UgAAAEuAAAAIAAAJcAAAAT///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/6k0R6YfqAC5AAS4AAAAgAAAlwAAABAAABLgAAACAAACXAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUQUcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDA==";
var audio = new Audio(uso);

//to show edit clock form
showEditForm = () => {
    var eform = document.querySelector(".eform");
    eform.classList.add("show");
}

//to hide edit clock form
hideEForm = () => {
    var eform = document.querySelector(".eform");
    eform.classList.remove("show");
}

//to change clock
changeClock = () => {
    var type = document.querySelector("#type").value;
    var bgclr = document.querySelector("#bgclr").value;
    var colr = document.querySelector("#clr").value;
    var ncolr = document.querySelector("#nclr").value;

    var hour = document.querySelector("#hour").value;
    var minute = document.querySelector("#minute").value;
    var second = document.querySelector("#second").value;

    var volume = document.querySelector("#sound").value;

    if (hour < 1 || hour > 9) {
        alert("Enter a number between 1 and 9");
    } else if (minute < 1 || minute > 9) {
        alert("Enter a number between 1 and 9");
    } else if (second < 1 || second > 9) {
        alert("Enter a number between 1 and 9");
    } else if (volume < 0 || volume > 10) {
        alert("Enter a sound level between 0 and 10");
    } else {
        bgColor = bgclr;
        clr = colr;
        nclr = ncolr;
        h = parseInt(hour);
        m = parseInt(minute);
        s = parseInt(second);
        v = parseInt(volume);
        if (type == 'analog') {
            document.querySelector(".clock").classList.add("hidden");
            document.querySelector(".clock").classList.remove("show");
            document.querySelector(".analog").classList.remove("hidden");
            document.querySelector(".analog").classList.add("show");
            drawClock();
        } else {
            document.querySelector(".clock").classList.add("show");
            document.querySelector(".clock").classList.remove("hidden");
            document.querySelector(".analog").classList.add("hidden");
            document.querySelector(".analog").classList.remove("show");
            setTime();
        }
        hideEForm();
    }
}

//making analog clock
drawClock = () => {
    var height = document.querySelector(".analog").offsetHeight;
    var canvas = document.querySelector("#canvas");
    canvas.height = height;
    canvas.width = height;
    var ctx = canvas.getContext("2d");
    var radius = canvas.height / 2;
    ctx.translate(radius, radius);
    radius = radius * 0.9;

    //face of clock
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = bgColor;
    ctx.fill();
    var grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, bgColor);
    grad.addColorStop(0.5, clr);
    grad.addColorStop(1, bgColor);
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius * 0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.08, 0, 2 * Math.PI);
    ctx.fillStyle = clr;
    ctx.fill();

    //numbers
    ctx.font = radius * 0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (var num = 1; num < 13; num++) {
        var ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        ctx.fillStyle = nclr;
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
    }

    //time
    var now = new Date();
    var hour = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    //hour hand
    hour = hour % 12;
    hour = (hour * Math.PI / 6) + (minutes * Math.PI / (6 * 60)) + (seconds * Math.PI / (6 * 60 * 60));
    drawHand(ctx, hour, radius * 0.1 * h, radius * 0.07);
    //minute hand
    minutes = (minutes * Math.PI / 30) + (seconds * Math.PI / (30 * 60));
    drawHand(ctx, minutes, radius * 0.1 * m, radius * 0.07);
    //second hand
    seconds = (seconds * Math.PI / 30);
    drawHand(ctx, seconds, radius * 0.1 * s, radius * 0.02);
}

//helper function to draw clock hands
drawHand = (ctx, pos, length, width) => {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.strokeStyle = clr;
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}

//Making digital Clock Functionable

setTime = () => {
    const d = new Date();
    const hour = d.getHours();
    const minutes = d.getMinutes();

    setHours(hour);
    setMinutes(minutes);
}

//Calling for the first time
setTimeout(setTime, 0);

//Calling after every second
setInterval(setTime, 1000);
setInterval(drawClock, 1000);

setHours = (hours) => {

    //between colon style
    var betw = document.querySelectorAll(".bet .hv1")
    betw[0].style.backgroundColor = clr;
    betw[1].style.backgroundColor = clr;

    //1st digit
    var hh11 = document.querySelector(".h1 .hh1");
    hh11.style.backgroundColor = clr;
    var hh21 = document.querySelector(".h1 .hh2");
    hh21.style.backgroundColor = clr;
    var hh31 = document.querySelector(".h1 .hh3");
    hh31.style.backgroundColor = clr;
    var hv11 = document.querySelector(".h1 .hv1");
    hv11.style.backgroundColor = clr;
    var hv21 = document.querySelector(".h1 .hv2");
    hv21.style.backgroundColor = clr;
    var hv31 = document.querySelector(".h1 .hv3");
    hv31.style.backgroundColor = clr;
    var hv41 = document.querySelector(".h1 .hv4");
    hv41.style.backgroundColor = clr;

    //2nd digit
    var hh12 = document.querySelector(".h2 .hh1");
    hh12.style.backgroundColor = clr;
    var hh22 = document.querySelector(".h2 .hh2");
    hh22.style.backgroundColor = clr;
    var hh32 = document.querySelector(".h2 .hh3");
    hh32.style.backgroundColor = clr;
    var hv12 = document.querySelector(".h2 .hv1");
    hv12.style.backgroundColor = clr;
    var hv22 = document.querySelector(".h2 .hv2");
    hv22.style.backgroundColor = clr;
    var hv32 = document.querySelector(".h2 .hv3");
    hv32.style.backgroundColor = clr;
    var hv42 = document.querySelector(".h2 .hv4");
    hv42.style.backgroundColor = clr;

    //resetting
    hh11.style.opacity = 0.05;
    hh21.style.opacity = 0.05;
    hh31.style.opacity = 0.05;
    hv11.style.opacity = 0.05;
    hv41.style.opacity = 0.05;
    hv31.style.opacity = 0.05;
    hv21.style.opacity = 0.05;
    hh12.style.opacity = 0.05;
    hh22.style.opacity = 0.05;
    hh32.style.opacity = 0.05;
    hv12.style.opacity = 0.05;
    hv42.style.opacity = 0.05;
    hv32.style.opacity = 0.05;
    hv22.style.opacity = 0.05;

    const hs1 = Math.floor(hours / 10);
    const hs2 = hours % 10;

    //setting 1st digit
    switch (hs1) {
        case 0:
            hh11.style.opacity = 1;
            hh31.style.opacity = 1;
            hv11.style.opacity = 1;
            hv21.style.opacity = 1;
            hv31.style.opacity = 1;
            hv41.style.opacity = 1;

            break;
        case 1:
            hv21.style.opacity = 1;
            hv41.style.opacity = 1;

            break;
        case 2:
            hh11.style.opacity = 1;
            hh21.style.opacity = 1;
            hh31.style.opacity = 1;
            hv21.style.opacity = 1;
            hv31.style.opacity = 1;

            break;
        default:
            break;
    }

    //setting 2nd digit
    switch (hs2) {
        case 0:
            hh12.style.opacity = 1;
            hh32.style.opacity = 1;
            hv12.style.opacity = 1;
            hv22.style.opacity = 1;
            hv32.style.opacity = 1;
            hv42.style.opacity = 1;

            break;
        case 1:
            hv22.style.opacity = 1;
            hv42.style.opacity = 1;

            break;
        case 2:
            hh12.style.opacity = 1;
            hh22.style.opacity = 1;
            hh32.style.opacity = 1;
            hv22.style.opacity = 1;
            hv32.style.opacity = 1;

            break;
        case 3:
            hh12.style.opacity = 1;
            hh22.style.opacity = 1;
            hh32.style.opacity = 1;
            hv22.style.opacity = 1;
            hv42.style.opacity = 1;

            break;
        case 4:
            hh22.style.opacity = 1;
            hv12.style.opacity = 1;
            hv22.style.opacity = 1;
            hv42.style.opacity = 1;

            break;
        case 5:
            hh12.style.opacity = 1;
            hh22.style.opacity = 1;
            hh32.style.opacity = 1;
            hv12.style.opacity = 1;
            hv42.style.opacity = 1;

            break;
        case 6:
            hh12.style.opacity = 1;
            hh22.style.opacity = 1;
            hh32.style.opacity = 1;
            hv12.style.opacity = 1;
            hv42.style.opacity = 1;
            hv32.style.opacity = 1;

            break;
        case 7:
            hh12.style.opacity = 1;
            hv22.style.opacity = 1;
            hv42.style.opacity = 1;

            break;
        case 8:
            hh12.style.opacity = 1;
            hh22.style.opacity = 1;
            hh32.style.opacity = 1;
            hv12.style.opacity = 1;
            hv42.style.opacity = 1;
            hv32.style.opacity = 1;
            hv22.style.opacity = 1;

            break;
        case 9:
            hh12.style.opacity = 1;
            hh22.style.opacity = 1;
            hv12.style.opacity = 1;
            hv42.style.opacity = 1;
            hv22.style.opacity = 1;

            break;
    }
}

setMinutes = (minutes) => {
    //1st digit
    var hh11 = document.querySelector(".m1 .hh1");
    hh11.style.backgroundColor = clr;
    var hh21 = document.querySelector(".m1 .hh2");
    hh21.style.backgroundColor = clr;
    var hh31 = document.querySelector(".m1 .hh3");
    hh31.style.backgroundColor = clr;
    var hv11 = document.querySelector(".m1 .hv1");
    hv11.style.backgroundColor = clr;
    var hv21 = document.querySelector(".m1 .hv2");
    hv21.style.backgroundColor = clr;
    var hv31 = document.querySelector(".m1 .hv3");
    hv31.style.backgroundColor = clr;
    var hv41 = document.querySelector(".m1 .hv4");
    hv41.style.backgroundColor = clr;

    //2nd digit
    var hh12 = document.querySelector(".m2 .hh1");
    hh12.style.backgroundColor = clr;
    var hh22 = document.querySelector(".m2 .hh2");
    hh22.style.backgroundColor = clr;
    var hh32 = document.querySelector(".m2 .hh3");
    hh32.style.backgroundColor = clr;
    var hv12 = document.querySelector(".m2 .hv1");
    hv12.style.backgroundColor = clr;
    var hv22 = document.querySelector(".m2 .hv2");
    hv22.style.backgroundColor = clr;
    var hv32 = document.querySelector(".m2 .hv3");
    hv32.style.backgroundColor = clr;
    var hv42 = document.querySelector(".m2 .hv4");
    hv42.style.backgroundColor = clr;

    //resetting
    hh11.style.opacity = 0.05;
    hh21.style.opacity = 0.05;
    hh31.style.opacity = 0.05;
    hv11.style.opacity = 0.05;
    hv41.style.opacity = 0.05;
    hv31.style.opacity = 0.05;
    hv21.style.opacity = 0.05;
    hh12.style.opacity = 0.05;
    hh22.style.opacity = 0.05;
    hh32.style.opacity = 0.05;
    hv12.style.opacity = 0.05;
    hv42.style.opacity = 0.05;
    hv32.style.opacity = 0.05;
    hv22.style.opacity = 0.05;

    const hs1 = Math.floor(minutes / 10);
    const hs2 = minutes % 10;

    //setting 1st digit
    switch (hs1) {
        case 0:
            hh11.style.opacity = 1;
            hh31.style.opacity = 1;
            hv11.style.opacity = 1;
            hv21.style.opacity = 1;
            hv31.style.opacity = 1;
            hv41.style.opacity = 1;

            break;
        case 1:
            hv21.style.opacity = 1;
            hv41.style.opacity = 1;

            break;
        case 2:
            hh11.style.opacity = 1;
            hh21.style.opacity = 1;
            hh31.style.opacity = 1;
            hv21.style.opacity = 1;
            hv31.style.opacity = 1;

            break;
        case 3:
            hh11.style.opacity = 1;
            hh21.style.opacity = 1;
            hh31.style.opacity = 1;
            hv21.style.opacity = 1;
            hv41.style.opacity = 1;

            break;
        case 4:
            hh21.style.opacity = 1;
            hv11.style.opacity = 1;
            hv21.style.opacity = 1;
            hv41.style.opacity = 1;

            break;
        case 5:
            hh11.style.opacity = 1;
            hh21.style.opacity = 1;
            hh31.style.opacity = 1;
            hv11.style.opacity = 1;
            hv41.style.opacity = 1;

            break;
        default:
            break;
    }

    //setting 2nd digit
    switch (hs2) {
        case 0:
            hh12.style.opacity = 1;
            hh32.style.opacity = 1;
            hv12.style.opacity = 1;
            hv22.style.opacity = 1;
            hv32.style.opacity = 1;
            hv42.style.opacity = 1;

            break;
        case 1:
            hv22.style.opacity = 1;
            hv42.style.opacity = 1;

            break;
        case 2:
            hh12.style.opacity = 1;
            hh22.style.opacity = 1;
            hh32.style.opacity = 1;
            hv22.style.opacity = 1;
            hv32.style.opacity = 1;

            break;
        case 3:
            hh12.style.opacity = 1;
            hh22.style.opacity = 1;
            hh32.style.opacity = 1;
            hv22.style.opacity = 1;
            hv42.style.opacity = 1;

            break;
        case 4:
            hh22.style.opacity = 1;
            hv12.style.opacity = 1;
            hv22.style.opacity = 1;
            hv42.style.opacity = 1;

            break;
        case 5:
            hh12.style.opacity = 1;
            hh22.style.opacity = 1;
            hh32.style.opacity = 1;
            hv12.style.opacity = 1;
            hv42.style.opacity = 1;

            break;
        case 6:
            hh12.style.opacity = 1;
            hh22.style.opacity = 1;
            hh32.style.opacity = 1;
            hv12.style.opacity = 1;
            hv42.style.opacity = 1;
            hv32.style.opacity = 1;

            break;
        case 7:
            hh12.style.opacity = 1;
            hv22.style.opacity = 1;
            hv42.style.opacity = 1;

            break;
        case 8:
            hh12.style.opacity = 1;
            hh22.style.opacity = 1;
            hh32.style.opacity = 1;
            hv12.style.opacity = 1;
            hv42.style.opacity = 1;
            hv32.style.opacity = 1;
            hv22.style.opacity = 1;

            break;
        case 9:
            hh12.style.opacity = 1;
            hh22.style.opacity = 1;
            hv12.style.opacity = 1;
            hv42.style.opacity = 1;
            hv22.style.opacity = 1;

            break;
    }
}

//show form
showForm = () => {
    document.querySelector(".form").classList.add("show");
}

//hide form
hideForm = () => {
    document.querySelector(".form").classList.remove("show");
}

var date = new Date().toISOString().split('T')[0];

//Mark as done or undone
removeItem = (title, time) => {
    var tasks = localStorage.getItem("tasks");
    tasks = JSON.parse(tasks);
    tasks = tasks.map(task => {
        if (task.date === date && task.time === time && task.title === title) {
            task.done = !task.done;
        }
        return task;
    })

    localStorage.setItem("tasks", JSON.stringify(tasks));

    loadItems();
}

//remove item or delete from local storage
deleteItem = (title, time) => {
    var tasks = localStorage.getItem(`${username}&${password}&tasks`);
    tasks = JSON.parse(tasks);
    tasks = tasks.filter(task => !(task.date === date && task.time === time && task.title === title));

    localStorage.setItem(`${username}&${password}&tasks`, JSON.stringify(tasks));

    loadItems();
}

//load List items
loadItems = () => {
    var headin = document.querySelector(".todohead");
    headin.innerHTML = `${date}`;
    var tasks = localStorage.getItem(`${username}&${password}&tasks`);
    if (tasks) {
        var list = document.querySelector(".list");
        while (list.firstChild) {
            list.firstChild.remove()
        }
        var tasks = localStorage.getItem(`${username}&${password}&tasks`);
        tasks = JSON.parse(tasks);
        tasks = tasks.filter(task => task.date === date);
        tasks.forEach(element => {
            var li = document.createElement("li");
            var div = document.createElement("div");
            var span1 = document.createElement("span");
            var span2 = document.createElement("span");
            var text = document.createTextNode(element.title);
            span1.appendChild(text);
            div.appendChild(span1);
            text = document.createTextNode(element.time);
            span2.appendChild(text);
            div.appendChild(span2);
            li.appendChild(div);
            var div1 = document.createElement("div");
            var span3 = document.createElement("button");
            var span4 = document.createElement("button");
            var text1 = document.createTextNode("Mark/Unmark");
            var text2 = document.createTextNode("Delete");
            span3.appendChild(text1);
            span4.appendChild(text2);
            div1.appendChild(span3);
            div1.appendChild(span4);
            li.appendChild(div1);
            li.className = "item";
            if (element.done == true) {
                li.classList.add("checked");
            }

            span3.addEventListener("click", (e) => {
                removeItem(e.target.parentElement.parentElement.firstChild.children[0].innerHTML, e.target.parentElement.parentElement.firstChild.children[1].innerHTML);
            })
            span4.addEventListener("click", (e) => {
                deleteItem(e.target.parentElement.parentElement.firstChild.children[0].innerHTML, e.target.parentElement.parentElement.firstChild.children[1].innerHTML);
            })

            list.appendChild(li);
        });
    }
}

//Add Item to todo list
addItem = () => {
    var task = document.querySelector("#task").value;
    var date = document.querySelector("#date").value;
    var time = document.querySelector("#time").value;

    if (task === '') {
        alert("Task should not be empty");
    } else if (date === '') {
        alert("Fill the date!");
    } else if (time === '') {
        alert("Fill the time!");
    } else if (date < new Date().toISOString().split('T')[0]) {
        alert("Cannot add task in previous date")
    } else {
        var tasks = localStorage.getItem(`${username}&${password}&tasks`);
        var data = {
            title: task,
            date,
            time,
            done: false
        };

        //Adding a notification
        if (granted) {
            setTimeout(() => {
                new Notification("TODO TASK", {
                    body: data.title,
                    timestamp: new Date(`${date}T${time}`).getTime()
                });
            }, new Date(`${date}T${time}`).getTime() - Date.now())
            // const notification = new Notification("TODO TASK", {
            //     body: data.title,
            //     timestamp: new Date(`${date}T${time}`).getTime()
            // });
        }

        if (!tasks) {
            localStorage.setItem(`${username}&${password}&tasks`, JSON.stringify([data]));
        } else {
            tasks = JSON.parse(tasks);
            tasks.push(data);
            localStorage.setItem(`${username}&${password}&tasks`, JSON.stringify(tasks));
        }

        loadItems(date);

        hideForm();
    }
}

loadItems();

getDaysInMonth = (month, year) => {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    return days;
}

fillCalendar = (month, year) => {
    var table = document.querySelector("table");
    var days = getDaysInMonth(month, year);

    var heading = document.querySelector(".calhead");

    heading.innerHTML = `${days[0].toLocaleString('default', { month: 'long' })} ${days[0].getFullYear()}`;

    while (table.childNodes.length > 2) {
        table.removeChild(table.lastChild);
    }

    var count = 0;
    var trow = document.createElement("tr");
    for (var i = 0; i < days.length; i++) {
        if (i == 0) {
            for (var j = 0; j < days[0].getDay() - 1; j++) {
                var td = document.createElement("td");
                trow.appendChild(td);
                count++;
            }
        }
        count++;
        var td = document.createElement("td");
        var text = document.createTextNode(days[i].getDate());
        td.appendChild(text);

        td.addEventListener("click", (e) => {
            date = `${year}-${month < 9 ? '0' : ''}${month + 1}-${e.target.innerHTML < 10 ? '0' : ''}${e.target.innerHTML}`;
            loadItems();
            fillCalendar(month, year);
        })

        if (days[i].getDate() == date.split("-")[2] && year == date.split("-")[0] && month == parseInt(date.split("-")[1]) - 1) {
            td.className = "selected";
        }
        trow.appendChild(td);
        if (i + 1 === days.length && days[i].getDay() % 7 != 0) {
            for (var j = days[i].getDay(); j < 7; j++) {
                var td = document.createElement("td");
                trow.appendChild(td);
                count++;
            }
            table.appendChild(trow);
        }
        if (count % 7 === 0) {
            table.appendChild(trow);
            trow = document.createElement("tr");
        }
    }
}

setCalendar = () => {
    var data = document.querySelector("#month").value;
    if (data === '') {
        alert("Select month and year before clicking the button");
    } else {
        var month = data.split("-")[1];
        var year = data.split("-")[0];
        fillCalendar(parseInt(month) - 1, parseInt(year));
    }
}

fillCalendar(new Date().getMonth(), new Date().getFullYear());

//getting notification permission
let granted = false;
(async () => {
    if (Notification.permission === 'granted') {
        granted = true;
    } else if (Notification.permission !== 'denied') {
        let permission = await Notification.requestPermission();
        granted = permission === 'granted' ? true : false;
    }
})();