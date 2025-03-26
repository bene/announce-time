export function IntervalButton({
  time,
  active,
  onClick,
}: {
  time: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`p-3 cursor-pointer ${active ? "bg-black text-white" : ""}`}
    >
      {time}
    </button>
  );
}
