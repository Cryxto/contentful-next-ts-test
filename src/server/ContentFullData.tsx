import { getAllData } from "@/utils/contentful-utils";
import { GetServerSideProps } from "next";
import { ContentfulProvider } from "@/context/ContentfulContext";
import { ReactNode } from "react";


// export const getServerSideProps: GetServerSideProps = (async () => {
//   const serverData = await getAllData();

//   return {
//     props: {
//       serverData,
//     },
//   };
// }) satisfies GetServerSideProps<{ serverData: any[] }>;

export default function ContentFulData({children}:{ children:ReactNode}) {
  const data = getAllData()
  return (<>
    <ContentfulProvider serverData={data}>
      {children}
    </ContentfulProvider>
  </>)
}