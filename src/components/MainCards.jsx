import initialSetup from "../assets/Getting Started.svg";
import arrayMethods from "../assets/Array Methods.svg";
import practiceEnv from "../assets/Practice Environment Title.svg";
import unitTesting from "../assets/Unit Testing Title Only.svg";

import TW_CSS from "./CSS_Wrappers/CSS_Main_Profile";

export default function MainCards() {
  const styles = TW_CSS(); //Calls the TW_CSS function to get the styles
  console.log("Styles: ", styles);

  return (
    <div className="grid place-items-center 2xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 gap-10 p-5 sm:grid-cols-1  ">
      {/* SECTION Card #1 */}
      <div className={styles.mainCardBody}>
        <div className={styles.mainCardBorder}>
          <img
            src={initialSetup}
            // className="w-full h-auto border-b-2 border-black dark:bg-green-500"
            className={styles.mainCardImage + " dark:bg-green-500 "}
            alt="Getting Started header"
          />
          <div className="p-4">
            <h5 className={styles.mainCardTitle}>Initial Setup</h5>
            <p className={styles.mainCardDescription}>
              This page will help you setup your computer to begin programming
            </p>
            <a
              href=""
              className="bg-blue-500 text-white px-2 py-1 font-bold mt-3 inline-block"
            >
              Let&apos;s Go
            </a>
          </div>
        </div>
      </div>
      {/* !SECTION Card #1 END*/}
      {/* SECTION Card #2 */}
      <div className={styles.mainCardBody}>
        <div className={styles.mainCardBorder}>
          <img
            src={arrayMethods}
            className={styles.mainCardImage + " dark:bg-blue-950"}
          />
          <div className="p-4">
            <h5 className={styles.mainCardTitle}>
              Need to see the available options?
            </h5>
            <p className={styles.mainCardDescription}>
              This page contains a table with all the array methods, with
              explanations and examples.
            </p>
            <a
              href="./javascriptPrincipals/arraymethods.html"
              className="bg-pink-600 text-white px-2 py-1 rounded font-bold mt-3 inline-block"
            >
              See the Table
            </a>
          </div>
        </div>
      </div>
      {/* !SECTION Card #2 END  */}
      {/* SECTION Card #3 */}
      <div className={styles.mainCardBody}>
        <div className={styles.mainCardBorder}>
          <img
            src={practiceEnv}
            className="w-full h-auto border-b-2 border-black dark:bg-yellow-600"
          />
          <div className="p-4">
            <h5 className={styles.mainCardTitle}>Want a place to code?</h5>
            <p className={styles.mainCardDescription}>
              This page has a video to walk you through getting a project
              started to get off the ground coding in Javascript.
            </p>
            <a
              href="./gettingStarted/practiceEnvironmentVideo.html"
              className="bg-blue-500 text-white px-2 py-1 rounded font-bold mt-3 inline-block"
            >
              See Video
            </a>
          </div>
        </div>
      </div>
      {/* !SECTION Card #3 END */}
      {/* SECTION Card #4 */}
      <div className={styles.mainCardBody}>
        <div className={styles.mainCardBorder}>
          {" "}
          <img
            src={unitTesting}
            className="w-full h-auto border-b-2 border-black dark:bg-stone-500"
          />
          <div className="p-4">
            <h5 className={styles.mainCardTitle}>Mocha and Chai</h5>
            <p className={styles.mainCardDescription}>
              Unit testing is an important part of programming. This page will
              help you get started with Mocha and Chai.
            </p>
            <a
              href="./javascriptPrincipals/unittestingmocha&chai.html"
              className="bg-blue-500 text-white px-2 py-1 rounded font-bold mt-3 inline-block"
            >
              Let&apos;s Go
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
