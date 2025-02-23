'use client'

import {Breadcrumbs, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {CircleRounded} from "@mui/icons-material";
import Link from "next/link";
import {useTheme} from "@mui/material/styles";

export default function CustomBreadcrumb(props) {
    const { title, subtitle, items } = props;
    const theme = useTheme();

    return (
        <Stack direction="row" justifyContent="space-between">
            <Box>
                <Typography variant="h4" sx={{ fontWeight: 600 }}>{title}</Typography>
                <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>{subtitle}</Typography>
            </Box>
            <Breadcrumbs
                separator={<CircleRounded sx={{ fontSize: 5 }}/>}
                sx={{
                    alignItems: "center",
                    mt: items ? "10px" : "",
                }}
            >
                {items
                    ? items.map((item) => (
                        <div key={item.title}>
                            {item.to ? (
                                <Link href={item.to} passHref>
                                    <Typography variant="body2" sx={{ color: theme.palette.primary.main }}>{item.title}</Typography>
                                </Link>
                            ) : (
                                <Typography variant="body2">{item.title}</Typography>
                            )}
                        </div>
                    ))
                    : ""}
            </Breadcrumbs>
        </Stack>
    )
}
