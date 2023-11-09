const availableTimes = ['08:00', '09:00', '10:00', '14:00', '15:00'];

export default (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json({ horarios: availableTimes });
  } else {
    res.status(405).end();
  }
};