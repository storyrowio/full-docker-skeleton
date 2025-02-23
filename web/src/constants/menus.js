import {GenerateUniqueId} from "utils/helper";
import {FlowCircleIcon, Home01Icon, UserGroupIcon} from "hugeicons-react";

export const DefaultAppMenus = [
    {
        sectionTitle: 'Workspace',
        // roles: [Roles.admin],
    },
    {
        id: GenerateUniqueId(),
        title: 'Dashboard',
        icon: Home01Icon,
        href: '',
    },
    {
        id: GenerateUniqueId(),
        title: 'Users',
        icon: UserGroupIcon,
        permissions: ['user:read', 'user:create'],
        paths: ['/user', '/user/create', '/user/:id/update'],
        children: [
            {
                id: GenerateUniqueId(),
                title: 'List Users',
                href: '/user'
            },
            {
                id: GenerateUniqueId(),
                title: 'Create User',
                href: '/user/create'
            }
        ]
    },
    {
        id: GenerateUniqueId(),
        title: 'Role & Permission',
        icon: FlowCircleIcon,
        href: '/role',
        // roles: [Roles.admin]
    }
];
