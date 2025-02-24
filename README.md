# **Book Management API**

### **Выполнил:**

- **Имя студенты:** Shaimerden, Ubaidolla, Sayat
- **Курс:** IT-2305
---

## **Описание проекта**

Данный проект разработан в рамках выполнения **Assignment 2: APIs**. Основная цель — создание RESTful API для управления книгами, интеграция с внешним API и документирование всех этапов работы.

---

## **Основные функции**

### **1. API для управления книгами**

Создано RESTful API с CRUD-операциями для работы с книгами:

- **GET /books**: Получить список всех книг.
- **POST /books**: Добавить новую книгу.
- **PUT /books/:id**: Обновить данные книги по ID.
- **DELETE /books/:id**: Удалить книгу по ID.

#### **Структура данных книги:**

```json
{
  "title": "Название книги",
  "author": "Автор книги",
  "year": 2025,
  "genre": "Жанр книги"
}
```

#### **Особенности:**

- Валидация данных: Проверяется, чтобы `title` и `author` не были пустыми.
- Обработка ошибок: Реализовано информативное сообщение об ошибке при недействительных ID или отсутствии полей.

---

### **2. Интеграция с внешним API**

Для демонстрации работы с внешними API реализована интеграция с **OpenWeather API**.

- **GET /weather/:city**: Получить текущую погоду для указанного города.

#### **Пример ответа:**

```json
{
  "city": "Алматы",
  "temperature": "5°C",
  "condition": "Облачно"
}
```

---

### **3. Документирование API**

API задокументирован с использованием **Swagger**. В документации указаны:

- Методы (GET, POST, PUT, DELETE).
- Описание запросов и примеры ответов.
- Требуемые параметры.

Файл Swagger доступен в проекте по адресу `/swagger`.

---

### **4. Деплой**

API развернуто на платформе **Render** (или другая используемая платформа).\
**Ссылка на API:** [URL вашего API](#)

---

## **Использованные технологии**

- **Node.js**
- **Express.js**
- **Mongoose** для работы с MongoDB
- **Swagger** для документирования API
- **Axios** для запросов к сторонним API

---

## **Запуск проекта**

### **1. Установка зависимостей**

Склонируйте репозиторий и выполните команду:

```bash
npm install
```

### **2. Запуск сервера**

Для запуска сервера создайте файл `.env` и укажите следующие переменные окружения:

```
MONGO_URI=your_mongodb_connection_string
WEATHER_API_KEY=your_openweather_api_key
PORT=5000
```

Затем выполните команду:

```bash
npm start
```

Сервер будет доступен по адресу: `(http://localhost:3000/api-docs/#/default/put_books__id_)`
vercel: https://web-2-git-main-w0nderful11s-projects.vercel.app
---

## **Тестирование**

- Тестирование всех маршрутов выполнено с использованием **Postman**.
- Скриншоты успешных запросов и ответов сохранены в папке `screenshots/`.


