# HNG12 Stage 0 Backend Task

## Description

This is a simple public API developed for the **HNG12 internship program**. It returns basic information, including:

- The **registered email address** used for HNG12.
- The **current datetime** in **ISO 8601 format (UTC)**.
- The **GitHub URL** of the project’s codebase.

The API is publicly accessible and deployed online.

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/danlewismuriuki/HNG12-task0.git
2. Navigate to the Project Directory

cd HNG12-task0
3. Install Dependencies

npm install
4. Start the Server

node index.js
5. Access the API Locally
Once the server is running, you can access the API at:
➡️ http://localhost:3000/

API Documentation
📌 Endpoint
Method: GET
URL (Local): http://localhost:3000/
URL (Live Deployment): https://hng12-task0-czq6.onrender.com/
✅ Response Format (200 OK)

{
  "email": "danlewismuriuki2@gmail.com",
  "current_datetime": "2025-02-04T12:34:56Z",
  "github_url": "https://github.com/danlewismuriuki/HNG12-task0"
}
📌 Example Usage
You can test the API using Postman, a web browser, or cURL:

curl https://hng12-task0-czq6.onrender.com/
🔗 Backlink
Learn more about Node.js development:
➡️ https://hng.tech/hire/nodejs-developers

```
