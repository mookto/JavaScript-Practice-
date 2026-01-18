// =============================================
// ১. Reverse a String (স্ট্রিংকে উল্টো করা)
// =============================================

function reverseString(str) {
    // সবচেয়ে সহজ ও পরিষ্কার উপায় (ES6+)
    // split("") → স্ট্রিংকে অক্ষরের অ্যারেতে ভাঙে
    // reverse() → অ্যারেকে উল্টো করে
    // join("") → অ্যারেকে আবার স্ট্রিং বানায়
    return str.split("").reverse().join("");
}

// আরেকটা উপায় (লুপ দিয়ে - ইন্টারভিউতে ভালো লাগে)
function reverseStringManual(str) {
    let reversed = "";              // খালি স্ট্রিং তৈরি
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];         // শেষ থেকে প্রথম অক্ষর যোগ করা
    }
    return reversed;
}

console.log(reverseString("hello"));        // olleh
console.log(reverseString("বাংলা"));         // াল্গনাব
console.log(reverseStringManual("JavaScript")); // tpircSavaJ



// =============================================
// ২. Array Sum (অ্যারের সব উপাদানের যোগফল)
// =============================================

function arraySum(arr) {
    // reduce() মেথড দিয়ে সবচেয়ে পরিষ্কার উপায়
    // accumulator (sum) এর সাথে প্রতিটি current value যোগ হয়
    return arr.reduce((sum, current) => sum + current, 0);
}

// লুপ দিয়ে (সহজ বোঝার জন্য)
function arraySumLoop(arr) {
    let total = 0;
    for (let num of arr) {
        total += num;           // প্রতিটি সংখ্যা যোগ করা
    }
    return total;
}

console.log(arraySum([1, 2, 3, 4, 5]));     // 15
console.log(arraySum([10, -5, 7]));         // 12
console.log(arraySumLoop([]));              // 0 (খালি অ্যারে)



// =============================================
// ৩. Flatten Array (একাধিক লেভেলের অ্যারেকে এক লেভেলে আনা)
// =============================================

function flattenArray(arr) {
    // flat() মেথড দিয়ে সবচেয়ে সহজ (ES2019+)
    // Infinity দিলে যত লেভেলই থাকুক সব ফ্ল্যাট হবে
    return arr.flat(Infinity);
}

// লুপ + recursion দিয়ে (ইন্টারভিউতে জিজ্ঞাসা করে)
function flattenRecursive(arr) {
    let result = [];
    
    for (let item of arr) {
        // যদি আইটেমটা অ্যারে হয় → আবার ফ্ল্যাট করো (recursive call)
        if (Array.isArray(item)) {
            result = result.concat(flattenRecursive(item));
        } else {
            // সাধারণ মান → সরাসরি যোগ করো
            result.push(item);
        }
    }
    
    return result;
}

console.log(flattenArray([1, [2, 3], [[4]], 5]));           // [1,2,3,4,5]
console.log(flattenRecursive([1, [2, [3, [4]]], 5]));       // [1,2,3,4,5]



// =============================================
// ৪. Remove Duplicates from Array (ডুপ্লিকেট সরানো)
// =============================================

function removeDuplicates(arr) {
    // Set দিয়ে সবচেয়ে সহজ ও দ্রুত উপায় (ES6+)
    // Set শুধু unique values রাখে
    return [...new Set(arr)];
}

// filter + indexOf দিয়ে (আরেকটা জনপ্রিয় উপায়)
function removeDuplicatesFilter(arr) {
    return arr.filter((item, index) => {
        // indexOf প্রথম যে অবস্থান পায় সেটাই রাখে → পরেরগুলো বাদ
        return arr.indexOf(item) === index;
    });
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));           // [1,2,3,4,5]
console.log(removeDuplicates(["a", "b", "a", "c", "b"]));       // ["a","b","c"]
console.log(removeDuplicatesFilter([10, 20, 10, 30, 20]));      // [10,20,30]