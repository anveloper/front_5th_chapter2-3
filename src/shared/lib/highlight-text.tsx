// 하이라이트 함수 추가
export const highlightText = (text: string, highlight: string) => {
  if (!text) return null;
  if (!highlight.trim()) {
    return <span className="break-words whitespace-normal">{text}</span>;
  }
  const regex = new RegExp(`(${highlight})`, "gi");
  const parts = text.split(regex);
  return (
    <span className="break-words whitespace-normal">
      {parts.map((part, i) => (regex.test(part) ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>))}
    </span>
  );
};
