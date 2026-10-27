type Technology = {
  text: string;
}

export default function TechBadge({text}: Technology) {
  return (
    <div className="inline-flex items-center justify-center rounded-full border border-black p-2 m-0.5 text-xs md:text-sm">
      <p>{text}</p>
    </div>
  );
}