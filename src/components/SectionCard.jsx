const SectionCard = ({ hasBg }) => {
  return (
    <div
      className={`rounded-2xl md:px-8 px-6 py-8 overflow-hidden shadow  ${
        hasBg ? "bg-background" : "bg-transparent border "
      }`}
    >
      SectionCard
    </div>
  );
};

export default SectionCard;
