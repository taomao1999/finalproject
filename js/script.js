let ctx = document.getElementById('myChart').getContext('2d');
let labels = ['Tencent', 'Nintendo', 'Sony', 'Apple','Google','Microsoft'];
let colorHex = ['#FB3640','#43AA8B','#EAD939','#FF0B0B','#087DFC','#9543FF'];

let myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    datasets: [{
      data: [54594000000,10914000000,76929000000,260174000000,160740000000,70697000000],
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


let ctx2 = document.getElementById('myChart2').getContext('2d');
let labels2 = ['I Spent on Tencent', 'I Spent on Nintendo','I Spent on Sony','I Spent on Apple','I Spent on Google','I Spent on Microsoft',];
let colorHex2 = [ '#FB3640','#43AA8B','#EAD939','#FF0B0B','#087DFC','#9543FF'];

let myChart2 = new Chart(ctx2, {
  type: 'pie',
  data: {
    datasets: [{
      data: [120,1013,1420,2164,420,3720],
      backgroundColor: colorHex2
    }],
    labels: labels2
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
