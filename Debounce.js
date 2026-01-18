// ================================================
// ৩. Debounce একটা Search Input-এর জন্য
// ================================================

// Debounce ফাংশন — বারবার ইভেন্ট হলে শুধু শেষ ইভেন্টের পর কাজ করে
function debounce(func, delay) {
    let timer; // টাইমার আইডি সংরক্ষণের জন্য

    return function (...args) {
        // আগের টাইমার থাকলে ক্লিয়ার করো
        clearTimeout(timer);

        // নতুন টাইমার সেট করো — delay পরে func চালাবে
        timer = setTimeout(() => {
            func.apply(this, args); // আসল ফাংশন কল
        }, delay);
    };
}

// এই ফাংশনটা API কল করবে (উদাহরণ হিসেবে console.log)
function searchAPI(query) {
    console.log(`অনুসন্ধান করা হচ্ছে: "${query}"`);
    // এখানে আসল API কল করতে পারো যেমন: fetch(`/search?q=${query}`)
}

// debounce দিয়ে wrapped ফাংশন তৈরি করা
// ৫০০ms অপেক্ষা করবে — টাইপিং থামলে তবেই কাজ করবে
const debouncedSearch = debounce(searchAPI, 500);

// HTML ইনপুটের সাথে যুক্ত করা (এই কোড browser-এ চালাতে হবে)
const searchInput = document.getElementById("search-input");

if (searchInput) {
    searchInput.addEventListener("input", function (e) {
        const query = e.target.value.trim();
        
        if (query.length > 0) {
            debouncedSearch(query);
        }
    });
} else {
    console.log("ইনপুট ফিল্ড পাওয়া যায়নি। HTML-এ <input id='search-input'> যোগ করুন");
}