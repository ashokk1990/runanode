import React from 'react';
import styled from 'styled-components';
import { MainContent, MainLayout } from 'components/layout';
import { TosContent, PageHeading } from 'components';
import { colors } from 'renderer/theme';

const ScrollWrapper = styled.div`
  width: 100%;
  height: 80vh;
`;

const ScrollContent = styled.div`
  margin-top: 0.5rem;
  max-height: calc(80vh - 40px);
  overflow-y: auto;
  padding: 0.5rem 0;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: ${colors.N900};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.N700};
    border-radius: 3px;
  }
`;

const SettingsTosPage = ({ subNav }) => (
  <MainLayout subNav={subNav}>
    <MainContent>
      <PageHeading>Terms & Conditions</PageHeading>
      <ScrollWrapper>
        <ScrollContent>
          <TosContent />
        </ScrollContent>
      </ScrollWrapper>
    </MainContent>
  </MainLayout>
);

export default SettingsTosPage;