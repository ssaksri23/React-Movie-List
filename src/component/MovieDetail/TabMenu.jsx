import React, { useState } from "react";

export default function TabMenu({ defaultTab, overview }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const tabs = [
    { id: 1, title: "줄거리", content: `${overview}` },
    { id: 2, title: "출연/제작", content: "감독" },
    { id: 3, title: "영상/포토", content: "영상/포토" },
  ];
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <ul className="flex">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={
              activeTab === tab.id ? "active border-b-2 font-bold" : ""
            }
            onClick={() => handleTabClick(tab.id)}
          >
            <button className="p-4"> {tab.title}</button>
          </li>
        ))}
      </ul>
      <div className="mt-6 p-4 text-start">
        {tabs.map((tab) =>
          activeTab === tab.id ? <div key={tab.id}>{tab.content}</div> : null
        )}
      </div>
    </div>
  );
}
