// ================================================
// ২. Async/Await দিয়ে Fetch API থেকে ডাটা আনা
// ================================================

// async/await দিয়ে কোড অনেক পরিষ্কার ও synchronous-এর মতো দেখায়
async function fetchUserData() {
    try {
        console.log("API থেকে ডাটা আনা শুরু হচ্ছে...");

        // fetch রিটার্ন করে একটা Promise
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        // response ঠিক আছে কিনা চেক করা
        if (!response.ok) {
            throw new Error(`HTTP এরর! স্ট্যাটাস: ${response.status}`);
        }

        // JSON-এ কনভার্ট করা (এটাও Promise)
        const user = await response.json();

        // ডাটা দেখানো
        console.log("ইউজারের নাম:", user.name);
        console.log("ইউজারের ইমেইল:", user.email);
        console.log("কোম্পানি:", user.company.name);

    } catch (error) {
        console.log("ডাটা আনতে সমস্যা হয়েছে:", error.message);
    } finally {
        console.log("ফেচ অপারেশন শেষ হয়েছে");
    }
}

// ফাংশন কল করা
fetchUserData();