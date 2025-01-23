  COPY +build/go-server .
  COPY ../quote_generator+artifact/quotes.txt quotes.txt
  EXPOSE 80
  ENTRYPOINT ["./go-server"]
  SAVE IMAGE --push idelvall/earthly-demo-go:latest