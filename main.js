
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

//show form
showForm = () => {
    document.querySelector(".form").classList.add("show");
}

//hide form
hideForm = () => {
    document.querySelector(".form").classList.remove("show");
}

var date = new Date().toISOString().split('T')[0];

//remove item
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

//load List items
loadItems = () => {
    var headin = document.querySelector(".todohead");
    headin.innerHTML = `${date}`;
    var tasks = localStorage.getItem("tasks");
    if (tasks) {
        var list = document.querySelector(".list");
        while (list.firstChild) {
            list.firstChild.remove()
        }
        var tasks = localStorage.getItem("tasks");
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
            li.className = "item";
            if (element.done == true) {
                li.classList.add("checked");
            }

            li.addEventListener("click", (e) => {
                removeItem(e.target.children[0].innerHTML, e.target.children[1].innerHTML);
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
        var tasks = localStorage.getItem("tasks");
        var data = {
            title: task,
            date,
            time,
            done: false
        };

        if (!tasks) {
            localStorage.setItem("tasks", JSON.stringify([data]));
        } else {
            tasks = JSON.parse(tasks);
            tasks.push(data);
            localStorage.setItem("tasks", JSON.stringify(tasks));
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
            date = `${year}-${month < 9 ? '0' : ''}${month + 1}-${e.target.innerHTML}`;
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