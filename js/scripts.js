window.onload = function () {
    const form = document.querySelector("form#radio-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
    }
        const yourName = document.querySelector("input#name").value;
        const favoriteTime = document.getElementById("time").value;
        const favoriteColor = document.getElementById("color").value;
        const dreamVacation = document.querySelector("input[name='skills']:checked").value;
        const favSeason = document.getElementById("season").value;

        let result = "";
        if (dreamVacation = "Tokyo") + (favoriteTime <= "12:00PM")) {
            result = "name, " + " you're a morning person with a sense of adventure, you should start your coding journey by learning Javascript.";
        }

        document.getElementById("output").innerText = result;

}