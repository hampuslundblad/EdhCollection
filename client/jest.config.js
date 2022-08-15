module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  moduleFileExtensions: ["js", "jsx", "json", "vue", "mjs"],
  transform: {
    '^.+\\.(js|jsx|mjs)?$': 'babel-jest'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/']
};
