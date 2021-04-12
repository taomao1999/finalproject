let ctx = document.getElementById('myChart').getContext('2d');
let labels = ['Tencent','I Spent on Tencent', 'Nintendo','I Spent on Nintendo', 'Sony','I Spent on Sony', 'Apple','I Spent on Apple','Google','I Spent on Google','Microsoft','I Spent on Microsoft',];
let colorHex = ['#FB3640', '#ED9236', '#43AA8B', '#2BB673','#EAD939','#FCBC08','#087DFC','#064589','#9543FF','#E280F9','#FF0B0B','#F94C1E'];

let myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    datasets: [{
      data: [54594000000,120,10914000000,1013,76929000000,1420,260174000000,2164,160740000000,420,70697000000,3720],
      backgroundColor: colorHex
    }],
    labels: labels
  },
  options: {
    responsive: true,
    legend: {
      position: 'bottom'
    },
    plugins: {
      datalabels: {
        color: '#fff',
        anchor: 'end',
        align: 'start',
        offset: -10,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: 'bold',
          size: '10'
        },
        formatter: (value) => {
          return value + ' %';
        }
      }
    }
  }
})
