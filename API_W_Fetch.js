// ================================================
// fetch() দিয়ে API টেস্টিং স্ক্রিপ্ট
// ================================================

// GET রিকোয়েস্ট — ডাটা আনা (Read)
async function testGetRequest() {
    try {
        console.log("GET রিকোয়েস্ট শুরু হচ্ছে...");

        // fetch() দিয়ে API কল করা
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

        // রেসপন্স সফল কি না চেক করা (status 200-299)
        if (!response.ok) {
            throw new Error(`HTTP এরর! স্ট্যাটাস: ${response.status}`);
        }

        // JSON ফরম্যাটে ডাটা পড়া
        const data = await response.json();

        console.log("GET সফল!");
        console.log("টাইটল     :", data.title);
        console.log("বডি       :", data.body.substring(0, 100) + "...");
        console.log("ইউজার আইডি:", data.userId);

    } catch (error) {
        console.error("GET রিকোয়েস্টে সমস্যা হয়েছে:", error.message);
    }
}

// POST রিকোয়েস্ট — নতুন ডাটা পাঠানো (Create)
async function testPostRequest() {
    try {
        console.log("\nPOST রিকোয়েস্ট শুরু হচ্ছে...");

        const newPost = {
            title: "আমার নতুন পোস্ট",
            body: "এটা একটা টেস্ট পোস্ট। API টেস্টিং শিখছি।",
            userId: 1
        };

        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)   // অবজেক্টকে JSON স্ট্রিং-এ কনভার্ট
        });

        if (!response.ok) {
            throw new Error(`POST এরর! স্ট্যাটাস: ${response.status}`);
        }

        const createdData = await response.json();

        console.log("POST সফল! নতুন পোস্ট তৈরি হয়েছে:");
        console.log("আইডি   :", createdData.id);
        console.log("টাইটল  :", createdData.title);

    } catch (error) {
        console.error("POST রিকোয়েস্টে সমস্যা:", error.message);
    }
}

// PUT রিকোয়েস্ট — ডাটা আপডেট করা (Update)
async function testPutRequest() {
    try {
        const updatedData = {
            id: 1,
            title: "আপডেটেড টাইটল",
            body: "এই পোস্টটি আপডেট করা হয়েছে।",
            userId: 1
        };

        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedData)
        });

        const result = await response.json();
        console.log("\nPUT সফল! আপডেটেড ডাটা:", result.title);

    } catch (error) {
        console.error("PUT এরর:", error);
    }
}

// টেস্ট চালানো
testGetRequest();
testPostRequest();
// testPutRequest();   // চাইলে আনকমেন্ট করে চালাতে পারো