import CustomButton from "./CustomButton";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        className="aipicker-textarea"
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className="flex flex-wrap gap-3">
      {generatingImg ? (
        <CustomButton type='outline' title="Generating..." customStyle='text-xs' />
      ) : (
        <>
          <CustomButton type='outline' title="AI Logo" handleClick={() => handleSubmit('logo')} customStyle='text-xs' />
          <CustomButton type='filled' title="AI Full" handleClick={() => handleSubmit('full')} customStyle='text-xs' />
        </>
      )}
      </div>
    </div>
  );
};

export default AIPicker;
