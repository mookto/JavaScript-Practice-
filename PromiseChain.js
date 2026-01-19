
// ১. Promise Chain Example (প্রমিস চেইনের উদাহরণ)
// ================================================

// ধাপে ধাপে কাজ করা যায় যেখানে একটা প্রমিস শেষ হলে পরেরটা শুরু হয়
console.log("প্রমিস চেইন শুরু হচ্ছে...");

function step1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("ধাপ ১: ডাটা প্রসেসিং শুরু");
            resolve("ধাপ ১ সম্পন্ন");
        }, 1000);
    });
}

function step2(previousResult) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("ধাপ ২: " + previousResult);
            resolve("ধাপ ২ সম্পন্ন");
        }, 1500);
    });
}

function step3(previousResult) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("ধাপ ৩: " + previousResult);
            // reject("কোনো সমস্যা হয়েছে"); // চাইলে এরর টেস্ট করতে পারো
            resolve("সব ধাপ শেষ!");
        }, 800);
    });
}

// Promise চেইন
step1()
    .then(result => {
        console.log("then ১:", result);
        return step2(result);
    })
    .then(result => {
        console.log("then ২:", result);
        return step3(result);
    })
    .then(finalResult => {
        console.log("সফল:", finalResult);
    })
    .catch(error => {
        console.log("কোথাও এরর হয়েছে:", error);
    })
    .finally(() => {
        console.log("প্রমিস চেইন শেষ হয়েছে (সফল বা ব্যর্থ যাই হোক)");
    });
