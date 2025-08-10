export default function renderNavbar() {
    return `
        <nav class="fixed top-0 w-full bg-white flex justify-between items-center shadow-md p-4 dark:bg-gray-800">
            <div class="text-xl font-bold">Task Manager <span class="text-sm text-gray-400">V1.1</span></div>
            <div><bytton id="themeToggle" class="text-xl cursor-pointer">🌙</button></div>
            <ul class="flex flex-row-reverse font-semibold gap-4">
                <li><a href="#/" class="inline-block transform hover:scale-105 transition">خانه</a></li>
                <li><a href="#/tasks" class="inline-block transform hover:scale-105 transition">تسک ها</a></li>
                <li><a href="#/services" class="inline-block transform hover:scale-105 transition">خدمات ما</a></li>
                <li><a href="#/about" class="inline-block transform hover:scale-105 transition">درباره ما</a></li>
                <li><a href="#/contact" class="inline-block transform hover:scale-105 transition">تماس با ما</a></li>
            </ul>
        </nav>
    `;
}
