function TW_CSS() {
  // Determine if the device prefers dark mode or not
  let prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  //ANCHOR Can enable this to test light/dark mode forcibly
  //   prefersDarkMode = false;

  //   console.log("Dark Mode: ", prefersDarkMode);

  //SECTION[MainCards.jsx] - MainCards Component

  //NOTE Main Card Body
  let mainCardBody = {
    default: "w-full mx-auto my-10 pt-5",
  };

  //NOTE Main Card Border
  let mainCardBorder = {
    default: "bg-white shadow-xl border border-black rounded card-max",
    light: "bg-white shadow-xl border border-black rounded card-max",
    dark: "dark:bg-neutral-600 shadow-xl border border-black rounded card-max",
  };

  //NOTE Main Card Image
  let mainCardImage = {
    default: "w-full h-auto border-b-2 border-black",
    light: "w-full h-auto border-b-2 border-black",
    dark: "w-full h-auto border-b-2 border-black",
  };

  //NOTE Main Card Title
  let mainCardTitle = {
    default:
      "text-4xl pb-8 font-bold text-black mt-10 px-5 text-center md:text-3xl",
    light:
      "text-4xl pb-8 font-bold text-black mt-10 px-5 text-center md:text-3xl",
    dark: "text-4xl pb-8 font-bold dark:text-white mt-10 px-5 text-center md:text-3xl",
  };

  //NOTE Main Card Description
  let mainCardDesc = {
    default: "text-black text-xl md:text-lg",
    light: "text-black text-xl md:text-lg",
    dark: "dark:text-white text-xl  md:text-lg",
  };
  //!SECTION[MainCards.jsx] - MainCards Component

  // Determine the mode based on prefersDarkMode
  const mode = prefersDarkMode ? "dark" : "light";

  // Use a dynamic approach to select styles
  return {
    mainCardBody: mainCardBody.default,
    mainCardBorder: mainCardBorder[mode] || mainCardBorder.default,
    mainCardImage: mainCardImage[mode] || mainCardImage.default,
    mainCardTitle: mainCardTitle[mode] || mainCardTitle.default,
    mainCardDescription: mainCardDesc[mode] || mainCardDesc.default,
  };
}

export default TW_CSS;
