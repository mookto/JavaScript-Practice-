// ================================================
// ১. Class Car এবং ElectricCar (Inheritance)
// ================================================

// Parent Class - Car
class Car {
    constructor(brand, model, year, fuelType = "Petrol") {
        // constructor হলো অবজেক্ট তৈরির সময় যে মানগুলো সেট করতে চাই
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.fuelType = fuelType;
        this.isRunning = false;
    }

    // মেথড - গাড়ি স্টার্ট করা
    startEngine() {
        if (!this.isRunning) {
            this.isRunning = true;
            console.log(`${this.brand} ${this.model} এর ইঞ্জিন চালু হয়েছে!`);
        } else {
            console.log("গাড়ি তো আগেই চালু আছে!");
        }
    }

    // মেথড - গাড়ি বন্ধ করা
    stopEngine() {
        if (this.isRunning) {
            this.isRunning = false;
            console.log(`${this.brand} ${this.model} বন্ধ হয়ে গেছে।`);
        } else {
            console.log("গাড়ি তো বন্ধই আছে!");
        }
    }

    // গাড়ির তথ্য দেখানো
    getInfo() {
        return `${this.year} ${this.brand} ${this.model} (${this.fuelType})`;
    }
}

// Child Class - ElectricCar (Car থেকে extends করা হয়েছে)
class ElectricCar extends Car {
    constructor(brand, model, year, batteryCapacity) {
        // super() দিয়ে parent class এর constructor কল করা হয়
        super(brand, model, year, "Electric");
        
        // নতুন প্রপার্টি যোগ করা হলো
        this.batteryCapacity = batteryCapacity; // kWh-এ
        this.batteryLevel = 100; // শতাংশে
    }

    // Parent এর মেথড ওভাররাইড করা (নতুন আচরণ দেওয়া)
    startEngine() {
        if (!this.isRunning) {
            if (this.batteryLevel < 5) {
                console.log("ব্যাটারি খুব কম! চার্জ করুন।");
                return;
            }
            this.isRunning = true;
            console.log(`🚗 ${this.brand} ${this.model} সাইলেন্টলি চালু হয়েছে! (EV)`);
        }
    }

    // নতুন মেথড - চার্জ করা
    charge(percent = 20) {
        if (this.batteryLevel + percent > 100) {
            this.batteryLevel = 100;
        } else {
            this.batteryLevel += percent;
        }
        console.log(`চার্জ হচ্ছে... বর্তমান ব্যাটারি: ${this.batteryLevel}%`);
    }

    // getInfo ওভাররাইড করে আরও তথ্য যোগ করা
    getInfo() {
        return `${super.getInfo()} | ব্যাটারি: ${this.batteryLevel}% (${this.batteryCapacity} kWh)`;
    }
}

// টেস্ট করা
const myCar = new Car("Toyota", "Corolla", 2022);
const myTesla = new ElectricCar("Tesla", "Model 3", 2024, 75);

console.log(myCar.getInfo());       // 2022 Toyota Corolla (Petrol)
console.log(myTesla.getInfo());     // 2024 Tesla Model 3 (Electric) | ব্যাটারি: 100% (75 kWh)

myTesla.startEngine();
myTesla.charge(30);
myTesla.stopEngine();