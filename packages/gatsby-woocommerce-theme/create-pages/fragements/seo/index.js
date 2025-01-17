const SeoFragment = `
fragment SeoFragment on WpSEOConfig {
	  canonical
	  title
	  metaDesc
	  focuskw
	  metaRobotsNoindex
	  metaRobotsNofollow
	  opengraphAuthor
	  opengraphDescription
	  opengraphTitle
	  opengraphDescription
	  opengraphImage {
	    sourceUrl
	  }
	  opengraphUrl
	  opengraphSiteName
	  opengraphPublishedTime
	  opengraphModifiedTime
	  twitterTitle
	  twitterDescription
	  twitterImage {
	    sourceUrl
	  }
}
`;

module.exports.SeoFragment = SeoFragment;
