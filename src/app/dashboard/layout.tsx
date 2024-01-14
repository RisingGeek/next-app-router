"use client"

import { useSelectedLayoutSegment } from "next/navigation";
import { ReactNode } from "react";

interface IDashboardProps {
  children: ReactNode;
}

export default function DashboardLayout(props: IDashboardProps) {
  const { children } = props;
  const segment = useSelectedLayoutSegment();
  console.log("active route segment is", segment)

  return (
    <section>
      <nav>
        <h2>header layout</h2>
      </nav>
      {children}
    </section>
  );
}