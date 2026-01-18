// ================================================
// ২. নিজের map() ফাংশন বানানো (Custom map)
// ================================================

// আমাদের নিজের map ফাংশন
function myMap(array, callback) {
    // নতুন অ্যারে তৈরি করা হচ্ছে
    const result = [];
    
    // প্রতিটি উপাদানের উপর লুপ চালানো
    for (let i = 0; i < array.length; i++) {
        // callback ফাংশন কল করে নতুন মান পাওয়া
        const newValue = callback(array[i], i, array);
        // নতুন মান অ্যারেতে যোগ করা
        result.push(newValue);
    }
    
    return result;
}

// টেস্ট
const numbers = [1, 2, 3, 4, 5];

const doubled = myMap(numbers, num => num * 2);
console.log(doubled);           // [2, 4, 6, 8, 10]

const withIndex = myMap(numbers, (num, index) => `${index + 1}. ${num}`);
console.log(withIndex);         // ["1. 1", "2. 2", "3. 3", "4. 4", "5. 5"]


// ================================================
// ৩. নিজের filter() ফাংশন বানানো (Custom filter)
// ================================================

function myFilter(array, callback) {
    const result = [];
    
    for (let i = 0; i < array.length; i++) {
        // callback যদি true রিটার্ন করে তবেই যোগ করব
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    
    return result;
}

// টেস্ট
const ages = [12, 18, 25, 9, 35, 16];

const adults = myFilter(ages, age => age >= 18);
console.log(adults);            // [18, 25, 35]

const evenNumbers = myFilter(numbers, n => n % 2 === 0);
console.log(evenNumbers);       // [2, 4]


// ================================================
// ৪. সিম্পল DOM Manipulation Tasks (৩টা উদাহরণ)
// ================================================

// উদাহরণ ১: বাটন ক্লিকে টেক্সট চেঞ্জ করা
const changeTextBtn = document.getElementById("change-text");
if (changeTextBtn) {
    changeTextBtn.addEventListener("click", function() {
        const heading = document.querySelector("h1");
        heading.textContent = "আমি চেঞ্জ হয়ে গেছি! 🚀";
        heading.style.color = "purple";
    });
}

// উদাহরণ ২: নতুন লিস্ট আইটেম যোগ করা
const addItemBtn = document.getElementById("add-item");
const itemList = document.getElementById("item-list");

if (addItemBtn && itemList) {
    addItemBtn.addEventListener("click", () => {
        const newItem = document.createElement("li");
        newItem.textContent = `আইটেম ${itemList.children.length + 1}`;
        newItem.style.backgroundColor = "#e0f7fa";
        itemList.appendChild(newItem);
    });
}

// উদাহরণ ৩: ইনপুট থেকে টেক্সট নিয়ে ডিসপ্লে করা (real-time)
const inputField = document.getElementById("my-input");
const outputDiv = document.getElementById("output");

if (inputField && outputDiv) {
    inputField.addEventListener("input", function(e) {
        outputDiv.textContent = `তুমি লিখছো: ${e.target.value}`;
        outputDiv.style.fontWeight = "bold";
    });
}