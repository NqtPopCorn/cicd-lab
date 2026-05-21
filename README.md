# Express CRUD CI/CD

A minimal Express API for task management designed to demonstrate CI/CD practices.

## Features

- **CRUD Operations**: Manage tasks (Create, Read, Update, Delete).
- **Standardized Responses**: Consistent JSON format for all endpoints.
- **Automated Testing**: Unit and integration tests using Jest and Supertest.
- **Containerization**: Docker and Docker Compose support.
- **CI/CD Pipeline**: GitHub Actions workflow for automated testing.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Docker (optional)

### Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

#### Locally
```bash
npm start
# or for development with nodemon
npm run dev
```

#### With Docker
```bash
docker-compose up --build
```

### Testing
```bash
npm test
```

## API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/tasks` | Fetch all tasks |
| GET | `/api/tasks/:id` | Fetch a task by ID |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update an existing task |
| DELETE | `/api/tasks/:id` | Delete a task |
| GET | `/health` | Server health check |

## Project Structure

```text
express-crud-cicd/
├── src/
│   ├── routes/
│   │   └── task.route.js
│   ├── controllers/
│   │   └── task.controller.js
│   ├── middlewares/
│   │   └── error.middleware.js
│   ├── app.js
│   └── server.js
├── tests/
│   └── task.test.js
├── .github/
│   └── workflows/
│       └── ci.yml
├── Dockerfile
├── docker-compose.yml
├── .env
├── package.json
└── README.md
```
