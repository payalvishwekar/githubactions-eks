const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello from DevOps World 🌍</h1><p>Deployed on AWS EKS with GitHub Actions + ArgoCD</p>');
});

app.get('/health', (req, res) => {
  res.status(200).send('Healthy');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});