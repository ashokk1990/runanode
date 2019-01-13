import React from 'react';
import styled from 'styled-components';
import { Line } from 'rc-progress';
import { colors } from 'renderer/theme';
import { Layout, LayoutWrapper, MainContent, SimpleSidebar } from 'components/layout';
import { Logger } from 'renderer/utils/logging';
import withContainer from './container';

const SyncNodeTitle = styled.div`
  color: ${colors.N0};
  font-weight: 600;
  font-size: 1.7rem;
  margin: 3rem auto;
`;

const SyncNodeProgressWarpper = styled.div`
  display: flex;
`;

const SyncNodeProgress = styled.div`
  width: 60%;
  border-radius: 3px;
  border: 3px solid ${colors.primary};
`;

const SyncNodeInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  margin-left: 1rem;
`;

const TextWrapper = styled.div`
  color: ${colors.N0};
`;

const SyncNodePage = ({ syncStream, syncRemoteStream }) => {
  const { blockNum: bestBlock } = syncRemoteStream;
  const { blockNum: syncedBlock } = syncStream;
  const syncNodePercentage = bestBlock && bestBlock > 0 ? (syncedBlock / bestBlock) * 100 : 0;
  const progressPercentage = syncNodePercentage >= 100 ? 100 : syncNodePercentage;

  Logger.info(`
  ===========================================    
  Best block in MainNet #${bestBlock} 
  ===========================================`);
  Logger.info(`
  ===========================================
  Best block in Local #${syncedBlock}
  ===========================================`);
  Logger.info(`  Sync progress in Local ${progressPercentage.toFixed(2)}%`);
  return (
    <Layout sidebar={<SimpleSidebar />}>
      <LayoutWrapper>
        <MainContent>
          <SyncNodeTitle>Main net</SyncNodeTitle>
          <SyncNodeProgressWarpper>
            <SyncNodeProgress>
              <Line
                percent={progressPercentage}
                trailColor="transparent"
                trailWidth="7"
                strokeWidth="7"
                strokeColor={colors.primary}
                strokeLinecap="square"
                style={{ height: '100%', width: '100%' }}
              />
            </SyncNodeProgress>
            <SyncNodeInfo>
              <TextWrapper>
                {progressPercentage === 100 || progressPercentage === 0
                  ? progressPercentage
                  : progressPercentage.toFixed(2)}
                % synced
              </TextWrapper>
              <TextWrapper>{`${syncedBlock} / ${bestBlock} blocks`}</TextWrapper>
            </SyncNodeInfo>
          </SyncNodeProgressWarpper>
        </MainContent>
      </LayoutWrapper>
    </Layout>
  );
};

export default withContainer(SyncNodePage);
