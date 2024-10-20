import NavigationToggle from "@/app/_components/NavigationToggle";
import { auth } from "../_lib/auth";
import Logo from "./Logo";

async function Header() {
  const session = await auth();

  return (
    <header className="flex items-center justify-between border-b border-primary-900 p-2 md:block md:px-8 md:py-5">
      <NavigationToggle session={session} />
      <Logo noTitle={true} />
    </header>
  );
}

export default Header;
