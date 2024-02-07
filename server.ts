import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Обработка GET запроса на корень
app.get('/', (req: Request, res: Response) => {
  res.send('Привет, это API!');
});

// Обработка GET запроса на /api/data
app.get('/api/data', (req: Request, res: Response) => {
  // Здесь может быть логика для получения данных из вашего бэкенда
  const data = { message: 'Данные с бэкенда' };
  res.json(data);
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
