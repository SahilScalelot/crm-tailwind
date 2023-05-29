/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
  {
    id   : 'dashboard',
    title: 'Dashboard',
    type : 'basic',
    icon : 'heroicons_outline:home',
    link : '/dashboard'
  },{
    id   : 'customers',
    title: 'Customers',
    type : 'basic',
    icon : 'heroicons_outline:user',
    link : '/customers'
  },{
    id   : 'sales',
    title: 'Sales',
    type : 'collapsable',
    icon : 'heroicons_outline:scale',
    children: [
      {
        id   : 'sales.proposals',
        title: 'Proposals',
        type : 'basic',
        link : '/sales/proposals'
      },{
        id   : 'sales.estimated',
        title: 'Estimated',
        type : 'basic',
        link : '/sales/estimated'
      },{
        id   : 'sales.invoices',
        title: 'Invoices',
        type : 'basic',
        link : '/sales/invoices'
      },{
        id   : 'sales.payments',
        title: 'Payments',
        type : 'basic',
        link : '/sales/payments'
      },{
        id   : 'sales.credit-notes',
        title: 'Credit Notes',
        type : 'basic',
        link : '/sales/credit-notes'
      },{
        id   : 'sales.items',
        title: 'Items',
        type : 'basic',
        link : '/sales/items'
      }
    ]
  },{
    id   : 'subscriptions',
    title: 'Subscriptions',
    type : 'basic',
    icon : 'heroicons_outline:refresh',
    link : '/subscriptions'
  },{
    id   : 'expenses',
    title: 'Expenses',
    type : 'basic',
    icon : 'heroicons_outline:document-text',
    link : '/expenses'
  },{
    id   : 'contracts',
    title: 'Contracts',
    type : 'basic',
    icon : 'heroicons_outline:document',
    link : '/contracts'
  },{
    id   : 'projects',
    title: 'Projects',
    type : 'basic',
    icon : 'heroicons_outline:menu',
    link : '/projects'
  },{
    id   : 'tasks',
    title: 'Tasks',
    type : 'basic',
    icon : 'heroicons_outline:database',
    link : '/tasks'
  },{
    id   : 'support',
    title: 'Support',
    type : 'basic',
    icon : 'heroicons_outline:ticket',
    link : '/support'
  },{
    id   : 'leads',
    title: 'Leads',
    type : 'basic',
    icon : 'heroicons_outline:phone',
    link : '/leads'
  },{
    id   : 'estimate-request',
    title: 'Estimate Request',
    type : 'basic',
    icon : 'heroicons_outline:table',
    link : '/estimate-request'
  },{
    id   : 'knowledge-base',
    title: 'Knowledge Base',
    type : 'basic',
    icon : 'heroicons_outline:folder-open',
    link : '/knowledge-base'
  },{
    id   : 'utilities',
    title: 'Utilities',
    type : 'collapsable',
    icon : 'heroicons_outline:adjustments',
    children: [
      {
        id   : 'utilities.media',
        title: 'Media',
        type : 'basic',
        link : '/utilities/media'
      },{
        id   : 'utilities.bulk-pdf-export',
        title: 'bulk-pdf-export',
        type : 'basic',
        link : '/utilities/bulk-pdf-export'
      },{
        id   : 'utilities.calendar',
        title: 'Calendar',
        type : 'basic',
        link : '/utilities/calendar'
      },{
        id   : 'utilities.announcements',
        title: 'Announcements',
        type : 'basic',
        link : '/utilities/announcements'
      },{
        id   : 'utilities.activity-log',
        title: 'Activity Log',
        type : 'basic',
        link : '/utilities/activity-log'
      },{
        id   : 'utilities.surveys',
        title: 'Surveys',
        type : 'basic',
        link : '/utilities/surveys'
      },{
        id   : 'utilities.ticket-pipe-log',
        title: 'Ticket Pipe Log',
        type : 'basic',
        link : '/utilities/ticket-pipe-log'
      }
    ]
  },{
    id   : 'reports',
    title: 'Reports',
    type : 'collapsable',
    icon : 'heroicons_outline:chart-square-bar',
    children: [
      {
        id   : 'reports.sales',
        title: 'Sales',
        type : 'basic',
        link : '/reports/sales'
      },{
        id   : 'reports.expenses',
        title: 'Expenses',
        type : 'basic',
        link : '/reports/expenses'
      },{
        id   : 'reports.expenses-vs-income',
        title: 'Expenses vs Income',
        type : 'basic',
        link : '/reports/expenses-vs-income'
      },{
        id   : 'reports.leads',
        title: 'Leads',
        type : 'basic',
        link : '/reports/leads'
      },{
        id   : 'reports.timesheets-overview',
        title: 'Timesheets Overview',
        type : 'basic',
        link : '/reports/timesheets-overview'
      },{
        id   : 'reports.kb-articles',
        title: 'KB Articles',
        type : 'basic',
        link : '/reports/kb-articles'
      }
    ]
  },{
    id   : 'setup',
    title: 'Setup',
    type : 'aside',
    icon : 'heroicons_outline:cog',
    children: [
      {
        id   : 'setup.staff',
        title: 'Staff',
        type : 'basic',
        link : '/setup/staff'
      },{
        id   : 'setup.customers',
        title: 'Customers',
        type : 'collapsable',
        children: [
          {
            id   : 'customers.groups',
            title: 'Groups',
            type : 'basic',
            link : '/customers/groups'
          }
        ]
      },{
        id   : 'setup.support',
        title: 'Support',
        type : 'collapsable',
        children: [
          {
            id   : 'support.departments',
            title: 'Departments',
            type : 'basic',
            link : '/support/departments'
          },{
            id   : 'support.predefined-replies',
            title: 'Predefined Replies',
            type : 'basic',
            link : '/support/predefined-replies'
          },{
            id   : 'support.ticket-priority',
            title: 'Ticket Priority',
            type : 'basic',
            link : '/support/ticket-priority'
          },{
            id   : 'support.ticket-statuses',
            title: 'Ticket Statuses',
            type : 'basic',
            link : '/support/ticket-statuses'
          },{
            id   : 'support.services',
            title: 'Services',
            type : 'basic',
            link : '/support/services'
          },{
            id   : 'support.spam-filters',
            title: 'Spam Filters',
            type : 'basic',
            link : '/support/spam-filters'
          }
        ]
      },{
        id   : 'setup.leads',
        title: 'Leads',
        type : 'collapsable',
        children: [
          {
            id   : 'leads.sources',
            title: 'Sources',
            type : 'basic',
            link : '/leads/sources'
          },{
            id   : 'leads.statuses',
            title: 'Statuses',
            type : 'basic',
            link : '/leads/statuses'
          },{
            id   : 'leads.email-integration',
            title: 'Email Integration',
            type : 'basic',
            link : '/leads/email-integration'
          },{
            id   : 'leads.web-to-lead',
            title: 'Web to Lead',
            type : 'basic',
            link : '/leads/web-to-lead'
          }
        ]
      },{
        id   : 'setup.finance',
        title: 'Finance',
        type : 'collapsable',
        children: [
          {
            id   : 'finance.tax-rates',
            title: 'Tax Rates',
            type : 'basic',
            link : '/finance/tax-rates'
          },{
            id   : 'finance.currencies',
            title: 'Currencies',
            type : 'basic',
            link : '/finance/currencies'
          },{
            id   : 'finance.payment-modes',
            title: 'Payment Modes',
            type : 'basic',
            link : '/finance/payment-modes'
          },{
            id   : 'finance.expenses-categories',
            title: 'Expenses Categories',
            type : 'basic',
            link : '/finance/expenses-categories'
          },
        ]
      },{
        id   : 'setup.contracts',
        title: 'Contracts',
        type : 'collapsable',
        children: [
          {
            id   : 'contracts.contract-types',
            title: 'Contract Types',
            type : 'basic',
            link : '/contracts/contract-types'
          }
        ]
      },{
        id   : 'setup.estimate-request',
        title: 'Estimate Request',
        type : 'collapsable',
        children: [
          {
            id   : 'estimate-request.forms',
            title: 'Forms',
            type : 'basic',
            link : '/estimate-request/forms'
          },{
            id   : 'estimate-request.statuses',
            title: 'Statuses',
            type : 'basic',
            link : '/estimate-request/statuses'
          }
        ]
      },{
        id   : 'setup.modules',
        title: 'Modules',
        type : 'basic',
        link : '/setup/modules'
      },{
        id   : 'setup.email-templates',
        title: 'Email Templates',
        type : 'basic',
        link : '/setup/email-templates'
      },{
        id   : 'setup.custom-fields',
        title: 'Custom Fields',
        type : 'basic',
        link : '/setup/custom-fields'
      },{
        id   : 'setup.gdpr',
        title: 'Gdpr',
        type : 'basic',
        link : '/setup/gdpr'
      },{
        id   : 'setup.roles',
        title: 'Roles',
        type : 'basic',
        link : '/setup/roles'
      },{
        id   : 'setup.menu-setup',
        title: 'Menu Setup',
        type : 'collapsable',
        children: [
          {
            id   : 'menu-setup.main-menu',
            title: 'Main Menu',
            type : 'basic',
            link : '/menu-setup/main-menu'
          },{
            id   : 'menu-setup.setup-menu',
            title: 'Setup Menu',
            type : 'basic',
            link : '/menu-setup/setup-menu'
          }
        ]
      },{
        id   : 'setup.theme-style',
        title: 'Theme Style',
        type : 'basic',
        link : '/setup/theme-style'
      },{
        id   : 'setup.settings',
        title: 'Settings',
        type : 'basic',
        link : '/setup/settings'
      }
    ]
  }
];
export const horizontalNavigation: FuseNavigationItem[] = [
  {
    id   : 'example',
    title: 'Example2',
    type : 'basic',
    icon : 'heroicons_outline:scale',
    link : '/example'
  }
];


// sdfsdf sdf
export const compactNavigation: FuseNavigationItem[] = [
  {
    id   : 'example',
    title: 'Example3',
    type : 'basic',
    icon : 'heroicons_outline:scale',
    link : '/example'
  }
];
export const futuristicNavigation: FuseNavigationItem[] = [
  {
    id   : 'example',
    title: 'Example5',
    type : 'basic',
    icon : 'heroicons_outline:scale',
    link : '/example'
  }
];
