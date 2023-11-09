export default function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { nome, telefone, data } = req.body;
            // Chamar o banco de dados
      
            res.status(200).json({ nome, telefone, data });
          } catch (error) {
            res.status(400).json({ error: 'Erro ao processar a solicitação.' });
          }
        } else {
          res.status(405).end();
        }
      }