let language = "French";
let greeting = "Selmat Pagi"

if(language === "English") {
    greeting = "good morning!";
} else if(language === "French") {
    greeting = "Bonjour!"
} else if(language === "Japanese") {
    greeting = "Ohayou Gozaimasu!"
}

console.log(greeting);

/* output
Bonjour!
*/