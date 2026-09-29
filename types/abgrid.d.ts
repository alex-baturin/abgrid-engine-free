// ABGrid Engine FREE 1.0.0 — TypeScript declarations
// Contract audited against the cleaned FREE source.
// FREE: one immediate Detail Grid, single-column sorting, page summary only; no TreeGrid/Subgrid/DetailsPanels/Space Manager/custom plugin API.

export type RowId = string | number;
export type SelectionMode = "single" | "multiple";
export type DataControllerMode = "internal" | "external";
export type DataTransport = "server";
export type InputFormat = "auto" | "aoa" | "object" | "csv";
export type OutputFormat = "aoa" | "object" | "csv";
export type SortDirection = "asc" | "desc";
export type FieldRole = "data" | "grid" | "editor" | "meta";
export type FieldDataType = "string" | "text" | "number" | "int" | "boolean" | "date" | "datetime";
export type EditorType = "text" | "textarea" | "password" | "number" | "int" | "boolean" | "date" | "datetime" | "email" | "tel" | "select" | "autocomplete" | "file";
export type ColumnType = "text" | "select" | "enum" | "autocomplete" | "boolean" | "date" | "actions" | "extdata" | (string & {});
export type SummaryLayout = "stack" | "inline";
export type Align = "left" | "center" | "right";
export type EditMode = "create" | "edit" | "createChild";
export type AnyRecord = Record<string, any>;
export type EnumItems = readonly unknown[] | Record<string, unknown>;
export type SummaryOperation = "sum" | "avg" | "min" | "max" | "count" | (string & {});
export type SubmitModeMap = Partial<Record<EditMode, boolean>>;

export type HostResolver = string | Element | (() => Element | null);
export type FilterFactory = (grid: ABGrid) => AnyRecord;
export type Interceptor = (ctx: AnyRecord) => unknown | Promise<unknown>;
export type DataResponseInterceptor = (ctx: AnyRecord, payload: unknown) => unknown | Promise<unknown>;
export type DataErrorInterceptor = (ctx: AnyRecord, error: unknown) => unknown | Promise<unknown>;
export type IntentHandler = (ctx: IntentContext) => void | Promise<void>;
export type FieldValidator = (value: any, ctx: AnyRecord) => boolean | string | void;
export type RowValidator = (row: AnyRecord, grid: ABGrid) => unknown;
export type ToolbarClickHandler = (grid: ABGrid, ctx: AnyRecord) => void;
export type ToolbarConfig = Record<string, ToolbarItem>;
export interface IntentContext { action: string; payload: AnyRecord; source: string; grid: ABGrid; api: ABGrid; }

/** Диагностика конфигурации в режиме разработки. */
export interface DevOptions {
  /** Включить dev/debug проверки. @default false */
  enabled?: boolean;
  /** Предупреждать о кириллице в ключах конфига. @default true */
  checkCyrillicKeys?: boolean;
  /** Предупреждать о неизвестных опциях в известных секциях. @default true */
  checkUnknownOptions?: boolean;
}


export interface AuthOptions {
  /** Редиректить при HTTP 401. @default false */
  redirectOn401?: boolean;
  /** URL страницы авторизации. @default /auth/login */
  loginUrl?: string;
  /** Задержка перед редиректом, мс. @default 3000 */
  redirectDelayMs?: number;
  /** Выполнять редирект только один раз. @default true */
  redirectOnlyOnce?: boolean;
  /** Показывать уведомление перед редиректом. @default true */
  showToast?: boolean;
}

export interface DataInterceptors {
  /** Модификация контекста запроса. @default null */
  request?: Interceptor | Interceptor[] | null;
  /** Обработка payload ответа. @default null */
  response?: DataResponseInterceptor | DataResponseInterceptor[] | null;
  /** Обработка ошибки запроса. @default null */
  error?: DataErrorInterceptor | DataErrorInterceptor[] | null;
}

