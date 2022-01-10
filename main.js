//Visualization1
let visualization1Data = d3.csv("data/visualization1.csv")
console.log(visualization1Data)
let plotV1 = Plot.plot({
    y: {
        grid: true
    },
    marks: [
        Plot.barY(visualization1Data, {x: "year", y: "questions", fill: "#bab0ab"}),
        Plot.ruleY([0])
    ]
})
document.getElementById("visualization1-bar-chart").appendChild(plotV1)