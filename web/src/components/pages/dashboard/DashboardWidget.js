'use client'

import {Card, CardContent, Stack} from "@mui/material";
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import {HexToRGBA} from "utils/theme";
import Typography from "@mui/material/Typography";
import CustomChip from "components/chip/CustomChip";
import {ArrowUp02Icon} from "hugeicons-react";

const IconWrapper = styled(Box, {shouldForwardProp: (prop) => prop !== 'color'})
(({ theme, color }) => ({
    width: 50,
    height: 50,
    borderRadius: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette[color].main,
    boxShadow: `0px 8px 24px ${HexToRGBA(theme.palette[color].main, 0.2)}`,

    '& svg': {
        color: theme.palette[color].contrastText
    }
}));

export default function DashboardWidget(props) {
    const { title, content, icon, color } = props;

    return (
        <Card>
            <CardContent>
                <Stack direction="row" alignItems="center" spacing={4}>
                    <IconWrapper color={color}>
                        {icon}
                    </IconWrapper>
                    <Box flex={1}>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography>{title}</Typography>
                            <CustomChip
                                color="success"
                                icon={<ArrowUp02Icon/>}
                                label="0.534%"/>
                        </Stack>
                        <Typography variant="h2" sx={{ fontWeight: 600 }}>{content}</Typography>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    )
}
