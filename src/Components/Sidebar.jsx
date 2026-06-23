import { getUserSession } from "@/lib/session";
import { LayoutSideContentLeft, Bell, Briefcase, Envelope, Gear, House, Magnifier, Person, Bookmark, FileText, CreditCard } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import { Building, Users } from "lucide-react";
import Link from "next/link";

const Sidebar = async() => {
    const user = await getUserSession();

    const founderNavLinks = [
        { icon: House, href: "/dashboard/founder", label: "Overview" },
        { icon: Magnifier, href: "/dashboard/founder/opportunities", label: "Post Opportunities" },
        { icon: Bell, href: "/dashboard/founder/manage-opportunity", label: "Manage Opportunities" },
        { icon: Briefcase, href: "/dashboard/founder/startup", label: "My Startup" },
        { icon: Envelope, href: "/dashboard/founder/applications", label: "Applications" },
    ];

    const collabratorNavLinks = [
        { icon: House, href: "/dashboard/collaborator", label: "Dashboard" },
        { icon: Magnifier, href: "/opportunities", label: "Opportunities" },
        { icon: FileText, href: "/dashboard/collaborator/applications", label: "Applications" },
        { icon: Person, href: "/profile", label: "Profile" },
    ];

    const adminNavLinks = [
        { icon: House, href: "/dashboard/admin", label: "Overview" },
        { icon: Users, href: "/dashboard/admin/manage-users", label: "Manage Users" },
        { icon: Building, href: "/dashboard/admin/manage-startups", label: "Manage Startups" },
        { icon: CreditCard, href: "/dashboard/admin/transactions", label: "Transactions" },
    ];

    const navLinksMap = {
        collaborator: collabratorNavLinks,
        founder: founderNavLinks,
        admin: adminNavLinks
    };

    const currentRole = user?.role || 'collaborator';
    const navItems = navLinksMap[currentRole];

    const navContent = (
        <div className="space-y-6 relative z-10">
            {/* Elegant Context Profile Banner inside Sidebar */}
            <div className="px-3 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] shadow-inner mb-2">
                <span className="block text-[10px] font-bold text-indigo-400 tracking-[0.2em] uppercase">Workspace</span>
                <span className="block text-sm font-extrabold text-white capitalize mt-0.5 tracking-tight">
                    {currentRole} Console
                </span>
            </div>

            <nav className="flex flex-col gap-1.5">
                {navItems.map((item) => (
                    <Link
                        key={item.label}
                        className="group flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium text-slate-300 border border-transparent transition-all duration-200 hover:bg-white/[0.05] hover:text-white hover:border-white/[0.06] hover:translate-x-0.5"
                        href={item.href}
                    >
                        <item.icon className="size-4.5 text-slate-400 group-hover:text-indigo-400 transition-colors duration-200" />
                        <span className="tracking-wide">{item.label}</span>
                    </Link>
                ))}
            </nav>
        </div>
    );

    return (
        <>
            {/* Desktop Glass Sidebar Dock */}
            <aside className="hidden lg:block w-64 shrink-0 min-h-[calc(100vh-2rem)] sticky top-4 my-4 ml-4 rounded-[24px] bg-white/[0.03] backdrop-blur-3xl border border-white/[0.08] p-5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.12)] overflow-hidden">
                {/* Micro Ambient Specular Reflection Layer */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent pointer-events-none rounded-[24px]" />
                {navContent}
            </aside>

            {/* Mobile Glass Drawer Trigger Layout Container (Moved to Left Side) */}
            <div className="lg:hidden fixed bottom-6 left-6 z-50">
                <Drawer>
                    <Button 
                        className="rounded-full bg-white text-slate-950 font-bold px-5 py-6 border border-white/20 shadow-[0_10px_30px_rgba(255,255,255,0.15)] flex items-center gap-2 transition-transform active:scale-95" 
                        variant="flat"
                    >
                        <LayoutSideContentLeft className="size-4 stroke-[2.5]" />
                        Menu
                    </Button>
                    <Drawer.Backdrop className="backdrop-blur-md bg-black/40">
                        <Drawer.Content placement="left" className="h-full max-w-[280px] bg-[#070810]/95 border-r border-white/[0.08] backdrop-blur-3xl">
                            <Drawer.Dialog className="h-full bg-transparent p-0 text-white">
                                <div className="p-6 h-full flex flex-col justify-between relative">
                                    {/* Glass reflection layer inside mobile tray */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent pointer-events-none" />
                                    
                                    <div>
                                        <Drawer.Header className="px-0 pb-6 flex justify-between items-center border-b border-white/[0.06] mb-6">
                                            <Drawer.Heading className="text-lg font-black tracking-tight text-white">
                                                Startup<span className="text-indigo-400">Forge</span>
                                            </Drawer.Heading>
                                            <Drawer.CloseTrigger className="text-slate-400 hover:text-white" />
                                        </Drawer.Header>
                                        <Drawer.Body className="px-0">
                                            {navContent}
                                        </Drawer.Body>
                                    </div>
                                </div>
                            </Drawer.Dialog>
                        </Drawer.Content>
                    </Drawer.Backdrop>
                </Drawer>
            </div>
        </>
    );
};

export default Sidebar;