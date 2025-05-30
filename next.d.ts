// next.d.ts
import { NextPage } from "next";

interface PageProps {
  params: { [key: string]: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

declare module "next" {
  export type Page<P = {}> = NextPage<P & PageProps>;
}