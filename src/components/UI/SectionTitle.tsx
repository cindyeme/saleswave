const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="py-4 px-6 border-b border-stroke">
      <h3 className="text-grey-900 text-[1.0625rem] font-medium">{title}</h3>
    </div>
  );
};

export default SectionTitle;