export interface DataOptions {
  /** URL запросов. @default null */
  url?: string | null;
  /** HTTP-метод по умолчанию. @default POST */
  method?: string;
  /** Статические заголовки. @default {} */
  headers?: Record<string, string>;
  /** Базовый фильтр: объект или функция. @default null */
  filter?: AnyRecord | FilterFactory | null;
  /** Ключ-идентификатор централизованного запроса. @default null */
  dataKey?: string | null;
  /** Request/response/error interceptors. */
  interceptors?: DataInterceptors;
  /** Внутренний или внешний контроллер intents. @default internal */
  controller?: DataControllerMode;
  /** Транспорт internal controller; сейчас server. @default server */
  transport?: DataTransport;
  /** Обработчик external intents. @default null */
  intents?: IntentHandler | Record<string, IntentHandler> | null;
  /** Формат входящих строк. @default auto */
  inFormat?: InputFormat;
  /** Формат исходящих данных. @default object */
  outFormat?: OutputFormat;
  /** Разделитель CSV. @default ; */
  csvDelimiter?: string;
  /** Показывать toast при ошибке load(). @default true */
  showLoadErrorToast?: boolean;
}

export interface CrudOptions {
  /** Имя параметра операции. @default oper */
  operParam?: string;
  /** Код create. @default create */
  operCreate?: string;
  /** Код read. @default read */
  operRead?: string;
  /** Код update. @default update */
  operUpdate?: string;
  /** Код delete. @default delete */
  operDelete?: string;
  /** Размер batch удаления; 0 = без ограничения. @default 0 */
  deleteBatchSize?: number;
  /** Показывать прогресс batch-удаления. @default true */
  deleteProgress?: boolean;
}

export interface SelectionOptions {
  /** Показывать колонку выбора. @default true */
  enabled?: boolean;
  /** Режим выбора строк. @default multiple */
  mode?: SelectionMode;
  /** Разрешить смену режима через заголовок. @default false */
  allowModeSwitch?: boolean;
}

export interface TableTitleOptions {
  /** Показывать заголовок компонента. @default true */
  enabled?: boolean;
  /** Текст заголовка. */
  caption?: string;
  /** Всплывающая подсказка. */
  hint?: string;
  /** Разрешить toggle. @default true */
  toggle?: boolean;
}

export interface SortItem {
  /** Alias поля сортировки. */
  field?: string;
  /** Направление сортировки. @default asc */
  dir?: SortDirection;
}

export interface SortIconsOptions {
  /** Иконка ASC. @default ▲ */
  asc?: string;
  /** Иконка DESC. @default ▼ */
  desc?: string;
  /** Нет сортировки. */
  none?: string;
}

export interface PagerOptions {
  /** Показывать pager. @default true */
  enabled?: boolean;
  /** Допустимые количества строк на странице. @default [10,20,30,50] */
  rpp?: number[];
}




export interface ViewOptions {
  /** Показывать THEAD. @default true */
  showHeader?: boolean;
  /** Настройки выбора строк. */
  selection?: SelectionOptions;
  /** Высота контейнера. @default null */
  height?: number | string | null;
  /** Минимальная высота; null отключает ограничение. @default 200 */
  minHeight?: number | string | null;
  /** Максимальная высота; null отключает ограничение. @default 800 */
  maxHeight?: number | string | null;
  /** Заголовок компонента. */
  tableTitle?: TableTitleOptions;
  /** Начальная сортировка. @default [] */
  sortOrder?: [] | [string | SortItem];
  /** Разрешить сортировку. @default true */
  sortable?: boolean;
  /** Разрешить изменение ширины колонок мышью. @default false */
  columnsResizable?: boolean;
  /** Иконки сортировки. */
  sortIcons?: SortIconsOptions;
  /** Панель инструментов. @default {} */
  toolBar?: ToolbarConfig;
  /** Встроенный pager. */
  pager?: PagerOptions;
}

