import { defineComponent, h, createSSRApp, useSSRContext, mergeProps } from 'vue';
import { renderToString as renderToString$1, ssrRenderAttrs, ssrRenderSlot, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { escape } from 'html-escaper';
/* empty css                                      *//* empty css                                 */
const setup = () => {};

/**
 * Astro passes `children` as a string of HTML, so we need
 * a wrapper `div` to render that content as VNodes.
 *
 * This is the Vue + JSX equivalent of using `<div v-html="value" />`
 */
const StaticHtml = defineComponent({
	props: {
		value: String,
		name: String,
	},
	setup({ name, value }) {
		if (!value) return () => null;
		return () => h('astro-slot', { name, innerHTML: value });
	},
});

function check$1(Component) {
	return !!Component['ssrRender'] || !!Component['__ssrInlineRender'];
}

async function renderToStaticMarkup$1(Component, props, slotted) {
	const slots = {};
	for (const [key, value] of Object.entries(slotted)) {
		slots[key] = () => h(StaticHtml, { value, name: key === 'default' ? undefined : key });
	}
	const app = createSSRApp({ render: () => h(Component, props, slots) });
	await setup();
	const html = await renderToString$1(app);
	return { html };
}

const _renderer1 = {
	check: check$1,
	renderToStaticMarkup: renderToStaticMarkup$1,
};

function baseCreateComponent(cb, moduleId) {
  cb.isAstroComponentFactory = true;
  cb.moduleId = moduleId;
  return cb;
}
function createComponentWithOptions(opts) {
  const cb = baseCreateComponent(opts.factory, opts.moduleId);
  cb.propagation = opts.propagation;
  return cb;
}
function createComponent(arg1, moduleId) {
  if (typeof arg1 === "function") {
    return baseCreateComponent(arg1, moduleId);
  } else {
    return createComponentWithOptions(arg1);
  }
}

const ASTRO_VERSION = "1.9.1";

function createDeprecatedFetchContentFn() {
  return () => {
    throw new Error("Deprecated: Astro.fetchContent() has been replaced with Astro.glob().");
  };
}
function createAstroGlobFn() {
  const globHandler = (importMetaGlobResult, globValue) => {
    let allEntries = [...Object.values(importMetaGlobResult)];
    if (allEntries.length === 0) {
      throw new Error(`Astro.glob(${JSON.stringify(globValue())}) - no matches found.`);
    }
    return Promise.all(allEntries.map((fn) => fn()));
  };
  return globHandler;
}
function createAstro(filePathname, _site, projectRootStr) {
  const site = _site ? new URL(_site) : void 0;
  const referenceURL = new URL(filePathname, `http://localhost`);
  const projectRoot = new URL(projectRootStr);
  return {
    site,
    generator: `Astro v${ASTRO_VERSION}`,
    fetchContent: createDeprecatedFetchContentFn(),
    glob: createAstroGlobFn(),
    resolve(...segments) {
      let resolved = segments.reduce((u, segment) => new URL(segment, u), referenceURL).pathname;
      if (resolved.startsWith(projectRoot.pathname)) {
        resolved = "/" + resolved.slice(projectRoot.pathname.length);
      }
      return resolved;
    }
  };
}

const escapeHTML = escape;
class HTMLString extends String {
  get [Symbol.toStringTag]() {
    return "HTMLString";
  }
}
const markHTMLString = (value) => {
  if (value instanceof HTMLString) {
    return value;
  }
  if (typeof value === "string") {
    return new HTMLString(value);
  }
  return value;
};
function isHTMLString(value) {
  return Object.prototype.toString.call(value) === "[object HTMLString]";
}

var idle_prebuilt_default = `(self.Astro=self.Astro||{}).idle=t=>{const e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)},window.dispatchEvent(new Event("astro:idle"));`;

var load_prebuilt_default = `(self.Astro=self.Astro||{}).load=a=>{(async()=>await(await a())())()},window.dispatchEvent(new Event("astro:load"));`;

var media_prebuilt_default = `(self.Astro=self.Astro||{}).media=(s,a)=>{const t=async()=>{await(await s())()};if(a.value){const e=matchMedia(a.value);e.matches?t():e.addEventListener("change",t,{once:!0})}},window.dispatchEvent(new Event("astro:media"));`;

var only_prebuilt_default = `(self.Astro=self.Astro||{}).only=t=>{(async()=>await(await t())())()},window.dispatchEvent(new Event("astro:only"));`;

var visible_prebuilt_default = `(self.Astro=self.Astro||{}).visible=(s,c,n)=>{const r=async()=>{await(await s())()};let i=new IntersectionObserver(e=>{for(const t of e)if(!!t.isIntersecting){i.disconnect(),r();break}});for(let e=0;e<n.children.length;e++){const t=n.children[e];i.observe(t)}},window.dispatchEvent(new Event("astro:visible"));`;

var astro_island_prebuilt_default = `var l;{const c={0:t=>t,1:t=>JSON.parse(t,o),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(JSON.parse(t,o)),5:t=>new Set(JSON.parse(t,o)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(JSON.parse(t)),9:t=>new Uint16Array(JSON.parse(t)),10:t=>new Uint32Array(JSON.parse(t))},o=(t,s)=>{if(t===""||!Array.isArray(s))return s;const[e,n]=s;return e in c?c[e](n):void 0};customElements.get("astro-island")||customElements.define("astro-island",(l=class extends HTMLElement{constructor(){super(...arguments);this.hydrate=()=>{if(!this.hydrator||this.parentElement&&this.parentElement.closest("astro-island[ssr]"))return;const s=this.querySelectorAll("astro-slot"),e={},n=this.querySelectorAll("template[data-astro-template]");for(const r of n){const i=r.closest(this.tagName);!i||!i.isSameNode(this)||(e[r.getAttribute("data-astro-template")||"default"]=r.innerHTML,r.remove())}for(const r of s){const i=r.closest(this.tagName);!i||!i.isSameNode(this)||(e[r.getAttribute("name")||"default"]=r.innerHTML)}const a=this.hasAttribute("props")?JSON.parse(this.getAttribute("props"),o):{};this.hydrator(this)(this.Component,a,e,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),window.removeEventListener("astro:hydrate",this.hydrate),window.dispatchEvent(new CustomEvent("astro:hydrate"))}}connectedCallback(){!this.hasAttribute("await-children")||this.firstChild?this.childrenConnectedCallback():new MutationObserver((s,e)=>{e.disconnect(),this.childrenConnectedCallback()}).observe(this,{childList:!0})}async childrenConnectedCallback(){window.addEventListener("astro:hydrate",this.hydrate);let s=this.getAttribute("before-hydration-url");s&&await import(s),this.start()}start(){const s=JSON.parse(this.getAttribute("opts")),e=this.getAttribute("client");if(Astro[e]===void 0){window.addEventListener(\`astro:\${e}\`,()=>this.start(),{once:!0});return}Astro[e](async()=>{const n=this.getAttribute("renderer-url"),[a,{default:r}]=await Promise.all([import(this.getAttribute("component-url")),n?import(n):()=>()=>{}]),i=this.getAttribute("component-export")||"default";if(!i.includes("."))this.Component=a[i];else{this.Component=a;for(const d of i.split("."))this.Component=this.Component[d]}return this.hydrator=r,this.hydrate},s,this)}attributeChangedCallback(){this.hydrator&&this.hydrate()}},l.observedAttributes=["props"],l))}`;

function determineIfNeedsHydrationScript(result) {
  if (result._metadata.hasHydrationScript) {
    return false;
  }
  return result._metadata.hasHydrationScript = true;
}
const hydrationScripts = {
  idle: idle_prebuilt_default,
  load: load_prebuilt_default,
  only: only_prebuilt_default,
  media: media_prebuilt_default,
  visible: visible_prebuilt_default
};
function determinesIfNeedsDirectiveScript(result, directive) {
  if (result._metadata.hasDirectives.has(directive)) {
    return false;
  }
  result._metadata.hasDirectives.add(directive);
  return true;
}
function getDirectiveScriptText(directive) {
  if (!(directive in hydrationScripts)) {
    throw new Error(`Unknown directive: ${directive}`);
  }
  const directiveScriptText = hydrationScripts[directive];
  return directiveScriptText;
}
function getPrescripts(type, directive) {
  switch (type) {
    case "both":
      return `<style>astro-island,astro-slot{display:contents}</style><script>${getDirectiveScriptText(directive) + astro_island_prebuilt_default}<\/script>`;
    case "directive":
      return `<script>${getDirectiveScriptText(directive)}<\/script>`;
  }
  return "";
}

const headAndContentSym = Symbol.for("astro.headAndContent");
function isHeadAndContent(obj) {
  return typeof obj === "object" && !!obj[headAndContentSym];
}

function serializeListValue(value) {
  const hash = {};
  push(value);
  return Object.keys(hash).join(" ");
  function push(item) {
    if (item && typeof item.forEach === "function")
      item.forEach(push);
    else if (item === Object(item))
      Object.keys(item).forEach((name) => {
        if (item[name])
          push(name);
      });
    else {
      item = item === false || item == null ? "" : String(item).trim();
      if (item) {
        item.split(/\s+/).forEach((name) => {
          hash[name] = true;
        });
      }
    }
  }
}
function isPromise(value) {
  return !!value && typeof value === "object" && typeof value.then === "function";
}

var _a$7;
const renderTemplateResultSym = Symbol.for("astro.renderTemplateResult");
class RenderTemplateResult {
  constructor(htmlParts, expressions) {
    this[_a$7] = true;
    this.htmlParts = htmlParts;
    this.error = void 0;
    this.expressions = expressions.map((expression) => {
      if (isPromise(expression)) {
        return Promise.resolve(expression).catch((err) => {
          if (!this.error) {
            this.error = err;
            throw err;
          }
        });
      }
      return expression;
    });
  }
  get [(_a$7 = renderTemplateResultSym, Symbol.toStringTag)]() {
    return "AstroComponent";
  }
  async *[Symbol.asyncIterator]() {
    const { htmlParts, expressions } = this;
    for (let i = 0; i < htmlParts.length; i++) {
      const html = htmlParts[i];
      const expression = expressions[i];
      yield markHTMLString(html);
      yield* renderChild(expression);
    }
  }
}
function isRenderTemplateResult(obj) {
  return typeof obj === "object" && !!obj[renderTemplateResultSym];
}
async function* renderAstroTemplateResult(component) {
  for await (const value of component) {
    if (value || value === 0) {
      for await (const chunk of renderChild(value)) {
        switch (chunk.type) {
          case "directive": {
            yield chunk;
            break;
          }
          default: {
            yield markHTMLString(chunk);
            break;
          }
        }
      }
    }
  }
}
function renderTemplate(htmlParts, ...expressions) {
  return new RenderTemplateResult(htmlParts, expressions);
}

function isAstroComponentFactory(obj) {
  return obj == null ? false : obj.isAstroComponentFactory === true;
}
async function renderToString(result, componentFactory, props, children) {
  const factoryResult = await componentFactory(result, props, children);
  if (factoryResult instanceof Response) {
    const response = factoryResult;
    throw response;
  }
  let parts = new HTMLParts();
  const templateResult = isHeadAndContent(factoryResult) ? factoryResult.content : factoryResult;
  for await (const chunk of renderAstroTemplateResult(templateResult)) {
    parts.append(chunk, result);
  }
  return parts.toString();
}
function isAPropagatingComponent(result, factory) {
  let hint = factory.propagation || "none";
  if (factory.moduleId && result.propagation.has(factory.moduleId) && hint === "none") {
    hint = result.propagation.get(factory.moduleId);
  }
  return hint === "in-tree" || hint === "self";
}

const defineErrors = (errs) => errs;
const AstroErrorData = defineErrors({
  UnknownCompilerError: {
    title: "Unknown compiler error.",
    code: 1e3
  },
  StaticRedirectNotAvailable: {
    title: "`Astro.redirect` is not available in static mode.",
    code: 3001,
    message: "Redirects are only available when using `output: 'server'`. Update your Astro config if you need SSR features.",
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project for more information on how to enable SSR."
  },
  ClientAddressNotAvailable: {
    title: "`Astro.clientAddress` is not available in current adapter.",
    code: 3002,
    message: (adapterName) => `\`Astro.clientAddress\` is not available in the \`${adapterName}\` adapter. File an issue with the adapter to add support.`
  },
  StaticClientAddressNotAvailable: {
    title: "`Astro.clientAddress` is not available in static mode.",
    code: 3003,
    message: "`Astro.clientAddress` is only available when using `output: 'server'`. Update your Astro config if you need SSR features.",
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project for more information on how to enable SSR."
  },
  NoMatchingStaticPathFound: {
    title: "No static path found for requested path.",
    code: 3004,
    message: (pathName) => `A \`getStaticPaths()\` route pattern was matched, but no matching static path was found for requested path \`${pathName}\`.`,
    hint: (possibleRoutes) => `Possible dynamic routes being matched: ${possibleRoutes.join(", ")}.`
  },
  OnlyResponseCanBeReturned: {
    title: "Invalid type returned by Astro page.",
    code: 3005,
    message: (route, returnedValue) => `Route \`${route ? route : ""}\` returned a \`${returnedValue}\`. Only a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) can be returned from Astro files.`,
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/#response for more information."
  },
  MissingMediaQueryDirective: {
    title: "Missing value for `client:media` directive.",
    code: 3006,
    message: 'Media query not provided for `client:media` directive. A media query similar to `client:media="(max-width: 600px)"` must be provided'
  },
  NoMatchingRenderer: {
    title: "No matching renderer found.",
    code: 3007,
    message: (componentName, componentExtension, plural, validRenderersCount) => `Unable to render \`${componentName}\`.

${validRenderersCount > 0 ? `There ${plural ? "are." : "is."} ${validRenderersCount} renderer${plural ? "s." : ""} configured in your \`astro.config.mjs\` file,
but ${plural ? "none were." : "it was not."} able to server-side render \`${componentName}\`.` : `No valid renderer was found ${componentExtension ? `for the \`.${componentExtension}\` file extension.` : `for this file extension.`}`}`,
    hint: (probableRenderers) => `Did you mean to enable the ${probableRenderers} integration?

See https://docs.astro.build/en/core-concepts/framework-components/ for more information on how to install and configure integrations.`
  },
  NoClientEntrypoint: {
    title: "No client entrypoint specified in renderer.",
    code: 3008,
    message: (componentName, clientDirective, rendererName) => `\`${componentName}\` component has a \`client:${clientDirective}\` directive, but no client entrypoint was provided by \`${rendererName}\`.`,
    hint: "See https://docs.astro.build/en/reference/integrations-reference/#addrenderer-option for more information on how to configure your renderer."
  },
  NoClientOnlyHint: {
    title: "Missing hint on client:only directive.",
    code: 3009,
    message: (componentName) => `Unable to render \`${componentName}\`. When using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.`,
    hint: (probableRenderers) => `Did you mean to pass \`client:only="${probableRenderers}"\`? See https://docs.astro.build/en/reference/directives-reference/#clientonly for more information on client:only`
  },
  InvalidGetStaticPathParam: {
    title: "Invalid value returned by a `getStaticPaths` path.",
    code: 3010,
    message: (paramType) => `Invalid params given to \`getStaticPaths\` path. Expected an \`object\`, got \`${paramType}\``,
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  InvalidGetStaticPathsReturn: {
    title: "Invalid value returned by getStaticPaths.",
    code: 3011,
    message: (returnType) => `Invalid type returned by \`getStaticPaths\`. Expected an \`array\`, got \`${returnType}\``,
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  GetStaticPathsRemovedRSSHelper: {
    title: "getStaticPaths RSS helper is not available anymore.",
    code: 3012,
    message: "The RSS helper has been removed from `getStaticPaths`. Try the new @astrojs/rss package instead.",
    hint: "See https://docs.astro.build/en/guides/rss/ for more information."
  },
  GetStaticPathsExpectedParams: {
    title: "Missing params property on `getStaticPaths` route.",
    code: 3013,
    message: "Missing or empty required `params` property on `getStaticPaths` route.",
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  GetStaticPathsInvalidRouteParam: {
    title: "Invalid value for `getStaticPaths` route parameter.",
    code: 3014,
    message: (key, value, valueType) => `Invalid getStaticPaths route parameter for \`${key}\`. Expected undefined, a string or a number, received \`${valueType}\` (\`${value}\`)`,
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  GetStaticPathsRequired: {
    title: "`getStaticPaths()` function required for dynamic routes.",
    code: 3015,
    message: "`getStaticPaths()` function is required for dynamic routes. Make sure that you `export` a `getStaticPaths` function from your dynamic route.",
    hint: `See https://docs.astro.build/en/core-concepts/routing/#dynamic-routes for more information on dynamic routes.

Alternatively, set \`output: "server"\` in your Astro config file to switch to a non-static server build.
See https://docs.astro.build/en/guides/server-side-rendering/ for more information on non-static rendering.`
  },
  ReservedSlotName: {
    title: "Invalid slot name.",
    code: 3016,
    message: (slotName) => `Unable to create a slot named \`${slotName}\`. \`${slotName}\` is a reserved slot name. Please update the name of this slot.`
  },
  NoAdapterInstalled: {
    title: "Cannot use Server-side Rendering without an adapter.",
    code: 3017,
    message: `Cannot use \`output: 'server'\` without an adapter. Please install and configure the appropriate server adapter for your final deployment.`,
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/ for more information."
  },
  NoMatchingImport: {
    title: "No import found for component.",
    code: 3018,
    message: (componentName) => `Could not render \`${componentName}\`. No matching import has been found for \`${componentName}\`.`,
    hint: "Please make sure the component is properly imported."
  },
  InvalidPrerenderExport: {
    title: "Invalid prerender export.",
    code: 3019,
    message: (prefix, suffix) => {
      let msg = `A \`prerender\` export has been detected, but its value cannot be statically analyzed.`;
      if (prefix !== "const")
        msg += `
Expected \`const\` declaration but got \`${prefix}\`.`;
      if (suffix !== "true")
        msg += `
Expected \`true\` value but got \`${suffix}\`.`;
      return msg;
    },
    hint: "Mutable values declared at runtime are not supported. Please make sure to use exactly `export const prerender = true`."
  },
  UnknownViteError: {
    title: "Unknown Vite Error.",
    code: 4e3
  },
  FailedToLoadModuleSSR: {
    title: "Could not import file.",
    code: 4001,
    message: (importName) => `Could not import \`${importName}\`.`,
    hint: "This is often caused by a typo in the import path. Please make sure the file exists."
  },
  InvalidGlob: {
    title: "Invalid glob pattern.",
    code: 4002,
    message: (globPattern) => `Invalid glob pattern: \`${globPattern}\`. Glob patterns must start with './', '../' or '/'.`,
    hint: "See https://docs.astro.build/en/guides/imports/#glob-patterns for more information on supported glob patterns."
  },
  UnknownCSSError: {
    title: "Unknown CSS Error.",
    code: 5e3
  },
  CSSSyntaxError: {
    title: "CSS Syntax Error.",
    code: 5001
  },
  UnknownMarkdownError: {
    title: "Unknown Markdown Error.",
    code: 6e3
  },
  MarkdownFrontmatterParseError: {
    title: "Failed to parse Markdown frontmatter.",
    code: 6001
  },
  MarkdownContentSchemaValidationError: {
    title: "Content collection frontmatter invalid.",
    code: 6002,
    message: (collection, entryId, error) => {
      return [
        `${String(collection)} \u2192 ${String(entryId)} frontmatter does not match collection schema.`,
        ...error.errors.map((zodError) => zodError.message)
      ].join("\n");
    },
    hint: "See https://docs.astro.build/en/guides/content-collections/ for more information on content schemas."
  },
  UnknownConfigError: {
    title: "Unknown configuration error.",
    code: 7e3
  },
  ConfigNotFound: {
    title: "Specified configuration file not found.",
    code: 7001,
    message: (configFile) => `Unable to resolve \`--config "${configFile}"\`. Does the file exist?`
  },
  ConfigLegacyKey: {
    title: "Legacy configuration detected.",
    code: 7002,
    message: (legacyConfigKey) => `Legacy configuration detected: \`${legacyConfigKey}\`.`,
    hint: "Please update your configuration to the new format.\nSee https://astro.build/config for more information."
  },
  UnknownCLIError: {
    title: "Unknown CLI Error.",
    code: 8e3
  },
  GenerateContentTypesError: {
    title: "Failed to generate content types.",
    code: 8001,
    message: "`astro sync` command failed to generate content collection types.",
    hint: "Check your `src/content/config.*` file for typos."
  },
  UnknownError: {
    title: "Unknown Error.",
    code: 99999
  }
});

function normalizeLF(code) {
  return code.replace(/\r\n|\r(?!\n)|\n/g, "\n");
}
function getErrorDataByCode(code) {
  const entry = Object.entries(AstroErrorData).find((data) => data[1].code === code);
  if (entry) {
    return {
      name: entry[0],
      data: entry[1]
    };
  }
}

function codeFrame(src, loc) {
  if (!loc || loc.line === void 0 || loc.column === void 0) {
    return "";
  }
  const lines = normalizeLF(src).split("\n").map((ln) => ln.replace(/\t/g, "  "));
  const visibleLines = [];
  for (let n = -2; n <= 2; n++) {
    if (lines[loc.line + n])
      visibleLines.push(loc.line + n);
  }
  let gutterWidth = 0;
  for (const lineNo of visibleLines) {
    let w = `> ${lineNo}`;
    if (w.length > gutterWidth)
      gutterWidth = w.length;
  }
  let output = "";
  for (const lineNo of visibleLines) {
    const isFocusedLine = lineNo === loc.line - 1;
    output += isFocusedLine ? "> " : "  ";
    output += `${lineNo + 1} | ${lines[lineNo]}
`;
    if (isFocusedLine)
      output += `${Array.from({ length: gutterWidth }).join(" ")}  | ${Array.from({
        length: loc.column
      }).join(" ")}^
`;
  }
  return output;
}

class AstroError extends Error {
  constructor(props, ...params) {
    var _a;
    super(...params);
    this.type = "AstroError";
    const { code, name, title, message, stack, location, hint, frame } = props;
    this.errorCode = code;
    if (name && name !== "Error") {
      this.name = name;
    } else {
      this.name = ((_a = getErrorDataByCode(this.errorCode)) == null ? void 0 : _a.name) ?? "UnknownError";
    }
    this.title = title;
    if (message)
      this.message = message;
    this.stack = stack ? stack : this.stack;
    this.loc = location;
    this.hint = hint;
    this.frame = frame;
  }
  setErrorCode(errorCode) {
    this.errorCode = errorCode;
  }
  setLocation(location) {
    this.loc = location;
  }
  setName(name) {
    this.name = name;
  }
  setMessage(message) {
    this.message = message;
  }
  setHint(hint) {
    this.hint = hint;
  }
  setFrame(source, location) {
    this.frame = codeFrame(source, location);
  }
  static is(err) {
    return err.type === "AstroError";
  }
}

const PROP_TYPE = {
  Value: 0,
  JSON: 1,
  RegExp: 2,
  Date: 3,
  Map: 4,
  Set: 5,
  BigInt: 6,
  URL: 7,
  Uint8Array: 8,
  Uint16Array: 9,
  Uint32Array: 10
};
function serializeArray(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = value.map((v) => {
    return convertToSerializedForm(v, metadata, parents);
  });
  parents.delete(value);
  return serialized;
}
function serializeObject(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = Object.fromEntries(
    Object.entries(value).map(([k, v]) => {
      return [k, convertToSerializedForm(v, metadata, parents)];
    })
  );
  parents.delete(value);
  return serialized;
}
function convertToSerializedForm(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  const tag = Object.prototype.toString.call(value);
  switch (tag) {
    case "[object Date]": {
      return [PROP_TYPE.Date, value.toISOString()];
    }
    case "[object RegExp]": {
      return [PROP_TYPE.RegExp, value.source];
    }
    case "[object Map]": {
      return [
        PROP_TYPE.Map,
        JSON.stringify(serializeArray(Array.from(value), metadata, parents))
      ];
    }
    case "[object Set]": {
      return [
        PROP_TYPE.Set,
        JSON.stringify(serializeArray(Array.from(value), metadata, parents))
      ];
    }
    case "[object BigInt]": {
      return [PROP_TYPE.BigInt, value.toString()];
    }
    case "[object URL]": {
      return [PROP_TYPE.URL, value.toString()];
    }
    case "[object Array]": {
      return [PROP_TYPE.JSON, JSON.stringify(serializeArray(value, metadata, parents))];
    }
    case "[object Uint8Array]": {
      return [PROP_TYPE.Uint8Array, JSON.stringify(Array.from(value))];
    }
    case "[object Uint16Array]": {
      return [PROP_TYPE.Uint16Array, JSON.stringify(Array.from(value))];
    }
    case "[object Uint32Array]": {
      return [PROP_TYPE.Uint32Array, JSON.stringify(Array.from(value))];
    }
    default: {
      if (value !== null && typeof value === "object") {
        return [PROP_TYPE.Value, serializeObject(value, metadata, parents)];
      } else {
        return [PROP_TYPE.Value, value];
      }
    }
  }
}
function serializeProps(props, metadata) {
  const serialized = JSON.stringify(serializeObject(props, metadata));
  return serialized;
}

const HydrationDirectivesRaw = ["load", "idle", "media", "visible", "only"];
const HydrationDirectives = new Set(HydrationDirectivesRaw);
const HydrationDirectiveProps = new Set(HydrationDirectivesRaw.map((n) => `client:${n}`));
function extractDirectives(displayName, inputProps) {
  let extracted = {
    isPage: false,
    hydration: null,
    props: {}
  };
  for (const [key, value] of Object.entries(inputProps)) {
    if (key.startsWith("server:")) {
      if (key === "server:root") {
        extracted.isPage = true;
      }
    }
    if (key.startsWith("client:")) {
      if (!extracted.hydration) {
        extracted.hydration = {
          directive: "",
          value: "",
          componentUrl: "",
          componentExport: { value: "" }
        };
      }
      switch (key) {
        case "client:component-path": {
          extracted.hydration.componentUrl = value;
          break;
        }
        case "client:component-export": {
          extracted.hydration.componentExport.value = value;
          break;
        }
        case "client:component-hydration": {
          break;
        }
        case "client:display-name": {
          break;
        }
        default: {
          extracted.hydration.directive = key.split(":")[1];
          extracted.hydration.value = value;
          if (!HydrationDirectives.has(extracted.hydration.directive)) {
            throw new Error(
              `Error: invalid hydration directive "${key}". Supported hydration methods: ${Array.from(
                HydrationDirectiveProps
              ).join(", ")}`
            );
          }
          if (extracted.hydration.directive === "media" && typeof extracted.hydration.value !== "string") {
            throw new AstroError(AstroErrorData.MissingMediaQueryDirective);
          }
          break;
        }
      }
    } else if (key === "class:list") {
      if (value) {
        extracted.props[key.slice(0, -5)] = serializeListValue(value);
      }
    } else {
      extracted.props[key] = value;
    }
  }
  for (const sym of Object.getOwnPropertySymbols(inputProps)) {
    extracted.props[sym] = inputProps[sym];
  }
  return extracted;
}
async function generateHydrateScript(scriptOptions, metadata) {
  const { renderer, result, astroId, props, attrs } = scriptOptions;
  const { hydrate, componentUrl, componentExport } = metadata;
  if (!componentExport.value) {
    throw new Error(
      `Unable to resolve a valid export for "${metadata.displayName}"! Please open an issue at https://astro.build/issues!`
    );
  }
  const island = {
    children: "",
    props: {
      uid: astroId
    }
  };
  if (attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      island.props[key] = escapeHTML(value);
    }
  }
  island.props["component-url"] = await result.resolve(decodeURI(componentUrl));
  if (renderer.clientEntrypoint) {
    island.props["component-export"] = componentExport.value;
    island.props["renderer-url"] = await result.resolve(decodeURI(renderer.clientEntrypoint));
    island.props["props"] = escapeHTML(serializeProps(props, metadata));
  }
  island.props["ssr"] = "";
  island.props["client"] = hydrate;
  let beforeHydrationUrl = await result.resolve("astro:scripts/before-hydration.js");
  if (beforeHydrationUrl.length) {
    island.props["before-hydration-url"] = beforeHydrationUrl;
  }
  island.props["opts"] = escapeHTML(
    JSON.stringify({
      name: metadata.displayName,
      value: metadata.hydrateArgs || ""
    })
  );
  return island;
}

var _a$6;
const astroComponentInstanceSym = Symbol.for("astro.componentInstance");
class AstroComponentInstance {
  constructor(result, props, slots, factory) {
    this[_a$6] = true;
    this.result = result;
    this.props = props;
    this.factory = factory;
    this.slotValues = {};
    for (const name in slots) {
      this.slotValues[name] = slots[name]();
    }
  }
  async init() {
    this.returnValue = this.factory(this.result, this.props, this.slotValues);
    return this.returnValue;
  }
  async *render() {
    if (this.returnValue === void 0) {
      await this.init();
    }
    let value = this.returnValue;
    if (isPromise(value)) {
      value = await value;
    }
    if (isHeadAndContent(value)) {
      yield* value.content;
    } else {
      yield* renderChild(value);
    }
  }
}
_a$6 = astroComponentInstanceSym;
function validateComponentProps(props, displayName) {
  if (props != null) {
    for (const prop of Object.keys(props)) {
      if (HydrationDirectiveProps.has(prop)) {
        console.warn(
          `You are attempting to render <${displayName} ${prop} />, but ${displayName} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`
        );
      }
    }
  }
}
function createAstroComponentInstance(result, displayName, factory, props, slots = {}) {
  validateComponentProps(props, displayName);
  const instance = new AstroComponentInstance(result, props, slots, factory);
  if (isAPropagatingComponent(result, factory) && !result.propagators.has(factory)) {
    result.propagators.set(factory, instance);
  }
  return instance;
}
function isAstroComponentInstance(obj) {
  return typeof obj === "object" && !!obj[astroComponentInstanceSym];
}

async function* renderChild(child) {
  child = await child;
  if (child instanceof SlotString) {
    if (child.instructions) {
      yield* child.instructions;
    }
    yield child;
  } else if (isHTMLString(child)) {
    yield child;
  } else if (Array.isArray(child)) {
    for (const value of child) {
      yield markHTMLString(await renderChild(value));
    }
  } else if (typeof child === "function") {
    yield* renderChild(child());
  } else if (typeof child === "string") {
    yield markHTMLString(escapeHTML(child));
  } else if (!child && child !== 0) ; else if (isRenderTemplateResult(child)) {
    yield* renderAstroTemplateResult(child);
  } else if (isAstroComponentInstance(child)) {
    yield* child.render();
  } else if (ArrayBuffer.isView(child)) {
    yield child;
  } else if (typeof child === "object" && (Symbol.asyncIterator in child || Symbol.iterator in child)) {
    yield* child;
  } else {
    yield child;
  }
}

const slotString = Symbol.for("astro:slot-string");
class SlotString extends HTMLString {
  constructor(content, instructions) {
    super(content);
    this.instructions = instructions;
    this[slotString] = true;
  }
}
function isSlotString(str) {
  return !!str[slotString];
}
async function renderSlot(_result, slotted, fallback) {
  if (slotted) {
    let iterator = renderChild(slotted);
    let content = "";
    let instructions = null;
    for await (const chunk of iterator) {
      if (chunk.type === "directive") {
        if (instructions === null) {
          instructions = [];
        }
        instructions.push(chunk);
      } else {
        content += chunk;
      }
    }
    return markHTMLString(new SlotString(content, instructions));
  }
  return fallback;
}
async function renderSlots(result, slots = {}) {
  let slotInstructions = null;
  let children = {};
  if (slots) {
    await Promise.all(
      Object.entries(slots).map(
        ([key, value]) => renderSlot(result, value).then((output) => {
          if (output.instructions) {
            if (slotInstructions === null) {
              slotInstructions = [];
            }
            slotInstructions.push(...output.instructions);
          }
          children[key] = output;
        })
      )
    );
  }
  return { slotInstructions, children };
}

const Fragment = Symbol.for("astro:fragment");
const Renderer = Symbol.for("astro:renderer");
const encoder = new TextEncoder();
const decoder = new TextDecoder();
function stringifyChunk(result, chunk) {
  switch (chunk.type) {
    case "directive": {
      const { hydration } = chunk;
      let needsHydrationScript = hydration && determineIfNeedsHydrationScript(result);
      let needsDirectiveScript = hydration && determinesIfNeedsDirectiveScript(result, hydration.directive);
      let prescriptType = needsHydrationScript ? "both" : needsDirectiveScript ? "directive" : null;
      if (prescriptType) {
        let prescripts = getPrescripts(prescriptType, hydration.directive);
        return markHTMLString(prescripts);
      } else {
        return "";
      }
    }
    default: {
      if (isSlotString(chunk)) {
        let out = "";
        const c = chunk;
        if (c.instructions) {
          for (const instr of c.instructions) {
            out += stringifyChunk(result, instr);
          }
        }
        out += chunk.toString();
        return out;
      }
      return chunk.toString();
    }
  }
}
class HTMLParts {
  constructor() {
    this.parts = "";
  }
  append(part, result) {
    if (ArrayBuffer.isView(part)) {
      this.parts += decoder.decode(part);
    } else {
      this.parts += stringifyChunk(result, part);
    }
  }
  toString() {
    return this.parts;
  }
  toArrayBuffer() {
    return encoder.encode(this.parts);
  }
}

const ClientOnlyPlaceholder = "astro-client-only";
class Skip {
  constructor(vnode) {
    this.vnode = vnode;
    this.count = 0;
  }
  increment() {
    this.count++;
  }
  haveNoTried() {
    return this.count === 0;
  }
  isCompleted() {
    return this.count > 2;
  }
}
Skip.symbol = Symbol("astro:jsx:skip");
let originalConsoleError;
let consoleFilterRefs = 0;
async function renderJSX(result, vnode) {
  switch (true) {
    case vnode instanceof HTMLString:
      if (vnode.toString().trim() === "") {
        return "";
      }
      return vnode;
    case typeof vnode === "string":
      return markHTMLString(escapeHTML(vnode));
    case typeof vnode === "function":
      return vnode;
    case (!vnode && vnode !== 0):
      return "";
    case Array.isArray(vnode):
      return markHTMLString(
        (await Promise.all(vnode.map((v) => renderJSX(result, v)))).join("")
      );
  }
  let skip;
  if (vnode.props) {
    if (vnode.props[Skip.symbol]) {
      skip = vnode.props[Skip.symbol];
    } else {
      skip = new Skip(vnode);
    }
  } else {
    skip = new Skip(vnode);
  }
  return renderJSXVNode(result, vnode, skip);
}
async function renderJSXVNode(result, vnode, skip) {
  if (isVNode(vnode)) {
    switch (true) {
      case !vnode.type: {
        throw new Error(`Unable to render ${result._metadata.pathname} because it contains an undefined Component!
Did you forget to import the component or is it possible there is a typo?`);
      }
      case vnode.type === Symbol.for("astro:fragment"):
        return renderJSX(result, vnode.props.children);
      case vnode.type.isAstroComponentFactory: {
        let props = {};
        let slots = {};
        for (const [key, value] of Object.entries(vnode.props ?? {})) {
          if (key === "children" || value && typeof value === "object" && value["$$slot"]) {
            slots[key === "children" ? "default" : key] = () => renderJSX(result, value);
          } else {
            props[key] = value;
          }
        }
        return markHTMLString(await renderToString(result, vnode.type, props, slots));
      }
      case (!vnode.type && vnode.type !== 0):
        return "";
      case (typeof vnode.type === "string" && vnode.type !== ClientOnlyPlaceholder):
        return markHTMLString(await renderElement$1(result, vnode.type, vnode.props ?? {}));
    }
    if (vnode.type) {
      let extractSlots2 = function(child) {
        if (Array.isArray(child)) {
          return child.map((c) => extractSlots2(c));
        }
        if (!isVNode(child)) {
          _slots.default.push(child);
          return;
        }
        if ("slot" in child.props) {
          _slots[child.props.slot] = [..._slots[child.props.slot] ?? [], child];
          delete child.props.slot;
          return;
        }
        _slots.default.push(child);
      };
      if (typeof vnode.type === "function" && vnode.type["astro:renderer"]) {
        skip.increment();
      }
      if (typeof vnode.type === "function" && vnode.props["server:root"]) {
        const output2 = await vnode.type(vnode.props ?? {});
        return await renderJSX(result, output2);
      }
      if (typeof vnode.type === "function") {
        if (skip.haveNoTried() || skip.isCompleted()) {
          useConsoleFilter();
          try {
            const output2 = await vnode.type(vnode.props ?? {});
            let renderResult;
            if (output2 && output2[AstroJSX]) {
              renderResult = await renderJSXVNode(result, output2, skip);
              return renderResult;
            } else if (!output2) {
              renderResult = await renderJSXVNode(result, output2, skip);
              return renderResult;
            }
          } catch (e) {
            if (skip.isCompleted()) {
              throw e;
            }
            skip.increment();
          } finally {
            finishUsingConsoleFilter();
          }
        } else {
          skip.increment();
        }
      }
      const { children = null, ...props } = vnode.props ?? {};
      const _slots = {
        default: []
      };
      extractSlots2(children);
      for (const [key, value] of Object.entries(props)) {
        if (value["$$slot"]) {
          _slots[key] = value;
          delete props[key];
        }
      }
      const slotPromises = [];
      const slots = {};
      for (const [key, value] of Object.entries(_slots)) {
        slotPromises.push(
          renderJSX(result, value).then((output2) => {
            if (output2.toString().trim().length === 0)
              return;
            slots[key] = () => output2;
          })
        );
      }
      await Promise.all(slotPromises);
      props[Skip.symbol] = skip;
      let output;
      if (vnode.type === ClientOnlyPlaceholder && vnode.props["client:only"]) {
        output = await renderComponentToIterable(
          result,
          vnode.props["client:display-name"] ?? "",
          null,
          props,
          slots
        );
      } else {
        output = await renderComponentToIterable(
          result,
          typeof vnode.type === "function" ? vnode.type.name : vnode.type,
          vnode.type,
          props,
          slots
        );
      }
      if (typeof output !== "string" && Symbol.asyncIterator in output) {
        let parts = new HTMLParts();
        for await (const chunk of output) {
          parts.append(chunk, result);
        }
        return markHTMLString(parts.toString());
      } else {
        return markHTMLString(output);
      }
    }
  }
  return markHTMLString(`${vnode}`);
}
async function renderElement$1(result, tag, { children, ...props }) {
  return markHTMLString(
    `<${tag}${spreadAttributes(props)}${markHTMLString(
      (children == null || children == "") && voidElementNames.test(tag) ? `/>` : `>${children == null ? "" : await renderJSX(result, children)}</${tag}>`
    )}`
  );
}
function useConsoleFilter() {
  consoleFilterRefs++;
  if (!originalConsoleError) {
    originalConsoleError = console.error;
    try {
      console.error = filteredConsoleError;
    } catch (error) {
    }
  }
}
function finishUsingConsoleFilter() {
  consoleFilterRefs--;
}
function filteredConsoleError(msg, ...rest) {
  if (consoleFilterRefs > 0 && typeof msg === "string") {
    const isKnownReactHookError = msg.includes("Warning: Invalid hook call.") && msg.includes("https://reactjs.org/link/invalid-hook-call");
    if (isKnownReactHookError)
      return;
  }
  originalConsoleError(msg, ...rest);
}

/**
 * shortdash - https://github.com/bibig/node-shorthash
 *
 * @license
 *
 * (The MIT License)
 *
 * Copyright (c) 2013 Bibig <bibig@me.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
const dictionary = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";
const binary = dictionary.length;
function bitwise(str) {
  let hash = 0;
  if (str.length === 0)
    return hash;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    hash = (hash << 5) - hash + ch;
    hash = hash & hash;
  }
  return hash;
}
function shorthash(text) {
  let num;
  let result = "";
  let integer = bitwise(text);
  const sign = integer < 0 ? "Z" : "";
  integer = Math.abs(integer);
  while (integer >= binary) {
    num = integer % binary;
    integer = Math.floor(integer / binary);
    result = dictionary[num] + result;
  }
  if (integer > 0) {
    result = dictionary[integer] + result;
  }
  return sign + result;
}

const voidElementNames = /^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i;
const htmlBooleanAttributes = /^(allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i;
const htmlEnumAttributes = /^(contenteditable|draggable|spellcheck|value)$/i;
const svgEnumAttributes = /^(autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i;
const STATIC_DIRECTIVES = /* @__PURE__ */ new Set(["set:html", "set:text"]);
const toIdent = (k) => k.trim().replace(/(?:(?!^)\b\w|\s+|[^\w]+)/g, (match, index) => {
  if (/[^\w]|\s/.test(match))
    return "";
  return index === 0 ? match : match.toUpperCase();
});
const toAttributeString = (value, shouldEscape = true) => shouldEscape ? String(value).replace(/&/g, "&#38;").replace(/"/g, "&#34;") : value;
const kebab = (k) => k.toLowerCase() === k ? k : k.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
const toStyleString = (obj) => Object.entries(obj).map(([k, v]) => `${kebab(k)}:${v}`).join(";");
function defineScriptVars(vars) {
  let output = "";
  for (const [key, value] of Object.entries(vars)) {
    output += `const ${toIdent(key)} = ${JSON.stringify(value)};
`;
  }
  return markHTMLString(output);
}
function formatList(values) {
  if (values.length === 1) {
    return values[0];
  }
  return `${values.slice(0, -1).join(", ")} or ${values[values.length - 1]}`;
}
function addAttribute(value, key, shouldEscape = true) {
  if (value == null) {
    return "";
  }
  if (value === false) {
    if (htmlEnumAttributes.test(key) || svgEnumAttributes.test(key)) {
      return markHTMLString(` ${key}="false"`);
    }
    return "";
  }
  if (STATIC_DIRECTIVES.has(key)) {
    console.warn(`[astro] The "${key}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${key}={value}\`) instead of the dynamic spread syntax (\`{...{ "${key}": value }}\`).`);
    return "";
  }
  if (key === "class:list") {
    const listValue = toAttributeString(serializeListValue(value), shouldEscape);
    if (listValue === "") {
      return "";
    }
    return markHTMLString(` ${key.slice(0, -5)}="${listValue}"`);
  }
  if (key === "style" && !(value instanceof HTMLString) && typeof value === "object") {
    return markHTMLString(` ${key}="${toAttributeString(toStyleString(value), shouldEscape)}"`);
  }
  if (key === "className") {
    return markHTMLString(` class="${toAttributeString(value, shouldEscape)}"`);
  }
  if (value === true && (key.startsWith("data-") || htmlBooleanAttributes.test(key))) {
    return markHTMLString(` ${key}`);
  } else {
    return markHTMLString(` ${key}="${toAttributeString(value, shouldEscape)}"`);
  }
}
function internalSpreadAttributes(values, shouldEscape = true) {
  let output = "";
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, shouldEscape);
  }
  return markHTMLString(output);
}
function renderElement(name, { props: _props, children = "" }, shouldEscape = true) {
  const { lang: _, "data-astro-id": astroId, "define:vars": defineVars, ...props } = _props;
  if (defineVars) {
    if (name === "style") {
      delete props["is:global"];
      delete props["is:scoped"];
    }
    if (name === "script") {
      delete props.hoist;
      children = defineScriptVars(defineVars) + "\n" + children;
    }
  }
  if ((children == null || children == "") && voidElementNames.test(name)) {
    return `<${name}${internalSpreadAttributes(props, shouldEscape)} />`;
  }
  return `<${name}${internalSpreadAttributes(props, shouldEscape)}>${children}</${name}>`;
}

function componentIsHTMLElement(Component) {
  return typeof HTMLElement !== "undefined" && HTMLElement.isPrototypeOf(Component);
}
async function renderHTMLElement(result, constructor, props, slots) {
  const name = getHTMLElementName(constructor);
  let attrHTML = "";
  for (const attr in props) {
    attrHTML += ` ${attr}="${toAttributeString(await props[attr])}"`;
  }
  return markHTMLString(
    `<${name}${attrHTML}>${await renderSlot(result, slots == null ? void 0 : slots.default)}</${name}>`
  );
}
function getHTMLElementName(constructor) {
  const definedName = customElements.getName(constructor);
  if (definedName)
    return definedName;
  const assignedName = constructor.name.replace(/^HTML|Element$/g, "").replace(/[A-Z]/g, "-$&").toLowerCase().replace(/^-/, "html-");
  return assignedName;
}

const rendererAliases = /* @__PURE__ */ new Map([["solid", "solid-js"]]);
function guessRenderers(componentUrl) {
  const extname = componentUrl == null ? void 0 : componentUrl.split(".").pop();
  switch (extname) {
    case "svelte":
      return ["@astrojs/svelte"];
    case "vue":
      return ["@astrojs/vue"];
    case "jsx":
    case "tsx":
      return ["@astrojs/react", "@astrojs/preact", "@astrojs/solid", "@astrojs/vue (jsx)"];
    default:
      return [
        "@astrojs/react",
        "@astrojs/preact",
        "@astrojs/solid",
        "@astrojs/vue",
        "@astrojs/svelte"
      ];
  }
}
function isFragmentComponent(Component) {
  return Component === Fragment;
}
function isHTMLComponent(Component) {
  return Component && typeof Component === "object" && Component["astro:html"];
}
async function renderFrameworkComponent(result, displayName, Component, _props, slots = {}) {
  var _a, _b;
  if (!Component && !_props["client:only"]) {
    throw new Error(
      `Unable to render ${displayName} because it is ${Component}!
Did you forget to import the component or is it possible there is a typo?`
    );
  }
  const { renderers } = result._metadata;
  const metadata = { displayName };
  const { hydration, isPage, props } = extractDirectives(displayName, _props);
  let html = "";
  let attrs = void 0;
  if (hydration) {
    metadata.hydrate = hydration.directive;
    metadata.hydrateArgs = hydration.value;
    metadata.componentExport = hydration.componentExport;
    metadata.componentUrl = hydration.componentUrl;
  }
  const probableRendererNames = guessRenderers(metadata.componentUrl);
  const validRenderers = renderers.filter((r) => r.name !== "astro:jsx");
  const { children, slotInstructions } = await renderSlots(result, slots);
  let renderer;
  if (metadata.hydrate !== "only") {
    let isTagged = false;
    try {
      isTagged = Component && Component[Renderer];
    } catch {
    }
    if (isTagged) {
      const rendererName = Component[Renderer];
      renderer = renderers.find(({ name }) => name === rendererName);
    }
    if (!renderer) {
      let error;
      for (const r of renderers) {
        try {
          if (await r.ssr.check.call({ result }, Component, props, children)) {
            renderer = r;
            break;
          }
        } catch (e) {
          error ?? (error = e);
        }
      }
      if (!renderer && error) {
        throw error;
      }
    }
    if (!renderer && typeof HTMLElement === "function" && componentIsHTMLElement(Component)) {
      const output = renderHTMLElement(result, Component, _props, slots);
      return output;
    }
  } else {
    if (metadata.hydrateArgs) {
      const passedName = metadata.hydrateArgs;
      const rendererName = rendererAliases.has(passedName) ? rendererAliases.get(passedName) : passedName;
      renderer = renderers.find(
        ({ name }) => name === `@astrojs/${rendererName}` || name === rendererName
      );
    }
    if (!renderer && validRenderers.length === 1) {
      renderer = validRenderers[0];
    }
    if (!renderer) {
      const extname = (_a = metadata.componentUrl) == null ? void 0 : _a.split(".").pop();
      renderer = renderers.filter(
        ({ name }) => name === `@astrojs/${extname}` || name === extname
      )[0];
    }
  }
  if (!renderer) {
    if (metadata.hydrate === "only") {
      throw new AstroError({
        ...AstroErrorData.NoClientOnlyHint,
        message: AstroErrorData.NoClientOnlyHint.message(metadata.displayName),
        hint: AstroErrorData.NoClientOnlyHint.hint(
          probableRendererNames.map((r) => r.replace("@astrojs/", "")).join("|")
        )
      });
    } else if (typeof Component !== "string") {
      const matchingRenderers = validRenderers.filter(
        (r) => probableRendererNames.includes(r.name)
      );
      const plural = validRenderers.length > 1;
      if (matchingRenderers.length === 0) {
        throw new AstroError({
          ...AstroErrorData.NoMatchingRenderer,
          message: AstroErrorData.NoMatchingRenderer.message(
            metadata.displayName,
            (_b = metadata == null ? void 0 : metadata.componentUrl) == null ? void 0 : _b.split(".").pop(),
            plural,
            validRenderers.length
          ),
          hint: AstroErrorData.NoMatchingRenderer.hint(
            formatList(probableRendererNames.map((r) => "`" + r + "`"))
          )
        });
      } else if (matchingRenderers.length === 1) {
        renderer = matchingRenderers[0];
        ({ html, attrs } = await renderer.ssr.renderToStaticMarkup.call(
          { result },
          Component,
          props,
          children,
          metadata
        ));
      } else {
        throw new Error(`Unable to render ${metadata.displayName}!

This component likely uses ${formatList(probableRendererNames)},
but Astro encountered an error during server-side rendering.

Please ensure that ${metadata.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`);
      }
    }
  } else {
    if (metadata.hydrate === "only") {
      html = await renderSlot(result, slots == null ? void 0 : slots.fallback);
    } else {
      ({ html, attrs } = await renderer.ssr.renderToStaticMarkup.call(
        { result },
        Component,
        props,
        children,
        metadata
      ));
    }
  }
  if (renderer && !renderer.clientEntrypoint && renderer.name !== "@astrojs/lit" && metadata.hydrate) {
    throw new AstroError({
      ...AstroErrorData.NoClientEntrypoint,
      message: AstroErrorData.NoClientEntrypoint.message(
        displayName,
        metadata.hydrate,
        renderer.name
      )
    });
  }
  if (!html && typeof Component === "string") {
    const Tag = sanitizeElementName(Component);
    const childSlots = Object.values(children).join("");
    const iterable = renderAstroTemplateResult(
      await renderTemplate`<${Tag}${internalSpreadAttributes(props)}${markHTMLString(
        childSlots === "" && voidElementNames.test(Tag) ? `/>` : `>${childSlots}</${Tag}>`
      )}`
    );
    html = "";
    for await (const chunk of iterable) {
      html += chunk;
    }
  }
  if (!hydration) {
    return async function* () {
      if (slotInstructions) {
        yield* slotInstructions;
      }
      if (isPage || (renderer == null ? void 0 : renderer.name) === "astro:jsx") {
        yield html;
      } else {
        yield markHTMLString(html.replace(/\<\/?astro-slot\>/g, ""));
      }
    }();
  }
  const astroId = shorthash(
    `<!--${metadata.componentExport.value}:${metadata.componentUrl}-->
${html}
${serializeProps(
      props,
      metadata
    )}`
  );
  const island = await generateHydrateScript(
    { renderer, result, astroId, props, attrs },
    metadata
  );
  let unrenderedSlots = [];
  if (html) {
    if (Object.keys(children).length > 0) {
      for (const key of Object.keys(children)) {
        if (!html.includes(key === "default" ? `<astro-slot>` : `<astro-slot name="${key}">`)) {
          unrenderedSlots.push(key);
        }
      }
    }
  } else {
    unrenderedSlots = Object.keys(children);
  }
  const template = unrenderedSlots.length > 0 ? unrenderedSlots.map(
    (key) => `<template data-astro-template${key !== "default" ? `="${key}"` : ""}>${children[key]}</template>`
  ).join("") : "";
  island.children = `${html ?? ""}${template}`;
  if (island.children) {
    island.props["await-children"] = "";
  }
  async function* renderAll() {
    if (slotInstructions) {
      yield* slotInstructions;
    }
    yield { type: "directive", hydration, result };
    yield markHTMLString(renderElement("astro-island", island, false));
  }
  return renderAll();
}
function sanitizeElementName(tag) {
  const unsafe = /[&<>'"\s]+/g;
  if (!unsafe.test(tag))
    return tag;
  return tag.trim().split(unsafe)[0].trim();
}
async function renderFragmentComponent(result, slots = {}) {
  const children = await renderSlot(result, slots == null ? void 0 : slots.default);
  if (children == null) {
    return children;
  }
  return markHTMLString(children);
}
async function renderHTMLComponent(result, Component, _props, slots = {}) {
  const { slotInstructions, children } = await renderSlots(result, slots);
  const html = Component.render({ slots: children });
  const hydrationHtml = slotInstructions ? slotInstructions.map((instr) => stringifyChunk(result, instr)).join("") : "";
  return markHTMLString(hydrationHtml + html);
}
function renderComponent(result, displayName, Component, props, slots = {}) {
  if (isPromise(Component)) {
    return Promise.resolve(Component).then((Unwrapped) => {
      return renderComponent(result, displayName, Unwrapped, props, slots);
    });
  }
  if (isFragmentComponent(Component)) {
    return renderFragmentComponent(result, slots);
  }
  if (isHTMLComponent(Component)) {
    return renderHTMLComponent(result, Component, props, slots);
  }
  if (isAstroComponentFactory(Component)) {
    return createAstroComponentInstance(result, displayName, Component, props, slots);
  }
  return renderFrameworkComponent(result, displayName, Component, props, slots);
}
function renderComponentToIterable(result, displayName, Component, props, slots = {}) {
  const renderResult = renderComponent(result, displayName, Component, props, slots);
  if (isAstroComponentInstance(renderResult)) {
    return renderResult.render();
  }
  return renderResult;
}

const uniqueElements = (item, index, all) => {
  const props = JSON.stringify(item.props);
  const children = item.children;
  return index === all.findIndex((i) => JSON.stringify(i.props) === props && i.children == children);
};
async function* renderExtraHead(result, base) {
  yield base;
  for (const part of result.extraHead) {
    yield* renderChild(part);
  }
}
function renderAllHeadContent(result) {
  const styles = Array.from(result.styles).filter(uniqueElements).map((style) => renderElement("style", style));
  result.styles.clear();
  const scripts = Array.from(result.scripts).filter(uniqueElements).map((script, i) => {
    return renderElement("script", script, false);
  });
  const links = Array.from(result.links).filter(uniqueElements).map((link) => renderElement("link", link, false));
  const baseHeadContent = markHTMLString(links.join("\n") + styles.join("\n") + scripts.join("\n"));
  if (result.extraHead.length > 0) {
    return renderExtraHead(result, baseHeadContent);
  } else {
    return baseHeadContent;
  }
}
function createRenderHead(result) {
  result._metadata.hasRenderedHead = true;
  return renderAllHeadContent.bind(null, result);
}
const renderHead = createRenderHead;
async function* maybeRenderHead(result) {
  if (result._metadata.hasRenderedHead) {
    return;
  }
  yield createRenderHead(result)();
}

typeof process === "object" && Object.prototype.toString.call(process) === "[object process]";

function spreadAttributes(values, _name, { class: scopedClassName } = {}) {
  let output = "";
  if (scopedClassName) {
    if (typeof values.class !== "undefined") {
      values.class += ` ${scopedClassName}`;
    } else if (typeof values["class:list"] !== "undefined") {
      values["class:list"] = [values["class:list"], scopedClassName];
    } else {
      values.class = scopedClassName;
    }
  }
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, true);
  }
  return markHTMLString(output);
}

const AstroJSX = "astro:jsx";
const Empty = Symbol("empty");
const toSlotName = (slotAttr) => slotAttr;
function isVNode(vnode) {
  return vnode && typeof vnode === "object" && vnode[AstroJSX];
}
function transformSlots(vnode) {
  if (typeof vnode.type === "string")
    return vnode;
  const slots = {};
  if (isVNode(vnode.props.children)) {
    const child = vnode.props.children;
    if (!isVNode(child))
      return;
    if (!("slot" in child.props))
      return;
    const name = toSlotName(child.props.slot);
    slots[name] = [child];
    slots[name]["$$slot"] = true;
    delete child.props.slot;
    delete vnode.props.children;
  }
  if (Array.isArray(vnode.props.children)) {
    vnode.props.children = vnode.props.children.map((child) => {
      if (!isVNode(child))
        return child;
      if (!("slot" in child.props))
        return child;
      const name = toSlotName(child.props.slot);
      if (Array.isArray(slots[name])) {
        slots[name].push(child);
      } else {
        slots[name] = [child];
        slots[name]["$$slot"] = true;
      }
      delete child.props.slot;
      return Empty;
    }).filter((v) => v !== Empty);
  }
  Object.assign(vnode.props, slots);
}
function markRawChildren(child) {
  if (typeof child === "string")
    return markHTMLString(child);
  if (Array.isArray(child))
    return child.map((c) => markRawChildren(c));
  return child;
}
function transformSetDirectives(vnode) {
  if (!("set:html" in vnode.props || "set:text" in vnode.props))
    return;
  if ("set:html" in vnode.props) {
    const children = markRawChildren(vnode.props["set:html"]);
    delete vnode.props["set:html"];
    Object.assign(vnode.props, { children });
    return;
  }
  if ("set:text" in vnode.props) {
    const children = vnode.props["set:text"];
    delete vnode.props["set:text"];
    Object.assign(vnode.props, { children });
    return;
  }
}
function createVNode(type, props) {
  const vnode = {
    [Renderer]: "astro:jsx",
    [AstroJSX]: true,
    type,
    props: props ?? {}
  };
  transformSetDirectives(vnode);
  transformSlots(vnode);
  return vnode;
}

const slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
async function check(Component, props, { default: children = null, ...slotted } = {}) {
  if (typeof Component !== "function")
    return false;
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  try {
    const result = await Component({ ...props, ...slots, children });
    return result[AstroJSX];
  } catch (e) {
  }
  return false;
}
async function renderToStaticMarkup(Component, props = {}, { default: children = null, ...slotted } = {}) {
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  const { result } = this;
  const html = await renderJSX(result, createVNode(Component, { ...props, ...slots, children }));
  return { html };
}
var server_default = {
  check,
  renderToStaticMarkup
};

const $$Astro$A = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/components/Header.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$A, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead($$result)}<div class="c-accessibility-menu">
  <div class="c-accessibility-menu__item">
    <a href="#main" class="c-accessibility-menu__link">Skip to main content</a>
  </div>
