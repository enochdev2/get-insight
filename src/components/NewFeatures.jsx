import styles from '../styles';

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[400px] bg-black/10 px-3 rounded-xl shadow-sm shadow-purple-500 p-2 min-w-[210px]">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
    >
      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    <h1 className="mt-[26px] font-bold sm:max-w-[250px] text-[24px] leading-[30.24px] bg-gradient-to-r from-purple-900 to-sky-900 dark:from-purple-300 dark:to-blue-300  text-transparent bg-clip-text">
     {title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] dark:text-[#B0B0B0] leading-[32.4px]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