export interface AutocompleteOptions {
  /** URL autocomplete. @default null */
  url?: string | null;
  /** Ключ централизованного запроса. @default null */
  dataKey?: string | null;
  /** Имя параметра поисковой строки. @default q */
  queryParam?: string;
  /** Имя параметра поля. @default field */
  fieldParam?: string;
  /** Минимум символов для поиска. @default 3 */
  minChars?: number;
  /** Debounce, мс. @default 250 */
  debounceMs?: number;
  /** Максимум результатов. @default 30 */
  limit?: number;
  /** Строгий режим autocomplete. @default true */
  strict?: boolean;
  /** Поле сохраняемого значения (field-level override). */
  valueField?: string;
  /** Поле отображаемого текста (field-level override). */
  displayField?: string;
  /** Alias displayField для field-level autocomplete. */
  textField?: string;
  /** Alias displayField для field-level autocomplete. */
  labelField?: string;
}

export interface EditorOptions {
  /** Поля обязательны по умолчанию. @default false */
  requiredByDefault?: boolean;
  /** Поля, исключаемые из формы. @default ['actions','extData'] */
  excludeFields?: string[];
  /** Запрашивать подтверждение удаления одной записи. @default true */
  confirmDelete?: boolean;
  /** Запрашивать подтверждение массового удаления. @default true */
  confirmDeleteMany?: boolean;
  /** Глобальные настройки autocomplete. */
  autocomplete?: AutocompleteOptions;
}

export interface FileEditorOptions {
  /** Значение accept для input[type=file]. */
  accept?: string;
  /** Максимальный размер файла в MB. */
  maxSizeMb?: number;
  /** Purpose, передаваемый вместе с файлом. */
  purpose?: string;
  /** Разрешить несколько файлов. @default false */
  multiple?: boolean;
}

export interface FieldEditorModeOptions {
  /** Тип элемента редактора. Не выводится автоматически из data type. @default text */
  type?: EditorType;
  /** Показывать поле в этом режиме. @default true */
  visible?: boolean;
  /** Обязательность поля. @default editor.requiredByDefault */
  required?: boolean;
  /** Только чтение. @default false */
  readOnly?: boolean;
  /** Значение по умолчанию. */
  default?: unknown | (() => unknown);
  /** Alias поля, значение которого нужно подтвердить. */
  confirmOf?: string;
  /** Элементы select. */
  items?: EnumItems;
  /** Подсказка редактора. */
  hint?: string;
  /** Минимальная длина. */
  minLength?: number;
  /** Максимальная длина. */
  maxLength?: number;
  /** Alias minLength. */
  minLen?: number;
  /** Alias maxLength. */
  maxLen?: number;
  /** HTML autocomplete для поля (в т.ч. password). */
  autocomplete?: string;
  /** Показывать кнопку показа пароля. @default false */
  showPasswordToggle?: boolean;
  /** Для number использовать целое значение. @default false */
  integer?: boolean;
  /** step для number input. */
  step?: number | string;
  /** Короткая форма accept для file. */
  accept?: string;
  /** Настройки file editor. */
  file?: FileEditorOptions;
  /** Минимальное числовое значение. */
  min?: number;
  /** Максимальное числовое значение. */
  max?: number;
  /** Включать поле в submit payload глобально или по режимам. */
  submit?: boolean | SubmitModeMap;
  /** Пользовательский валидатор значения. */
  validate?: FieldValidator;
}

export interface FieldEditorOptions extends FieldEditorModeOptions {
  /** Overrides для create. */
  create?: FieldEditorModeOptions;
  /** Overrides для edit. */
  edit?: FieldEditorModeOptions;
  /** Overrides для createChild; если отсутствуют, наследуется create. @default inherits create */
  createChild?: FieldEditorModeOptions;
}

export interface GridFieldUI {
  /** Видимость колонки. @default true */
  visible?: boolean;
  /** Заголовок колонки. @default field alias */
  caption?: string;
  /** Подсказка. */
  hint?: string;
  /** Тип отображения колонки. @default inferred */
  colType?: ColumnType;
  /** Выравнивание содержимого. @default by field type */
  align?: Align;
  /** Выравнивание заголовка. */
  headerAlign?: Align;
  /** Ширина колонки. */
  width?: number | string;
  [key: string]: unknown;
}

