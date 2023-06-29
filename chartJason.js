


new chart(ctx,myConf);

const ddddddd = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  };

  const myOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  const myConf = {
    type: 'bar',
    data: ddddddd,
    options: myOptions
};