</div>

<button class="c-mobile-menu-toggle" aria-label="Open menu">
  <i class="fa-sharp fa-regular fa-bars"></i>
</button>

<header class="c-header">
  <div class="c-header__top">
    <div class="c-header__logo">
      <a href="/" class="c-header__logo-link">
        <img src="https://d33wubrfki0l68.cloudfront.net/de4eb2840bd995fff8693e59dfbff5e8f7036730/36519/img/logo.png" alt="Elliot Lafave Logo" class="c-header__logo-image">
        <p>elliotlafave.com</p>
      </a>
    </div>

    <div class="c-header__authentication" id="headerAuthLoggedOut">
      <a href="/pages/login/signup.html" class="c-header__authentication-link storeBackLink">Sign up</a>
      <a href="/pages/login/login.html" class="c-header__authentication-link storeBackLink">Log in</a>
    </div>
    <div class="c-header__authentication" id="headerAuthLoggedIn" style="display: none;">
      <a href="/account.html" class="c-header__authentication-link">My account</a>
      <a href="/pages/login/login.html" class="c-header__authentication-link" id="logOutButton">Log out</a>
    </div>
  </div>
  <div class="c-header__bottom">
    <nav class="c-header__navigation">
      <ul class="c-header__navigation-list">
        <li class="c-header__navigation-item">
          <a href="/index.html" class="c-header__navigation-link">Home</a>
        </li>
        <li class="c-header__navigation-item">
          <a href="/CV.html" class="c-header__navigation-link">CV</a>
        </li>
        <li class="c-header__navigation-item is-primary">
          <a href="/portfolio.html" class="c-header__navigation-link">Portfolio <i class="c-header__chevron fa-sharp fa-regular fa-chevron-down"></i></a>
          <ul class="c-header__navigation-list c-header__sub-navigation">
            <li class="c-header__navigation-item">
              <a href="/portfolio.html#ProjectsAppContainer" class="c-header__navigation-link">Projects</a>
            </li>
          </ul>
        </li>
        <li class="c-header__navigation-item is-primary">
          <a href="/pages/Articles/index.html" class="c-header__navigation-link">Articles <i class="c-header__chevron fa-sharp fa-regular fa-chevron-down"></i></a>
          <ul class="c-header__navigation-list c-header__sub-navigation">
            <li class="c-header__navigation-item">
              <a href="/pages/Articles/Personal/index.html" class="c-header__navigation-link">Personal</a>
            </li>
            <li class="c-header__navigation-item">
              <a href="/pages/articles/gmc%20work/index.html" class="c-header__navigation-link">Work</a>
            </li>
            <li class="c-header__navigation-item">
              <a href="/pages/Articles/QA/index.html" class="c-header__navigation-link">Apprenticeship</a>
            </li>
          </ul>
        </li>
        <li class="c-header__navigation-item">
          <a href="/contact-me.html" class="c-header__navigation-link">Contact</a>
        </li>
      </ul>
    </nav>
    <div class="toggle-container">
      <i class="fa-sharp fa-regular fa-sun"></i>
      <input type="checkbox" id="checkboxSlider" class="toggle" tabindex="-1">
      <label for="checkboxSlider" class="darkModeLabel">
        <div class="ball"></div>
      </label>
      <i class="fa-sharp fa-regular fa-moon"></i>
    </div>
  </div>
