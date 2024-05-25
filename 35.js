function showOrderForm() {
    document.getElementById("orderForm").style.display = "block";
}

function submitOrder() {
    // Отримуємо значення з полів форми
    let fullName = document.getElementById("fullName").value;
    let city = document.getElementById("city").value;
    let postOffice = document.getElementById("postOffice").value;
    let payment = document.querySelector('input[name="payment"]:checked');
    let quantity = document.getElementById("quantity").value;
    let comment = document.getElementById("comment").value;

    // Перевірка обов'язкових полів
    if (!fullName || !city || !postOffice || !payment || !quantity) {
        alert("Будь ласка, заповніть всі обов'язкові поля!");
        return false;
    }

    // Підготовка інформації про замовлення для виведення
    let orderInfo = `
        <h2>Інформація про замовлення</h2>
        <p><strong>ПІБ покупця:</strong> ${fullName}</p>
        <p><strong>Місто:</strong> ${city}</p>
        <p><strong>Склад Нової пошти:</strong> ${postOffice}</p>
        <p><strong>Оплата:</strong> ${payment.value}</p>
        <p><strong>Кількість товару:</strong> ${quantity}</p>
        <p><strong>Коментар до замовлення:</strong> ${comment}</p>
    `;

    // Виведення інформації про замовлення на сторінку
    document.getElementById("orderInfo").innerHTML = orderInfo;
    document.getElementById("orderInfo").style.display = "block";

    // Очищення полів форми
    document.getElementById("fullName").value = "";
    document.getElementById("city").value = "";
    document.getElementById("postOffice").value = "";
    document.querySelector('input[name="payment"]:checked').checked = false;
    document.getElementById("quantity").value = "";
    document.getElementById("comment").value = "";

    // Зупиняємо дійсність стандартної події submit
    return false;
}
