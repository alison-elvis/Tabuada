const main = document.querySelector("main");
for (let i = 2; i <= 9; i++) {
    const section = document.createElement("section");
    section.classList.add("multiplication-table");
    const h3 = document.createElement("h3");
    h3.innerText = `Tabuada do ${i}`;
    section.appendChild(h3);
    for (let j = 0; j <= 10; j++) {
        const p = document.createElement("p");
        p.innerText = `${i} x ${j} = ${i * j}`;
        section.appendChild(p);
    }
    main.appendChild(section);
}

const timeTag = document.querySelector("time");
const currTime = new Date().getFullYear();
timeTag.setAttribute("datetime", currTime);
timeTag.innerText = currTime;
