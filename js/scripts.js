window.onload = function () {
    const form = document.querySelector("form#main-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const yourName = document.querySelector("input#name").value;
        const dreamVacation = document.querySelector("input[name='vacation']:checked").value;
        const favoriteSeason = document.getElementById("fav-season").value;

        let result = "";
        if ((dreamVacation === "Aspen") && (favoriteSeason === "Spring" || favoriteSeason === "Summer")) {
            result = yourName + ", you're a " + favoriteSeason + " person with a sense of adventure. You should start your coding journey by learning " + "Javascript.";
        }
        else if ((dreamVacation === "Aspen") && (favoriteSeason === "Fall" || favoriteSeason == "Winter")) {
            result = yourName + ", you're a " + favoriteSeason + " person with a sense of adventure. You should start your coding journey by learning " + "C#.";
        }
        else if ((dreamVacation === "Fiji") && (favoriteSeason === "Spring" || favoriteSeason === "Summer")) {
            result = yourName + ", you're a " + favoriteSeason + " person with a sense of adventure. You should start your coding journey by learning " + "C#.";
        }
        else if ((dreamVacation === "Fiji") && (favoriteSeason === "Fall" || favoriteSeason === "Winter")) {
            result = yourName + ", you're a " + favoriteSeason + " person with a sense of adventure. You should start your coding journey by learning " + "Python.";
        }
        else if (dreamVacation === "Tokyo") {
            result = yourName + ", you're a " + favoriteSeason + " person with a sense of adventure. You should start your coding journey by learning " + "Javascript.";
        }

        document.getElementById("output").innerText = result;
    });
}
