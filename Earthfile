VERSION 0.8

all-test:
  BUILD ./rust_server+test
  BUILD ./go_server+test
  BUILD ./python_server+test
  BUILD ./node_server+test
  BUILD ./quote_client+test

build-services:
  ARG tag=latest
  BUILD ./rust_server+docker --tag=$tag
  BUILD ./go_server+docker --tag=$tag
  BUILD ./node_server+docker --tag=$tag
  BUILD ./python_server+docker --tag=$tag

dev-up:
  LOCALLY
  WITH DOCKER \
          --load earthly-demo-react:latest=(./quote_client+docker --go_server_url=http://localhost:8001 --node_server_url=http://localhost:8003 --python_server_url=http://localhost:8002 --rust_server_url=http://localhost:8000) \
          --load earthly-demo-go:latest=./go_server+docker \
          --load earthly-demo-rust:latest=./rust_server+docker \
          --load earthly-demo-node:latest=./node_server+docker \
          --load earthly-demo-python:latest=./python_server+docker
      RUN docker-compose -f docker-compose.yml up
  END

dev-down:
  LOCALLY
  RUN docker-compose down

integration-test:
  FROM earthly/dind:alpine-3.19-docker-25.0.2-r0
  RUN apk add --no-cache curl
  WORKDIR /test
  COPY ./docker-compose.yml ./
  WITH DOCKER \
          --load earthly-demo-react:latest=(./quote_client+docker --go_server_url=http://localhost:8001 --node_server_url=http://localhost:8003 --python_server_url=http://localhost:8002 --rust_server_url=http://localhost:8000) \
          --load earthly-demo-go:latest=./go_server+docker \
          --load earthly-demo-rust:latest=./rust_server+docker \
          --load earthly-demo-node:latest=./node_server+docker \
          --load earthly-demo-python:latest=./python_server+docker \
          --compose=docker-compose.yml
      RUN curl -vs localhost:3001 2>&1 | grep "Earthly Demo"
  END
