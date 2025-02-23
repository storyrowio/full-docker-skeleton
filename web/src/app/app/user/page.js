import AppBody from "components/shared/AppBody";
import CustomBreadcrumb from "components/breadcrumb/CustomBreadcrumb";
import {Card, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import CustomIconButton from "components/button/CustomIconButton";
import {Delete04Icon, PencilEdit02Icon} from "hugeicons-react";

export default function User() {
    return (
        <AppBody>
            <CustomBreadcrumb
                title="Users"
                subtitle="List of users"
                items={[
                    {title: 'Home', to: '/app'},
                    {title: 'Users'}
                ]}/>

            <TableContainer sx={{ marginTop: 3 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell/>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>John Doe</TableCell>
                            <TableCell>johndoe@example.com</TableCell>
                            <TableCell>
                                <Stack direction="row" justifyContent="end" spacing={1}>
                                    <CustomIconButton color="primary">
                                        <PencilEdit02Icon/>
                                    </CustomIconButton>
                                    <CustomIconButton color="error">
                                        <Delete04Icon/>
                                    </CustomIconButton>
                                </Stack>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </AppBody>
    )
}
