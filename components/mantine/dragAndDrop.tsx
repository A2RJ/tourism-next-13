"use client";

import React, { useState } from "react";
import SortableList from "./SortableList/SortableList";
function createRange<T>(
  length: number,
  initializer: (index: number) => T
): T[] {
  return [...new Array(length)].map((_, index) => initializer(index));
}

function getMockItems() {
  return createRange(5, (index) => ({ id: index + 1 }));
}
export default function DragAndDrop() {
  const [items, setItems] = useState(getMockItems);

  return (
    <div>
      <SortableList
        items={items}
        onChange={setItems}
        renderItem={(item: any) => (
          <SortableList.Item id={item.id}>
            {item.id}
            <SortableList.DragHandle />
          </SortableList.Item>
        )}
      />
    </div>
  );
}
