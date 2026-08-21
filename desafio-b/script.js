// --- 1. SELEÇÃO DE ELEMENTOS DO DOM ---
const form = document.querySelector("#form-tarefa");
const inputTarefa = document.querySelector("#input-tarefa");
const listaDeTarefas = document.querySelector("#lista-de-tarefas");

// --- 2. ESTRUTURA DE DADOS ---
let tarefas = [
	{ id: 1, nome: "Aprender a manipular o DOM", concluida: true },
	{ id: 2, nome: "Entender Event Listeners", concluida: false }
]; //Cria um array com 2 itens. Cada item têm ID, Nome e Concluída.

// --- 3. FUNÇÕES DE LÓGICA ---
function adicionarTarefa(nomeDaNovaTarefa) {
	const novaTarefa = {
		id: Date.now(),
		nome: nomeDaNovaTarefa,
		concluida: false
	};
	tarefas.push(novaTarefa);
} //Consegui compreender \o/

function alternarStatusTarefa(idDaTarefa) {
	for (const tarefa of tarefas) { //percorre todas os itens do array tarefas - não entendi muito bem :(
		if (tarefa.id === idDaTarefa) { //junta na variável tarefa o id do array???
			tarefa.concluida = !tarefa.concluida; //Não entendi muito bem
			break; //assim que validar no primeiro encontro ele para de percorrer o array.
		}
	}
}

function removerTarefa(idDaTarefa) {
	tarefas = tarefas.filter(tarefa => tarefa.id !== idDaTarefa); //não entendi
} //=> é o arrow function, função tarefa. !== diferente do idDaTarefa. Seria isso? E porquê ele remove?

// --- 4. FUNÇÃO DE RENDERIZAÇÃO ---
function renderizarTarefas() {
	listaDeTarefas.innerHTML = ''; //pegou a ID lá do DOM, e insere no HTML. Vazio pq não têm nada ainda.

	for (const tarefa of tarefas) {
		const itemDaLista = document.createElement('li'); //Cria a tag <li> Lista, lá no <ul>.
		const spanTexto = document.createElement('span'); //Aqui é o onde o texto. ^^
		const botaoRemover = document.createElement('button'); //Ahá! Criou o botão via .JS, mas daria certo se criar pelo html?

		spanTexto.textContent = tarefa.nome; //insere a tarefa no span do html. ok
		botaoRemover.textContent = 'Remover'; //dá o nome "remover" ao botão criado pelo js. Atrinuido a variavel botaoRemover

		if (tarefa.concluida) {
			itemDaLista.classList.add('concluida'); //adiciona o status concluido
		}

		spanTexto.addEventListener('click', () => {
			alternarStatusTarefa(tarefa.id);
			renderizarTarefas(); //atualiza a função renderizarTarefas.
		}); //Ah tah! Ao clicar em cima o texto (span), vai acionar o eventListener

		botaoRemover.addEventListener('click', (event) => {
			event.stopPropagation();
			removerTarefa(tarefa.id); //Não entendi a lógica, como que ele remove?
			renderizarTarefas();
		});

		itemDaLista.appendChild(spanTexto);
		itemDaLista.appendChild(botaoRemover);
		listaDeTarefas.appendChild(itemDaLista);
	}
}

// --- 5. EVENTOS GLOBAIS ---
form.addEventListener('submit', (event) => {
	event.preventDefault(); //Ok, preventDefault() evita que abra nova aba (Igual tá na apostila .pdf)

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
renderizarTarefas(); //Atualiza a função