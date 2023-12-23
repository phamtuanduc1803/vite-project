import ButtonBuilder from "../../components/button-builder";
import Group from "../../components/group";
import TextBuilder from "../../components/text-builder";
const Preview = () => {
  return (
    <aside id="Builder-Preview" className="flex h-screen flex-1 flex-col">
      <main className="flex-1 overflow-y-scroll px-12">
        <div className="my-12 bg-white">
          <nav className="flex items-center justify-between px-12 py-6">
            {/* <img className="h-11 w-11" src="/img/logo.png" alt="" /> */}
            <Group id="group-button" className="flex gap-x-6">
              <ButtonBuilder
                id="hide-us-button"
                title={"Hide us"}
              ></ButtonBuilder>
              <ButtonBuilder id="test-button" title={"Test"}></ButtonBuilder>
            </Group>
          </nav>
          <section className="py-16">
            <div className="px-12">
              <TextBuilder />
              <p className="mt-4 text-lg leading-loose text-gray-400">
                Help find solutions with UI / UX designs that are intuitive and
                in accordance with client business goals. We provide a
                high-quality service in UI/ UX Design &
              </p>
            </div>
            <div className="flex items-center gap-4 px-12 pt-8">
              <button className="rounded-full bg-blue-600 px-8 py-5 font-semibold text-white">
                {`Let's work together`}
              </button>
              <button className="rounded-full border border-gray-200 px-8 py-5 font-semibold text-blue-600">
                Check our work
              </button>
            </div>
          </section>

          <section className="bg-gray-50 py-16">
            <div className="px-12">
              <span className="text-sm uppercase text-gray-400">
                Our Projects
              </span>
              <div className="flex items-center justify-between">
                <h2 className="max-w-3xl text-4xl font-bold leading-[1.4]">
                  Our latest cool projects.
                </h2>
                <button className="rounded-full bg-white px-8 py-5 font-semibold text-blue-600">
                  Check our work
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 px-12 pt-8">
              <div className="flex aspect-square w-full items-center overflow-hidden bg-gray-100">
                {/* <img
              className="h-full w-full object-cover"
              src="/img/billy.png"
              alt=""
            /> */}
              </div>
              <div className="flex aspect-square w-full items-center overflow-hidden bg-gray-100">
                {/* <img
              className="h-full w-full object-cover"
              src="/img/alpha-pay.png"
              alt=""
            /> */}
              </div>
            </div>
          </section>
        </div>
      </main>
    </aside>
  );
};

export default Preview;
