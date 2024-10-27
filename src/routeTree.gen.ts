/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ResourcesTheFirstBrowserWarImport } from './routes/resources/the-first-browser-war'
import { Route as ResourcesPhpCodespacesImport } from './routes/resources/php-codespaces'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()
const TheoryIndexLazyImport = createFileRoute('/theory/')()
const ResourcesIndexLazyImport = createFileRoute('/resources/')()
const NewsIndexLazyImport = createFileRoute('/news/')()
const LabsIndexLazyImport = createFileRoute('/labs/')()
const LabsCourseLabStepLazyImport = createFileRoute(
  '/labs/$course/$lab/$step',
)()

// Create/Update Routes

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const TheoryIndexLazyRoute = TheoryIndexLazyImport.update({
  id: '/theory/',
  path: '/theory/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/theory/index.lazy').then((d) => d.Route))

const ResourcesIndexLazyRoute = ResourcesIndexLazyImport.update({
  id: '/resources/',
  path: '/resources/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/resources/index.lazy').then((d) => d.Route),
)

const NewsIndexLazyRoute = NewsIndexLazyImport.update({
  id: '/news/',
  path: '/news/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/news/index.lazy').then((d) => d.Route))

const LabsIndexLazyRoute = LabsIndexLazyImport.update({
  id: '/labs/',
  path: '/labs/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/labs/index.lazy').then((d) => d.Route))

const ResourcesTheFirstBrowserWarRoute =
  ResourcesTheFirstBrowserWarImport.update({
    id: '/resources/the-first-browser-war',
    path: '/resources/the-first-browser-war',
    getParentRoute: () => rootRoute,
  } as any)

const ResourcesPhpCodespacesRoute = ResourcesPhpCodespacesImport.update({
  id: '/resources/php-codespaces',
  path: '/resources/php-codespaces',
  getParentRoute: () => rootRoute,
} as any)

const LabsCourseLabStepLazyRoute = LabsCourseLabStepLazyImport.update({
  id: '/labs/$course/$lab/$step',
  path: '/labs/$course/$lab/$step',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/labs/$course.$lab.$step.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/resources/php-codespaces': {
      id: '/resources/php-codespaces'
      path: '/resources/php-codespaces'
      fullPath: '/resources/php-codespaces'
      preLoaderRoute: typeof ResourcesPhpCodespacesImport
      parentRoute: typeof rootRoute
    }
    '/resources/the-first-browser-war': {
      id: '/resources/the-first-browser-war'
      path: '/resources/the-first-browser-war'
      fullPath: '/resources/the-first-browser-war'
      preLoaderRoute: typeof ResourcesTheFirstBrowserWarImport
      parentRoute: typeof rootRoute
    }
    '/labs/': {
      id: '/labs/'
      path: '/labs'
      fullPath: '/labs'
      preLoaderRoute: typeof LabsIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/news/': {
      id: '/news/'
      path: '/news'
      fullPath: '/news'
      preLoaderRoute: typeof NewsIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/resources/': {
      id: '/resources/'
      path: '/resources'
      fullPath: '/resources'
      preLoaderRoute: typeof ResourcesIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/theory/': {
      id: '/theory/'
      path: '/theory'
      fullPath: '/theory'
      preLoaderRoute: typeof TheoryIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/labs/$course/$lab/$step': {
      id: '/labs/$course/$lab/$step'
      path: '/labs/$course/$lab/$step'
      fullPath: '/labs/$course/$lab/$step'
      preLoaderRoute: typeof LabsCourseLabStepLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/resources/php-codespaces': typeof ResourcesPhpCodespacesRoute
  '/resources/the-first-browser-war': typeof ResourcesTheFirstBrowserWarRoute
  '/labs': typeof LabsIndexLazyRoute
  '/news': typeof NewsIndexLazyRoute
  '/resources': typeof ResourcesIndexLazyRoute
  '/theory': typeof TheoryIndexLazyRoute
  '/labs/$course/$lab/$step': typeof LabsCourseLabStepLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/resources/php-codespaces': typeof ResourcesPhpCodespacesRoute
  '/resources/the-first-browser-war': typeof ResourcesTheFirstBrowserWarRoute
  '/labs': typeof LabsIndexLazyRoute
  '/news': typeof NewsIndexLazyRoute
  '/resources': typeof ResourcesIndexLazyRoute
  '/theory': typeof TheoryIndexLazyRoute
  '/labs/$course/$lab/$step': typeof LabsCourseLabStepLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/resources/php-codespaces': typeof ResourcesPhpCodespacesRoute
  '/resources/the-first-browser-war': typeof ResourcesTheFirstBrowserWarRoute
  '/labs/': typeof LabsIndexLazyRoute
  '/news/': typeof NewsIndexLazyRoute
  '/resources/': typeof ResourcesIndexLazyRoute
  '/theory/': typeof TheoryIndexLazyRoute
  '/labs/$course/$lab/$step': typeof LabsCourseLabStepLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/resources/php-codespaces'
    | '/resources/the-first-browser-war'
    | '/labs'
    | '/news'
    | '/resources'
    | '/theory'
    | '/labs/$course/$lab/$step'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/resources/php-codespaces'
    | '/resources/the-first-browser-war'
    | '/labs'
    | '/news'
    | '/resources'
    | '/theory'
    | '/labs/$course/$lab/$step'
  id:
    | '__root__'
    | '/'
    | '/resources/php-codespaces'
    | '/resources/the-first-browser-war'
    | '/labs/'
    | '/news/'
    | '/resources/'
    | '/theory/'
    | '/labs/$course/$lab/$step'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  ResourcesPhpCodespacesRoute: typeof ResourcesPhpCodespacesRoute
  ResourcesTheFirstBrowserWarRoute: typeof ResourcesTheFirstBrowserWarRoute
  LabsIndexLazyRoute: typeof LabsIndexLazyRoute
  NewsIndexLazyRoute: typeof NewsIndexLazyRoute
  ResourcesIndexLazyRoute: typeof ResourcesIndexLazyRoute
  TheoryIndexLazyRoute: typeof TheoryIndexLazyRoute
  LabsCourseLabStepLazyRoute: typeof LabsCourseLabStepLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  ResourcesPhpCodespacesRoute: ResourcesPhpCodespacesRoute,
  ResourcesTheFirstBrowserWarRoute: ResourcesTheFirstBrowserWarRoute,
  LabsIndexLazyRoute: LabsIndexLazyRoute,
  NewsIndexLazyRoute: NewsIndexLazyRoute,
  ResourcesIndexLazyRoute: ResourcesIndexLazyRoute,
  TheoryIndexLazyRoute: TheoryIndexLazyRoute,
  LabsCourseLabStepLazyRoute: LabsCourseLabStepLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/resources/php-codespaces",
        "/resources/the-first-browser-war",
        "/labs/",
        "/news/",
        "/resources/",
        "/theory/",
        "/labs/$course/$lab/$step"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/resources/php-codespaces": {
      "filePath": "resources/php-codespaces.tsx"
    },
    "/resources/the-first-browser-war": {
      "filePath": "resources/the-first-browser-war.tsx"
    },
    "/labs/": {
      "filePath": "labs/index.lazy.tsx"
    },
    "/news/": {
      "filePath": "news/index.lazy.tsx"
    },
    "/resources/": {
      "filePath": "resources/index.lazy.tsx"
    },
    "/theory/": {
      "filePath": "theory/index.lazy.tsx"
    },
    "/labs/$course/$lab/$step": {
      "filePath": "labs/$course.$lab.$step.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
