// npm install axios  
//================================================
// Axios দিয়ে API টেস্টিং স্ক্রিপ্ট
// ================================================

const axios = require("axios");   // Node.js-এর জন্য
// ব্রাউজারে: <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

// GET রিকোয়েস্ট
async function axiosGetTest() {
    try {
        console.log("Axios GET শুরু...");

        const response = await axios.get("https://jsonplaceholder.typicode.com/todos/5");

        console.log("স্ট্যাটাস    :", response.status);
        console.log("টাইটল      :", response.data.title);
        console.log("কমপ্লিটেড :", response.data.completed);

    } catch (error) {
        // Axios-এ error.response দিয়ে সার্ভারের এরর দেখা যায়
        if (error.response) {
            console.error("সার্ভার এরর:", error.response.status, error.response.data);
        } else {
            console.error("Axios GET এরর:", error.message);
        }
    }
}

// POST রিকোয়েস্ট
async function axiosPostTest() {
    try {
        const payload = {
            name: "মাহেদি",
            job: "প্রোগ্রামার",
            skill: "JavaScript"
        };

        const response = await axios.post("https://reqres.in/api/users", payload);

        console.log("\nAxios POST সফল!");
        console.log("নতুন ইউজার আইডি:", response.data.id);
        console.log("তৈরির সময়  :", response.data.createdAt);

    } catch (error) {
        console.error("Axios POST এরর:", error.message);
    }
}

// একসাথে সব টেস্ট চালানো
axiosGetTest();
axiosPostTest();

// বোনাস: একই সাথে একাধিক রিকোয়েস্ট (Promise.all এর মতো)
async function testMultiple() {
    try {
        const [res1, res2] = await Promise.all([
            axios.get("https://jsonplaceholder.typicode.com/posts/1"),
            axios.get("https://jsonplaceholder.typicode.com/users/1")
        ]);

        console.log("\nএকসাথে দুটি GET সফল:");
        console.log("পোস্ট টাইটল:", res1.data.title);
        console.log("ইউজার নাম :", res2.data.name);
    } catch (err) {
        console.error("মাল্টিপল রিকোয়েস্টে এরর:", err.message);
    }
}

// testMultiple();   // চাইলে আনকমেন্ট করো