const siteUrl = `${process.env.NEXT_SITE_URL}`;

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: [`${siteUrl}sitemap.xml`],
  },
};
