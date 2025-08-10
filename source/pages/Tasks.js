export default function renderTasks() {
  return `
    <section class="p-6 max-w-2xl mx-auto fade-in mt-16">
      <h1 class="text-2xl font-bold mb-4 text-center">تسک‌های من</h1>
      
      <form id="taskForm" class="space-y-4 mb-8">
        <div>
            <label class="block mb-1 font-semibold" for="title">عنوان تسک</label>
            <input type="text" id="title" class="w-full p-2 border rounded-md" placeholder="مثلاً: خرید نان" required />
        </div>
        <div>
            <label class="block mb-1 font-semibold" for="description">توضیح کوتاه</label>
            <textarea id="description" rows="3" class="w-full p-2 border rounded-md" placeholder="توضیحی برای تسک بنویس" required></textarea>
        </div>

         <button type="submit" id="btnSubmit" class="btn">
            افزودن تسک
         </button>
      </form>

      <div class="flex items-center justify-between mb-4">
        <span id="taskCount" class="font-semibold">تعداد تسک ها: 0</span>
        
        <div class="space-y-4">
          <button id="filterAll" class="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 text-white dark:text-gray-800">همه</button>
          <button id="filterDone" class="px-3 py-1 bg-green-300 rounded hover:bg-green-400 text-white dark:text-gray-800">انجام‌شده</button>
          <button id="filterPending" class="px-3 py-1 bg-yellow-300 rounded hover:bg-yellow-400 text-white dark:text-gray-800">درحال انجام</button>
          <button id="deleteAll" class="btn-delete text-white dark:text-gray-800">حذف همه</button>
        </div>
      </div>
      
      <div id="taskList" class="space-y-4">
          <!-- کارت‌های تسک اینجا نمایش داده می‌شن -->
      </div>
    </section>
  `;
}
