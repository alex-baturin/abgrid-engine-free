# ABGrid Engine FREE

ABGrid Engine FREE — бесплатная редакция конфигурируемого JavaScript grid-компонента ABGrid Engine для административных панелей, внутренних систем, dashboard-интерфейсов и других бизнес-приложений.

FREE использует то же ядро и тот же подход к конфигурации, что и ABGrid Engine Full. Проект, созданный на FREE, можно перевести на Full без переписывания базовой конфигурации Grid.

## Основные возможности FREE

- Vanilla JavaScript ядро без jQuery
- Официальные адаптеры для React и Vue
- Архитектура на основе конфигурации
- Серверная загрузка данных
- Пагинация и фильтрация
- Сортировка по одной колонке
- Одиночный и множественный выбор строк
- Toolbar и действия над строками
- Пользовательские render-функции
- CRUD: создание, редактирование и удаление записей
- Встроенная EditForm с валидацией
- Select, enum и autocomplete в EditForm
- Master–Detail: одна непосредственная detail-таблица, глубина 1
- Итоговые значения по текущей странице
- HTTP/request API, interceptors и обработка 401
- Индикатор загрузки Grid
- Debug-проверки конфигурации

Сторонние плагины и публичное подключение пользовательских плагинов в редакции FREE не поддерживаются. Штатные возможности FREE подключаются внутренним набором плагинов движка.

FREE не ограничивает количество строк или колонок и не добавляет водяные знаки.

## ABGrid Engine Full

Коммерческая редакция Full расширяет FREE возможностями для более сложных интерфейсов, включая многоколоночную сортировку, расширенный Master–Detail, Subgrid, TreeGrid, DetailsPanels, загрузку файлов, глобальные итоги и дополнительные публичные UI-механизмы.

## Подключение

### Vanilla JavaScript / UMD

```html
<script src="/js/abgrid.min.js"></script>
<script>
  const grid = new ABGrid({...});
</script>
```

### ES Modules / bundler

```js
import ABGrid from 'abgrid-engine-free';

const grid = new ABGrid({...});
```

### React

```js
import ABGridReact from 'abgrid-engine-free/react';
```

### Vue

```js
import ABGridVue from 'abgrid-engine-free/vue';
```

React и Vue предоставляются приложением-потребителем как peer dependencies.

## Редакция и версия

В ABGrid Engine FREE доступны идентификаторы редакции и версии:

```js
ABGrid.EDITION; // "FREE"
ABGrid.VERSION; // версия движка
```

## Лицензирование

ABGrid Engine FREE можно бесплатно использовать в личных, учебных, некоммерческих и коммерческих проектах в соответствии с условиями `LICENSE.ru.md`.

Редакция FREE имеет собственную лицензию и не требует покупки ABGrid Engine Full.

## Документация и поддержка

Актуальную документацию и информацию о редакциях ABGrid Engine смотрите на официальном сайте проекта: https://abgrid.pro
