import initialSetup from "../../assets/Getting Started.svg";
import arrayMethods from "../../assets/Array Methods.svg";
import practiceEnv from "../../assets/Practice Environment Title.svg";
import unitTesting from "../../assets/Unit Testing Title Only.svg";

import Card from "./Card";

import TW_CSS from "../CSS_Wrappers/CSS_Main_Profile";

export default function MainCards() {
  const styles = TW_CSS(); //Calls the TW_CSS function to get the styles
  // console.log("Styles: ", styles);

  return (
    <div className="grid mx-5 place-items-center 2xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 gap-10 sm:grid-cols-1  ">
      {/* SECTION Card #1 */}
      <Card
        imageSrc={initialSetup}
        customCSS={{
          image: "border-black dark:bg-green-500",
          letsGoBtn: "bg-orange-800",
        }}
        title="Initial Setup"
        description="This page will help you setup your computer to begin programming"
        actionHref=""
        actionText="Let's Go"
        styles={styles}
      />
      {/* !SECTION Card #1 END*/}
      {/* SECTION Card #2 */}
      <Card
        imageSrc={arrayMethods}
        customCSS={{
          image: "border-black dark:bg-blue-950",
          letsGoBtn: "bg-pink-800",
        }}
        title="Need to see the available options?"
        description="This page contains a table with all the array methods, with explanations and examples."
        actionHref="./javascriptPrincipals/ArrayMethods"
        actionText="See the Table"
        styles={styles}
      />
      {/* !SECTION Card #2 END  */}
      {/* SECTION Card #3 */}
      <Card
        imageSrc={practiceEnv}
        customCSS={{
          image: "border-black dark:bg-yellow-600",
          letsGoBtn: "bg-yellow-800",
        }}
        title="Want a place to code?"
        description="This page has a video to walk you through getting a project started to get off the ground coding in Javascript."
        actionHref="./gettingStarted/practiceEnvironmentVideo.html"
        actionText="See Video"
        styles={styles}
      />
      {/* !SECTION Card #3 END */}
      {/* SECTION Card #4 BEGIN */}
      <Card
        imageSrc={unitTesting}
        customCSS={{
          image: "border-black dark:bg-stone-500",
          letsGoBtn: "bg-yellow-950",
        }}
        title="Mocha and Chai"
        description="Unit testing is an important part of programming. This page will
              help you get started with Mocha and Chai."
        actionHref="./javascriptPrincipals/unittestingmocha&chai.html"
        actionText="Let's Go"
        styles={styles}
      />
      {/* !SECTION Card #4 END */}
    </div>
  );
}
