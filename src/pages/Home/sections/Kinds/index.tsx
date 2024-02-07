import { FC } from "react";

import { useDataKind } from "@pages/Home/sections";

import { SquareIcon } from "@components/Icons";
import { Title } from "@components/Title";

import { useIntersection } from "@hooks/useIntersection";

export const Kinds: FC = () => {
  const { dataKind } = useDataKind();

  const isVisible = useIntersection(0.3, "kind");

  return (
    <section id="kind" className="text-center bg-main py-12">
      <div className="max-w-screen-lg w-full mx-auto px-10 max-[500px]:px-5">
        <Title className="text-white mb-4">
          Reconoce tu caso{" "}
          <span className="text-pink">entre los tipos de Responsabilidad</span>
        </Title>
        <SquareIcon />
        <div className="flex flex-wrap justify-center gap-7 mt-7">
          {dataKind.map((item) => (
            <div
              key={item.id}
              className={`max-w-[400px] w-full rounded-lg ${
                isVisible
                  ? "opacity-100 transform translate-y-0 transition ease-in duration-500"
                  : "opacity-0 transform translate-y-20"
              }`}
            >
              <div className="bg-ligth text-center flex items-center justify-center p-5 gap-3 rounded-t-lg">
                <div className="w-14 h-14 bg-white flex justify-center items-center rounded-lg">
                  {item.icon}
                </div>
                <h3 className="text-xl text-white text-center font-rubikSemiBold">
                  {item.title}
                </h3>
              </div>
              <div className="bg-white h-60 overflow-y-scroll rounded-b-lg">
                <div className="text-main font-rubikRegular p-4">
                  {item.description.map((text) => (
                    <div key={text.idSub} className="my-2 text-left">
                      <h4 className="text-left text-main font-rubikSemiBold">
                        {text.subtitle}
                      </h4>
                      <p className="text-left">{text.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
