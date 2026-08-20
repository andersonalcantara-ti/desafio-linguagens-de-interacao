// --- 1. SELEÇÃO DE ELEMENTOS DO DOM ---
  const form = document.querySelector("#form-tarefa");
  const inputTarefa = document.querySelector("#input-tarefa");
  const listaDeTarefas = document.querySelector("#lista-de-tarefas");

  // --- 2. ESTRUTURA DE DADOS ---
  let tarefas = [
    { id: 1, nome: "Aprender a manipular o DOM", concluida: true },
    { id: 2, nome: "Entender Event Listeners", concluida: false }
  ];

  // --- 3. FUNÇÕES DE LÓGICA ---
  function adicionarTarefa(nomeDaNovaTarefa) {
    const novaTarefa = {
      id: Date.now(),
      nome: nomeDaNovaTarefa,
      concluida: false
    };
    tarefas.push(novaTarefa);
  }

  function alternarStatusTarefa(idDaTarefa) {
    for (const tarefa of tarefas) {
      if (tarefa.id === idDaTarefa) {
        tarefa.concluida = !tarefa.concluida;
        break;
      }
    }
  }

  function removerTarefa(idDaTarefa) {
    tarefas = tarefas.filter(tarefa => tarefa.id !== idDaTarefa);
  }

  // --- 4. FUNÇÃO DE RENDERIZAÇÃO ---
  function renderizarTarefas() {
    listaDeTarefas.innerHTML = '';

    for (const tarefa of tarefas) {
      const itemDaLista = document.createElement('li');
      const spanTexto = document.createElement('span');
      const botaoRemover = document.createElement('button');

      spanTexto.textContent = tarefa.nome;
      botaoRemover.textContent = 'Remover';

      if (tarefa.concluida) {
        itemDaLista.classList.add('concluida');
      }

      spanTexto.addEventListener('click', () => {
        alternarStatusTarefa(tarefa.id);
        renderizarTarefas();
      });

      botaoRemover.addEventListener('click', (event) => {
        event.stopPropagation();
        removerTarefa(tarefa.id);
        renderizarTarefas();
      });

      itemDaLista.appendChild(spanTexto);
      itemDaLista.appendChild(botaoRemover);
      listaDeTarefas.appendChild(itemDaLista);
    }
  }

  // --- 5. EVENTOS GLOBAIS ---
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nomeDaNovaTarefa = inputTarefa.value;

    if (nomeDaNovaTarefa.trim() !== "") {
      adicionarTarefa(nomeDaNovaTarefa);
      renderizarTarefas();
      inputTarefa.value = "";
    } else {
      // Registro no console para futura implementação de feedback visual
      console.warn("Atenção: Tentativa de adicionar tarefa em branco interceptada.");
    }
  });

  // --- 6. INICIALIZAÇÃO ---
  renderizarTarefas();