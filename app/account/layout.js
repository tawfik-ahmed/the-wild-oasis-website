import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid h-full grid-cols-1 grid-rows-[auto_1fr] gap-12 md:grid-cols-[16rem_1fr] md:grid-rows-1">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
