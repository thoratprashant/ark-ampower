export type MenuItemType = {
  key: string
  label: string
  isTitle?: boolean
  icon?: string
  url?: string
  badge?: {
    variant: string
    text: string
  }
  parentKey?: string
  isDisabled?: boolean
  collapsed?: boolean
  children?: MenuItemType[]
}

export type SubMenus = {
  item: MenuItemType
  linkClassName?: string
  subMenuClassName?: string
  activeMenuItems?: Array<string>
  toggleMenu?: (item: MenuItemType, status: boolean) => void
  className?: string
}

export const MENU_ITEMS: MenuItemType[] = [
  {
    key: 'Care Plan',
    label: 'Care Plan ',
    icon: 'ti-heart',
  },
  {
    key: 'My Health',
    label: 'My Health',
    icon: 'ti-clipboard-heart',
    children: [
      {
        key: 'Health Summary',
        label: 'Health Summary',
        url: '/error-401',
        // parentKey: 'errors',
      },
      {
        key: 'Results',
        label: 'Results',
        url: '/error-400',
        // parentKey: 'errors',
      },
      {
        key: 'Documents',
        label: 'Documents',
        url: '/patient/my-documents/labs',
      },
      {
        key: 'Coverage & Claims',
        label: 'Results',
        url: '/error-400',
        // parentKey: 'errors',
      },

    ]
  },
  {
    key: 'Appointment & Referrals',
    label: 'Appointment & Referrals ',
    icon: 'ti-calendar-check',
    url: '/patient/appointments-referrals/appointments',
  },
  {
    key: 'Request & Services',
    label: 'Request & Services',
    icon: 'ti-settings',
    // url: '/dashboards/sales',
  },
  {
    key: 'Messaging',
    label: 'Messaging ',
    icon: 'ti-message',
    // url: '/dashboards/sales',
  },
  {
    key: 'Resources & Education',
    label: 'Resources & Education ',
    icon: 'ti-school',
    // url: '/dashboards/sales',
  },
]
 