/**************************************************************
* CÃ“DIGO PARA EXECUÃ‡ÃƒO EXCLUSIVA NO CONSOLE
* Foco: LÃ³gica de JavaScript pura, sem interaÃ§Ã£o com HTML.
***************************************************************/

// --- Estrutura de Dados ---
let tarefas = [
	{ id: 1, nome: "Estudar HTML e CSS", concluida: true },
	{ id: 2, nome: "Entender JavaScript bÃ¡sico", concluida: false }
];

// --- FunÃ§Ãµes ---

/**
 * FunÃ§Ã£o para LISTAR as tarefas no console.
 */
function listarTarefasNoConsole() {
	console.log("--- MINHAS TAREFAS ---");

	for (const tarefa of tarefas) {
		let status = tarefa.concluida ? 'âœ…' : 'ðŸ”²';
		console.log(status + " " + tarefa.id + ": " + tarefa.nome);
	}
}

/**
 * FunÃ§Ã£o para ADICIONAR uma nova tarefa ao array.
 */
function adicionarTarefa(nomeDaNovaTarefa) {
	if (nomeDaNovaTarefa && nomeDaNovaTarefa.trim() !== "") {
		const novaTarefa = {
			id: tarefas.length + 1,
			nome: nomeDaNovaTarefa.trim(),
			concluida: false
		};
		tarefas.push(novaTarefa);
		console.log('>>> Tarefa "' + nomeDaNovaTarefa.trim() + '" adicionada com sucesso!');
	} else {
		console.log(">>> ERRO: O nome da tarefa nÃ£o pode ser vazio.");
	}
}

/**
 * FunÃ§Ã£o para ALTERNAR o status de uma tarefa.
 */
function alternarStatusTarefa(idDaTarefa) {
	let tarefaEncontrada = false;
	for (const tarefa of tarefas) {
		if (tarefa.id === idDaTarefa) {
			tarefa.concluida = !tarefa.concluida;
			console.log('>>> Status da tarefa "' + tarefa.nome + '" alterado.');
			tarefaEncontrada = true;
			break;
		}
	}
	if (!tarefaEncontrada) {
		console.log(">>> ERRO: Tarefa com ID " + idDaTarefa + " nÃ£o encontrada.");
	}
}

// --- DemonstraÃ§Ã£o de Uso no Console ---
console.log("--- ESTADO INICIAL ---");
listarTarefasNoConsole();

console.log("\n");

console.log("--- ADICIONANDO NOVA TAREFA ---");
adicionarTarefa("Praticar a lÃ³gica no console");
listarTarefasNoConsole();

console.log("\n");

console.log("--- ALTERANDO STATUS DA TAREFA ID 2 ---");
alternarStatusTarefa(2);
listarTarefasNoConsole();

