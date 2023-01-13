window.onload = function () {
    const form = document.querySelector("form#main-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const yourName = document.querySelector("input#name").value;
        const dreamVacation = document.querySelector("input[name='vacation']:checked").value;
        const favoriteSeason = document.getElementById("fav-season").value;
        console.log(yourName);
        console.log(dreamVacation);
        console.log(favoriteSeason);

        let result = "";
        if (dreamVacation === "Tokyo") {
            result = yourName + " you're a " + favoriteSeason + " person with a sense of adventure, you should start your coding journey by learning " + "Javascript.";
        }
        else if ((dreamVacation === "Aspen") && (favoriteSeason === "Spring" || "Summer")) {
            result = yourName + " you're a " + favoriteSeason + " person with a sense of adventure, you should start your coding journey by learning " + "Javascript.";
        }
        else if ((dreamVacation === "Aspen") && (favoriteSeason === "Fall" || "Winter")) {
            result = yourName + " you're a " + favoriteSeason + " person with a sense of adventure, you should start your coding journey by learning " + "C#.";
        }
        else if ((dreamVacation === "Fiji") && (favoriteSeason === "Spring" || "Summer")) {
            result = yourName + " you're a " + favoriteSeason + " person with a sense of adventure, you should start your coding journey by learning " + "C#.";
        }
        else if ((dreamVacation === "Fiji") && (favoriteSeason === "Fall" || "Winter")) {
            result = yourName + " you're a " + favoriteSeason + " person with a sense of adventure, you should start your coding journey by learning " + "Python.";
        } else {
            result = "idk.. your weird";
        }
        console.log("result: ", result);

        document.getElementById("output").innerText = result;
    });
}
