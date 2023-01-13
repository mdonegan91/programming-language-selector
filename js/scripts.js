window.onload = function () {
    const form = document.querySelector("form#radio-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector("input#name").value;
        const dob = document.getElementById("born").value;
        const favoriteColor = document.getElementById("color").value;
        const radioSelection = document.querySelector("input[name='skills']:checked").value;

        let result = "";
        if (dob > "1993-01-01") {
            result = name + " is sneaky," + " loves " + favoriteColor + ", and their special skill is " + radioSelection + ".";
        }
        else if (("1970-01-01" < dob) && (dob < "1992-12-31")) {
            result = name + " is smart," + " loves " + favoriteColor + ", and their special skill is " + radioSelection + ".";
        }
        else if ((dob < "1969-12-31")){
            result = name + " is brave," + " loves " + favoriteColor + ", and their special skill is " + radioSelection + ".";
        }

        document.getElementById("output").innerText = result;
    });

}