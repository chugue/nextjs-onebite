import { ReactNode, useState } from "react";

export default function SearchableLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [search, setSearch] = useState("");
  return (
    <div>
      <div>
        <input placeholder="검색어를 입력하세요" />
        <button>검색</button>
      </div>
      {children}
    </div>
  );
}
