# Adonis Ecommerce
E-commerce-платформа с авторизацией, мессенджером, комментариями и многим другим, 
построенная на Next.js/Nest.js. 
## 👋 Демо:
https://gearonixx.com/adonis-ecommerce

![](https://raw.githubusercontent.com/Gearonix/Adonis-Ecommerce/media/Screenshot_12.png)
## 👌 Функционал:
- Авторизация, регистрация (JWT)
- Изменение профиля, аватара.
- Добавление товаров, постов, комментариев.
- Возможность общаться с другими пользователями в реальном времени
- Возможность добавлять товары в "Сохраненные", корзину
- Две темы
- Локализация
- Поиск, фильтрация товаров, пользователей, сообщений



## 💫 Чем интересен этот проект?

Архитектура
- В проекте feature-sliced-design архитектура.

 Регрессионное и Unit Тестирование
- Тестирование reducers, thunks, selectors в помощью Jest и RTL.
- Скриншотные тесты с использованием Loki.

Reduxjs Toolkit
- Использовал Reducer Manager для асинхронного подключения слайсов,
  чтобы сохранять размер бандла минимальным.
- Нормализация данных, Entity Adapter

Github Actions, CI
- Настроил ci pipeline, который прогоняет Unit тесты, линтит проект,
  делает сборку фронтенда и бекенда и пушит на отдельные ветки в GitHub.

Websockets, socket.io
- Подключил socket.io для установки связи в режиме реального времени,
  пользователи могут видеть статусы других пользователей, сообщения.

Линтинг
- Настроил eslint и stylelint для форматирования кода.

Библиотека компонентов Storybook
- В приложение интегрирован Storybook
- Декораторы, storycases для двух тем

i18n, Локализация приложения
- Приложение имеет два языка: Русский и Английский.
- Дробление переводов на чанки с использованием i18next-http-backend, i18next-browser-languagedetector

Пагинация, бесконечная подгрузка сообщений.
- Добавил бесконечный скроллинг сообщений с использованием IntersectionObserver, useThrottle.

Интеграция react-oauth/google
- Пользователь может зарегистрироваться через Google.

Темизация приложения, useTheme, scss variables
- Приложение поддерживает две темы: Темная и светлая.
- Адаптивный дизайн под все устройства

Обработка ошибок.
- Для обработки ошибок реализовал ErrorBoundary.

Nest.js
- Сохранение файлов, FileService
- WebSockets, SocketGateways
- Jwt авторизация, bcryptjs
- Typeorm для работы с mysql

## Запустить проект локально:

```bash
  pnpm i
  pnpm start
```

## С использованием Electron:

```bash
  pnpm electron:build
```

Если вам нужна база данных, ее можно найти в папке `dev`.

## 🌟 Скриншоты: 

![](https://raw.githubusercontent.com/Gearonix/Adonis-Ecommerce/media/Screenshot_89.png)

![](https://raw.githubusercontent.com/Gearonix/Adonis-Ecommerce/media/Screenshot_6.png)

![](https://raw.githubusercontent.com/Gearonix/Adonis-Ecommerce/media/Screenshot_3.png)

![](https://raw.githubusercontent.com/Gearonix/Adonis-Ecommerce/media/Screenshot_8.png)



