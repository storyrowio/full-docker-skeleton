import Typography from "@mui/material/Typography";
import * as React from "react";
import {MoneyBag02Icon, PackageDeliveredIcon, ShoppingBasket02Icon, UserGroupIcon} from "hugeicons-react";
import {Grid2} from "@mui/material";
import DashboardWidget from "components/pages/dashboard/DashboardWidget";

export default function Dashboard() {
    const widgets = [
        {title: 'Total Orders', content: '1234', icon: <ShoppingBasket02Icon/>, color: 'primary'},
        {title: 'Total Earnings', content: '$1.254,78', icon: <MoneyBag02Icon/>, color: 'warning'},
        {title: 'Product Sold', content: '435', icon: <PackageDeliveredIcon/>, color: 'success'},
        {title: 'Total Customers', content: '354', icon: <UserGroupIcon/>, color: 'info'},
    ];

    return (
        <>
            <Grid2 container spacing={3}>
                {widgets.map((e, i) => (
                    <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 3 }} key={i}>
                        <DashboardWidget
                            title={e.title}
                            content={e.content}
                            icon={e.icon}
                            color={e.color}/>
                    </Grid2>
                ))}
            </Grid2>
        </>
    )
}
