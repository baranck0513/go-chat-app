# Real-Time Chat Application (Go + React + WebSockets + Docker)

A full-stack, real-time chat platform built with **Go**, **React**, and **WebSockets**, fully containerized for easy deployment using **Docker**.  
The project demonstrates concurrent backend architecture, responsive frontend components, and modern deployment workflows.

This application was created to gain experience in real-time systems, Go concurrency patterns, frontend component design, and containerized full-stack development.

---

## 📦 Technologies & Concepts

### Backend
- `Go (Golang 1.22+)`
- `Gorilla/WebSocket`
- `Goroutines & Channels`
- `Concurrent WebSocket Pooling`
- `Docker Multi-Stage Builds`

### Frontend
- `React`
- `JavaScript / JSX`
- `SCSS Styling`
- `WebSocket Client`
- `Component-Based Architecture`

### DevOps
- `Docker`
- `Docker Compose`
- `Nginx`
- `Containerized Deployment`

---

## 💬 Features

### ▶ Real-Time WebSocket Messaging
- Full duplex WebSocket communication  
- Message broadcast to all connected clients  
- Safe concurrent access using Go channels  
- Automatic cleanup on disconnect  

### ▶ Frontend UI Components
- **Header** — simple top banner  
- **ChatHistory** — displays all messages  
- **ChatInput** — sends messages with Enter key  
- **Message** — styled chat bubble component  

### ▶ Scalable Backend Architecture
- Client struct with ID/Conn/Pool reference  
- Pool struct managing:
  - Register channel  
  - Unregister channel  
  - Broadcast channel  
  - Active clients map  
- Dedicated goroutines per WebSocket connection  

### ▶ Dockerized Infrastructure
- Backend runs in minimal Alpine container  
- Frontend built with Node and served via Nginx  
- Unified orchestration using docker-compose  

---

## 🧩 Backend Structure

### Core Components
- **Client** — unique WebSocket connection  
- **Pool** — manages all connected clients  
- **Message** — JSON-encoded message structure  
- **Reader** — listens for incoming messages  
- **Writer** — broadcasts messages to pool  

### Concurrency Model
- Each connection uses goroutines  
- Shared state protected by channels  
- No race conditions  
- Scalable architecture  

---

## 🖥️ Frontend Structure

### React Components
- `Header`
- `ChatHistory`
- `Message`
- `ChatInput`

### Logic Highlights
- WebSocket created in `api/index.js`  
- Messages appended to React state  
- Rendered dynamically in `<ChatHistory />`  
- Input sends messages on Enter  

---

## 🐳 Docker Setup

### Backend Dockerfile (Multi-Stage Build)
- Go module download  
- Build optimized static binary  
- Final image ~20MB Alpine runtime  

### Frontend Dockerfile
- Build React app with Node  
- Serve via Nginx on port 3000  

### docker-compose.yml
Run both services together with:

```bash
docker compose up --build
```
