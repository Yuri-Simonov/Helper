function isPalindrome(text) {
    const cleanText = text
        .toLowerCase() // Приводим к нижнему регистру
        .replace(/[^a-zа-яё0-9]/gi, ""); // Убираем все не буквы и не цифры

    return cleanText === cleanText.split("").reverse().join(""); // Сравниваем с перевёрнутой строкой
}

console.log(isPalindrome("топот")); // true
console.log(isPalindrome("Анна")); // true
console.log(isPalindrome("101")); // true
console.log(isPalindrome("сатурн")); // false
console.log(isPalindrome("Тропа налево повела, на порт.")); // true
console.log(isPalindrome("A man, a plan, a canal. Panama")); // true