</header>`;
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/components/Header.astro");

const $$Astro$z = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/components/Footer.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$z, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`<!-- Footer --><!-- <div class="c-strip">
  <h2>Need a website?</h2>
  <a
    href="/Get a quote/"
    class="c-button c-button--medium c-button--semi-round c-button--primary-secondary c-button--primary-secondary--with-border"
    aria-label="Aria label"
  >
    Get a quote today
  </a>
</div> -->${maybeRenderHead($$result)}<footer class="c-footer">
  <div class="c-footer__head">
    <a class="c-footer__head-site-name" href="./index.html">elliotlafave.com</a>
    <div class="c-footer__head-links">
      <a href="/index">Home</a>
      <a href="/CV">CV</a>
      <a href="/portfolio">Portfolio</a>
    </div>
  </div>
  <div class="c-footer__body">
    <div class="c-footer__body-link-grid">
      <div class="c-footer__body-link-group">
        <a href="/pages/Login/login.html">Login</a>
        <a href="/pages/Login/signUp.html">Sign up</a>
        <a href="/account.html">My account</a>
      </div>
      <!-- <div class="c-footer__body-link-group">
        <a href="https://tools.elliotlafave.com/#/">Developer tools</a>
        <a href="https://uptime.elliotlafave.com/status/websites">Uptime</a>
        <a href="https://components.elliotlafave.com/">Component library</a>
        <a href="https://zeroheight.com/02f0b0962">Style guide</a>
      </div> -->
      <div class="c-footer__body-link-group">
        <!-- <a href="/Get a quote/">Get a quote</a> -->
        <a href="/pages/Articles/index.html">Articles</a>
        <a href="/contact-me.html">Contact me</a>
        <a href="/portfolio.html#all-projects">Projects</a>
      </div>
    </div>
    <div class="c-footer__body-social">
      <a href="https://www.linkedin.com/in/elliot-la-fave-4215b6222/?locale=es_ES" class="c-button c-button--medium c-button--square c-button--ghost" aria-label="Aria label">
        <img src="/img/linkedin-brands.svg" alt="Linkedin Logo">
        Linkedin
      </a>
      <a href="https://codepen.io/elliotlafave123" class="c-button c-button--medium c-button--square c-button--ghost" aria-label="Aria label">
        <img src="/img/codepen-brands.svg" alt="Codepen Logo">
        Codepen
      </a>
      <a href="https://github.com/elliotlafave123/elliotlafave123.github.io" class="c-button c-button--medium c-button--square c-button--ghost" aria-label="Aria label">
        <img src="/img/github-brands.svg" alt="GitHub Logo">
        GitHub
      </a>
    </div>
  </div>
  <div class="c-footer__branding">
    <div class="c-footer__branding-logo">
      <a href="/index.html"><img src="/img/logo.png" alt="Footer Logo"></a>
      <p><i class="fa-sharp fa-regular fa-copyright"></i> <span id="currentYear">0000</span> Elliot La Fave</p>
    </div>
    <div class="c-footer__branding-links">
      <a href="https://elliotlafave.com/privacypolicy">Privacy policy</a>
      <a href="https://elliotlafave.com/termsandconditions">Terms of service</a>
      <a href="https://elliotlafave.com/cookiepolicy">Cookie policy</a>
    </div>
  </div>
</footer>`;
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/components/Footer.astro");

const $$Astro$y = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/components/Footer/FooterBase.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$FooterBase = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$y, $$props, $$slots);
  Astro2.self = $$FooterBase;
  return renderTemplate`<!-- Footer -->${renderComponent($$result, "Footer", $$Footer, {})}`;
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/components/Footer/FooterBase.astro");

var __freeze$5 = Object.freeze;
var __defProp$5 = Object.defineProperty;
var __template$5 = (cooked, raw) => __freeze$5(__defProp$5(cooked, "raw", { value: __freeze$5(raw || cooked.slice()) }));
var _a$5;
const $$Astro$x = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/layouts/BaseHead.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$x, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title } = Astro2.props;
  return renderTemplate(_a$5 || (_a$5 = __template$5([`<head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZFS3PHN0E0"><\/script>
  <script lang="js">
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-ZFS3PHN0E0");
  <\/script>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" type="../image/png" href="../img/logo.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Zen+Kaku+Gothic+New:wght@300;400;500;700;900&display=swap" rel="stylesheet">
  <script src="https://kit.fontawesome.com/ecfebc6e17.js" crossorigin="anonymous"><\/script>
  <meta name="description" content="Elliot La Fave's personal website and portfolio. A collection of all my work and my CV.">
  <meta name="keywords" content="Elliotlafave, Elliot, la, fave, web, design, cv, portfolio, projects, javascript, nodejs, manchester, astro, software, developer, apprentice">
  <meta name="author" content="Elliot La Fave">
  <script src="https://www.google.com/recaptcha/api.js" async defer><\/script>

  <script defer src="/scripts/SiteFrontendTSBundle.js"><\/script>

  <title>`, "</title>\n", "</head>\n"])), title + " | Elliotlafave.com", renderHead($$result));
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/layouts/BaseHead.astro");

const $$Astro$w = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/layouts/DefaultLayout.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$DefaultLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$DefaultLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
  ${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title })}
  ${maybeRenderHead($$result)}<body>
    ${renderComponent($$result, "Header", $$Header, {})}
    <main id="main">
      ${renderSlot($$result, $$slots["default"])}
    </main>
    ${renderComponent($$result, "Footer", $$FooterBase, {})}
  </body></html>`;
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/layouts/DefaultLayout.astro");

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$1 = {
  name: "GenericButton",
  props: {
    href: String,
    id: String,
    type: String,
    ariaLabel: String,
    corner: {
      type: String,
      default: "semi-round",
    },
    size: {
      type: String,
      default: "medium",
    },
    color: {
      type: String,
      default: "primary",
    },
    button: Boolean,
    fullWidth: Boolean,
    centerText: Boolean,
    withBorder: Boolean,
  },
  setup() {},
};

