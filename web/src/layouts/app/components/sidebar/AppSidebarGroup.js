import AppSidebarItem from "layouts/app/components/sidebar/AppSidebarItem";
import {Collapse} from "@mui/material";
import {useSelector} from "store";
import AppSidebarItems from "layouts/app/components/sidebar/AppSidebarItems";
import Box from "@mui/material/Box";

export default function AppSidebarGroup({ item, ...props }) {
    const { activeGroupMenu } = useSelector(state => state.theme);

    return (
        <>
            <AppSidebarItem item={item}/>
            <Collapse
                component='ul'
                onClick={e => e.stopPropagation()}
                in={activeGroupMenu.includes(item.title)}
                sx={{
                    pl: 0,
                    py: activeGroupMenu.includes(item.title) ? 0.5 : 0,
                    width: '100%',
                    transition: 'all 0.25s ease-in-out'
                }}
            >
                <AppSidebarItems
                    {...props}
                    parent={item}
                    items={item.children}/>
            </Collapse>
        </>
    )
}