export interface FieldUI {
  /** Подпись поля. @default field alias */
  label?: string;
  /** UI колонки. Дополнительные ключи разрешены движком. */
  grid?: GridFieldUI;
  /** Подсказка поля рядом с label. */
  hint?: string;
}

export interface FieldValues {
  /** Значения enum/select. */
  enum?: EnumItems;
  /** Field-level autocomplete overrides. */
  autocomplete?: AutocompleteOptions;
}

export interface SummaryFieldOptions {
  /** Операции итогов текущей страницы. */
  page?: SummaryOperation | SummaryOperation[] | boolean;
}

export interface FieldDefinition {
  /** Тип данных модели/валидации; не тип editor widget. */
  type?: FieldDataType;
  /** Роль поля: data/grid/editor/meta. @default data */
  role?: FieldRole;
  /** Подсказка поля. */
  hint?: string;
  /** Поле отображаемого значения autocomplete. */
  displayField?: string;
  /** Enum/autocomplete значения. */
  values?: FieldValues;
  /** UI-настройки. */
  ui?: FieldUI;
  /** Настройки встроенного редактора. */
  editor?: FieldEditorOptions;
  /** Настройки итогов поля. */
  summary?: SummaryFieldOptions | SummaryOperation | SummaryOperation[] | boolean;
  /** Минимальная длина (fallback для editor). */
  minLength?: number;
  /** Максимальная длина (fallback для editor). */
  maxLength?: number;
}

export interface SchemaValidators {
  /** Межполевые валидаторы строки. */
  row?: RowValidator | RowValidator[];
}

export interface SchemaOptions {
  /** Поля, колонки и правила редактора. @default required */
  fields?: Record<string, FieldDefinition>;
  /** Порядок полей. @default Object.keys(fields) */
  order?: string[];
  /** Валидаторы схемы. @default {} */
  validators?: SchemaValidators;
}

export interface DetailLink {
  /** Поле master. @default id */
  masterField?: string;
  /** Поле detail. @default id */
  detailField?: string;
}

export interface DetailGridOptions {
  /** ID внешнего контейнера detail grid. */
  gridId?: string;
  /** Альтернативный host. */
  host?: HostResolver;
  /** Связь master-detail. */
  link?: DetailLink;
  /** Конфигурация detail grid. */
  options?: ABGridOptions;
  /** Конструктор detail grid. @default master.constructor */
  gridConstructor?: ABGridConstructor;
  /** Фабрика detail grid. */
  factory?: ((host: Element) => ABGrid);
}


export interface SummaryOptions {
  /** Включить итоговые строки. @default false */
  enabled?: boolean;
  /** Показывать итоги страницы. @default true */
  page?: boolean;
  /** Расположение page/total. @default stack */
  layout?: SummaryLayout;
  /** Подпись итогов страницы. @default Σ Page */
  pageLabel?: string;
  /** Разделитель inline layout. @default  ·  */
  separator?: string;
  /** Текст пустого значения. */
  emptyText?: string;
  /** Количество знаков после запятой (0..20). @default 2 */
  fractionDigits?: number;
}

export interface ToolbarItem {
  /** Тип элемента toolbar. @default button */
  type?: string;
  /** Текст. */
  caption?: string;
  /** Подсказка. */
  hint?: string;
  /** CSS class. */
  class?: string;
  /** Ширина. */
  width?: number | string;
  /** Placeholder. */
  placeholder?: string;
  /** Начальное значение. */
  value?: unknown;
  /** Требовать выбранную строку. @default built-in dependent */
  requiresSelection?: boolean;
  /** Требовать данные. @default built-in dependent */
  requiresData?: boolean;
  /** Обработчик клика. */
  onClick?: ToolbarClickHandler;
  [key: string]: unknown;
}

