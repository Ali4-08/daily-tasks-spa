import renderNavbar from "./source/components/Navbar.js";
import renderHome from "./source/pages/Home.js";
import renderTasks from "./source/pages/Tasks.js";
import renderAbout from "./source/pages/About.js";
import renderContact from "./source/pages/Contact.js";
import { Storage } from "./source/utils/Storage.js";



const app = document.getElementById("app");


function setupTaskPage() {

    const form = document.getElementById("taskForm");
    const titleInput = document.getElementById("title");
    const descriptionInput = document.getElementById("description");
    const taskList = document.getElementById("taskList");
    const taskCount = document.getElementById("taskCount");
    const btnSubmit = document.getElementById("btnSubmit");

    const btnAll = document.getElementById("filterAll");
    const btnDone = document.getElementById("filterDone");
    const btnPending = document.getElementById("filterPending");
    const btnDeleteAll = document.getElementById("deleteAll");

    let filterStatus = "all";
    let isEdit = null;

    displayTasks();

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = titleInput.value.trim();
        const description = descriptionInput.value.trim();

        if (!title || !description) return alert("مشخصات تسک را وارد کنید");

        if (isEdit) {
            const tasks = Storage.getTasks();

            const updated = tasks.map(task => {
                if (task.id === isEdit) {
                    return { ...task, title, description };
                }
                return task;
            });
            localStorage.setItem("tasks", JSON.stringify(updated));
            displayTasks();

            isEdit = null;
            btnSubmit.textContent = "افزودن تسک";
            btnSubmit.classList.remove("btn-task-edit");
            btnSubmit.classList.add("btn");

            form.reset();

            return;
        }

        const newTask = {
            id: crypto.randomUUID(),
            title: title,
            description: description,
            state: false
        }

        Storage.saveToLocal(newTask);

        form.reset();
        displayTasks();

    });


    function displayTasks() {
        const tasks = Storage.getTasks();

        let filteredTasks = tasks;
        if (filterStatus === "done") {
            filteredTasks = tasks.filter(t => t.state);
        } else if (filterStatus === "pending") {
            filteredTasks = tasks.filter(t => !t.state);
        }

        taskCount.textContent = `تعداد تسک ها: ${tasks.length}`;

        taskList.innerHTML = ``;

        filteredTasks.forEach(task => {
            const card = document.createElement("div");
            card.classList.add("bg-white", "rounded", "shadow-md", "p-4", "space-y-3", "flex", "justify-between", "items-center");

            card.innerHTML = `
            <div>
                <h3 class="text-lg font-bold ${task.state ? "text-gray-400 line-through" : ""}">${task.title}</h3>
                <p class="font-semibold text-gray-600">${task.description}</p>
            </div>

            <div>
                 <label class="font-semibold">${task.state ? "انجام شده" : "انجام نشده"}</label>
                 <input type="checkbox" class="chkStatus" ${task.state ? "checked" : ""}/>
            </div>

            <div>
                <button class="btn-delete" data-id="${task.id}">حذف</button>
                <button class="btn-edit" data-id="${task.id}">ویرایش</button>
            </div>
        `;

            taskList.appendChild(card);

            card.querySelector(".btn-delete[data-id]").addEventListener("click", (e) => {
                const id = e.target.dataset.id;
                Storage.deleteTask(id);
                displayTasks();

            });

            card.querySelector(".btn-edit[data-id]").addEventListener("click", (e) => {
                titleInput.value = task.title;
                descriptionInput.value = task.description;
                isEdit = task.id

                btnSubmit.textContent = "ویرایش تسک";
                btnSubmit.classList.remove("btn");
                btnSubmit.classList.add("btn-task-edit");
            });

            card.querySelector(".chkStatus").addEventListener("change", (e) => {

                const tasks = Storage.getTasks();

                tasks.forEach(t => {
                    if (t.id === task.id) {
                        t.state = e.target.checked;
                    }
                });

                localStorage.setItem("tasks", JSON.stringify(tasks));
                displayTasks();
            });

        });

    };

    btnAll.addEventListener("click", () => {
        filterStatus = "all";
        displayTasks();
    });

    btnDone.addEventListener("click", () => {
        filterStatus = "done";
        displayTasks();
    });

    btnPending.addEventListener("click", () => {
        filterStatus = "pending";
        displayTasks();
    });

    // حذف همه
    btnDeleteAll.addEventListener("click", () => {
        if (confirm("آیا مطمئن هستید که می‌خواهید همه تسک‌ها را حذف کنید؟")) {
            localStorage.removeItem("tasks");
            displayTasks();
        }
    });

}

function renderPage() {
    const hash = location.hash || "#/";
    let page;

    switch (hash) {
        case "#/":
            page = renderHome();
            break;
        case "#/tasks":
            page = renderTasks();
            break;
        case "#/about":
            page = renderAbout();
            break;
        case "#/contact":
            page = renderContact();
            break;
        default:
            page = `<section class="p-6"><h1 class="text-xl font-bold">صفحه مورد نظر یافت نشد</h1></section>`;
    }

    app.innerHTML = `
    ${renderNavbar()}
    ${page}
`;

    if (hash === "#/tasks") {
        setupTaskPage();
    }
}


window.addEventListener("DOMContentLoaded", renderPage);
window.addEventListener("hashchange", renderPage);

