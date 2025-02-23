'use client'

import {Suspense} from "react";
import AppLayout from "layouts/app";
import {useMediaQuery} from "@mui/material";
import Theme from "theme";
import {usePathname} from "next/navigation";
import BlankLayout from "layouts/BlankLayout";
import AuthLayout from "layouts/auth/AuthLayout";

export default function RootApp({ children }) {
    const pathname = usePathname();

    let Layout = BlankLayout;

    if (pathname === '/' || pathname === '/register') {
        Layout = AuthLayout;
    }

    if (pathname.includes('/app')) {
        Layout = AppLayout;
    }

    return (
        <Suspense>
            <Theme>
                <Layout>
                    {children}
                </Layout>
            </Theme>
        </Suspense>
    )
}