function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.button) {
    _push(`<button${ssrRenderAttrs(mergeProps({
      id: $props.id,
      type: $props.type,
      "aria-label": $props.ariaLabel,
      class: [
      'c-button',
      `c-button--${$props.color}`,
      `c-button--${$props.size}`,
      `c-button--${$props.corner}`,
      $props.fullWidth && 'c-button--full-width',
      $props.centerText && 'c-button--center-text',
    ]
    }, _attrs))}>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</button>`);
  } else {
    _push(`<a${ssrRenderAttrs(mergeProps({
      id: $props.id,
      "aria-label": $props.ariaLabel,
      href: $props.href,
      class: [
      'c-button',
      `c-button--${$props.color}`,
      `c-button--${$props.size}`,
      `c-button--${$props.corner}`,
      $props.fullWidth && 'c-button--full-width',
      $props.centerText && 'c-button--center-text',
      $props.withBorder && `c-button--${$props.color}--with-border`,
    ]
    }, _attrs))}>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</a>`);
  }
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/GenericButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined
};
const GenericButton = /*#__PURE__*/_export_sfc(_sfc_main$1, [['ssrRender',_sfc_ssrRender$1]]);

const $$Astro$v = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/index.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$Index$5 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$Index$5;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Home", "class": "astro-A6MAWPUK" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<section class="c-container astro-A6MAWPUK" id="first-section">
    <h1 class="astro-A6MAWPUK">HI THERE,<br class="mobile-only astro-A6MAWPUK"> IM A FULL STACK WEBSITE DEVELOPER</h1>
    <div class="c-flex-strip c-flex-strip--row c-flex-strip--align-flex-start c-flex-strip--justify-flex-start u-margin-bottom-large astro-A6MAWPUK" style="gap: 2rem;">
      ${renderComponent($$result, "GenericButton", GenericButton, { "href": "/Get a quote", "corner": "semi-round", "size": "large", "color": "primary", "withBorder": "true", "class": "astro-A6MAWPUK" }, { "default": () => renderTemplate`
        Get a quote
      ` })}
      ${renderComponent($$result, "GenericButton", GenericButton, { "href": "/contact-me", "corner": "semi-round", "size": "large", "color": "primary-secondary", "withBorder": "true", "class": "astro-A6MAWPUK" }, { "default": () => renderTemplate`
        Contact me
      ` })}
    </div>
  </section><div class="wave-top wavePattern astro-A6MAWPUK">
    <img src="/img/WavePatternDark.svg" alt="" class="wave-top__img hide-mobile astro-A6MAWPUK" id="wave1-dark">
    <img src="/img/WavePatternLight.svg" alt="" class="wave-top__img hide-mobile astro-A6MAWPUK" id="wave1-light">
    <img src="/img/WavePatternDarkMob.svg" alt="" class="wave-top__img mobile-only astro-A6MAWPUK" id="wave1-dark-mob">
    <img src="/img/WavePatternLightMob.svg" alt="" class="wave-top__img mobile-only astro-A6MAWPUK" id="wave1-light-mob">
  </div><section class="c-container astro-A6MAWPUK" id="who-am-i">
    <img src="img/profile-pic.svg" alt="" class="astro-A6MAWPUK">
    <h2 class="astro-A6MAWPUK">Who am I?</h2>
    <p class="astro-A6MAWPUK">I am a full stack website developer based in Manchester, UK.</p>
    <p class="astro-A6MAWPUK">
      I have a passion for creating websites that are not only visually appealing but also functional and user friendly.
    </p>
    ${renderComponent($$result, "GenericButton", GenericButton, { "href": "CV/", "corner": "semi-round", "size": "large", "color": "primary", "withBorder": "true", "class": "astro-A6MAWPUK" }, { "default": () => renderTemplate`
      View My CV
    ` })}
  </section><section class="c-container astro-A6MAWPUK" id="tech-stack">
    <!-- <img src="img/percentages.png" alt="" class="skills__img"> -->
    <h2 class="astro-A6MAWPUK">My tech stack</h2>
    <div class="tech-stack__grid astro-A6MAWPUK">
      <div class="tech-stack__item tech-stack__item-1 astro-A6MAWPUK">
        <img src="img/TechStack/netlify.svg" alt="" class="tech-stack__img tech-stack__img-1 astro-A6MAWPUK">
        <p class="tech-stack__text tech-stack__text-1 astro-A6MAWPUK">Netlify</p>
      </div>
      <div class="tech-stack__item tech-stack__item-2 astro-A6MAWPUK">
        <img src="img/TechStack/html5.svg" alt="" class="tech-stack__img tech-stack__img-2 astro-A6MAWPUK">
        <p class="tech-stack__text tech-stack__text-2 astro-A6MAWPUK">HTML</p>
      </div>
      <div class="tech-stack__item tech-stack__item-3 astro-A6MAWPUK">
        <img src="img/TechStack/css.svg" alt="" class="tech-stack__img tech-stack__img-3 astro-A6MAWPUK">
        <p class="tech-stack__text tech-stack__text-3 astro-A6MAWPUK">CSS</p>
      </div>
      <div class="tech-stack__item tech-stack__item-4 astro-A6MAWPUK">
        <img src="img/TechStack/js.svg" alt="" class="tech-stack__img tech-stack__img-4 astro-A6MAWPUK">
        <p class="tech-stack__text tech-stack__text-4 astro-A6MAWPUK">JavaScript</p>
      </div>
      <div class="tech-stack__item tech-stack__item-5 astro-A6MAWPUK">
        <img src="img/TechStack/sass.svg" alt="" class="tech-stack__img tech-stack__img-5 astro-A6MAWPUK">
        <p class="tech-stack__text tech-stack__text-5 astro-A6MAWPUK">SCSS</p>
      </div>
      <div class="tech-stack__item tech-stack__item-6 astro-A6MAWPUK">
        <img src="img/TechStack/git-alt.svg" alt="" class="tech-stack__img tech-stack__img-6 astro-A6MAWPUK">
        <p class="tech-stack__text tech-stack__text-6 astro-A6MAWPUK">GitHub</p>
      </div>
      <div class="tech-stack__item tech-stack__item-7 astro-A6MAWPUK">
        <img src="img/TechStack/node-js.svg" alt="" class="tech-stack__img tech-stack__img-7 astro-A6MAWPUK">
        <p class="tech-stack__text tech-stack__text-7 astro-A6MAWPUK">Node JS</p>
      </div>
      <div class="tech-stack__item tech-stack__item-8 astro-A6MAWPUK">
        <img src="img/TechStack/postcss.svg" alt="" class="tech-stack__img tech-stack__img-8 astro-A6MAWPUK">
        <p class="tech-stack__text tech-stack__text-8 astro-A6MAWPUK">Post CSS</p>
      </div>
      <div class="tech-stack__item tech-stack__item-9 astro-A6MAWPUK">
        <img src="img/TechStack/mongodb.svg" alt="" class="tech-stack__img tech-stack__img-9 astro-A6MAWPUK">
        <p class="tech-stack__text tech-stack__text-9 astro-A6MAWPUK">mongo DB</p>
      </div>
      <div class="tech-stack__item tech-stack__item-10 astro-A6MAWPUK">
        <img src="img/TechStack/api.png" alt="" class="tech-stack__img tech-stack__img-10 astro-A6MAWPUK">
        <p class="tech-stack__text tech-stack__text-10 astro-A6MAWPUK">API</p>
      </div>
      <div class="tech-stack__item tech-stack__item-11 astro-A6MAWPUK">
        <img src="img/TechStack/figma.svg" alt="" class="tech-stack__img tech-stack__img-11 astro-A6MAWPUK">
        <p class="tech-stack__text tech-stack__text-11 astro-A6MAWPUK">Figma</p>
      </div>
      <div class="tech-stack__item tech-stack__item-12 astro-A6MAWPUK">
        <img src="img/TechStack/docker.webp" alt="" class="tech-stack__img tech-stack__img-12 astro-A6MAWPUK">
        <p class="tech-stack__text tech-stack__text-12 astro-A6MAWPUK">Docker</p>
      </div>
    </div>
  </section><section class="c-container astro-A6MAWPUK" id="featuredIndex">
    <h2 class="astro-A6MAWPUK">Featured projects</h2>

    <div class="c-grid u-margin-bottom-medium astro-A6MAWPUK" style="--gap: 3rem" id="featuredCardsContainer">
      <!-- JavaScript Inserted Data Here -->
      <div class="loader astro-A6MAWPUK"></div>
    </div>

    ${renderComponent($$result, "GenericButton", GenericButton, { "href": "/portfolio/", "corner": "semi-round", "size": "large", "color": "primary", "withBorder": "true", "class": "astro-A6MAWPUK" }, { "default": () => renderTemplate`
      All projects
    ` })}
  </section>` })}

`;
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/index.astro");

const $$file$p = "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/index.astro";
const $$url$p = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$5,
	file: $$file$p,
	url: $$url$p
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze$4 = Object.freeze;
var __defProp$4 = Object.defineProperty;
var __template$4 = (cooked, raw) => __freeze$4(__defProp$4(cooked, "raw", { value: __freeze$4(raw || cooked.slice()) }));
var _a$4;
const $$Astro$u = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/components/Forms/QuoteForm.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$QuoteForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$QuoteForm;
  return renderTemplate(_a$4 || (_a$4 = __template$4(["", '<section class="c-container">\n  <h1 id="contactme">Get a quote</h1>\n\n  <form id="js-client-screening-form" name="get-a-quote" method="POST" class="c-form">\n    <div class="c-form__element">\n      <label for="fullName" class="c-form__label">Full name<span class="c-form__required">*</span></label>\n      <input id="fullName" name="fullName" class="c-text-input" type="text" required>\n    </div>\n\n    <div class="c-form__element">\n      <label for="email" class="c-form__label">Email address<span class="c-form__required">*</span></label>\n      <input id="email" name="email" class="c-text-input" type="email" required>\n    </div>\n\n    <div class="c-radio-group">\n      <label class="c-form__label">Will your project require a website or an application?<span class="c-form__required">*</span></label>\n      <span class="c-form__hint">Please select one.</span>\n      <label class="c-radio-button">\n        <input id="website" aria-label="aria label for the radio 1" class="c-radio-button__hidden-radio" type="radio" name="websiteOrApplication" value="website">\n        <span class="c-radio-button__custom-button"></span>\n        <span class="c-radio-button__text">Website</span>\n      </label>\n      <label class="c-radio-button">\n        <input id="application" aria-label="aria label for the radio 2" class="c-radio-button__hidden-radio" type="radio" name="websiteOrApplication" value="application">\n        <span class="c-radio-button__custom-button"></span>\n        <span class="c-radio-button__text">Application</span>\n      </label>\n    </div>\n\n    <div class="c-form__element">\n      <label for="budget" class="c-form__label">What is your budget?<span class="c-form__required">*</span></label>\n      <span class="c-form__hint">Select the budget you have allocated for this project.</span>\n      <div class="c-select__container">\n        <select id="selectId" name="budget" class="c-select">\n          <option selected disabled hidden>Select an option</option>\n          <option value="0-500">\xA30 - \xA3500</option>\n          <option value="500-1000">\xA3500 - \xA31000</option>\n          <option value="1000-2000">\xA31000 - \xA32000</option>\n          <option value="2000-5000">\xA32000 - \xA35000</option>\n          <option value="5000-10000">\xA35000 - \xA310000</option>\n          <option value="10000+">\xA310000+</option>\n        </select>\n      </div>\n    </div>\n\n    <div class="c-form__element">\n      <label for="businessDescription" class="c-form__label">How would you describe your business or organization?</label>\n      <span class="c-form__hint">Please provide a brief description of your business, including what products or services you offer.</span>\n      <textarea id="businessDescription" name="businessDescription" class="c-text-area" rows="" maxlength=""></textarea>\n    </div>\n\n    <div class="c-radio-group">\n      <label class="c-form__label">Is your business focused on products or services?<span class="c-form__required">*</span></label>\n      <span class="c-form__hint">Please select one.</span>\n      <label class="c-radio-button">\n        <input id="product-radio" aria-label="aria label for the radio 1" class="c-radio-button__hidden-radio" type="radio" name="productOrService" value="product" tabindex="0">\n        <span class="c-radio-button__custom-button"></span>\n        <span class="c-radio-button__text">Product</span>\n      </label>\n      <label class="c-radio-button">\n        <input id="service-radio" aria-label="aria label for the radio 2" class="c-radio-button__hidden-radio" type="radio" name="productOrService" value="service" tabindex="0">\n        <span class="c-radio-button__custom-button"></span>\n        <span class="c-radio-button__text">Service</span>\n      </label>\n    </div>\n\n    <!-- Public -->\n    <div class="g-recaptcha u-margin-top-small" data-sitekey="6LeiJF8iAAAAAO25BEZfbxbaSEaw55cShZLI761E" data-callback="recaptcha_callback">\n    </div>\n    <!-- Local -->\n    <!-- <div\n      class="g-recaptcha u-margin-top-small"\n      data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"\n      data-callback="recaptcha_callback"\n    >\n    </div> -->\n\n    <input name="submitForm" value="Get a quote" class="c-button c-button--large c-button--semi-round c-button--primary c-button--primary--with-border u-margin-top-small" type="submit" form="get-a-quote" id="postContactMeFormButton" aria-disabled="true" disabled>\n  </form>\n</section>\n\n<script lang="js" defer>\n  function recaptcha_callback() {\n    var postContactMeFormButton = document.getElementById("postContactMeFormButton");\n    if (document.querySelector("form")) {\n      postContactMeFormButton.removeAttribute("disabled");\n      postContactMeFormButton.removeAttribute("aria-disabled");\n    }\n  }\n<\/script>'])), maybeRenderHead($$result));
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/components/Forms/QuoteForm.astro");

const $$Astro$t = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/layouts/BaseLayout.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
  ${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title })}
  ${maybeRenderHead($$result)}<body>
    ${renderComponent($$result, "Header", $$Header, {})}
    <main id="main">
      ${renderSlot($$result, $$slots["default"])}
    </main>
    ${renderComponent($$result, "Footer", $$FooterBase, {})}
  </body></html>`;
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/layouts/BaseLayout.astro");

const $$Astro$s = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/Get a quote.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$GetAQuote = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$GetAQuote;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Get a quote" }, { "default": () => renderTemplate`${renderComponent($$result, "QuoteForm", $$QuoteForm, {})}` })}`;
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/Get a quote.astro");

const $$file$o = "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/Get a quote.astro";
const $$url$o = "/Get a quote";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$GetAQuote,
	file: $$file$o,
	url: $$url$o
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$r = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/components/CommentSection.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$CommentSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$CommentSection;
  const { streamID } = Astro2.props;
  return renderTemplate`<!-- Comments Section -->${maybeRenderHead($$result)}<section class="comments-container"${addAttribute(streamID, "data-stream")} id="commentStreamContainer">
  <h2 id="comments">Comments</h2>
  <div>
    <form class="add-comment-container" onsubmit="return false">
      <div class="add-comment-container-notAllowed">
        <a id="logInButton" class="c-button c-button--large c-button--semi-round c-button--primary c-button--primary--with-border storeBackLink u-margin-right-small" href="/pages/Login/login.html">Log In</a>
        <a id="signUpButton" class="c-button c-button--large c-button--semi-round c-button--primary-secondary c-button--primary-secondary--with-border storeBackLink" href="/pages/Login/signUp.html">Sign Up</a>
        <a id="verifyEmailButton" class="btn btn-purple-small btn-purple-small-warning storeBackLink" href="/pages/Login/verifyEmail.html">Verify Email</a>
      </div>
      <label for="commentTextarea">Enter your comment...</label>
      <textarea placeholder="Type your comment in here..." name="commentTextarea" id="commentTextarea" minlength="3" maxlength="120" required></textarea>
      <input type="submit" value="Publish" id="publishCommentButton">
    </form>
  </div>
  <div id="InsertCommentsContainer"></div>
</section>`;
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/components/CommentSection.astro");

const $$Astro$q = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/layouts/ArticleLayout.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$ArticleLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$ArticleLayout;
  const { title, date, time, streamID } = Astro2.props;
  return renderTemplate`<html lang="en">
  ${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title })}
  ${maybeRenderHead($$result)}<body>
    ${renderComponent($$result, "Header", $$Header, {})}
    <main id="main">
      <!-- --- Article --- -->
      <section class="article">
        <!-- Interactions -->
        <div class="breadcrumb"></div>
        <div class="article__interactions">
          <div class="article__interactions--section">
            <a href="../index.html" id="first-section" class="c-button c-button--large c-button--semi-round c-button--gray-secondary c-button--gray-secondary--with-border" aria-label="Go to previous page">
              <i class="fa-sharp fa-regular fa-arrow-left" aria-hidden="true"></i>
              Go back
            </a>
          </div>
        </div>
        <div class="article__header">
          <h1>${title}</h1>

          <div class="article__header-info">
            <span>Elliot La Fave</span>
            <p>&#183;</p>
            <span>${date}</span>
            <p>&#183;</p>
            <span>${time}</span>
          </div>

          ${renderSlot($$result, $$slots["default"])}
        </div>
      </section>
    </main>

    ${renderComponent($$result, "CommentSection", $$CommentSection, { "streamID": streamID })}
    ${renderComponent($$result, "Footer", $$Footer, {})}
  </body></html>`;
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/layouts/ArticleLayout.astro");

