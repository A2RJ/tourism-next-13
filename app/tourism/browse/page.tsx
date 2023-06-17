import { ListPariwisata } from "@/components/ui/Home/pariwisata";
import CardPariwisata from "@/components/ui/Home/cardPariwisata";
import SearchForm from "@/components/ui/Home/searchForm";

export default function Page() {
    return (
        <>
            <div className="my-5">
                <SearchForm />
            </div>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
                {ListPariwisata.slice(10, 18).map(({ name, cover }, index) => (
                    <CardPariwisata key={index} name={name} cover={cover} />
                ))}
            </div>
        </>
    )
}