import {ListSubheader} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useTheme} from "@mui/material/styles";

export default function AppSidebarSectionTitle({ title }) {
    const theme = useTheme();

    return (
        <ListSubheader
            sx={{
                height: 35,
                px: 3,
                lineHeight: '30px',
                backgroundColor: theme.palette.background.default,

                '& .MuiTypography-root, & svg': {
                    color: 'text.secondary',
                    fontStyle: 'italic',
                    letterSpacing: 1.5,
                }
            }}>
            <Typography noWrap variant='caption' sx={{ textTransform: 'uppercase' }}>
                {title}
            </Typography>
        </ListSubheader>
    )
}
