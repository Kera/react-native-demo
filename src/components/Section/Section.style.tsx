import styled from 'styled-components';
import {Text, View} from 'react-native';

export const AppView = styled(View)`
  margin-top: 32px;
  padding: 0px 24px;
  color: blue;
  display: flex;
`;

export const SectionTitle = styled(Text)`
  font-size: 24px;
  font-weight: 600;
`;

export const SectionText = styled(Text)`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 400;
`;
