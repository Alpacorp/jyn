import { FC, useState } from "react";
import dataTab from "./dataTab.json";

export const Tabs: FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section>
      <div className="text-center bg-nude border-b">
        {dataTab.map((tab, index) => (
          <button
            key={tab.id}
            className={`text-lg font-rubikRegular h-12 text-main mx-4 hover:text-main hover:underline hover:underline-main hover:underline-offset-[14px] decoration-4
            ${
              activeTab === index &&
              "font-rubikSemiBold underline underline-main underline-offset-[15px]"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.tab}
          </button>
        ))}
      </div>
      {dataTab.map((tab, index) => (
        <div key={tab.id} className="my-6 h-auto">
          {activeTab === index && (
            <div>
              {tab.description.map((description) => (
                <p className="my-2" key={description.id}>
                  {description.description}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};
