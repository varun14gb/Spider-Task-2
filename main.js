
//Making Clock Functionable

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

setHours = (hours) => {
    //1st digit
    var hh11 = document.querySelector(".h1 .hh1");
    var hh21 = document.querySelector(".h1 .hh2");
    var hh31 = document.querySelector(".h1 .hh3");
    var hv11 = document.querySelector(".h1 .hv1");
    var hv21 = document.querySelector(".h1 .hv2");
    var hv31 = document.querySelector(".h1 .hv3");
    var hv41 = document.querySelector(".h1 .hv4");

    //2nd digit
    var hh12 = document.querySelector(".h2 .hh1");
    var hh22 = document.querySelector(".h2 .hh2");
    var hh32 = document.querySelector(".h2 .hh3");
    var hv12 = document.querySelector(".h2 .hv1");
    var hv22 = document.querySelector(".h2 .hv2");
    var hv32 = document.querySelector(".h2 .hv3");
    var hv42 = document.querySelector(".h2 .hv4");

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
    var hh21 = document.querySelector(".m1 .hh2");
    var hh31 = document.querySelector(".m1 .hh3");
    var hv11 = document.querySelector(".m1 .hv1");
    var hv21 = document.querySelector(".m1 .hv2");
    var hv31 = document.querySelector(".m1 .hv3");
    var hv41 = document.querySelector(".m1 .hv4");

    //2nd digit
    var hh12 = document.querySelector(".m2 .hh1");
    var hh22 = document.querySelector(".m2 .hh2");
    var hh32 = document.querySelector(".m2 .hh3");
    var hv12 = document.querySelector(".m2 .hv1");
    var hv22 = document.querySelector(".m2 .hv2");
    var hv32 = document.querySelector(".m2 .hv3");
    var hv42 = document.querySelector(".m2 .hv4");

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