import InputFile from "@/components/ui/custom/inputFile";
import Gallery from "@/components/ui/custom/previewImage";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <p>Add image to {decodeURI(params.slug)}</p>
      <div className="mb-24">
        <Gallery />
      </div>
      <InputFile />
    </>
  );
}