export interface ABGridOptions {
  /** Автоматически загрузить данные после инициализации. @default true */
  autoLoad?: boolean;
  /** Глобально блокировать create/update/delete. @default false */
  readOnly?: boolean;
  /** Политика обработки 401. */
  auth?: AuthOptions;
  /** Dev/debug проверки. */
  dev?: DevOptions;
  /** Транспорт и форматы данных. */
  data?: DataOptions;
  /** CRUD-настройки. */
  crud?: CrudOptions;
  /** Linked Master–Detail grids. @default [] */
  detailGrids?: [] | [DetailGridOptions];
  /** Включить DialogService. @default true */
  dialogs?: boolean;
  /** Включить LoadingOverlay. @default true */
  loadingOverlay?: boolean;
  /** Локализация. Секция намеренно расширяема. @default defaults */
  i18n?: Record<string, any>;
  /** UI грида. */
  view?: ViewOptions;
  /** Глобальные настройки редактора. */
  editor?: EditorOptions;
  /** Схема полей. @default null */
  schema?: SchemaOptions | null;
  /** Summary plugin. */
  summary?: SummaryOptions;
  /** Начальная страница. @default 1 */
  page?: number;
  /** Начальное общее количество строк. @default 0 */
  totalRecords?: number;
}


export type ToastVariant = "info" | "success" | "error" | "warning" | (string & {});
export type ToastPosition = "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center";
export interface ToastOptions { timeout?: number | null; closeable?: boolean; position?: ToastPosition; }
export interface HttpRequestContext {
  intent: string | null; auth: AuthOptions | null; i18n: AnyRecord | null;
  url: string; method: string; headers: Record<string,string>; params: AnyRecord | null;
  data: unknown; body: unknown; signal: AbortSignal | null; dataKey: string;
  strict: boolean; unwrapData: boolean; rawResponse: boolean;
}
export interface HttpError extends Error { status?: number; payload?: unknown; response?: Response; __abgridAuth401?: boolean; }
export type RequestInterceptor = (ctx: HttpRequestContext) => void | Partial<HttpRequestContext>;
export type ResponseInterceptor = (ctx: HttpRequestContext, payload: unknown, response: Response) => unknown | void;
export type ErrorInterceptor = (ctx: HttpRequestContext, error: HttpError | unknown) => void;
export interface RequestInterceptors {
  request?: RequestInterceptor | RequestInterceptor[] | null;
  response?: ResponseInterceptor | ResponseInterceptor[] | null;
  error?: ErrorInterceptor | ErrorInterceptor[] | null;
}
export interface HttpRequestOptions {
  url?: string | null; method?: string | null; data?: unknown; headers?: Record<string,string> | null;
  params?: AnyRecord | null; body?: unknown; signal?: AbortSignal | null; dataKey?: string | null;
  strict?: boolean; unwrapData?: boolean; rawResponse?: boolean; intent?: string | null;
  interceptors?: RequestInterceptors | null;
}
export interface GridRequestOptions extends Omit<HttpRequestOptions,"rawResponse"> {}
export interface DataRequestOptions {
  requestData: AnyRecord; signal?: AbortSignal | null; strict?: boolean; raw?: boolean;
  unwrapData?: boolean; intent?: string | null;
}
export interface RawHttpResponse<T=unknown> { ok:true; status?:number; payload:T; response:Response; }
export interface DataEngineApi { request<T=unknown>(options:DataRequestOptions):Promise<T | RawHttpResponse<T>>; }

