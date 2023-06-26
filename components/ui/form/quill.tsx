import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

export default function Quill() {
  const QuillNoSSRWrapper = dynamic(import("react-quill"), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  });
  return <QuillNoSSRWrapper theme="snow" />;
}
