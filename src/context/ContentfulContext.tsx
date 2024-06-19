"use client";
// import { getServerSideProps } from "@/server/ContentFullData";
import { getAllData } from "@/utils/contentful-utils";
import { InferGetServerSidePropsType } from "next";
import { getServerSideProps } from "next/dist/build/templates/pages";
// import { getServerSideProps } from "next/dist/build/templates/pages";
import React, { createContext, useContext, useState, useEffect } from "react";

interface ContentfulContextType {
  data: any[];
  refreshData: () => void;
}

const ContentfulContext = createContext<ContentfulContextType | undefined>(undefined);

export function useContentful() {
  const context = useContext(ContentfulContext);
  if (!context) {
    throw new Error("useContentful must be used within a ContentfulProvider");
  }
  return context;
}

export function ContentfulProvider({
  children,
  serverData,
}: {
  children: React.ReactNode;
  serverData: InferGetServerSidePropsType<typeof getServerSideProps>;
}) {
  const [data, setData] = useState<any[]>([]);
  // console.log(serverData);

  useEffect(() => {
    const storedData = localStorage.getItem("contentfulData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const refreshData = async () => {
    const localData = localStorage.getItem("contentfulData");
    // if (!localData) {
    const newData = await serverData;
    localStorage.setItem("contentfulData", JSON.stringify(newData));
    // }
  };

  useEffect(() => {
    refreshData();
  }, []);

  return <ContentfulContext.Provider value={{ data, refreshData }}>{children}</ContentfulContext.Provider>;
}
