import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.get('/api/v1/test', (req, res) => {
  res.json({ message: '🚀 Lingofy API is running!' });
});

app.post('/api/v1/save', (req, res) => {
  console.log('--- SAVE REQUEST RECEIVED ---');
  console.log('Full Data:', JSON.stringify(req.body, null, 2));
  const siteSlug = req.body?.meta?.siteSlug || 'your-site';
  res.status(200).json({
    success: true,
    message: 'Data saved successfully!',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Lingofy server running on http://localhost:${PORT}`);
});