const $$Astro$p = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/My Process.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$MyProcess = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$MyProcess;
  return renderTemplate`${renderComponent($$result, "ArticleLayout", $$ArticleLayout, { "title": "My Process", "date": "dd/mm/yyyy", "time": "00:00pm", "streamID": "" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<div class="article__section" id="Development Process">
    <h2>Development Process</h2>
    <p>
      Building a website requires a well-defined process that ensures the final product is functional and aesthetically
      pleasing. As a website developer, I've developed a process that leverages the Agile methodology to ensure the
      delivery of high-quality websites that meet my clients' needs. Here is an overview of my website development
      process.
    </p>
  </div><div class="article__section" id="The Agile Principles">
    <h2>The Agile Principles</h2>
    <p>
      The Agile principles are a set of values and principles that guide the development of software. These principles
      include:
    </p>

    <div class="article__user-story">
      <ul class="u-margin-bottom-medium">
        <li>Individuals and interactions over processes and tools</li>
        <li>Working software over comprehensive documentation</li>
        <li>Customer collaboration over contract negotiation</li>
        <li>Responding to change over following a plan</li>
      </ul>
    </div>

    <p>
      I apply these principles in my website development process to ensure that I deliver high-quality websites that
      meet my clients' needs. For example, I prioritize communication and collaboration with clients and team members to
      ensure that everyone is on the same page, and I adapt to changing requirements quickly.
    </p>
  </div><div class="article__section" id="RequirementsGathering">
    <h2>Requirements Gathering</h2>
    <p>
      The first step in my website development process is to gather requirements for the application. This involves
      meeting with clients to identify their goals, target audience, and the features they want in their website. I use
      a combination of techniques such as interviews, surveys, and prototyping to ensure I understand the client's
      requirements fully. This helps me define the scope of the project and establish clear goals.
    </p>

    <p>
      To ensure that the requirements are captured accurately, I use a user story format. User stories are a simple way
      to describe a feature from the perspective of the user. They help me understand what the user wants to achieve and
      why. A user story typically follows the format:
    </p>

    <div class="article__user-story">
      <p class="u-margin-bottom-medium">
        As a <span class="u-bold">user type</span>, I want to <span class="u-bold">perform an action</span> so that I can
        <span class="u-bold">achieve a goal</span>.
      </p>
    </div>

    <p>
      Once I have gathered all the requirements, I create a prioritized list of features and requirements. This helps me
      manage the scope of the project and ensure that the most critical features are developed first. I work closely
      with the client to ensure that they are involved in the process and have a clear understanding of the project's
      goals and requirements.
    </p>

    <p>Some of the techniques I use for requirements gathering include:</p>

    <div class="article__user-story">
      <ul class="u-margin-bottom-medium">
        <li>Interviews with stakeholders and users</li>
        <li>Surveys to gather feedback from users</li>
        <li>Competitor analysis to identify industry trends and best practices</li>
        <li>Prototyping to validate requirements and get feedback from users</li>
      </ul>
    </div>

    <p>
      By using a structured approach to requirements gathering, I can ensure that the website meets the client's needs
      and provides value to the users.
    </p>
  </div><div class="article__section" id="Design">
    <h2>Design</h2>
    <p>
      Once I have a clear understanding of the client's requirements, I move on to the design phase. In this phase, I
      create a wireframe, which is a visual representation of the website's layout, structure, and navigation. I also
      work on the website's visual design, such as the color scheme, typography, and imagery, to create a consistent and
      engaging user experience. This helps me to ensure that the website design meets the client's requirements and
      expectations.
    </p>
    <p>
      I use design thinking approach to ensure that the website design is user-centric and aligns with the client's
      brand image. I start with the empathize stage, where I gather insights about the target audience and their needs.
      Then, I move on to the define stage, where I identify the key features and requirements of the website. In the
      ideate stage, I brainstorm and sketch ideas for the website design. I then create high-fidelity mockups using
      design tools such as Figma to get client feedback and refine the design.
    </p>
    <p>
      Figma is a powerful design tool that enables me to create high-quality mockups and collaborate with clients
      seamlessly. With Figma, I can create interactive prototypes, share design files, and get feedback in real-time.
      This helps me to iterate quickly and ensure that the website design is aligned with the client's vision.
    </p>
  </div><div class="article__section" id="Development">
    <h2>Development</h2>
    <p>
      With the design approved, I move on to the development phase, where I start building the website. My development
      process consists of several phases to ensure the website is developed efficiently and meets the client's
      requirements. These phases include:
    </p>
    <div class="article__user-story">
      <ul class="u-margin-bottom-medium">
        <li>Project setup</li>
        <li>Database design and development</li>
        <li>Front-end development</li>
        <li>Back-end development</li>
        <li>Integration and testing</li>
        <li>Deployment and support</li>
      </ul>
    </div>
    <p>
      During development, I use a variety of technologies to ensure the website is responsive, user-friendly, and
      maintainable. These technologies include:
    </p>
    <div class="article__user-story">
      <ul class="u-margin-bottom-medium">
        <li>ASP.NET Core</li>
        <li>C#</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>SQL</li>
        <li>Vue</li>
        <li>Astro JS</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>SCSS</li>
        <li>NodeJs</li>
        <li>NPM</li>
        <li>IIS (Internet Information Services)</li>
        <li>Sitecore</li>
      </ul>
    </div>
    <p>
      I also use version control tools like Git to keep track of changes and ensure the codebase is maintainable. This
      helps me manage the codebase and collaborate with other developers, ensuring a streamlined and efficient
      development process.
    </p>
  </div><div class="article__section" id="Testing">
    <h2>Testing</h2>
    <p>
      Although I don't use coded tests or frameworks for JavaScript, I do use xUnit in C# to test the back-end code. I
      add these tests to my continuous integration pipeline using GitHub Actions, which runs them automatically on
      deployment to ensure that any new changes to the code do not break the application.
    </p>
    <p>
      In addition to automated testing, I also perform manual testing to ensure that the application works as expected.
      I try to break the application by entering invalid input, navigating to different pages, and testing edge cases to
      ensure that the application is robust and can handle unexpected scenarios.
    </p>
    <p>
      Manual testing also allows me to ensure that the website looks and feels right. I check that the design is
      consistent across all pages, the website is responsive on different devices, and that the user experience is
      intuitive and user-friendly.
    </p>
    <p>
      Overall, testing is a critical part of my website development process, and I take it seriously to ensure that the
      final product is high-quality and meets my clients' needs.
    </p>
  </div><div class="article__section" id="Deployment">
    <h2>Deployment</h2>
    <p>
      The final step in my website development process is deploying the website. I primarily use Netlify for deploying
      static websites and IIS (Internet Information Services) for deploying ASP.NET Core websites to on-premises
      servers. Before deploying the website, I perform a series of tests to ensure that it is functioning correctly and
      meets the client's requirements.
    </p>
    <p>
      Once the website is deployed, I set up monitoring and logging tools such as Google Analytics or Microsoft
      Application Insights to monitor the website's performance and identify any issues early on. This allows me to
      proactively address any problems that may arise and ensure that the website is always up and running.
    </p>
    <p>
      In addition to monitoring, I provide ongoing support and maintenance to ensure that the website remains up to date
      and secure. This includes performing regular updates to the website's software and plugins, monitoring security
      vulnerabilities, and implementing necessary security measures such as SSL certificates and firewalls.
    </p>
    <p>
      By taking a proactive approach to deployment, monitoring, and maintenance, I ensure that my clients' websites
      remain secure, performant, and up to date. This helps to build long-term relationships with my clients and ensures
      that their websites continue to meet their needs over time.
    </p>
  </div><div class="article__section" id="Conclusion">
    <h2>Conclusion</h2>
    <p>
      By following an iterative process that leverages Agile principles, I can deliver high-quality websites that meet
      my clients' needs. From gathering requirements to deploying the website, my process ensures that every step is
      well-defined, and the final product is both functional and visually appealing.
    </p>
    <p>
      Whether you are a small business looking to establish an online presence, a startup in need of a web application,
      or an established enterprise in need of a redesign, I am here to help. I have experience working with clients
      across a variety of industries and niches, and I am confident that I can deliver a website or application that
      exceeds your expectations.
    </p>
    <p>
      My dedication to quality and customer satisfaction is unmatched, and I pride myself on delivering projects on time
      and within budget. I understand the importance of communication and collaboration throughout the development
      process, and I work closely with my clients to ensure that their vision is brought to life.
    </p>
    <p>
      Don't settle for a mediocre website or application that doesn't meet your needs. <a href="./Get a quote.html">Contact me</a> today to learn how I can help you take your online presence to the next level. Let's work together to create a website
      or application that you can be proud of!
    </p>

    <p>
      <a href="./Get a quote.html">Get a quote today</a>
    </p>
  </div>` })}`;
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/My Process.astro");

const $$file$n = "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/My Process.astro";
const $$url$n = "/My Process";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$MyProcess,
	file: $$file$n,
	url: $$url$n
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$Astro$o = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/components/ContactForm.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$ContactForm;
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", `<section class="c-container">
  <h1 id="contactme">Contact me</h1>

  <p>
    I'm always happy to hear from you. If you have any questions or would like to get in touch, please fill out the form
    below.
  </p>

  <p class="u-margin-bottom-medium">If you need a website, please <a href="/Get a quote.html">get a quote here</a>.</p>

  <div class="contact__form">
    <form name="contact" method="POST" data-netlify="true" class="c-form" id="form-contact" netlify>
      <!-- <ErrorSummary
        class="form__input-small"
        href="#email"
        title="There is a problem "
        message="Enter a correct email"
        example="example@example.com"
      /> -->

      <div class="c-form__element">
        <label for="name" class="c-form__label">Full name<span class="c-form__required">*</span></label>
        <input type="text" id="name" name="name" required class="c-text-input" required>
      </div>

      <div class="c-form__element">
        <label for="email" class="c-form__label">Email address<span class="c-form__required">*</span></label>
        <input type="email" id="email" name="email" required class="c-text-input" required>
      </div>

      <div class="c-form__element">
        <label for="message" class="c-form__label">Your message <span class="c-form__required">*</span></label>
        <span class="c-form__hint">Enter your message in the textbox below.</span>
        <textarea id="message" rows="8" form="form-contact" name="message" required class="c-text-area"></textarea>
      </div>

      <!-- Public -->
      <div class="g-recaptcha u-margin-top-small" data-sitekey="6LeiJF8iAAAAAO25BEZfbxbaSEaw55cShZLI761E" data-callback="recaptcha_callback">
      </div>
    </form>
    <!-- Local -->
    <!-- <div
      class="g-recaptcha u-margin-top-small"
      data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
      data-callback="recaptcha_callback"
    >
    </div> -->

    <input value="Send Message\xA0 \u2192" class="u-margin-top-medium c-button c-button--large c-button--semi-round c-button--primary c-button--primary--with-border" type="submit" id="postContactMeFormButton" disabled>
  </div>
  <div class="message-sent hidden">
    <h2>Message sent</h2>
    <svg class="tick" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
      <circle class="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"></circle>
      <polyline class="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "></polyline>
    </svg>
    <a href="#contactme" id="SendAnotherMessage">Send another</a>
  </div>
</section>
<script lang="js">
  function recaptcha_callback() {
    var postContactMeFormButton = document.getElementById("postContactMeFormButton");
    if (document.querySelector("form")) postContactMeFormButton.removeAttribute("disabled");
  }
<\/script>

<section class="contact u-margin-top-large"></section>`])), maybeRenderHead($$result));
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/components/ContactForm.astro");

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$n = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/contact-me.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$ContactMe = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$ContactMe;
  return renderTemplate(_a$2 || (_a$2 = __template$2(['<script defer src="../../scripts/Login/login.js"><\/script>\n\n', ""])), renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Contact me" }, { "default": () => renderTemplate`${renderComponent($$result, "ContactForm", $$ContactForm, {})}` }));
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/contact-me.astro");

const $$file$m = "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/contact-me.astro";
const $$url$m = "/contact-me";

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$ContactMe,
	file: $$file$m,
	url: $$url$m
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$m = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/portfolio.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$Portfolio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Portfolio;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Portfolio" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<div class="c-container c-flex-strip c-flex-strip--row c-flex-strip--align-flex-start c-flex-strip--justify-space-between o-row-2-col" id="first-section">
    <section>
      <h1 id="GitHub-Stats">My portfolio</h1>
      <div class="portfolio-page__buttons">
        ${renderComponent($$result, "GenericButton", GenericButton, { "href": "https://github.com/elliotlafave123/elliotlafave123.github.io", "corner": "semi-round", "size": "large", "color": "gray", "withBorder": "true" }, { "default": () => renderTemplate`
          Github
        ` })}
        ${renderComponent($$result, "GenericButton", GenericButton, { "href": "#all-projects", "corner": "semi-round", "size": "large", "color": "primary", "withBorder": "true" }, { "default": () => renderTemplate`
          All Projects
        ` })}
        ${renderComponent($$result, "GenericButton", GenericButton, { "href": "https://codepen.io/elliotlafave123", "corner": "semi-round", "size": "large", "color": "primary", "withBorder": "true" }, { "default": () => renderTemplate`
          Codepen
        ` })}
      </div>
    </section>

    <!-- <div class="githubStats" id="GithubStats"><div class="loader"></div></div> -->
  </div><section class="c-container">
    <div class="title-container-flex">
      <h2 id="featuredPortfolio">Featured projects</h2>
    </div>

    <div class="c-grid u-margin-bottom-medium" style="--gap: 3rem" id="featuredCardsContainer">
      <!-- JavaScript Inserted Data Here -->
      <div class="loader"></div>
    </div>

    <span class="u-margin-bottom-large">&nbsp;</span>
  </section><section class="c-container">
    <div class="title-container-flex">
      <h2 id="all-projects">All projects</h2>
    </div>
    <section class="ProjectsAppInputs">
      <div class="ProjectsAppInputs-side">
        <input class="search-input" id="ProjectsAppInput" type="text" placeholder="Search projects...">

        <div class="ProjectsAppPagination" id="PaginationContainer">
          <button class="ProjectsAppPagination-button ProjectsAppPagination-button-last" id="LastPage">
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <input class="ProjectsAppPagination-number" type="number" id="PageNumberEl">
          <button class="ProjectsAppPagination-button ProjectsAppPagination-button-next" id="NextPage">
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <div class="ProjectsAppInputs-side ProjectsAppInputs-side-2">
        <a id="ProjectsAppClearFiltersButton">Clear All</a>

        <select id="dropdown">
          <option value="">All</option>
          <option value="html">HTML</option>
          <option value="api">API</option>
          <option value="css">CSS</option>
          <option value="js">JS</option>
          <option value="scss">SCSS</option>
          <option value="nodejs">NodeJS</option>
          <option value="mongodb">MongoDB</option>
          <option value="challenge">Challenge</option>
          <option value="course">Course</option>
        </select>
      </div>
    </section>
    <div class="ProjectsAppContainerWithError u-margin-bottom-large" id="ProjectsAppContainer">
      <section class="ProjectsAppContainer"></section>
      <section class="ProjectsAppInputsBottom">
        <div class="ProjectsAppPagination-bottom" id="PaginationContainerBottom">
          <button class="ProjectsAppPagination-button ProjectsAppPagination-button-last" id="LastPageBottom">
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <input class="ProjectsAppPagination-number" type="number" id="PageNumberElBottom">
          <button class="ProjectsAppPagination-button ProjectsAppPagination-button-next" id="NextPageBottom">
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </section>
      <div class="ProjectsAppNotFound invisible">
        <img src="img/ProjectsAppNoProjectFound.svg" alt="">
        <p>No projects match your criteria. Please try another search...</p>
      </div>
    </div>
  </section>` })}`;
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/portfolio.astro");

const $$file$l = "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/portfolio.astro";
const $$url$l = "/portfolio";

const _page4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Portfolio,
	file: $$file$l,
	url: $$url$l
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$l = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/account.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$Account = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Account;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Acount" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<div class="modal-container closeModal">
    <div class="modal">
      <i class="fa-solid fa-xmark closeModal"></i>
      <h1>Delete Account</h1>
      <p>You are about to delete your account, this action can not be reversed.</p>
      <div class="modal-buttons">
        <button class="modalbtn modalbtn-cancel closeModal">Go Back</button>
        <button class="modalbtn modalbtn-red" id="confirmModal">Delete Account</button>
      </div>
    </div>
  </div><section class="login u-margin-top-large u-margin-bottom-large" id="accountPage">
    <form id="signUpForm">
      <h1>Account Settings</h1>
      <div class="user-info-container">
        <div class="profileImage profileImage-teal">
          <p></p>
        </div>
        <div class="user-info-text-container">
          <div>
            <p class="widgetFullName"></p>
          </div>
          <p class="widgetEmail"></p>
        </div>
      </div>
      <div class="edit-color">
        <div class="edit-color-row">
          <label>Profile Colour</label>
          <p class="savedColor">saved</p>
        </div>
        <div class="checkboxes">
          <label class="checkbox-container">
            <input type="checkbox" class="profileColorCheckbox" data-color="blue">
            <div class="checkmark checkmark-blue"></div>
          </label>
          <label class="checkbox-container">
            <input type="checkbox" class="profileColorCheckbox" data-color="teal">
            <div class="checkmark checkmark-teal"></div>
          </label>
          <label class="checkbox-container">
            <input type="checkbox" class="profileColorCheckbox" data-color="green">
            <div class="checkmark checkmark-green"></div>
          </label>
          <label class="checkbox-container">
            <input type="checkbox" class="profileColorCheckbox" data-color="yellow">
            <div class="checkmark checkmark-yellow"></div>
          </label>
          <label class="checkbox-container">
            <input type="checkbox" class="profileColorCheckbox" data-color="red">
            <div class="checkmark checkmark-red"></div>
          </label>
          <label class="checkbox-container">
            <input type="checkbox" class="profileColorCheckbox" data-color="purple">
            <div class="checkmark checkmark-purple"></div>
          </label>
          <label class="checkbox-container">
            <input type="checkbox" class="profileColorCheckbox" data-color="darkBlue">
            <div class="checkmark checkmark-darkBlue"></div>
          </label>
        </div>
      </div>
      <h2>Personal Infomation</h2>
      <label for="fullname">Full Name</label>
      <input class="form__input form__input-small" placeholder="Full Name" id="fullname" name="fullname" type="text" maxlength="94" required>
      <label for="email">Email Address</label>
      <input class="form__input form__input-small" placeholder="Email address" id="email" name="email" type="email" spellcheck="false" aria-describedby="email-hint" autocomplete="email" disabled>
      <div class="info-save-button-container">
        <input class="c-button c-button--medium c-button--semi-round c-button--primary-secondary c-button--primary-secondary--with-border u-margin-top-small" id="SaveChanges" type="submit" value="Save Changes" style="width: min-content; margin-top: 2.5rem" disabled>
        <p class="savedName">saved</p>
      </div>
      <div class="c-flex-strip c-flex-strip--row c-flex-strip--align-center c-flex-strip--justify-flex-start" style="gap: 1rem;">
        <button class="c-button c-button--large c-button--semi-round c-button--primary c-button--primary--with-border u-margin-top-small" id="logOutButton">Log Out</button>
        <button class="c-button c-button--large c-button--semi-round c-button--red c-button--red--with-border u-margin-top-small" id="DeleteAccountButton">
          Delete Account
        </button>
      </div>
    </form>
  </section>` })}`;
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/account.astro");

const $$file$k = "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/account.astro";
const $$url$k = "/account";

const _page5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Account,
	file: $$file$k,
	url: $$url$k
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$k = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/components/ArticleInteractions.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$ArticleInteractions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$ArticleInteractions;
  return renderTemplate`${maybeRenderHead($$result)}<section class="c-container">
  <div class="breadcrumb"></div>
  <a href="../index.html" class="c-button c-button--large c-button--semi-round c-button--gray-secondary c-button--gray-secondary--with-border" aria-label="Go to previous page">
    <i class="fa-sharp fa-regular fa-arrow-left" aria-hidden="true"></i>
    Go back
  </a>
</section>`;
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/components/ArticleInteractions.astro");

const $$Astro$j = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/index.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Index$4;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Pages" }, { "default": () => renderTemplate`${renderComponent($$result, "ArticleInteractions", $$ArticleInteractions, {})}${maybeRenderHead($$result)}<div class="o-row-4-col">
		<a href="/pages/Articles/index.html">
			<div class="link-card">
				<p>Articles</p>
				<i class="fa-solid fa-chevron-right"></i>
			</div>
		</a>
	</div>` })}`;
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/index.astro");

const $$file$j = "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/index.astro";
const $$url$j = "/pages";

const _page6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$4,
	file: $$file$j,
	url: $$url$j
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$i = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/index.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Index$3;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Articles" }, { "default": () => renderTemplate`${renderComponent($$result, "ArticleInteractions", $$ArticleInteractions, {})}${maybeRenderHead($$result)}<div class="o-row-4-col">
		<a href="./QA/index.html">
			<div class="link-card">
				<p>QA Apprenticeships</p>
				<i class="fa-solid fa-chevron-right"></i>
			</div>
		</a>
		<a href="./GMC Work/index.html">
			<div class="link-card">
				<p>GMC Work</p>
				<i class="fa-solid fa-chevron-right"></i>
			</div>
		</a>
		<a href="./Personal/index.html">
			<div class="link-card">
				<p>Personal Work</p>
				<i class="fa-solid fa-chevron-right"></i>
			</div>
		</a>
	</div>` })}`;
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/index.astro");

const $$file$i = "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/index.astro";
const $$url$i = "/pages/Articles";

