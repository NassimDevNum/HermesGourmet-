var file = 'moyenne.csv';
d3.csv(file).then(makeChart);
function makeChart(days) {
    var nom = days.map(function(d){return d.nom});
    var moyenne = days.map(function(d) {return d.moyenne});
    //Set Min for better visiable range
    var minX = d3.min(moyenne);
    minX -= 10;

    var chart = new Chart('chart', {
            type: 'bar',
            data: {
                labels: nom,
                color: "rgba(255,165,0,1)",
                datasets: [
                    {
                        type:'bar',
                        data: moyenne,
                        backgroundColor: "rgba(255,165,0,1)"

                    },
                ]
            },
            options: {
                title: {
                    display: true,
                    text: "Graphique",
                    color: "rgba(255,165,0,1)"

                },
                legend: {
                    display: true,
                    color: "rgba(255,165,0,1)"
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                suggestedMin: minX,
                                color: "rgba(255,165,0,1)"
                            }
                        }
                    ]
                }
            }
        }
    )};