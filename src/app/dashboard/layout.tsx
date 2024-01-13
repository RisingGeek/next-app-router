import { ReactNode } from "react";

interface IDashboardProps {
  children: ReactNode;
}

export default function DashboardLayout(props: IDashboardProps) {
  const { children } = props;

  return (
    <section>
      <nav>
        <h2>header layout</h2>
      </nav>
      {children}
    </section>
  );
}