const _page7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$3,
	file: $$file$i,
	url: $$url$i
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$h = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/GMC Work/index.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "GMC Work | Elliotlafave.com" }, { "default": () => renderTemplate`${renderComponent($$result, "ArticleInteractions", $$ArticleInteractions, {})}${maybeRenderHead($$result)}<div class="o-row-4-col">
		<a href="./Login Audit Api/Login Audit Api.html">
			<div class="link-card">
				<p>Login Audit API</p>
				<i class="fa-solid fa-chevron-right"></i>
			</div>
		</a>

		<a href="./Login Audit App/Login Audit App.html">
			<div class="link-card">
				<p>Login Audit App</p>
				<i class="fa-solid fa-chevron-right"></i>
			</div>
		</a>
	</div>` })}`;
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/GMC Work/index.astro");

const $$file$h = "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/GMC Work/index.astro";
const $$url$h = "/pages/Articles/GMC Work";

const _page8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$2,
	file: $$file$h,
	url: $$url$h
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$g = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/GMC Work/Portfolio-task-1/Portfolio-task-1.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$PortfolioTask1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$PortfolioTask1;
  return renderTemplate`${renderComponent($$result, "ArticleLayout", $$ArticleLayout, { "title": "Portfolio Task 1", "date": "14/11/2022", "time": "16:13pm", "streamID": "633d4dbc76066edc99546269" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<div class="article__grid">
    <!-- Main Content -->
    <div class="article__section">
      <div id="Outline">
        <h2>The Task</h2>

        <div class="article__section">
          <h3>User story</h3>

          <div class="article__user-story">
            <p>As a member of DTT</p>
            <p>I want to see when a user last logged into Sitecore</p>
            <p>So that I can manage Sitecore licences</p>
          </div>

          <div class="article__user-story">
            <h3>Acceptance criteria</h3>
            <p>AC1 - Data</p>
            <p>GIVEN I want to find out the last login date for all Sitecore users</p>
            <p>WHEN I run the report</p>
            <p>THEN the following information is returned for each Sitecore user as a csv file:</p>

            <ul class="u-margin-bottom-medium">
              <li>Full name</li>
              <li>Last login date</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="article__section">
        <div id="Approach">
          <h2>My approach</h2>
          <p>
            I started by learning basic C# syntax and got the basics of .NET Core 6 using the Microsoft documentation. I
            then took this knowledge and used my previous coding knowledge to build an application that takes the last
            login dates from my API and converts the resulting data into a csv file.
          </p>

          <p>
            This code loops over the data from the data that is returned from the API/getall endpoint and writes a line
            for each person:
          </p>
          <div class="article__image">
            <img src="../img/img1.png" alt="" class="articleImg">
            <p>An image of Program.cs.</p>
          </div>

          <p>I created a model for the data that should be returned in the CSV file:</p>
          <div class="article__image">
            <img src="../img/img2.png" alt="" class="articleImg">
            <p>An image of the data model.</p>
          </div>

          <p>
            I created an interface with methods to generate a CSV file with a unique name (using the system DateTime
            method), Add a title row to show what data is held in each column and a method to add a single line of data
            to the file:
          </p>
          <div class="article__image">
            <img src="../img/img3.png" alt="" class="articleImg">
            <p>An image of the programs interface.</p>
          </div>

          <p>The methods are shown below and are stored in the .services folder:</p>
          <div class="article__image">
            <img src="../img/img4.png" alt="" class="articleImg">
            <p>An image of the programs methods.</p>
          </div>
        </div>

        <div id="Tests">
          <p>
            Finally I created unit tests to check my program generated the correct results/data types and various other
            tests:
          </p>
          <div class="article__image">
            <img src="../img/img5.png" alt="" class="articleImg">
            <p></p>
          </div>

          <p>
            In total I created a total of 8 tests to ensure my program works effectively and has no errors, the results
            of the tests can be seen below:
          </p>
          <div class="article__image">
            <img src="../img/img6.png" alt="" class="articleImg">
            <p></p>
          </div>
        </div>

        <div id="Result"></div>
        <p>
          And the result of running the report is this CSV file which can be accessed using excel or any text editor:
        </p>
        <div class="article__image">
          <img src="../img/img7.png" alt="" class="articleImg">
          <p></p>
        </div>
      </div>

      <div class="article__section">
        <div id="Challenges"></div>
        <h2>Challenges I overcame:</h2>
        <p>
          I had to figure out how to fetch the data from my API and how to parse the JSON response into usable data for
          my application to run. I did this using Stack Overflow and other forums along with the Microsoft C#
          documentation.
        </p>
        <p>
          I also had very little knowledge of unit testing so I used this project as a way to learn how to write basic
          tests to ensure my code works as it should. I learned about creating mock data using Xunit testing.
        </p>
        <p>
          I had to also figure out how to write lines to a file using System.IO and I used what I learned to write to
          the file and store the result in a set location (Output Folder).
        </p>
      </div>
    </div>
    <nav role="navigation" aria-label="Article Navigation" class="article__sidebar hide-mobile">
      <ol>
        <li><a href="#Outline">Outline</a></li>
        <li><a href="#Approach">My Approach</a></li>
        <li><a href="#Tests">Unit tests</a></li>
        <li><a href="#Result">Result</a></li>
        <li><a href="#Challenges">Challenges</a></li>
      </ol>
    </nav>
  </div>` })}`;
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/GMC Work/Portfolio-task-1/Portfolio-task-1.astro");

const $$file$g = "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/GMC Work/Portfolio-task-1/Portfolio-task-1.astro";
const $$url$g = "/pages/Articles/GMC Work/Portfolio-task-1/Portfolio-task-1";

const _page9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$PortfolioTask1,
	file: $$file$g,
	url: $$url$g
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$f = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/GMC Work/Login Audit Api/Login Audit Api.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$LoginAuditApi = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$LoginAuditApi;
  return renderTemplate`${renderComponent($$result, "ArticleLayout", $$ArticleLayout, { "title": "Login Audit API", "date": "17/07/2022", "time": "16:35pm", "streamID": "633ec77ac6bdedc1a081257c" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<div class="article__grid">
    <!-- Main Content -->
    <div class="article__section">
      <div id="Outline"></div>
      <h2>The Software Outline</h2>

      <div class="article__section">
        <p>
          Following on from creating a console application to export a list of users and their last login date as a CSV,
          this project is to create an API layer to sit between the database and the console application with the
          following end points:
        </p>
        <ul class="u-margin-bottom-medium">
          <li>Get all</li>
          <li>Get by name (Full or partial)</li>
          <li>Get by date range</li>
        </ul>

        <h3>User story</h3>
        <div class="article__user-story">
          <p>As a Sitecore developer</p>
          <p>I want to create an API layer to sit between the Sitecore database and the console application</p>
          <p>So that I can return a list of all Sitecore users and their last login date</p>
        </div>

        <div class="article__user-story">
          <h3>Acceptance criteria</h3>
          <p>AC1</p>
          <p>GIVEN I want to find out the last login date for all Sitecore users</p>
          <p>WHEN I call the Login audit API</p>
          <p>THEN the following data is returned as a JSON</p>
          <ul class="u-margin-bottom-medium">
            <li>Full name</li>
            <li>Last login date</li>
          </ul>
        </div>

        <div class="article__user-story">
          <p>AC2</p>
          <p>GIVEN I’ve called the Login audit API</p>
          <p>WHEN I view the data returned</p>
          <p>THEN data is returned in descending date order</p>
        </div>
      </div>

      <div class="article__section">
        <div id="Approach">
          <h2>My approach</h2>
          <p>
            Firstly I took a course on Pluralsight Building Your First API with ASP.NET Core 2 using Entity Framework
            Core from scratch.
          </p>

          <p>
            This gave me the base knowledge I needed to start building the API. I scaffolded the database using EFCore
            to connect my application to the database. This created a file which I called GMCContext that acts as the
            gateway to the database:
          </p>
          <div class="article__image">
            <img src="../img/img1.png" alt="" class="articleImg">
            <p></p>
          </div>

          <p>
            I then created a data model so I can extract the data I need for the API from the database as shown below:
          </p>
          <div class="article__image">
            <img src="../img/img2.png" alt="" class="articleImg">
            <p></p>
          </div>

          <p>I created an interface for the GetLoginAuditReports( ) method called ILoginAuditReportService:</p>
          <div class="article__image">
            <img src="../img/img3.png" alt="" class="articleImg">
            <p></p>
          </div>

          <p>
            I set up the program.cs file using a template provided by the GMC so my API was in line with their testing
            requirements and their guidelines. The file includes middleware that creates logs and adds health checks
            along with other methods.
          </p>
          <p>It also enables swagger which is a browser GUI for testing APIs in a development environment:</p>
          <div class="article__image">
            <img src="../img/img4.png" alt="" class="articleImg">
            <p></p>
          </div>
        </div>

        <div id="Endpoints">
          <p>I then created 3 endpoints for my API.</p>
          <ul class="u-margin-bottom-medium">
            <li>Get by name</li>
            <li>Get by date</li>
            <li>Get all</li>
          </ul>

          <div id="Endpoints--all">
            <h3>Get all</h3>
            <p>Get all gets all users information that’s stored in the last login database.</p>
            <div class="article__image">
              <img src="../img/img5.png" alt="" class="articleImg">
              <p></p>
            </div>
          </div>

          <div id="Endpoints--name">
            <h3>Get by name</h3>
            <p>Get by name gets all users with the inputted name or a partial name match.</p>
            <div class="article__image">
              <img src="../img/img7.png" alt="" class="articleImg">
              <p></p>
            </div>
          </div>

          <div id="Endpoints--date">
            <h3>Get by date range</h3>
            <p>Get by date gets all users within an inputted date range.</p>
            <div class="article__image">
              <img src="../img/img6.png" alt="" class="articleImg">
              <p></p>
            </div>
          </div>
        </div>
      </div>

      <div class="article__section" id="Result">
        <h2>Result of the program</h2>
        <h3>Get all</h3>
        <div class="article__image">
          <img src="../img/img8.png" alt="" class="articleImg">
          <p></p>
        </div>

        <h3>Get by name</h3>
        <div class="article__image">
          <img src="../img/img9.png" alt="" class="articleImg">
          <p></p>
        </div>

        <h3>Get by date</h3>
        <div class="article__image">
          <img src="../img/img10.png" alt="" class="articleImg">
          <p></p>
        </div>
      </div>

      <div class="article__section" id="Challenges">
        <h2>Challenges I overcame</h2>

        <p>
          While writing this program I have limited knowledge of C# and writing APIs with EFCore, so I spent lots of
          time working on a course and also going through the documentation to figure out certain aspects of the code
          and how it all links together.
        </p>
        <p>
          The most difficult part was creating the data model and scaffolding the database using EFCore as I’m more
          familiar with the classic SQL connection method.
        </p>
        <p>
          I have learned lots about the C# syntax and how to link databased and also about different API features in C#.
        </p>
        <p>
          I needed help getting the data out of Sitecore as this is a specialist CMS of which I have no prior knowledge.
          Because of this to progress further with my development I will be taking a Sitecore 10 course on Pluralsight
          to learn about Docker and Sitecore 10 Helix.
        </p>
        <p>I then created a presentation to demonstrate to my team what I had learned from the pluralsight courses.</p>
      </div>
    </div>

    <nav role="navigation" aria-label="Article Navigation" class="article__sidebar hide-mobile">
      <ol>
        <li><a href="#Outline">Outline</a></li>
        <li><a href="#Approach">My Approach</a></li>
        <li>
          <a href="#Endpoints">Endpoints</a>
          <ul>
            <li class=""><a href="#Endpoints--all">Get all</a></li>
            <li class=""><a href="#Endpoints--name">Get by name</a></li>
            <li class=""><a href="#Endpoints--date">Get by date range</a></li>
          </ul>
        </li>
        <li><a href="#Result">Result</a></li>
        <li><a href="#Challenges">Challenges</a></li>
      </ol>
    </nav>
  </div><div class="article__interactions">
    <div class="article__interactions--section">
      <a href="/Files/PowerPoint/Sitecore Helix & Docker.pptx" target="_blank" class="btn-square btn-square--pdf u-margin-right-small">
        <img src="../img/icons/icon-powerpoint.png" alt=""> Download Presentation
      </a>
    </div>
    <div class="article__interactions--section"></div>
  </div>` })}`;
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/GMC Work/Login Audit Api/Login Audit Api.astro");

const $$file$f = "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/GMC Work/Login Audit Api/Login Audit Api.astro";
const $$url$f = "/pages/Articles/GMC Work/Login Audit Api/Login Audit Api";

const _page10 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$LoginAuditApi,
	file: $$file$f,
	url: $$url$f
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$e = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/GMC Work/Login Audit App/Login Audit App.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$LoginAuditApp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$LoginAuditApp;
  return renderTemplate`${renderComponent($$result, "ArticleLayout", $$ArticleLayout, { "title": "Login Audit API", "date": "17/07/2022", "time": "16:01pm", "streamID": "633d4dbc76066edc99546269" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<div class="article__grid">
    <!-- Main Content -->
    <div class="article__section">
      <div id="Outline">
        <h2>The Software Outline</h2>

        <div class="article__section">
          <h3>User story</h3>

          <div class="article__user-story">
            <p>As a member of DTT</p>
            <p>I want to see when a user last logged into Sitecore</p>
            <p>So that I can manage Sitecore licences</p>
          </div>

          <div class="article__user-story">
            <h3>Acceptance criteria</h3>
            <p>AC1 - Data</p>
            <p>GIVEN I want to find out the last login date for all Sitecore users</p>
            <p>WHEN I run the report</p>
            <p>THEN the following information is returned for each Sitecore user as a csv file:</p>

            <ul class="u-margin-bottom-medium">
              <li>Full name</li>
              <li>Last login date</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="article__section">
        <div id="Approach">
          <h2>My approach</h2>
          <p>
            I started by learning basic C# syntax and got the basics of .NET Core 6 using the Microsoft documentation. I
            then took this knowledge and used my previous coding knowledge to build an application that takes the last
            login dates from my API and converts the resulting data into a csv file.
          </p>

          <p>
            This code loops over the data from the data that is returned from the API/getall endpoint and writes a line
            for each person:
          </p>
          <div class="article__image">
            <img src="../img/img1.png" alt="" class="articleImg">
            <p>An image of Program.cs.</p>
          </div>

          <p>I created a model for the data that should be returned in the CSV file:</p>
          <div class="article__image">
            <img src="../img/img2.png" alt="" class="articleImg">
            <p>An image of the data model.</p>
          </div>

          <p>
            I created an interface with methods to generate a CSV file with a unique name (using the system DateTime
            method), Add a title row to show what data is held in each column and a method to add a single line of data
            to the file:
          </p>
          <div class="article__image">
            <img src="../img/img3.png" alt="" class="articleImg">
            <p>An image of the programs interface.</p>
          </div>

          <p>The methods are shown below and are stored in the .services folder:</p>
          <div class="article__image">
            <img src="../img/img4.png" alt="" class="articleImg">
            <p>An image of the programs methods.</p>
          </div>
        </div>

        <div id="Tests">
          <p>
            Finally I created unit tests to check my program generated the correct results/data types and various other
            tests:
          </p>
          <div class="article__image">
            <img src="../img/img5.png" alt="" class="articleImg">
            <p></p>
          </div>

          <p>
            In total I created a total of 8 tests to ensure my program works effectively and has no errors, the results
            of the tests can be seen below:
          </p>
          <div class="article__image">
            <img src="../img/img6.png" alt="" class="articleImg">
            <p></p>
          </div>
        </div>

        <div id="Result"></div>
        <p>
          And the result of running the report is this CSV file which can be accessed using excel or any text editor:
        </p>
        <div class="article__image">
          <img src="../img/img7.png" alt="" class="articleImg">
          <p></p>
        </div>
      </div>

      <div class="article__section">
        <div id="Challenges"></div>
        <h2>Challenges I overcame:</h2>
        <p>
          I had to figure out how to fetch the data from my API and how to parse the JSON response into usable data for
          my application to run. I did this using Stack Overflow and other forums along with the Microsoft C#
          documentation.
        </p>
        <p>
          I also had very little knowledge of unit testing so I used this project as a way to learn how to write basic
          tests to ensure my code works as it should. I learned about creating mock data using Xunit testing.
        </p>
        <p>
          I had to also figure out how to write lines to a file using System.IO and I used what I learned to write to
          the file and store the result in a set location (Output Folder).
        </p>
      </div>
    </div>
    <nav role="navigation" aria-label="Article Navigation" class="article__sidebar hide-mobile">
      <ol>
        <li><a href="#Outline">Outline</a></li>
        <li><a href="#Approach">My Approach</a></li>
        <li><a href="#Tests">Unit tests</a></li>
        <li><a href="#Result">Result</a></li>
        <li><a href="#Challenges">Challenges</a></li>
      </ol>
    </nav>
  </div>` })}`;
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/GMC Work/Login Audit App/Login Audit App.astro");

const $$file$e = "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/GMC Work/Login Audit App/Login Audit App.astro";
const $$url$e = "/pages/Articles/GMC Work/Login Audit App/Login Audit App";

const _page11 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$LoginAuditApp,
	file: $$file$e,
	url: $$url$e
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$d = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/Personal/index.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Personal" }, { "default": () => renderTemplate`${renderComponent($$result, "ArticleInteractions", $$ArticleInteractions, {})}${maybeRenderHead($$result)}<div class="o-row-4-col">
    <!-- <a href="./Shop Website/Shop Website.html">
      <div class="link-card">
        <p>Shop Website</p>
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </a> -->
    <a href="./Comments Section/Comments Section.html">
      <div class="link-card">
        <p>Comments Section</p>
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </a>
  </div>` })}`;
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/Personal/index.astro");

const $$file$d = "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/Personal/index.astro";
const $$url$d = "/pages/Articles/Personal";

const _page12 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$d,
	url: $$url$d
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$c = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/Personal/Comments Section/Comments Section.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$CommentsSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$CommentsSection;
  return renderTemplate`${renderComponent($$result, "ArticleLayout", $$ArticleLayout, { "title": "Comments Section", "date": "07/10/2022", "time": "16:35pm", "streamID": "633ec855c6bdedc1a0812586" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<div class="article__section" id="Idea">
    <h2>The Idea</h2>
    <p>
      Over the last week I have been on a course namely 'Website fundimentals' where we are learning the basics of HTML,
      CSS and JS.
    </p>
    <p>
      As I have previously learned most of the content for the first four days I decided to give myself a challange to
      complete over these days.
    </p>
    <p>In the past I had an idea to add a comments section to the articles on my website (like this one).</p>
  </div><div class="article__section" id="Plan">
    <h2>My Plan</h2>
    <p>I created a list of features which would be required to complete the project:</p>
    <div class="article__user-story">
      <ul class="u-margin-bottom-medium">
        <li>Build login / sign up forms</li>
        <li>Verify user emails</li>
        <li>Create a 'signed in strip' so users know when they are logged in</li>
        <li>Design the look of a comment</li>
        <li>API to handle comment storage</li>
      </ul>
    </div>
  </div><div class="article__section" id="API">
    <h2>The API</h2>
    <p>For the API to be fully functional I needed to create the following endpoints:</p>
    <div class="article__user-story">
      <ul class="u-margin-bottom-medium">
        <li>Create comment stream</li>
        <li>GET all comments from stream</li>
        <li>POST a comment to a stream</li>
        <li>PUT - Edit a comment</li>
        <li>DELETE a comment</li>
        <li>Vote - up and down</li>
      </ul>
    </div>
  </div><div class="article__section" id="UserLogin">
    <h2>Integrating user login</h2>
    <p>
      I had already created a user authentication API, it is used in this
      <a href="https://login.elliotlafave.com" target="_blank">user authentication app</a>.
    </p>
    <p>
      The app uses JWT (JSON web token) authentication. This works by creating a random token when a user successfully
      logs in. The token is saved n their browser and will allow them access for an amount of time until the token
      expires and they must log in again.
    </p>
    <p>
      I designed the pages and connected them to the API and it worked straight away, that would've been the most
      difficult part if I hadn't created the authentication API previously. The signed in state is below:
    </p>
    <div class="article__image">
      <img src="./img/SignedInStrip.png" alt="Signed in strip" class="articleImg">
      <p>Signed in strip</p>
    </div>
    <p>
      I then added a Google Recaptcha checkbox to prevent spam on my site, I also added states for when users are signed
      in but their email is not verified:
    </p>
    <div class="article__image">
      <img src="./img/VerifyStrip.png" alt="Verify email strip" class="articleImg">
      <p>Verify email strip</p>
    </div>
    <!--  -->
    <p>After logging in a user will be brought back to the page they started the login/sign up process from.</p>
    <p>The pages for the login/sign up pages are below:</p>
    <div class="article__user-story">
      <ul class="u-margin-bottom-medium">
        <li>Log In: <a class="storeBackLink" href="../../../Login/login.html">Login</a></li>
        <li>Sign Up: <a class="storeBackLink" href="../../../Login/signUp.html">Sign Up</a></li>
      </ul>
    </div>
  </div><div class="article__section" id="CommentDesign">
    <h2>Comments Section Design</h2>
    <p>
      I first had to think about what data a comment would need. This would be the data model used by MongoDB and
      Typescript. The data model I settled with is below:
    </p>
    <div class="article__user-story">
      <ul class="u-margin-bottom-medium">
        <li>ID</li>
        <li>Text</li>
        <li>Full Name</li>
        <li>Time</li>
        <li>upvotes</li>
        <li>downvotes</li>
        <li>hasBeenEdited</li>
      </ul>
    </div>
    <p>I then created the markup for a comment and styled it using SCSS:</p>
    <div class="article__image">
      <img src="./img/AComment.png" alt="A Comment" class="articleImg">
      <p>A Comment</p>
    </div>
    <p>When a user is not signed in they will see this state:</p>
    <div class="article__image">
      <img src="./img/CommentsLogIn.png" alt="Comments section login buttons" class="articleImg">
      <p>Comments section login buttons</p>
    </div>
    <p>When a user is signed in, but their email is not verified they see this state:</p>
    <div class="article__image">
      <img src="./img/CommentsVerify.png" alt="Comments section verify email" class="articleImg">
      <p>Comments section verify email</p>
    </div>
    <p>If a user is signed in and their email is verified they see the comment input box:</p>
    <div class="article__image">
      <img src="./img/CommentInputSignedIn.png" alt="Unlocked comment input textarea" class="articleImg">
      <p>Unlocked comment input textarea</p>
    </div>
    <p>All of the designs are responsive so they work on all devices.</p>
  </div><div class="article__section" id="CommentAPI">
    <h2>The Comment API</h2>
    <p>For the API, I wrote the code using Express (A NodeJS library) and Mongoose (A MongoDB library).</p>
    <p>
      I added a folder into my API server repository and created all of the required endpoints, I used Postman to send
      requests to the API while developing it.
    </p>
    <p>All of the endpoints use the JWT token to ensure that only verified users can comment.</p>
    <div class="article__image article__image-thin">
      <img src="./img/PostmanEndpoints.png" alt="Comments API Endpoints in Postman" class="articleImg">
      <p>Comments API Endpoints in Postman</p>
    </div>
    <p>
      The API is running on a <a href="https://www.linode.com/" target="_blank">Linode</a> cloud based server. I have configured
      the server to use HTTPS and with the E-Mail ports allowed so I can send email verification codes to users.
    </p>
    <p>
      The database is running on a
      <a href="https://www.mongodb.com/atlas/database" target="_blank">MongoDB Atlas Cloud</a> which is a free service up
      to a certain amount of traffic or data stored.
    </p>
  </div><div class="article__section">
    <div id="CommentTS">
      <h2>The Frontend Logic</h2>
      <p>
        For the rendering of comments along with the user interface interactions, I chose to go with TypeScript (TS). I
        find TS to be less error prone and easier to code with due to the in editor error checking.
      </p>
      <p>
        I wrote logic to call the GET all on stream endpoint, then it will use the data and render it to the page using
        the JS 'InsertAdjacentHTML' method.
      </p>

      <p>
        Each rendered comment has an ID added to the DataSet property, this is used when editing or deleting a comment.
      </p>
    </div>
    <p>Users can click the edit button on their comment if they are logged in which changes the look of the comment:</p>
    <div class="article__image">
      <img src="./img/Editing.png" alt="Editing state of a comment" class="articleImg">
      <p>Editing state of a comment</p>
    </div>
    <p>When editing users can use the DELETE endpoint and the PUT (update) endpoint.</p>

    <h3>You can try it out below...</h3>
  </div>` })}`;
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/Personal/Comments Section/Comments Section.astro");

const $$file$c = "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/Personal/Comments Section/Comments Section.astro";
const $$url$c = "/pages/Articles/Personal/Comments Section/Comments Section";

const _page13 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$CommentsSection,
	file: $$file$c,
	url: $$url$c
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$b = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/Personal/Shop Website/Shop Website.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$ShopWebsite = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$ShopWebsite;
  return renderTemplate`${renderComponent($$result, "ArticleLayout", $$ArticleLayout, { "title": "My Process", "date": "dd/mm/yyyy", "time": "00:00pm", "streamID": "" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<div class="article__section" id="Technologies used">
    <h2>Technologies used</h2>
    <p>
      I used multiple technologies and languages to develop this application. I mainly used ASP.NET Core with Entity
      Framework Core to connect to a MSSQL (Microsoft SQL) database.
    </p>
    <div class="article__user-story">
      <ul class="u-margin-bottom-medium">
        <li>ASP.NET Core</li>
        <li>C#</li>
        <li>ASP Identity</li>
        <li>Entity Framework Core</li>
        <li>Microsoft SQL Server</li>
        <li>Windows Server 2019</li>
        <li>Internet Information Services (IIS)</li>
        <li>NodeJS</li>
        <li>JavaScript</li>
      </ul>
    </div>
  </div><div class="article__section" id="Idea">
    <h2>Development process</h2>
    <p>
      I follow a multiple step process to develop my software. I use an iterative approach following the Agile
      Principles. I break development into multiple stages, starting with gathering requirements for the application.
      Once I have the requirements I can make a start on the design phase.
    </p>
    <p>
      <a href="" target="_blank">Learn more about my development process here.</a>
    </p>
  </div><div class="article__section" id="Idea">
    <h2>Design Phase</h2>
    <p></p>
  </div><div class="article__section" id="Idea">
    <h2>Development</h2>
    <p></p>
  </div><div class="article__section" id="Idea">
    <h2>Testing</h2>
    <p></p>
  </div><div class="article__section" id="Idea">
    <h2>Deployment</h2>
    <p></p>
  </div>` })}`;
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/Personal/Shop Website/Shop Website.astro");

const $$file$b = "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/Personal/Shop Website/Shop Website.astro";
const $$url$b = "/pages/Articles/Personal/Shop Website/Shop Website";

const _page14 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$ShopWebsite,
	file: $$file$b,
	url: $$url$b
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$a = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/QA/index.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "QA" }, { "default": () => renderTemplate`${renderComponent($$result, "ArticleInteractions", $$ArticleInteractions, {})}${maybeRenderHead($$result)}<div class="o-row-4-col">
		<a href="./Understanding-Object-Oriented-Programming/Understanding-Object-Oriented-Programming.html">
			<div class="link-card">
				<p>Understanding Object Oriented Programming</p>
				<i class="fa-solid fa-chevron-right"></i>
			</div>
		</a>

		<a href="./Python-Programming-and-SQL-Basics-1.3/Python-Programming-and-SQL-Basics.html">
			<div class="link-card">
				<p>Python Programming and SQL Basics 1.3</p>
				<i class="fa-solid fa-chevron-right"></i>
			</div>
		</a>

		<a href="./Python-Programming-and-SQL-Basics-1.2/Python-Programming-and-SQL-Basics.html">
			<div class="link-card">
				<p>Python Programming and SQL Basics 1.2</p>
				<i class="fa-solid fa-chevron-right"></i>
			</div>
		</a>

		<a href="./Prioritisation/Prioritisation.html">
			<div class="link-card">
				<p>Soft Skills: Prioritisation</p>
				<i class="fa-solid fa-chevron-right"></i>
			</div>
		</a>
	</div>` })}`;
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/QA/index.astro");

const $$file$a = "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/QA/index.astro";
const $$url$a = "/pages/Articles/QA";

const _page15 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file$a,
	url: $$url$a
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$9 = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/QA/Understanding-Object-Oriented-Programming/Understanding-Object-Oriented-Programming.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$UnderstandingObjectOrientedProgramming = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$UnderstandingObjectOrientedProgramming;
  return renderTemplate`${renderComponent($$result, "ArticleLayout", $$ArticleLayout, { "title": "Practice: Understanding Object-Oriented Programming | SDTL3 A2.1", "date": "04/07/2022", "time": "14:22pm", "streamID": "633ec855c6bdedc1a0812586" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<div class="article__section">
    <h2>My IDE</h2>

    <div class="article__image">
      <img src="../img/ide.png" alt="" class="articleImg">
      <p>I am using the Eclipse IDE by IBM.</p>
    </div>

    <div class="article__section">
      <p>
        I have decided to create a fighting game where players can be damaged, healed and when all health is lost the
        game ends.
      </p>
      <p>Certain players can have shields to help them take less damage.</p>
    </div>

    <div class="article__image article__image-thin">
      <img src="../img/program.png" alt="" class="articleImg">
      <p>An image of my program running and the main method.</p>
    </div>

    <div class="article__section">
      <p>
        The class contains a constructor that is used to set the values of the variables, methods to deal damage: either
        simple damage or critical damage and getter/setter methods to retrieve data from the player class.
      </p>
      <p>
        The image below shows the base class a player, this will be used by other classes to inherit the base
        functionality.
      </p>
    </div>

    <div class="article__image article__image-thin">
      <img src="../img/carbon(1).png" alt="" class="articleImg">
      <p>An image of the base Player class.</p>
    </div>

    <div class="article__section">
      <p>I then created another class for a player with a shield equipped.</p>
      <p>
        This class inherited the base functionality of the player class, but the damage and critical methods have been
        overridden with a lower damage value.
      </p>

      <p>I have added a super method to the constructor so the values in the parent class can be changed.</p>
    </div>

    <div class="article__image article__image-thin">
      <img src="../img/carbon(2).png" alt="" class="articleImg">
      <p>An image of the Player with Shield class.</p>
    </div>

    <div class="article__section">
      <h2>What OOP means to me</h2>
      <p>
        I have learned that OOP is a way of ensuring that you don’t have to constantly repeat lines of code or functions
        to work on a set of data.
      </p>
      <p>
        It seems to be a better approach to the old way of writing multiple functions that change variables which can
        end up being messy or ‘spaghetti code’.
      </p>

      <h2>OOP at work</h2>

      <p>Recently in work I have been working with C# to create a login audit API.</p>
      <p>
        I have used many object-oriented programming concepts such as using interfaces to abstract my code, using
        getter/setter classes to store data in a structured way.
      </p>
      <p>
        I have then used the entity framework in .Net to pull data from a database and return the results as a JSON
        result with multiple API endpoints.
      </p>
      <p>
        I want to learn more about interfaces in C# and how they can abstract the functionality of my programs and make
        it easier for other developers to work on my program.
      </p>

      <h2>What i'm learning</h2>
      <p>
        I have recently learned about how to use OOP and the MVC pattern to create components that use data and update
        data sources and then render the data within a view.
      </p>
      <p>I have used this in some of my own projects/challenges I have worked on.</p>
      <p>
        I am looking forward to practicing OOP in JavaScript as I see it as a much better way of working with a
        collection of data and maintaining the state of an application.
      </p>
    </div>
  </div>` })}`;
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/QA/Understanding-Object-Oriented-Programming/Understanding-Object-Oriented-Programming.astro");

const $$file$9 = "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/QA/Understanding-Object-Oriented-Programming/Understanding-Object-Oriented-Programming.astro";
const $$url$9 = "/pages/Articles/QA/Understanding-Object-Oriented-Programming/Understanding-Object-Oriented-Programming";

const _page16 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$UnderstandingObjectOrientedProgramming,
	file: $$file$9,
	url: $$url$9
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$8 = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/QA/Python-Programming-and-SQL-Basics-1.2/Python-Programming-and-SQL-Basics.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$PythonProgrammingAndSQLBasics$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$PythonProgrammingAndSQLBasics$1;
  return renderTemplate`${renderComponent($$result, "ArticleLayout", $$ArticleLayout, { "title": "Python Programming and SQL Basics | Activity 1.3", "date": "01/06/2022", "time": "09:42am", "streamID": "633ec841c6bdedc1a0812584" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<div class="article__section">
    <h2>The task:</h2>

    <div class="article__image">
      <img src="../img/task.png" alt="" class="articleImg">
      <p>An image of the task.</p>
    </div>
  </div><div class="article__section">
    <h2>My program</h2>

    <p>
      I created a password strength checker that takes in a password using the input() method, breaks down the password
      into its individual characters and then loops over the characters creating a score for the strength of the
      password.
    </p>
    <p>The score is based on the type of characters inputted and the number of characters within the password.</p>

    <div class="article__image">
      <img src="../img/code.png" alt="" class="articleImg">
      <p>An image of the code for my program.</p>
    </div>
  </div><div class="article__section">
    <h2>The result of running the program</h2>

    <div class="article__image article__image-thin">
      <img src="../img/result.png" alt="" class="articleImg">
      <p>An image of the program running in the console.</p>
    </div>
  </div><div class="article__section">
    <h2>Projects I've been involved in</h2>
    <p>
      I have been coding challenges from frontend mentor which is an online service which provides frontend website
      development challenges that you can complete using the design files. I use HTML, CSS, and JavaScript to complete
      these challenges and sometimes use a pre-processor like SCSS for the styling.
    </p>
    <p>
      I have also been maintaining my own website which has my CV and portfolio on it with a section to search through
      all my existing projects. <a href="../../../../portfolio.html">Portfolio</a>
    </p>
  </div><div class="article__section">
    <h2>What I've recently learned</h2>
    <p>
      I have recently learned how to use web API’s using JavaScript fetch method to create applications that use real
      time data from the internet within my own webpages.
    </p>
    <p>
      I have used web APIs to create a Map workouts application and a movie search application which uses data from The
      Movie Database to search for a user’s inputted request and display the response on the screen.
    </p>
    <p>
      I did this by parsing the JSON response from the server and using the ForEach() method to loop through the data
      and display it on the screen.
    </p>
  </div><div class="article__section">
    <h2>Tech Stacks</h2>

    <p>At work we use a complex tech stack which includes:</p>
    <ul class="u-margin-bottom-medium">
      <li>HTML</li>
      <li>SCSS</li>
      <li>JavaScript</li>
      <li>Siebel CRM</li>
      <li>VUE JS</li>
      <li>SiteCore CMS</li>
    </ul>

    <p>They use the following software:</p>
    <ul class="u-margin-bottom-medium">
      <li>VisualStudio 2022</li>
      <li>VSCode</li>
      <li>SQL Server Management Studio 2019</li>
      <li>Siebel CRM</li>
    </ul>

    <p>At home my personal tech stack is:</p>
    <ul>
      <li>Netlify</li>
      <li>HTML</li>
      <li>CSS / SCSS</li>
      <li>JavaScript</li>
      <li>JavaScript</li>
      <li>Git</li>
      <li>Node JS</li>
      <li>MongoDB</li>
      <li>Post CSS</li>
      <li>Docker</li>
      <li>APIs</li>
    </ul>

    <p>View my <a href="../../../../index.html#tech-stack"> Tech Stack</a></p>
  </div>` })}`;
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/QA/Python-Programming-and-SQL-Basics-1.2/Python-Programming-and-SQL-Basics.astro");

const $$file$8 = "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/QA/Python-Programming-and-SQL-Basics-1.2/Python-Programming-and-SQL-Basics.astro";
const $$url$8 = "/pages/Articles/QA/Python-Programming-and-SQL-Basics-1.2/Python-Programming-and-SQL-Basics";

const _page17 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$PythonProgrammingAndSQLBasics$1,
	file: $$file$8,
	url: $$url$8
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$7 = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/QA/Python-Programming-and-SQL-Basics-1.3/Python-Programming-and-SQL-Basics.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$PythonProgrammingAndSQLBasics = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$PythonProgrammingAndSQLBasics;
  return renderTemplate`${renderComponent($$result, "ArticleLayout", $$ArticleLayout, { "title": "Python Programming and SQL Basics | Activity 1.2", "date": "23/05/2022", "time": "09:40am", "streamID": "633ec82fc6bdedc1a0812582" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<div class="article__section">
    <h2>The task:</h2>

    <div class="article__image">
      <img src="../img/task.png" alt="" class="articleImg">
      <p>An image of the task.</p>
    </div>
  </div><div class="article__section">
    <h2>Part 1:</h2>

    <p>
      This code gets the number of students in the class, the highest and lowest marks and the average mark formatted to
      two decimal places.
    </p>
    <ul>
      <li>The max function loops over the array and checks for the largest number</li>
      <li>The min function does the opposite</li>
    </ul>

    <div class="article__image">
      <img src="../img/part1.png" alt="" class="articleImg">
      <p>An image of part 1.</p>
    </div>
  </div><div class="article__section">
    <h2>Part 2:</h2>

    <p>
      This code returns a dictionary with the mark ranges, the number of marks within that range and a asterisks counter
      to tally them up.
    </p>

    <ul>
      <li>
        <p>The get asterisks function takes the number and returns the same number of asterisks.</p>
      </li>
      <li>
        <p>
          The get occourances in range function checks for how many times a number appears within a range by checking if
          the number is between a min and max value provided to the function.
        </p>
      </li>
    </ul>

    <div class="article__image article__image-thin">
      <img src="../img/part2.png" alt="" class="articleImg">
      <p>An image of part 2.</p>
    </div>
  </div><div class="article__section">
    <h2>Part 3:</h2>

    <p>
      This code displays the calculated pass mark for the class where at least 60% of the class has passed the exam (to
      the nearest 10).
    </p>
    <p>The students over function takes in a number on each loop and checks to see how many students have passed.</p>
    <p>
      When the number of students who have passed is closest to 60 then the got_pass_mark function returns true and the
      last value passed into the students_over function is then the pass mark.
    </p>

    <div class="article__image article__image-thin">
      <img src="../img/part3.png" alt="" class="articleImg">
      <p>An image of part 3.</p>
    </div>
  </div><div class="article__section">
    <h2>The result of running the program</h2>

    <div class="article__image">
      <img src="../img/result.png" alt="" class="articleImg">
      <p>An image of the program running in the console.</p>
    </div>
  </div><div class="article__section">
    <h2>Conclusion</h2>
    <p>I found it easy to get the min, max of the arrays data and to calculate the averages.</p>
    <p>
      I found the calculation of the pass mark to be the most difficult bit as it required some more complex
      calculations and working with multiple loops to get the desired result.
    </p>
    <p>I found it quite easy to complete this activity as we did a similar task in the classroom sessions.</p>
  </div>` })}`;
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/QA/Python-Programming-and-SQL-Basics-1.3/Python-Programming-and-SQL-Basics.astro");

const $$file$7 = "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/QA/Python-Programming-and-SQL-Basics-1.3/Python-Programming-and-SQL-Basics.astro";
const $$url$7 = "/pages/Articles/QA/Python-Programming-and-SQL-Basics-1.3/Python-Programming-and-SQL-Basics";

const _page18 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$PythonProgrammingAndSQLBasics,
	file: $$file$7,
	url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/QA/Prioritisation/Prioritisation.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$Prioritisation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Prioritisation;
  return renderTemplate`${renderComponent($$result, "ArticleLayout", $$ArticleLayout, { "title": "Prioritisation | Soft Skills", "date": "17/06/2022", "time": "16:29pm", "streamID": "633ec818c6bdedc1a0812580" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<div class="article__section">
    <h2>How I prioritize work</h2>

    <div class="article__section">
      <p>
        In my role at the GMC we work using the agile methodology, this means that in a 2 week time period the team has
        a group of tasks and stories we need to complete within the sprint.
      </p>
      <p>
        This makes prioritizing tasks very important to ensure that you complete the necessary work in time to complete
        the goal of the current sprint.
      </p>
      <p>When prioritizing tasks, I usually check for:</p>
      <ul class="u-margin-bottom-medium">
        <li>How much time will the task take?</li>
        <li>Who will I need to speak to / work with on the task? (Check for suitable times)</li>
        <li>What do I need to learn to compete the task?</li>
        <li>How important is the task to the business?</li>
        <li>What is the deadline for the task?</li>
      </ul>
      <p>
        After I ask myself these questions, I can decide which tasks have the most importance to the business and work
        on tasks that I know I can do independently.
      </p>
      <p>
        By doing this I ensure that I always have something to do at work and I’m never left doing nothing. It also
        allows me to convey to my team what exactly I’m currently working on/learning and helps me plan around my team.
      </p>
    </div>
  </div>` })}`;
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/QA/Prioritisation/Prioritisation.astro");

const $$file$6 = "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/Articles/QA/Prioritisation/Prioritisation.astro";
const $$url$6 = "/pages/Articles/QA/Prioritisation/Prioritisation";

const _page19 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Prioritisation,
	file: $$file$6,
	url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$5 = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/login/ResetPassword.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$ResetPassword = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ResetPassword;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<script defer src="../../scripts/Login/ResetPassword.js"><\/script>\n<script src="https://www.google.com/recaptcha/api.js" async defer><\/script>\n', '\n<script defer>\n  function recaptcha_callback() {\n    var SendNewPasswordButton = document.getElementById("SendNewPasswordButton");\n    SendNewPasswordButton.removeAttribute("disabled");\n  }\n<\/script>\n\n', ""])), maybeRenderHead($$result), renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Reset password" }, { "default": () => renderTemplate`<section class="login u-margin-top-large u-margin-bottom-large" id="EnterEmailSection">
    <form id="signUpForm" onsubmit="return false">
      <h1>Reset Password</h1>
      <p>Know your password? &nbsp;&nbsp;<a href="/pages/login/login.html">Log In</a></p>
      <div class="c-form__element c-form__element--small-margin">
        <label for="email" class="c-form__label">Email address</label>
        <input id="email" name="email" type="email" spellcheck="false" aria-describedby="email-hint" autocomplete="email" required class="c-text-input" required>
        <span id="errorMessageEmail"><i class="fa-solid fa-triangle-exclamation"></i>Please enter a valid email</span>
      </div>

      <input type="submit" class="c-button c-button--large c-button--semi-round c-button--primary c-button--primary--with-border c-button--full-width c-button--center-text u-margin-top-medium u-margin-top-small" value="Reset Password" id="startResetPasswordButton">
    </form>
  </section><section class="login u-margin-top-large u-margin-bottom-large" id="VerifyEmailContainer" style="display: none;">
    <form id="loginForm" class="loginForm verify">
      <h1>Verify Email</h1>
      <p class="verify">In order to prevent spam, we need to verify your email address.</p>
      <p class="verify">Please enter the code we sent to your email below.</p>
      <div class="spinner-container">
        <div class="lds-dual-ring" id="loadingSpinner"></div>
      </div>
      <div class="pinBox" id="pinBox">
        <input class="pinEntry" name="token" type="number" maxlength="4" autocomplete="off" required id="pinInput">
      </div>
      <span id="errorMessagePin"><i class="fa-solid fa-triangle-exclamation"></i>Incorrect Pin</span>
      <p id="resendCodeContainer" class="verify verify-large">
        Didn't recieve the code? &nbsp;&nbsp;<a href="#" id="resendCodeButton">Resend code</a>
      </p>
    </form>
  </section><section class="login u-margin-top-large u-margin-bottom-large" id="SavePasswordContainer" style="display: none;">
    <form id="signUpForm" onsubmit="return false">
      <h1>Reset Password</h1>

      <div class="c-form__element c-form__element--small-margin">
        <label for="email" class="c-form__label">New password</label>
        <input id="password" name="password" type="password" required class="c-text-input" required>
        <i class="fa-solid fa-eye passwordEye" id="ShowPasswordEye"></i>
        <i class="fa-solid fa-eye-slash passwordEye" id="HidePasswordEye"></i>
        <span class="error" id="errorMessagePassword"><i class="fa-solid fa-triangle-exclamation"></i>Incorrect password</span>
      </div>

      <div class="PasswordRequirements">
        <ul>
          <li>
            <div class="checkMark" id="length">
              <i class="fa-solid fa-check"></i>
            </div>
            <p>Password must be 8+ characters</p>
          </li>
          <li>
            <div class="checkMark" id="upper">
              <i class="fa-solid fa-check"></i>
            </div>
            <p>Uppercase and lowercase letter (A z)</p>
          </li>
          <li>
            <div class="checkMark" id="number">
              <i class="fa-solid fa-check"></i>
            </div>
            <p>Numeric character (0-9)</p>
          </li>
          <li>
            <div class="checkMark" id="special">
              <i class="fa-solid fa-check"></i>
            </div>
            <p>Special character (!, %, @, #, etc.)</p>
          </li>
        </ul>
      </div>
      <!-- Public -->
      <div class="g-recaptcha" data-sitekey="6LeiJF8iAAAAAO25BEZfbxbaSEaw55cShZLI761E" data-callback="recaptcha_callback">
      </div>
      <!-- Local -->
      <!-- <div class="g-recaptcha" data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" data-callback="recaptcha_callback"></div> -->
      <span id="errorMessageCaptcha"><i class="fa-solid fa-triangle-exclamation"></i>Please verify you're not a robot</span>
      <input type="submit" class="c-button c-button--large c-button--semi-round c-button--primary c-button--primary--with-border c-button--full-width c-button--center-text u-margin-top-medium u-margin-top-small" value="Save Password" id="SendNewPasswordButton" disabled>
    </form>
  </section>` }));
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/login/ResetPassword.astro");

const $$file$5 = "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/login/ResetPassword.astro";
const $$url$5 = "/pages/login/ResetPassword";

const _page20 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$ResetPassword,
	file: $$file$5,
	url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/login/verifyemail.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$Verifyemail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Verifyemail;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Verify email" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<section class="login u-margin-top-large u-margin-bottom-large" id="first-section">
    <form id="loginForm" class="loginForm verify">
      <h1>Verify Email</h1>
      <p class="verify">In order to prevent spam, we need to verify your email address.</p>
      <p class="verify">Please enter the code we sent to your email below.</p>
      <div class="spinner-container">
        <div class="lds-dual-ring" id="loadingSpinner"></div>
      </div>
      <div class="pinBox" id="pinBox">
        <input class="pinEntry" name="token" type="number" maxlength="4" autocomplete="off" required id="pinInput">
      </div>
      <span id="errorMessagePin"><i class="fa-solid fa-triangle-exclamation"></i>Incorrect Pin</span>
      <p id="resendCodeContainer" class="verify verify-large">
        Didn't recieve the code? &nbsp;&nbsp;<a href="#" id="resendCodeButton">Resend code</a>
      </p>
    </form>
  </section>` })}`;
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/login/verifyemail.astro");

const $$file$4 = "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/login/verifyemail.astro";
const $$url$4 = "/pages/login/verifyemail";

const _page21 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Verifyemail,
	file: $$file$4,
	url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/login/signup.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$Signup = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Signup;
  return renderTemplate(_a || (_a = __template(['<script src="https://www.google.com/recaptcha/api.js" async defer><\/script>\n<script defer>\n  function recaptcha_callback() {\n    var regsterBtn = document.getElementById("signUpButton");\n    regsterBtn.removeAttribute("disabled");\n  }\n<\/script>\n\n', ""])), renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Sign up" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<section class="login u-margin-bottom-large" id="first-section">
    <form id="signUpForm" onsubmit="return false">
      <h1>Sign Up</h1>
      <p>Already have an account? &nbsp;&nbsp;<a href="./login.html">Log In</a></p>
      <div class="form__two-column u-margin-bottom-small">
        <div class="c-form__element c-form__element--small-margin">
          <label for="firstname" class="c-form__label">First Name</label>
          <input class="c-text-input" id="firstname" name="firstname" type="text" maxlength="94" required>
          <span id="errorMessageFirstName"><i class="fa-solid fa-triangle-exclamation"></i>Please enter your first name</span>
        </div>
        <div class="c-form__element c-form__element--small-margin">
          <label for="lastname" class="c-form__label">Last Name</label>
          <input class="c-text-input" id="lastname" name="lastname" type="text" maxlength="94" required>
          <span id="errorMessageLastName"><i class="fa-solid fa-triangle-exclamation"></i>Please enter your last name</span>
        </div>
      </div>
      <div class="c-form__element c-form__element--small-margin">
        <label for="displayname" class="c-form__label">Display Name</label>
        <span class="c-form__hint">This will be visible to other users.</span>
        <input class="c-text-input" id="displayname" name="displayname" type="text" maxlength="94" required>
        <span id="errorMessageDisplayName"><i class="fa-solid fa-triangle-exclamation"></i>Please enter your display name</span>
      </div>
      <div class="c-form__element c-form__element--small-margin">
        <label for="email" class="c-form__label">Email Address</label>
        <input class="c-text-input" id="email" name="email" type="email" spellcheck="false" aria-describedby="email-hint" autocomplete="email" required>
        <span id="errorMessageEmail"><i class="fa-solid fa-triangle-exclamation"></i>Please enter a valid email</span>
        <span id="errorMessageEmailExists"><i class="fa-solid fa-triangle-exclamation"></i>Email has already been used</span>
      </div>
      <div class="c-form__element c-form__element--small-margin">
        <label for="password" class="c-form__label">Password</label>
        <div class="password-container">
          <input class="c-text-input" minlength="8" id="password" name="password" type="password" required>
          <i class="fa-solid fa-eye passwordEye" id="ShowPasswordEye"></i>
          <i class="fa-solid fa-eye-slash passwordEye" id="HidePasswordEye"></i>
        </div>
        <span id="errorMessagePassword"><i class="fa-solid fa-triangle-exclamation"></i>Password must meet requirements</span>
      </div>
      <div class="PasswordRequirements">
        <ul>
          <li>
            <div class="checkMark" id="length">
              <i class="fa-solid fa-check"></i>
            </div>
            <p>Password must be 8+ characters</p>
          </li>
          <li>
            <div class="checkMark" id="upper">
              <i class="fa-solid fa-check"></i>
            </div>
            <p>Uppercase and lowercase letter (A z)</p>
          </li>
          <li>
            <div class="checkMark" id="number">
              <i class="fa-solid fa-check"></i>
            </div>
            <p>Numeric character (0-9)</p>
          </li>
          <li>
            <div class="checkMark" id="special">
              <i class="fa-solid fa-check"></i>
            </div>
            <p>Special character (!, %, @, #, etc.)</p>
          </li>
        </ul>
      </div>
      <!-- Public -->
      <div class="g-recaptcha" data-sitekey="6LeiJF8iAAAAAO25BEZfbxbaSEaw55cShZLI761E" data-callback="recaptcha_callback">
      </div>
      <!-- Local -->
      <!-- <div class="g-recaptcha" data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" data-callback="recaptcha_callback"></div> -->
      <span id="errorMessageCaptcha"><i class="fa-solid fa-triangle-exclamation"></i>Please verify you're not a robot</span>
      <div class="terms-section">
        <p>
          By signing up, you're agreeing to our <a href="../../termsAndConditions.html">Terms & Conditions</a> and
          <a href="../../PrivacyPolicy.html">Privacy Policy</a>
        </p>
      </div>
      <input type="submit" class="c-button c-button--large c-button--semi-round c-button--primary c-button--primary--with-border c-button--full-width c-button--center-text u-margin-top-medium" value="Sign Up" id="signUpButton" disabled>
    </form>
  </section>` }));
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/login/signup.astro");

