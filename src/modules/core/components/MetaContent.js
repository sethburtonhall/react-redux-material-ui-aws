import React from 'react';

import { Helmet } from 'react-helmet';

const MetaContent = ({ description, keywords, subtitle, title }) => {
  const canonicalLink = window.location.href;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalLink} />
      <title id="title">{subtitle !== '' ? `${title} | ${subtitle}` : title}</title>
      {description !== '' && <meta name="description" content={description} />}
      {keywords !== '' && <meta name="keywords" content={keywords.join(',')} />}
    </Helmet>
  );
};

export default MetaContent;
