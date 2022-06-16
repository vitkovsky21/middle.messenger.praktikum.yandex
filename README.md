За основу взял прототив дизайна от яндекс практикума: "https://www.figma.com/file/24EUnEHGEDNLdOcxg7ULwV/Chat?node-id=0%3A1".
Делал не pixel perfect. Добавил от себя другую цветовую гамму, изменил внешний вид ошибок 404 и 500.

https://github.com/vitkovsky21/middle.messenger.praktikum.yandex/pull/14 - ссылка на Pull Request.

Пересобрал проект на handlebars. PUG не стал использовать, так как не получалось корректно рендерить шаблоны в компонентах.
Также обновил версию node.
netlify домен: https://deploy--grand-mooncake-efeb46.netlify.app/. сделал новый деплой пересобранного проекта.

команды parcel для сборки: 
"npm run dev" и "npm run build". 

команда для раздачи статики через express: 
"npm run start".