const $$file$3 = "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/login/signup.astro";
const $$url$3 = "/pages/login/signup";

const _page22 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Signup,
	file: $$file$3,
	url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/login/login.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Login;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Login" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<section class="login u-margin-bottom-large" id="first-section">
    <form id="loginForm" onsubmit="return false">
      <h1>Login</h1>
      <p>
        Dont have an account? &nbsp;&nbsp;<a href="/pages/login/signup.html">Sign Up</a>
      </p>
      <div class="c-form__element c-form__element--small-margin">
        <label for="email" class="c-form__label">Email address</label>
        <input id="email" name="email" type="email" spellcheck="false" aria-describedby="email-hint" autocomplete="email" required class="c-text-input" required>
        <span id="errorMessageEmail"><i class="fa-solid fa-triangle-exclamation"></i>Please enter a valid email</span>
      </div>

      <div class="c-form__element c-form__element--small-margin">
        <label for="email" class="c-form__label">Password</label>
        <input id="password" name="password" type="password" required class="c-text-input" required>
        <i class="fa-solid fa-eye passwordEye" id="ShowPasswordEye"></i>
        <i class="fa-solid fa-eye-slash passwordEye" id="HidePasswordEye"></i>
        <span class="error" id="errorMessagePassword"><i class="fa-solid fa-triangle-exclamation"></i>Incorrect password</span>
      </div>

      <a href="/pages/login/ResetPassword.html">Forgot Password?</a>
      <span id="errorMessageEnterPassword"><i class="fa-solid fa-triangle-exclamation"></i>Please enter a password</span>
      <input type="submit" class="c-button c-button--large c-button--semi-round c-button--primary c-button--primary--with-border c-button--full-width c-button--center-text u-margin-top-medium" value="Login" id="loginButton">
    </form>
  </section>` })}`;
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/login/login.astro");

