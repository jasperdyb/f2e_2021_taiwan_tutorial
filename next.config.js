/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    NUMBER_PER_PAGE: 10,
  },

  images: {
    domains: [
      "www.travel.taipei",
      "www.northguan-nsa.gov.tw",
      "newtaipei.travel",
      "www.trimt-nsa.gov.tw",
    ],
  },
};
