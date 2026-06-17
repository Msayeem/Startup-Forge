import { getUserSession } from "@/lib/session";
import { LayoutSideContentLeft, Bell, Briefcase, Envelope, Gear, House, Magnifier, Person, Bookmark, FileText, CreditCard } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import { Building, Users } from "lucide-react";
import Link from "next/link";



const Sidebar = async() => {

   const user = await getUserSession();

    const founderNavLinks = [
        { icon: House, href: "/dashboard/founder", label: "Home" },
        { icon: Magnifier, href: "/dashboard/founder/jobs", label: "Jobs" },
        { icon: Bell, href: "/dashboard/founder/jobs/new", label: "Post A Job" },
        { icon: Briefcase, href: "/dashboard/founder/company", label: "Company Profile" },
        { icon: Envelope, href: "/messages", label: "Messages" },
        { icon: Person, href: "/profile", label: "Profile" },
        { icon: Gear, href: "/settings", label: "Settings" },
    ]

    const collabratorNavLinks = [
        { icon: House, href: "/dashboard/collabrator", label: "Dashboard" },
        { icon: Magnifier, href: "/dashboard/collabrator/jobs", label: "Jobs" },
        { icon: Bookmark, href: "/dashboard/collabrator/saved-jobs", label: "Saved Jobs" },
        { icon: FileText, href: "/dashboard/collabrator/applications", label: "Applications" },
        { icon: CreditCard, href: "/dashboard/collabrator/billing", label: "Billing" },
        { icon: Gear, href: "/settings", label: "Settings" },
    ];

    const adminNavLinks = [
        { icon: House, href: "/dashboard/admin", label: "Dashboard" },
        { icon: Users, href: "/dashboard/admin/users", label: "Users" },
        { icon: Building, href: "/dashboard/admin/companies", label: "Companies" },
        { icon: Briefcase, href: "/dashboard/admin/jobs", label: "Jobs" },
        { icon: CreditCard, href: "/dashboard/admin/payments", label: "Payments" },
        { icon: Gear, href: "/dashboard/admin/settings", label: "Settings" },
    ];

    const navLinksMap = {
        collabrator: collabratorNavLinks,
        founder: founderNavLinks,
        admin: adminNavLinks
    }

    const navItems = navLinksMap[user?.role || 'collabrator'];


    const navContent = <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
            <Link
                key={item.label}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                href={item.href}
            >
                <item.icon className="size-5 text-muted" />
                {item.label}
            </Link>
        ))}
    </nav>



    return (
        <>
            <aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block">
                {navContent}
            </aside>
            <Drawer>
                <Button className="lg:hidden" variant="secondary">
                    <LayoutSideContentLeft />
                    Sidebar
                </Button>
                <Drawer.Backdrop>
                    <Drawer.Content placement="left">
                        <Drawer.Dialog>
                            <Drawer.CloseTrigger />
                            <Drawer.Header>
                                <Drawer.Heading>Navigation</Drawer.Heading>
                            </Drawer.Header>
                            <Drawer.Body>
                                {navContent}
                            </Drawer.Body>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>
        </>
    );
};

export default Sidebar;