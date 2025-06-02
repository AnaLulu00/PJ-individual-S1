function calcular() {
  const total = parseInt(document.getElementById('total').value);
  const feito = parseInt(document.getElementById('feito').value);

  const faltando = total - feito;
  const porcentagemFeito = ((feito / total) * 100).toFixed(1);
  const porcentagemFaltando = (100 - porcentagemFeito).toFixed(1);

  // Atualiza o gráfico de pizza
  atualizarPizza([porcentagemFeito, porcentagemFaltando]);

  //adicionar lógica pra salvar os dados
}

// Rendimento pessoal (gráfico de pizza)
window.onload = () => {
  const ctx = document.getElementById("graficoPizza").getContext("2d");

  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Faltante", "Já feito"],
      datasets: [
        {
          label: "andamento do caderno de atividade",
          data: [30, 70],
          backgroundColor: ["#8B0000", "#c86666"],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "progresso pessoal %",
        },
      },
    },
  });
};

// Rendimento da classe (gráfico de barras)
const barraCtx = document.getElementById('graficoBarra').getContext('2d');
new Chart(barraCtx, {
  type: 'bar',
  data: {
    labels: ['Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6'],
    datasets: [{
      label: 'Rendimento (%)',
      data: [8, 12, 17, 20, 10, 50],
      backgroundColor: '#8B0000'
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});
