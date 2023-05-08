import styles from "./about.module.css";

const About = () => {
  return (
    <div id="about" className="h-[calc(100vh_-_40px)]">
      <div className="mx-auto relative grid col-span-9 max-w-[60%]">
        <div className="bg-emerald-500 h-[300%] top-2 absolute w-[1px] z-10 -left-3">
          <div className={`${styles.bullet} absolute`}></div>
        </div>
        <span className="text-slate-300 text-xl">About me {`/>`}</span>
        <div>
          <h1 className="text-3xl">
            Hello, My name is <strong>Dong</strong>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};
export default About;
