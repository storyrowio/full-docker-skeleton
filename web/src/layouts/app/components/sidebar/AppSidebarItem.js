import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import * as React from "react";
import {styled, useTheme} from "@mui/material/styles";
import {ArrowDown01Icon, ArrowRight01Icon, ArrowUp01Icon} from "hugeicons-react";
import {useDispatch, useSelector} from "store";
import {ThemeActions} from "store/slices/ThemeSlice";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import {usePathname, useRouter} from "next/navigation";
import {useEffect, useRef} from "react";

const Item = styled(ListItem)(({theme}) => ({
    paddingRight: 5,
}));

const ItemText = styled(ListItemText)(({theme}) => ({
    '& .MuiTypography-root': {
        fontSize: 13.125
    }
}));

const ItemButton = styled(ListItemButton)(({theme}) => ({
    paddingTop: 5,
    paddingBottom: 5,
    background: 'transparent',
    color: theme.palette.text.primary,
    borderRadius: 10,
    '& svg': {
        color: theme.palette.text.primary
    }
}));

export default function AppSidebarItem(props) {
    const { item, parent } = props;
    const theme = useTheme();
    const Icon = item.icon;
    const pathname = usePathname();
    const router = useRouter();
    const dispatch = useDispatch();
    const { activeGroupMenu, heightMenuItem } = useSelector(state => state.theme);
    const active = !parent && `/app${item.href}` === pathname;
    const activeGroup = item.paths?.find(e => `/app${e}` === pathname);

    const mounted = useRef(false);
    useEffect(() => {
        if (!mounted.current) {
            if (activeGroup) {
                dispatch(ThemeActions.addUpdateActiveGroupMenu(item.title));
            }

            mounted.current = true
        }
    }, [pathname]);

    const handleMenu = () => {
        if (item.children) {
            dispatch(ThemeActions.addUpdateActiveGroupMenu(item.title));
        } else {
            router.push(`/app${item.href}`);
        }
    };

    return (
        <Item key={item.id} sx={{ paddingY: 0 }} onClick={handleMenu}>
            <ItemButton
                sx={{
                    paddingX: 1.5,
                    ...((active || activeGroup) && {
                        background: theme.palette.primary.main,
                        '& .MuiTypography-root': {
                            color: theme.palette.primary.contrastText,
                        },
                        '& svg': {
                            color: theme.palette.primary.contrastText
                        },
                        '&:hover': {
                            backgroundColor: theme.palette.primary.dark,
                        }
                    }),
                    ...(parent && {
                        height: 40,
                        paddingY: 0,
                        '&:hover': {
                            background: 'transparent',
                            '& .MuiTypography-root': {
                                color: theme.palette.primary.dark,
                            }
                        }
                    })
                }}>
                <ListItemIcon sx={{ minWidth: 30 }}>
                    {parent && (
                        <Divider sx={{
                            width: 3,
                            height: 40,
                            borderColor: 'transparent',
                            marginLeft: 1,
                            background: pathname === `/app${item.href}` ? theme.palette.primary.main :
                                theme.palette.grey['300']
                        }} orientation="vertical"/>
                    )}
                    {item.icon && <Icon size={18}/>}
                </ListItemIcon>
                <ItemText primary={item.title} sx={{
                    color: pathname === `/app${item.href}` ? theme.palette.primary.main :
                        theme.palette.text.secondary
                }}/>
                {item.children && (
                    <Box
                        sx={{
                            '& svg': {
                                color: activeGroup ? theme.palette.primary.contrastText :
                                    theme.palette.text.secondary,
                                transition: 'transform .25s ease-in-out',
                                ...(activeGroupMenu.includes(item.title) && {
                                    transform: 'rotate(90deg)'
                                })
                            }
                        }}>
                        <ArrowRight01Icon size={14}/>
                    </Box>
                )}
            </ItemButton>
        </Item>
    )
}
