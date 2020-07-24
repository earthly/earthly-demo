FROM golang:1.13-alpine3.11
WORKDIR /demo
COPY go.mod go.sum main.go ./
RUN go build -o demo .
ENTRYPOINT ["/demo/demo"]
