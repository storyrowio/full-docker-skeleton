import AppSidebarSectionTitle from "layouts/app/components/sidebar/AppSidebarSectionTitle";
import AppSidebarItem from "layouts/app/components/sidebar/AppSidebarItem";
import * as React from "react";
import AppSidebarGroup from "layouts/app/components/sidebar/AppSidebarGroup";

export default function AppSidebarItems(props) {
    const { items, parent } = props;

    return items?.map((e, i) => {
        if (e.sectionTitle) {
            return <AppSidebarSectionTitle key={i} title={e.sectionTitle}/>
        } else if (e.children) {
            return <AppSidebarGroup key={i} item={e}/>
        } else {
            return <AppSidebarItem key={i} item={e} parent={parent}/>
        }
    });
}
