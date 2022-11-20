var canvasElement = document.getElementById("expensechart");
var config = {
    type: "bar",
    data: {
        labels: ["Education", "Transportation", "Rent", "Entertainment", "Food"],
        datasets: [
            {
                label: "Your expense amount",
                data: [10, 20, 34, 2, 1000],
                backgroundColor:
                    ["rgba(214, 15, 6, 0.4)", "rgba(255,123, 0, 0.4)", "rgba(6, 182, 99, 0.4)", "rgba(16, 124, 195, 0.4)", "rgba(6, 33, 131, 0.4)"],
                borderColor: ["rgba(214, 15, 6, 1)", "rgba(255,123, 0, 1)", "rgba(6, 182, 99, 1)", "rgba(16, 124, 195, 1)", "rgba(55, 86, 197, 1)"],
                borderWidth: 1,
            }]
    }
};
var expensechart = new Chart(canvasElement, config);
