# ABGrid Engine FREE

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
