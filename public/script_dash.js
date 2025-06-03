let graficoPizza; // variável global para armazenar o gráfico

function calcular() {
  const total = parseInt(pagina_total.value);
  const feito = parseInt(paginas_feitas.value);
  const casa = parseInt(pagina_casa.value);

  if (isNaN(total) || isNaN(feito) || isNaN(casa) || total <= 0) {
    alert("Preencha todos os campos corretamente.");
    return;
  }

  const somaFeita = feito + casa;
  const faltando = total - somaFeita;

  const porcentagemFeito = ((somaFeita / total) * 100).toFixed(1);
  const porcentagemFaltando = (100 - porcentagemFeito).toFixed(1);

  // Atualiza o gráfico de pizza
  if (graficoPizza) {
    graficoPizza.data.datasets[0].data = [porcentagemFaltando, porcentagemFeito];
    graficoPizza.update();
  }
}

// Gráfico de Pizza (inicializa quando a página carrega)
window.onload = () => {
  const ctx = document.getElementById("graficoPizza").getContext("2d");

  graficoPizza = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Faltante", "Já feito"],
      datasets: [
        {
          label: "Andamento do caderno de atividade",
          data: [50, 50], // valores iniciais
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
          text: "Progresso pessoal (%)",
        },
      },
    },
  })
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
