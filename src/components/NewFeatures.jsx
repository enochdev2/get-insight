import styles from "../styles";

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[700px] bg-black/10 px-3 rounded-xl shadow-sm shadow-purple-500 p-2 min-w-[210px]">
    <h1 className="mt-[6px] font-bold sm:max-w-[750px] text-[30px] leading-[30.24px] bg-gradient-to-r from-pink-200 to-purple-200  text-transparent bg-clip-text">
      {title}
    </h1>
    <p className="flex-1 mt-[16px] font-medium text-[22px] text-[#f1ebeb] leading-[32.4px]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
