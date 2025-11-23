# -----------------------
# 1. Build Stage
# -----------------------
FROM golang:1.22-alpine3.19 AS builder

# Go env optimize
ENV CGO_ENABLED=0 \
    GOOS=linux \
    GOARCH=amd64

# Install dependencies needed for go mod
RUN apk add --no-cache git

WORKDIR /app

# Copy go mod files first (cache friendly)
COPY go.mod go.sum ./
RUN go mod download

# Copy the rest of the project
COPY . .

# Build the Go application
RUN go build -o server .

# -----------------------
# 2. Run Stage
# -----------------------
FROM alpine:3.19

# Add certificates (needed for TLS, HTTPS WebSockets)
RUN apk add --no-cache ca-certificates

WORKDIR /root/

# Copy binary from builder
COPY --from=builder /app/server .

# Expose WebSocket port
EXPOSE 8080

# Run the binary
CMD ["./server"]
