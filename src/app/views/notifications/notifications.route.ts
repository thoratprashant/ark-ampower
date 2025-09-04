import type { Route } from "@angular/router";
import { NotificationsComponent } from "./notifications/notifications.component";

export const NOTIFICATIONS_ROUTES: Route[] = [
  {
    path: 'notifications',
    component: NotificationsComponent,
    data: { title: 'Notifications' }
  },
]