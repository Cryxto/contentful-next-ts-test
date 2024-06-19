// src/components/Page.tsx (or wherever your Page component is located)
"use client"
import { useContentful } from "@/context/ContentfulContext";
import { useScrollBar } from "@/context/ScrollBarContext";
import { useEffect } from "react";

export default function Page() {
  const { scrollBarWidth, fullWidth } = useScrollBar();
  const { data, refreshData } = useContentful();
  useEffect(() => {
    // You can call refreshData if you need to refresh data when entering the component
    refreshData();
  }, []);
  return (
    <section id="home">
      <h1>Check</h1>
      <h1>ScrollBar Width: {scrollBarWidth}</h1>
      <h1>Full Width: {fullWidth}</h1>
      <div>
      {data.map(item => (
        <div key={item.sys.id}>{item.fields.title}</div>
      ))}
    </div>
    </section>
  );
}
