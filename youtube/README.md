# React + Vite + Tailwind

```bash
# Build
npm install
npm run build
```

Build docker image
```bash
docker build -t youtube:v1 .
```

Run docker image
```bash
docker run --name youtube -dp 80:8080 443:8433 youtube:v1
```

Clean docker
```bash
docker stop youtube
docker rm youtube
docker rmi youtube:v1
```