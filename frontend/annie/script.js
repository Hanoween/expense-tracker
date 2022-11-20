var canvasElement = document.getElementById("expensechart");
var config = {
    type: "bar",
    data: {labels: ["Education","Transportation","Rent", "Entertainment", "Food" ], 
    datasets: [
    {
        label: "Your expense amount", 
        data:[10,20,34,2,50],
        backgroundColor: ["#f39c12"],
        borderColor: [],
    }]}



};

var expensechart = new Chart(canvasElement, config);