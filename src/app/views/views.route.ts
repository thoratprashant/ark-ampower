import type { Route } from "@angular/router";

export const VIEWS_ROUTES: Route[] = [     
  {
    path: 'ui',
    loadChildren: () =>
      import('./ui/ui-pages.route').then((mod) => mod.UI_PAGES_ROUTES),
  },
  {
    path: 'extended-ui',
    loadChildren: () =>
      import('./extended-ui/extended-ui.route').then((mod) => mod.EXTENDED_UI_ROUTES),
  },
  {
    path: 'icons',
    loadChildren: () =>
      import('./icons/icons.route').then((mod) => mod.ICONS_ROUTES),
  }, 
  {
    path: 'form',
    loadChildren: () =>
      import('./forms/form.route').then((mod) => mod.FORMS_ROUTES),
  },
  {
    path: 'tables',
    loadChildren: () =>
      import('./tables/tables.route').then((mod) => mod.TABLES_ROUTES),
  },
  {
    path: 'maps',
    loadChildren: () =>
      import('./maps/maps.route').then((mod) => mod.MAP_ROUTES),
  },
]