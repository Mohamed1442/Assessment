import React, { useCallback, useMemo } from "react";

// Simulate an expensive computation
const expensiveComputation = (
  items: { id: number; name: string }[]
): number => {
  console.log("Running expensive computation...");
  let sum = 0;
  for (let i = 0; i < 100000000; i++) {
    sum += i;
  }
  console.log(sum);
  return items.length;
};

// Define the type for ItemList props
interface ItemListProps {
  items: { id: number; name: string }[];
}

// This component will only re-render when the props change
const ItemList: React.FC<ItemListProps> = React.memo(({ items }) => {
  // useMemo to avoid recalculating the computedValue on every re-render
  const computedValue = useMemo(() => expensiveComputation(items), [items]);

  // useCallback to memoize the click handler function
  const handleItemClick = useCallback((item: { id: number; name: string }) => {
    console.log("Item clicked:", item);
  }, []);

  return (
    <div>
      <h3>Item List</h3>
      {items.map((item) => (
        <div key={item.id} onClick={() => handleItemClick(item)}>
          {item.name}
        </div>
      ))}
      <div>Computed value: {computedValue}</div>
    </div>
  );
});

// Generating a large list of items
const items = Array.from({ length: 1000 }, (_, index) => ({
  id: index,
  name: `Item ${index + 1}`,
}));

const OptimizationPage: React.FC = () => <ItemList items={items} />;

export default OptimizationPage;
