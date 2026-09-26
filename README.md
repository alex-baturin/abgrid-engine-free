# ABGrid Engine FREE

**[Русский](#русская-версия) | [English](#english-version)**

<a id="русская-версия"></a>

# Русская версия

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
<script src="/js/abgrid-free.js"></script>
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

**[↑ К выбору языка](#abgrid-engine-free) | [English ↓](#english-version)**

---

<a id="english-version"></a>

# English version

ABGrid Engine FREE is the free edition of the configurable ABGrid Engine JavaScript data grid for admin panels, internal systems, dashboards, and other business applications.

FREE uses the same core concepts and configuration approach as ABGrid Engine Full. A project built with FREE can be moved to Full without rewriting the basic Grid configuration.

## FREE highlights

- Vanilla JavaScript core without jQuery
- Official React and Vue adapters
- Config-driven architecture
- Server-side data loading
- Pagination and filtering
- Single-column sorting
- Single and multiple row selection
- Toolbar and row actions
- Custom render functions
- CRUD: create, edit, and delete records
- Built-in EditForm with validation
- Select, enum, and autocomplete inside EditForm
- Master–Detail: one immediate detail grid, depth 1
- Summary values for the current page
- HTTP/request API, interceptors, and 401 handling
- Grid loading indicator
- Configuration debug checks

Third-party plugins and the public registration of custom plugins are not supported in the FREE edition. FREE built-in features are installed through the engine’s internal plugin bundle.

FREE has no artificial row or column limits and adds no watermark.

## ABGrid Engine Full

The commercial Full edition extends FREE for more complex interfaces with features including multi-column sorting, advanced Master–Detail, Subgrid, TreeGrid, DetailsPanels, file uploads, global summaries, and additional public UI mechanisms.

## Usage

### Vanilla JavaScript / UMD

```html
<script src="/js/abgrid-free.js"></script>
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

React and Vue are expected to be provided by the host application as peer dependencies.

## Edition and version

ABGrid Engine FREE exposes edition and version identifiers:

```js
ABGrid.EDITION; // "FREE"
ABGrid.VERSION; // engine version
```

## Licensing

ABGrid Engine FREE may be used free of charge in personal, educational, non-commercial, and commercial projects subject to `LICENSE.en.md`.

The FREE edition has its own license and does not require the purchase of ABGrid Engine Full.

## Documentation and support

For current documentation and information about ABGrid Engine editions, visit the official project website: https://abgrid.pro

**[↑ Language selection](#abgrid-engine-free) | [Русский ↑](#русская-версия)**
