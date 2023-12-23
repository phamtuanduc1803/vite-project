import Header from "./Header";
import Preview from "./Preview";
import ActionBar from "./ActionBar";
import Editor from "./Editor";

const Design = () => {
  return (
    <div id="Builder-Main" className="flex flex-col h-[100vh] overflow-hidden">
      <Header />
      <div className="flex bg-gray-100 font-sans text-gray-900">
        <ActionBar />
        <Preview />
        <Editor />
      </div>
    </div>
  );
};

export default Design;
