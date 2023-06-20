import { Sidebar } from "@/components/ui/music/sidebar";
import { Children } from "@/types/layout";

export default function Layout({ children }: Children) {
  return (
    <div className="hidden md:block container">
      <div className="border-t">
        <div className="bg-background">
          <div className="grid lg:grid-cols-5">
            <Sidebar playlists={[]} className="hidden lg:block" />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
