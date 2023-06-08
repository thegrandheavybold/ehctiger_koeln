module.exports = function(eleventyConfig) {

  const moment = require("moment");

  eleventyConfig.addPassthroughCopy("./src/js/main-min.js");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/style.css");

  // A responsive image helper using Netlify Large Media - image transformation
  eleventyConfig.addShortcode("picture", require("./src/js/picture.js"));
  
  //©copyrights year output
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  //11ty Navigation Plugin
  const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
  eleventyConfig.addPlugin(eleventyNavigationPlugin);


  // You can return your Config object (optional).
  return {
    dir: {
      input: "src",
      output: "dist",
      data: "_data"
    }
  };

};
