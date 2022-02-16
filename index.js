const quantidade = document.getElementById('quant');
const linha = document.getElementById('chkBoxLinha');
const pizza = document.getElementById('chkBoxPizza');
const barra = document.getElementById('barra');

const arr= [[],[],[],[],[]];
var valorfinal1 = 0; 
var valorfinal2 = 0; 
var valorfinal3 = 0; 
var valorfinal4 = 0; 
var valorfinal5 = 0; 



function enviar(){
    const quant = document.getElementById('quant').value;
    const quantidade = Number(quant);
    document.getElementById("fmList").onsubmit = function (){
        let frmList = document.getElementById('fmList').elements;
        console.log(frmList['listMeses'].value);
        var soma_m1 = 0;
        var soma_m2 = 0;
        var soma_m3 = 0;
        var soma_m4 = 0;
        var soma_m5 = 0;
        if (frmList['listMeses'].value=='Jan'){
            arr[0].push(quantidade);
            soma_m1 = arr[0].reduce((a,b)=>a+b,0)
            valorfinal1 = soma_m1;
                        
        }
        if (frmList['listMeses'].value=='Fev'){
            arr[1].push(quantidade);
            soma_m2 = arr[1].reduce((a,b)=>a+b,0)
            valorfinal2 = soma_m2;
        }
        if (frmList['listMeses'].value=='Março'){
            arr[2].push(quantidade);
            soma_m3 = arr[2].reduce((a,b)=>a+b,0)
            valorfinal3 = soma_m3;
        }
        if (frmList['listMeses'].value=='Abril'){
            arr[3].push(quantidade);
            soma_m4 = arr[3].reduce((a,b)=>a+b,0)
            valorfinal4 = soma_m4;
        }
        if (frmList['listMeses'].value=='Maio'){
                arr[4].push(quantidade);
                soma_m5 = arr[4].reduce((a,b)=>a+b,0)
                valorfinal5 = soma_m5;
        }
        console.log(arr);
        myChart.data.datasets[0].data[0]=valorfinal1;
        myChart.data.datasets[0].data[1]=valorfinal2;
        myChart.data.datasets[0].data[2]=valorfinal3;
        myChart.data.datasets[0].data[3]=valorfinal4;
        myChart.data.datasets[0].data[4]=valorfinal5;
        myChart.update(); 
        
     
    };
    
    
};

function atualizar(){
myChart.data.datasets[0].data[0]=soma_m1;
myChart.data.datasets[0].data[1]=soma_m2;
myChart.data.datasets[0].data[2]=soma_m3;
myChart.data.datasets[0].data[3]=soma_m4;
myChart.data.datasets[0].data[4]=soma_m5;
myChart.update();
}





const ctx = document.getElementById('myChart');

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Fev', 'Março', 'Abril', 'Maio'],
        datasets: [{
            label: 'KG de arroz comprado.',
            data: [0, 0, 0, 0, 0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,

            }
        }
    }
});

