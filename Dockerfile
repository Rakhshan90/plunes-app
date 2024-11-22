FROM node:20.12.0-alpine3.19

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

COPY . .

# Install PNPM globally within the container
RUN npm install -g pnpm

RUN pnpm install

RUN pnpm run db:generate

RUN pnpm run build

CMD ["pnpm", "run", "start-plunes-app"]

