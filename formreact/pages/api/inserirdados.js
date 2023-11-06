export default function handler(req, res) {
    if (req.method === 'POST') {
        const { nome, telefone } = req.body; // Suponha que o formulário envia os dados como JSON

        // Faça o que você quiser com os dados, como salvá-los no banco de dados
        // Aqui, vamos apenas retornar os dados de volta como exemplo
        res.status(200).json({ nome, telefone });
    } else {
        res.status(405).end(); // Método não permitido
    }
}