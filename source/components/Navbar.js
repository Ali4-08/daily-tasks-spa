export default function renderNavbar() {
    return `
        <nav class="flex md:flex-row justify-between items-center gap-4 top-0 w-full bg-white shadow-md p-4 dark:bg-gray-800">
            
            <div class="hidden md:inline-block text-xl font-bold">Task Manager <span class="text-sm text-gray-400">V1.1</span></div>
            
            <div class="flex justify-between w-full md:w-fit items-center">
                <button id="themeToggle" class="text-xl cursor-pointer">🌙</button>
                <button id="btnMenu" class="text-2xl md:hidden">☰</button>
            </div>
            
            
            <!--منو برای سایز غیر از موبایل-->
            <ul class="hidden md:flex flex-row-reverse font-semibold gap-4">
                <li><a href="#/" class="inline-block transform hover:scale-105 transition">خانه</a></li>
                <li><a href="#/tasks" class="inline-block transform hover:scale-105 transition">تسک ها</a></li>
                <li><a href="#/services" class="inline-block transform hover:scale-105 transition">خدمات ما</a></li>
                <li><a href="#/about" class="inline-block transform hover:scale-105 transition">درباره ما</a></li>
                <li><a href="#/contact" class="inline-block transform hover:scale-105 transition">تماس با ما</a></li>
            </ul>

             <!--منو برای سایز موبایل-->
            <ul id="mobileMenu" class="hidden md:hidden flex-col font-semibold text-center bg-white shadow-md gap-8 absolute top-16 left-0 w-full p-4">
                <li><a href="#/" class="block transform hover:scale-105 transition">خانه</a></li>
                <li><a href="#/tasks" class="block transform hover:scale-105 transition">تسک ها</a></li>
                <li><a href="#/services" class="block transform hover:scale-105 transition">خدمات ما</a></li>
                <li><a href="#/about" class="block transform hover:scale-105 transition">درباره ما</a></li>
                <li><a href="#/contact" class="block transform hover:scale-105 transition">تماس با ما</a></li>
            </ul>
        </nav>
    `;
}
