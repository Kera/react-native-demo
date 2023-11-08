import React from 'react';
import {AppView, SectionTitle, SectionText} from './Section.style';

type SectionProps = React.PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  return (
    <AppView>
      <SectionTitle>{title}</SectionTitle>
      <SectionText>{children}</SectionText>
    </AppView>
  );
}

export default Section;
