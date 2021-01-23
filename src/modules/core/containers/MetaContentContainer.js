import React from 'react';

// Custom Components
import MetaContent from '../components/MetaContent';

// Helpers
import { getText } from '../../core/helpers/Texts';

const MetaContentContainer = ({ description, keywords, subtitle, title }) => {
  // const [state, setState] = useState();

  return (
    <MetaContent
      // data={state}
      description={description}
      keywords={keywords}
      subtitle={subtitle}
      title={title}
    />
  );
};

MetaContentContainer.defaultProps = {
  description: getText('CORE', 'SOLELIFE_DESCRIPTION'),
  keywords: '',
  subtitle: '',
  title: getText('CORE', 'SOLELIFE'),
};

export default MetaContentContainer;
