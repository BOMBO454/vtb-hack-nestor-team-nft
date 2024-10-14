# Этап 1: Сборка приложения
FROM node:18-alpine as build

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем остальные файлы и собираем приложение
COPY . .
RUN npm run build

# Этап 2: Запуск веб-сервера для отдачи статики
FROM nginx:alpine

# Копируем собранные файлы из предыдущего контейнера
COPY --from=build /app/dist /usr/share/nginx/html

# Копируем кастомный конфиг nginx (если нужно)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт для доступа
EXPOSE 80

# Запуск nginx
CMD ["nginx", "-g", "daemon off;"]
