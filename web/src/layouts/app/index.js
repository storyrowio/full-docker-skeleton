'use client'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppNavbar from "layouts/app/components/navbar/AppNavbar";
import {useDispatch, useSelector} from "store";
import {Card, CardContent, useMediaQuery} from "@mui/material";
import {useEffect, useRef} from "react";
import {ThemeActions} from "store/slices/ThemeSlice";
import AppSidebar from "layouts/app/components/sidebar/AppSidebar";

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' && prop !== 'drawerWidth' })(
    ({ theme, drawerWidth }) => ({
        height: '100vh',
        flexGrow: 1,
        position: 'relative',
        overflowY: 'hidden',
        right: 0,
        background: theme.palette.background.default,
        padding: theme.spacing(0.5, 2, 0, 2),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        variants: [
            {
                props: ({ open }) => open,
                style: {
                    transition: theme.transitions.create('margin', {
                        easing: theme.transitions.easing.easeOut,
                        duration: theme.transitions.duration.enteringScreen,
                    }),
                    marginLeft: 0,
                    paddingLeft: -5,
                    paddingRight: 2,
                },
            },
        ],

        [theme.breakpoints.down('lg')]: {
            marginLeft: 0
        }
    }),
);

const MainCard = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })(({theme, open}) => ({
    width: `calc(100% - ${open ? theme.spacing(3) : theme.spacing(5)})`,
    height: 'calc(100vh - 50px)',
    position: 'absolute',
    overflowY: 'auto',
    padding: '1rem 1rem 1.5rem 1rem',
}));

export default function AppLayout({ children }) {
    const dispatch = useDispatch();
    const { appNavbarHeight, drawerWidth, isSidebarCollapsed, isMobile } = useSelector(state => state.theme);
    const mobile = useMediaQuery(theme => theme.breakpoints.down('lg'));

    useEffect(() => {
        if (mobile) {
            if (!isSidebarCollapsed) {
                dispatch(ThemeActions.setSidebarCollapse(true));
            }
            dispatch(ThemeActions.setMobile(true))
        } else {
            if (isSidebarCollapsed) {
                dispatch(ThemeActions.setSidebarCollapse(false));
            }
        }
    }, [mobile]);

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppNavbar/>
            <AppSidebar/>
            <Main open={!isSidebarCollapsed} drawerWidth={drawerWidth}>
                <Box sx={{ height: appNavbarHeight - 10 }}/>
                <MainCard open={!isSidebarCollapsed}>
                    {children}
                </MainCard>
            </Main>
        </Box>
    );
}
