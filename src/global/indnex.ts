const isProduction =
  process.env.NODE_ENV === "production" || process.env.NODE_ENV === "test";

const globalData = {
  apiUrl: isProduction
    ? process.env.REACT_APP_BLOG_API
    : "http://192.168.1.242:3001/api",
};

export default globalData;