const $$file$2 = "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/pages/login/login.astro";
const $$url$2 = "/pages/login/login";

const _page23 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Login,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/BASE.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$BASE = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BASE;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "INSERTTITLE" }, {})}`;
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/BASE.astro");

const $$file$1 = "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/BASE.astro";
const $$url$1 = "/BASE";

const _page24 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$BASE,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const _sfc_main = {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    bcsLogo: {
      type: String,
      default: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/BCS_logo_2021.svg/1200px-BCS_logo_2021.svg.png",
    },
  },
};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    ssrRenderAttrs(mergeProps({ class: "c-certification" }, _attrs))
  }><img${
    ssrRenderAttr("src", $props.bcsLogo)
  } alt="BCS logo" class="c-certification__image"><div class="c-certification__content"><h3 class="c-certification__title">${
    ssrInterpolate($props.title)
  }</h3><p class="c-certification__description">${
    ssrInterpolate($props.description)
  }</p><a${
    ssrRenderAttr("href", $props.href)
  } class="c-certification__download">Download Certificate<i class="fa-sharp fa-solid fa-file-pdf"></i></a></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/CV/CertificationComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const CertificationComponent = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

const $$Astro = createAstro("C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/CV.astro", "", "file:///C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/");
const $$CV = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CV;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "CV" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<section class="c-container c-flex-strip c-flex-strip--row c-flex-strip--align-center c-flex-strip--justify-space-between" id="first-section">
    <h1>My CV</h1>
    <div class="work__title--buttons">
      ${renderComponent($$result, "GenericButton", GenericButton, { "href": "../Files/CV .docx", "corner": "semi-round", "size": "large", "color": "primary", "withBorder": "true" }, { "default": () => renderTemplate`
        Download CV
      ` })}
      ${renderComponent($$result, "GenericButton", GenericButton, { "href": "https://www.linkedin.com/in/elliot-la-fave-4215b6222/?locale=es_ES", "corner": "semi-round", "size": "large", "color": "gray", "withBorder": "true" }, { "default": () => renderTemplate`
        Linkedin
      ` })}
    </div>
  </section><div class="c-container">
    <h2>Personal statement</h2>
    <p>
      As a dedicated software developer, I quickly transitioned from an apprentice to a recognised developer at the
      General Medical Council, evidencing my commitment and skill.
    </p>
    <p>
      With expertise in C#, .NET, and Sitecore CMS, I also deeply understand Agile and tools like Jira. My varied
      experiences, from eco projects to software upgrades, highlight my versatility and holistic industry perspective.
    </p>
  </div><div class="c-container">
    <h2>Work experience</h2>

    <div class="c-history">
      <img class="c-history__image" src="/img/Logos/gmc_logo.png" alt="image">
      <div class="c-history__content">
        <h3 class="c-history__title">Web developer</h3>
        <div class="c-flex-strip c-flex-strip--row c-flex-strip--align-center c-flex-strip--justify-flex-start" style="gap: 0.6rem;">
          <h4>General Medical Council</h4>
          <h4>•</h4>
          <h4>Apprenticeship</h4>
        </div>
        <div class="c-flex-strip c-flex-strip--row c-flex-strip--align-center c-flex-strip--justify-flex-start" style="gap: 0.6rem;">
          <p>Mar 2022 - Present</p>
          <p>•</p>
          <p>1 yr 2 mos</p>
        </div>
        <div class="c-flex-strip c-flex-strip--row c-flex-strip--align-center c-flex-strip--justify-flex-start" style="gap: 0.6rem;">
          <p>3 hardman street, Manchester</p>
        </div>
        <div class="c-history__skills">
          <span class="bold">Skills: <span>Agile Methodologies</span></span>
          <span> •</span>
          <span>Scrum</span>
          <span> •</span>
          <span>SQL</span>
          <span> •</span>
          <span>C#</span>
          <span> •</span>
          <span>Gulp</span>
          <span> •</span>
          <span>Sass</span>
          <span> •</span>
          <span>Sitecore</span>
          <span> •</span>
          <span>JavaScript</span>
          <span> •</span>
          <span>ASP.NET Core</span>
          <span> •</span>
          <span>ASP.NET MVC</span>
          <span> •</span>
          <span>ASP.NET Web API</span>
          <span> •</span>
          <span>TypeScript</span>
          <span> •</span>
          <span>Webpack</span>
        </div>
        <ul>
          <li>
            <p class="c-history__text">Won a valued recognition award for supporting the Sitecore 10 upgrade.</p>
          </li>
          <li>
            <p class="c-history__text">Won a kudos award for passing my apprenticeship exams.</p>
          </li>
          <li>
            <p class="c-history__text">Won a valued award for passing my apprenticeship with a distinction grade.</p>
          </li>
        </ul>
      </div>
    </div>

    <hr class="c-divider">

    <div class="c-history">
      <img class="c-history__image" src="/img/Logos/mcdonalds_logo.jpg" alt="image">
      <div class="c-history__content">
        <h3 class="c-history__title">Restaurant Crew Member</h3>
        <div class="c-flex-strip c-flex-strip--row c-flex-strip--align-center c-flex-strip--justify-flex-start" style="gap: 0.6rem;">
          <h4>McDonald's</h4>
          <h4>•</h4>
          <h4>Full-time</h4>
        </div>
        <div class="c-flex-strip c-flex-strip--row c-flex-strip--align-center c-flex-strip--justify-flex-start" style="gap: 0.6rem;">
          <p>Aug 2019 - Mar 2022</p>
          <p>•</p>
          <p>2 yrs 8 mos</p>
        </div>
        <div class="c-flex-strip c-flex-strip--row c-flex-strip--align-center c-flex-strip--justify-flex-start" style="gap: 0.6rem;">
          <p>13 Rowlandsway, Wythenshawe</p>
        </div>
        <p class="c-history__text">Won employee of the quarter.</p>
      </div>
    </div>

    <hr class="c-divider">

    <div class="c-history">
      <img class="c-history__image" src="/img/Logos/Hitec-logo.png" alt="image">
      <div class="c-history__content">
        <h3 class="c-history__title">Consumer Electronics Repairer</h3>
        <div class="c-flex-strip c-flex-strip--row c-flex-strip--align-center c-flex-strip--justify-flex-start" style="gap: 0.6rem;">
          <h4>Hitec Computers</h4>
          <h4>•</h4>
          <h4>Part-time</h4>
        </div>
        <div class="c-flex-strip c-flex-strip--row c-flex-strip--align-center c-flex-strip--justify-flex-start" style="gap: 0.6rem;">
          <p>Jun 2015 - Mar 2022</p>
          <p>•</p>
          <p>5 mos</p>
        </div>
        <div class="c-flex-strip c-flex-strip--row c-flex-strip--align-center c-flex-strip--justify-flex-start" style="gap: 0.6rem;">
          <p>Cheadle, Metropolitan Borough of Stockport</p>
        </div>
        <p class="c-history__text">
          I repaired iPhones and laptops that had various types of damage such as screen repairs. I updated drivers and
          optimised the peformance of old laptops. Also i gained my first experience dealing with customers within the
          store offering them products and services to help them.
        </p>
      </div>
    </div>
  </div><div class="c-container">
    <h2>Education history</h2>
    <div class="c-history">
      <img class="c-history__image" src="/img/CV Logos/QA.jpg" alt="image">
      <div class="c-history__content">
        <h3 class="c-history__title">QA Apprenticeships</h3>
        <div class="c-flex-strip c-flex-strip--row c-flex-strip--align-center c-flex-strip--justify-flex-start" style="gap: 0.6rem;">
          <h4>General Medical Council</h4>
          <h4>•</h4>
          <h4>Full-time</h4>
        </div>
        <div class="c-flex-strip c-flex-strip--row c-flex-strip--align-center c-flex-strip--justify-flex-start" style="gap: 0.6rem;">
          <p>Mar 2022 - July 2023</p>
          <p>•</p>
          <p>1 yr 2 mos</p>
        </div>
        <div class="c-flex-strip c-flex-strip--row c-flex-strip--align-center c-flex-strip--justify-flex-start" style="gap: 0.6rem;">
          <p>3 hardman street, Manchester</p>
        </div>
      </div>
    </div>

    <hr class="c-divider">

    <div class="c-history">
      <img class="c-history__image" src="/img/CV Logos/kingsway.jpg" alt="image">
      <div class="c-history__content">
        <h3 class="c-history__title">The Kingsway School</h3>
        <div class="c-flex-strip c-flex-strip--row c-flex-strip--align-center c-flex-strip--justify-flex-start" style="gap: 0.6rem;">
          <p>Sep 2014 - May 2019</p>
          <p>•</p>
          <p>4 yr 8 mos</p>
        </div>
        <div class="c-flex-strip c-flex-strip--row c-flex-strip--align-center c-flex-strip--justify-flex-start" style="gap: 0.6rem;">
          <p>Cheadle & Gatley, Stockport</p>
        </div>
      </div>
    </div>

    <hr class="c-divider">

    <div class="c-history">
      <img class="c-history__image" src="/img/CV Logos/outwood.png" alt="image">
      <div class="c-history__content">
        <h3 class="c-history__title">Outwood Primary School</h3>
        <div class="c-flex-strip c-flex-strip--row c-flex-strip--align-center c-flex-strip--justify-flex-start" style="gap: 0.6rem;">
          <p>Sep 2007 - May 2014</p>
          <p>•</p>
          <p>6 yr 8 mos</p>
        </div>
        <div class="c-flex-strip c-flex-strip--row c-flex-strip--align-center c-flex-strip--justify-flex-start" style="gap: 0.6rem;">
          <p>Heald Green, Stockport</p>
        </div>
      </div>
    </div>
  </div><div class="c-container">
    <h2>Apprenticeship Results</h2>
    <div class="c-history c-history--with-grade">
      <div class="c-history__grade c-history__grade--long"><h3>Distinction</h3></div>
      <div class="c-history__content">
        <h3 class="c-history__title">Level 3 software development technician</h3>
      </div>
    </div>
  </div><div class="c-container">
    <h2>GCSE Grades</h2>
    <div class="c-history c-history--with-grade">
      <div class="c-history__grade"><h3>7</h3></div>
      <div class="c-history__content">
        <h3 class="c-history__title">Computer Science</h3>
      </div>
    </div>
    <hr class="c-divider">
    <div class="c-history c-history--with-grade">
      <div class="c-history__grade"><h3>5</h3></div>
      <div class="c-history__content">
        <h3 class="c-history__title">Business</h3>
      </div>
    </div>
    <hr class="c-divider">
    <div class="c-history c-history--with-grade">
      <div class="c-history__grade"><h3>5</h3></div>
      <div class="c-history__content">
        <h3 class="c-history__title">Mathematics</h3>
      </div>
    </div>
    <hr class="c-divider">
    <div class="c-history c-history--with-grade">
      <div class="c-history__grade"><h3>5</h3></div>
      <div class="c-history__content">
        <h3 class="c-history__title">Combined Science Higher - 1</h3>
      </div>
    </div>
    <hr class="c-divider">
    <div class="c-history c-history--with-grade">
      <div class="c-history__grade"><h3>5</h3></div>
      <div class="c-history__content">
        <h3 class="c-history__title">Combined Science Higher - 2</h3>
      </div>
    </div>
    <hr class="c-divider">
    <div class="c-history c-history--with-grade">
      <div class="c-history__grade"><h3>5</h3></div>
      <div class="c-history__content">
        <h3 class="c-history__title">English Language</h3>
      </div>
    </div>
  </div><div class="c-container">
    <h2>Accomplishments</h2>
    <h3>Eco award</h3>
    <p>
      I received the esteemed Eco Award presented by the Greater Manchester Youth Council. This accolade recognised my
      role in a clean air project, where we conceived a unique way to promote environmental consciousness using spray
      paint-designed advertisements.
    </p>
    <p>
      These engaging displays found their place at over 50 Metrolink stops across Manchester, effectively spreading our
      message about the importance of clean air.
    </p>
    <hr class="c-divider">
    <h3>Short film production</h3>
    <p>
      In a collaborative effort with a team at the Water Adventure Centre youth group, we created an impactful short
      film. Our goal was to educate individuals about the issues of radicalisation within the UK and the dangers of
      terrorism.
    </p>
    <p>
      Using the medium of film, we aimed to illuminate these pressing concerns and initiate a dialogue about safety,
      understanding, and prevention.
    </p>
  </div><section class="c-container" id="Certifications">
    <h2>Certifications</h2>
    <div class="c-grid" style="--gap: 2.5rem;">
      ${renderComponent($$result, "CertificationComponent", CertificationComponent, { "imgUri": "/img/Logos/bcs_logo.png", "description": "This certificate demonstrates my expertise in software development methodologies, as recognised by the British Computer Society.", "title": "Level 3 Certificate in Software Development Methodologies", "href": "/Files/PDF/Certifications/bcs-level-3-certificate-in-software-development-methodologies.pdf" })}
      ${renderComponent($$result, "CertificationComponent", CertificationComponent, { "imgUri": "/img/Logos/bcs_logo.png", "description": "This certificate demonstrates my expertise in programming, as recognised by the British Computer Society.", "title": "Level 3 Certificate in Programming", "href": "/Files/PDF/Certifications/bcs-level-3-certificate-in-programming.pdf" })}
    </div>
  </section><section class="c-container" id="Certificates">
    <h2>Certificates</h2>
    <div class="c-grid" style="--gap: 2rem;">
      <a href="https://app.pluralsight.com/learner/user/courses/v2/905cfabb-a2dd-45d7-9a46-2709bef48f9b/certificate" target="_blank">
        <div class="c-certificate">
          <img src="/img/certificates/ControllingProgramFlow.png" alt="Complete JavaScript Course Certificate Udemy">
          <p class="c-certificate__title">Controlling Program Flow in C# 9</p>
        </div>
      </a>

      <a href="https://certificates.cloudacademy.com/8d7025efbaaa338843a3c34ad34fa5690e2110fe.pdf" target="_blank">
        <div class="c-certificate">
          <img src="/img/certificates/PracticeOOP.png" alt="Complete JavaScript Course Certificate Udemy">
          <p class="c-certificate__title">Practice: Understanding Object-Oriented Programming</p>
        </div>
      </a>

      <a href="https://www.udemy.com/certificate/UC-c32f656e-cc14-4848-aced-e373184e2822/" target="_blank">
        <div class="c-certificate">
          <img src="/img/certificates/Advanced-CSS-Certificate.png" alt="Advanced CSS Certificate Udemy">
          <p class="c-certificate__title">Advanced CSS and Sass</p>
        </div>
      </a>

      <a href="https://www.udemy.com/certificate/UC-1b0583ea-fe80-40c9-a386-0b73784e7307/" target="_blank">
        <div class="c-certificate">
          <img src="/img/certificates/Complete-Javascript-Course.jpg" alt="Complete JavaScript Course Certificate Udemy">
          <p class="c-certificate__title">The Complete JavaScript Course</p>
        </div>
      </a>

      <a href="https://certificates.cloudacademy.com/8f33c9ec7275ed7206cb6196cd7beab2ce6a8476.pdf" target="_blank">
        <div class="c-certificate">
          <img src="/img/certificates/DiscoverOOP.png" alt="Complete JavaScript Course Certificate Udemy">
          <p class="c-certificate__title">Discover: Object Oriented Programming</p>
        </div>
      </a>

      <a href="https://app.pluralsight.com/learner/user/courses/v2/0096b00d-2398-435a-82f7-3f5401408ab1/certificate" target="_blank">
        <div class="c-certificate">
          <img src="/img/certificates/CSharpFundimentals.png" alt="Complete JavaScript Course Certificate Udemy">
          <p class="c-certificate__title">C# Fundimentals</p>
        </div>
      </a>

      <a href="https://certificates.cloudacademy.com/baedd379c9d004b7ebc991b6d2fa0eb5d2e0c255.pdf" target="_blank">
        <div class="c-certificate">
          <img src="/img/certificates/PracticePython1.3.png" alt="Complete JavaScript Course Certificate Udemy">
          <p class="c-certificate__title">Practice: Python Programming 2</p>
        </div>
      </a>

      <a href="https://certificates.cloudacademy.com/f5523a5e412ff1799f7ff4ea16a332ac34a521fd.pdf" target="_blank">
        <div class="c-certificate">
          <img src="/img/certificates/DiscoverPython1.2.png" alt="Complete JavaScript Course Certificate Udemy">
          <p class="c-certificate__title">Discover: Python Programming and SQL Basics</p>
        </div>
      </a>
    </div>
  </section>` })}`;
}, "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/CV.astro");

const $$file = "C:/Users/ellio/Documents/GitHub/elliotlafave123.github.io/src/pages/CV.astro";
const $$url = "/CV";

const _page25 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$CV,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/Get a quote.astro", _page1],["src/pages/My Process.astro", _page2],["src/pages/contact-me.astro", _page3],["src/pages/portfolio.astro", _page4],["src/pages/account.astro", _page5],["src/pages/pages/index.astro", _page6],["src/pages/pages/Articles/index.astro", _page7],["src/pages/pages/Articles/GMC Work/index.astro", _page8],["src/pages/pages/Articles/GMC Work/Portfolio-task-1/Portfolio-task-1.astro", _page9],["src/pages/pages/Articles/GMC Work/Login Audit Api/Login Audit Api.astro", _page10],["src/pages/pages/Articles/GMC Work/Login Audit App/Login Audit App.astro", _page11],["src/pages/pages/Articles/Personal/index.astro", _page12],["src/pages/pages/Articles/Personal/Comments Section/Comments Section.astro", _page13],["src/pages/pages/Articles/Personal/Shop Website/Shop Website.astro", _page14],["src/pages/pages/Articles/QA/index.astro", _page15],["src/pages/pages/Articles/QA/Understanding-Object-Oriented-Programming/Understanding-Object-Oriented-Programming.astro", _page16],["src/pages/pages/Articles/QA/Python-Programming-and-SQL-Basics-1.2/Python-Programming-and-SQL-Basics.astro", _page17],["src/pages/pages/Articles/QA/Python-Programming-and-SQL-Basics-1.3/Python-Programming-and-SQL-Basics.astro", _page18],["src/pages/pages/Articles/QA/Prioritisation/Prioritisation.astro", _page19],["src/pages/pages/login/ResetPassword.astro", _page20],["src/pages/pages/login/verifyemail.astro", _page21],["src/pages/pages/login/signup.astro", _page22],["src/pages/pages/login/login.astro", _page23],["src/pages/BASE.astro", _page24],["src/pages/CV.astro", _page25],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),Object.assign({"name":"@astrojs/vue","clientEntrypoint":"@astrojs/vue/client.js","serverEntrypoint":"@astrojs/vue/server.js"}, { ssr: _renderer1 }),];

export { pageMap, renderers };