export interface CrudResult { success?:boolean; message?:string; data?:AnyRecord; [key:string]:unknown; }
export interface CrudFacade {
  engine:unknown; create(payload?:AnyRecord):Promise<CrudResult>; read(payload?:AnyRecord):Promise<CrudResult>;
  update(payload?:AnyRecord):Promise<CrudResult>; delete(payload?:AnyRecord):Promise<CrudResult>;
  createRow(rowDraft:AnyRecord,opts?:AnyRecord):Promise<unknown>; updateRowById(rowId:RowId,row:AnyRecord,opts?:AnyRecord):Promise<unknown>;
  deleteRowById(rowId:RowId,opts?:AnyRecord):Promise<unknown>; deleteRowsByIds(rowIds:RowId[],opts?:AnyRecord):Promise<unknown>;
  deleteSelectedRows(opts?:AnyRecord):Promise<unknown>;
}
export interface ToolbarApi { getValue(id:string):string|null; setValue(id:string,value:unknown):void; clearValue(id:string):void; }
export interface SummaryValue { page:AnyRecord; total:AnyRecord; }
export interface LoadingApi { (message?:string):unknown; show(message?:string):unknown; hide():unknown; }
export interface ABGridConstructor { new(host:string|Element,options?:ABGridOptions):ABGrid; }

export interface RowEventPayload { rowId:RowId|null; row:AnyRecord|null; tr?:HTMLTableRowElement; event?:Event; grid?:ABGrid; api?:ABGrid; }
export interface RowSelectPayload extends RowEventPayload { checked:boolean; }
export interface ActionClickPayload extends RowEventPayload { action:string|null; column:AnyRecord|null; }
export interface LoadStartPayload { requestData:AnyRecord; grid?:ABGrid; api?:ABGrid; }
export interface LoadSuccessPayload { rows:AnyRecord[]; total:number; requestData:AnyRecord; response:AnyRecord; grid?:ABGrid; api?:ABGrid; }
export interface LoadErrorPayload { error:unknown; requestData?:AnyRecord; grid?:ABGrid; api?:ABGrid; }
export interface LoadEndPayload { aborted:boolean; rows:AnyRecord[]|null; total:number|null; requestData:AnyRecord; response:AnyRecord|null; grid?:ABGrid; api?:ABGrid; }
export interface ToolbarClickPayload {
  key:string; action?:string; rowId?:RowId|null; row?:AnyRecord|null; event?:Event;
  preventDefault():void; defaultPrevented?:boolean; grid?:ABGrid; api?:ABGrid; [key:string]:unknown;
}
export interface ToolbarChangePayload { key:string; value:string|null; grid:ABGrid; api:ABGrid; }
export interface SelectionModePayload { mode:SelectionMode; previousMode:SelectionMode; grid?:ABGrid; api?:ABGrid; }
export interface ABGridEventMap {
 "row:click":RowEventPayload; "row:dblclick":RowEventPayload; "row:current":RowEventPayload; "row:select":RowSelectPayload;
 "action:click":ActionClickPayload; "load:start":LoadStartPayload; "data:loaded":LoadSuccessPayload; "load:success":LoadSuccessPayload;
 "load:error":LoadErrorPayload; "data:error":{error:unknown;grid?:ABGrid;api?:ABGrid}; "load:end":LoadEndPayload;
 "toolbar:click":ToolbarClickPayload; "toolbar:change":ToolbarChangePayload;
 "selection:mode":SelectionModePayload; "intent":IntentContext;
}


