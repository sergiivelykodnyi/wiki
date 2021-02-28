module.exports = function(eleventyConfig) {
  // eleventyConfig.setTemplateFormats("html,njk,md,gif,png,jpg,webp,css,js");

  eleventyConfig.addPassthroughCopy("src/**/*.{gif,png,jpg,webp,css,js}");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
