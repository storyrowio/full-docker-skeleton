import {styled} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {useDispatch, useSelector} from "store";
import {ThemeActions} from "store/slices/ThemeSlice";
import Box from "@mui/material/Box";
import AppProfileMenu from "layouts/app/components/navbar/AppProfileMenu";
import CustomIconButton from "components/button/CustomIconButton";

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'appNavbarHeight' && prop !== 'drawerWidth'
    })((({ theme, open, appNavbarHeight, drawerWidth }) => {
    return {
        height: `${appNavbarHeight}px`,
        background: 'transparent',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: `${drawerWidth}px`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        })
    }
}));

export default function AppNavbar() {
    const dispatch = useDispatch();
    const { appNavbarHeight, drawerWidth, isSidebarCollapsed } = useSelector(state => state.theme);

    return (
        <AppBar
            elevation={0}
            position="fixed"
            open={!isSidebarCollapsed}
            appNavbarHeight={appNavbarHeight}
            drawerWidth={drawerWidth}>
            <Toolbar sx={{ minHeight: `${appNavbarHeight}px !important` }}>
                {isSidebarCollapsed && (
                    <CustomIconButton
                        color="primary"
                        onClick={() => dispatch(ThemeActions.setSidebarCollapse(!isSidebarCollapsed))}
                        edge="start"
                        sx={[{mr: 2,},]}
                    >
                        <MenuIcon />
                    </CustomIconButton>
                )}

                <Box sx={{ flexGrow: 1 }}/>
                <AppProfileMenu/>
            </Toolbar>
        </AppBar>
    )
}