export declare class ABGrid {
 constructor(host:string|Element,options?:ABGridOptions);
 options:ABGridOptions; data:DataEngineApi; crud:CrudFacade; toolbar:ToolbarApi; loading:LoadingApi; editForm:unknown;
 on<K extends keyof ABGridEventMap>(name:K,fn:(payload:ABGridEventMap[K])=>unknown):()=>void;
 on(name:string,fn:(payload:any)=>unknown):()=>void; off(name:string,fn:(...args:any[])=>unknown):void;
 onRowClick(handler:(row:AnyRecord|null,ctx:RowEventPayload,grid:ABGrid)=>unknown):()=>void;
 onRowDblClick(handler:(row:AnyRecord|null,ctx:RowEventPayload,grid:ABGrid)=>unknown):()=>void;
 onRowCurrent(handler:(row:AnyRecord|null,ctx:RowEventPayload,grid:ABGrid)=>unknown):()=>void;
 onActionClick(handler:(action:string|null,row:AnyRecord|null,ctx:ActionClickPayload,grid:ABGrid)=>unknown):()=>void;
 onRowSelect(handler:(checked:boolean,row:AnyRecord|null,ctx:RowSelectPayload,grid:ABGrid)=>unknown):()=>void;
 onToolBarClick(handler:(action:string,ctx:ToolbarClickPayload,grid:ABGrid)=>boolean|void|Promise<boolean|void>):()=>void;
 onDataLoaded(handler:(ctx:LoadSuccessPayload)=>unknown):()=>void; onLoadStart(handler:(ctx:LoadStartPayload)=>unknown):()=>void;
 onLoadSuccess(handler:(ctx:LoadSuccessPayload)=>unknown):()=>void; onLoadError(handler:(ctx:LoadErrorPayload)=>unknown):()=>void;
 onLoadEnd(handler:(ctx:LoadEndPayload)=>unknown):()=>void;
 request<T=unknown>(args?:GridRequestOptions):Promise<T>; handleUnauthorized(responseOrError?:unknown):Promise<unknown>;
 load(opts?:{resetPage?:boolean}):Promise<unknown>; refresh():unknown; setReadOnly(readOnly:boolean):void; getReadOnly():boolean;
 setData(data:unknown):unknown; getData():unknown; setServerData(rows:unknown[],total:number):unknown; resetRowFormat():unknown;
 setCurrentRow(rowId:RowId,opts?:{emit?:boolean}):unknown; clearCurrentRow(opts?:{emit?:boolean}):unknown;
 getCurrentRowId():RowId|null; getCurrentRow():AnyRecord|null; getSelectionMode():SelectionMode; setSelectionMode(mode:SelectionMode):unknown;
 getSelectedRowIds():RowId[]; getSelectedRows():AnyRecord[]; selectRow(rowId:RowId,checked?:boolean):unknown; unselectRow(rowId:RowId):unknown;
 clearSelection():unknown; setSelectedRowIds(ids?:RowId[]):unknown; setFilter(filter:AnyRecord|FilterFactory|null):unknown;
 setPage(page:number,opts?:{load?:boolean}):unknown; setRpp(rpp:number,opts?:{load?:boolean}):unknown; getTotalPages():number;
 getVisibleColumnCount():number; getCellValueByAlias(rowId:RowId,alias:string):unknown; getRowObjectById(rowId:RowId):AnyRecord|null;
 buildRequestPayload(overrides?:AnyRecord):AnyRecord; render():unknown;
;
 deleteRowById(rowId:RowId):boolean; deleteRowsByIds(rowIds:RowId[]):number; deleteSelectedRows():unknown; updateRowById(rowId:RowId,row:AnyRecord):unknown;
 createRow(row:AnyRecord,opts?:AnyRecord):unknown; createRows(rows:AnyRecord[],opts?:AnyRecord):unknown;
 can(op:string,ctx?:AnyRecord):boolean; canCreate(ctx?:AnyRecord):boolean;
 canUpdate(ctx?:AnyRecord):boolean; canDelete(ctx?:AnyRecord):boolean; canPerform(op:string,opts?:AnyRecord):boolean;
 openEditForm(rowId?:RowId|null,draft?:AnyRecord|null,opts?:{mode?:EditMode}|null):unknown; emitIntent(action:string,payload?:AnyRecord,source?:string):void;
 getDetailGrid(containerId:string):ABGrid|null; getSummary?():SummaryValue; setSummary?(summary?:Partial<SummaryValue>&AnyRecord):void;
 getState():unknown; setState(state?:AnyRecord,opts?:{load?:boolean}):Promise<unknown>; destroy():void;
 static readonly VERSION:string; static readonly EDITION:"FREE"; static readonly version:string; static getVersion():string; static today():string; static now():string; static timestamp():number;
 static setDefaults(options:Partial<ABGridOptions>):void;;
 static request<T=unknown>(args?:HttpRequestOptions):Promise<T|RawHttpResponse<T>>;
}
