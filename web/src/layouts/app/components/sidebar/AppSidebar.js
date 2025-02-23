import CustomIconButton from "components/button/CustomIconButton";
import {ChromeReaderModeOutlined} from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import {styled, useTheme} from "@mui/material/styles";
import {useDispatch, useSelector} from "store";
import {ThemeActions} from "store/slices/ThemeSlice";
import Logo from "components/shared/Logo";
import Box from "@mui/material/Box";
import {SidebarRightIcon} from "hugeicons-react";
import {DefaultAppMenus} from "constants/menus";
import AppSidebarItem from "layouts/app/components/sidebar/AppSidebarItem";
import AppSidebarItems from "layouts/app/components/sidebar/AppSidebarItems";

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 0.5, 0, 2),
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
}));

const DrawerMenuList = styled(List)(({theme}) => ({
    overflowY: 'auto'
}));

export default function AppSidebar() {
    const theme = useTheme();
    const dispatch = useDispatch();
    const { drawerWidth, isMobile, isSidebarCollapsed } = useSelector(state => state.theme);

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    backgroundColor: theme.palette.background.default,
                    boxSizing: 'border-box',
                    border: 'none'
                },
            }}
            variant={isMobile ? 'temporary' : 'persistent'}
            anchor="left"
            open={!isSidebarCollapsed}
            onClose={() => dispatch(ThemeActions.setSidebarCollapse(!isSidebarCollapsed))}
        >
            <DrawerHeader>
                <Logo width={120}/>
                {!isMobile && (
                    <CustomIconButton onClick={() => dispatch(ThemeActions.setSidebarCollapse(!isSidebarCollapsed))}>
                        <SidebarRightIcon/>
                    </CustomIconButton>
                )}
            </DrawerHeader>
            {/*<Box sx={{ paddingX: 2 }}>*/}
            {/*    <Divider/>*/}
            {/*</Box>*/}
            <DrawerMenuList>
                <AppSidebarItems items={DefaultAppMenus}/>
            </DrawerMenuList>
        </Drawer>
    )
}
