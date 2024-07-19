const button = document.querySelector("body");

const user = {
    name: "Алиса",
    greet: function (event) {
        console.log("this", this);
        console.log("event", event);
        console.log("Привет, " + this.name);
    },
};

button.addEventListener("click", (event) => {
    user.greet(event);
});
