import {Avatar, Menu, MenuItem, Tooltip} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import {useState} from "react";
import ProfileAvatar from "components/shared/ProfileAvatar";
import CustomIconButton from "components/button/CustomIconButton";

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function AppProfileMenu(props) {
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <Tooltip title="Open settings">
                <CustomIconButton onClick={handleOpenUserMenu} sx={{ width: 38, height: 38 }}>
                    <ProfileAvatar/>
                </CustomIconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </>
    )
}
