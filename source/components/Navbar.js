export default function renderNavbar() {
    return `
        <nav class="bg-white flex justify-between items-center shadow-md p-4 dark:bg-gray-800">
            <div class="text-xl font-bold">Task Manager</div>
            <ul class="flex flex-row-reverse font-semibold gap-4">
                <li><a href="#/" class="hover:underline">خانه</a></li>
                <li><a href="#/tasks" class="hover:underline">تسک ها</a></li>
                <li><a href="#/about" class="hover:underline">درباره ما</a></li>
                <li><a href="#/contact" class="hover:underline">تماس با ما</a></li>
            </ul>
        </nav>
    `;
}
