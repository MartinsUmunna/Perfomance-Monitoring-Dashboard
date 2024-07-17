import React from 'react';
import { Grid, Box } from '@mui/material';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import StateMenuFilter from 'src/layouts/full/shared/breadcrumb/StateMenuFilter';
import BusinessDistrictFilter from 'src/layouts/full/shared/breadcrumb/BusinessDistrictFilter';
import FeederType from 'src/layouts/full/shared/breadcrumb/FeederType';
import PageContainer from 'src/components/container/PageContainer';

import LowestATCCFeeder from '../../../components/commercial-components/feeder-charts-cards/lower-atcc-feeder';
import HighestATCCFeeder from '../../../components/commercial-components/feeder-charts-cards/higher-atcc-feeder';
import BreakdownCommercialFeeder from '../../../components/commercial-components/feeder-charts-cards/commercial-breakdown-feeder';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'State',
  },
  {
    title: 'Commercial Feeder',
  },
];

const buttonStyles = {
  minWidth: '100px', // Adjust this value as needed
  margin: '5px',
};

const CommercialFeeder = () => {
  return (
    <PageContainer title="Commercial Feeder" description="this is Charts page">
      {/* breadcrumb */}
      <Breadcrumb title="Commercial Feeder" items={BCrumb} />
      {/* end breadcrumb */}
      <Grid container spacing={3}>
<<<<<<< HEAD
      <Grid item xs={12} lg={6}>
          <LowestATCCFeeder />
=======
        <Grid container item xs={12} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} sm={6}>
            <Box display="flex" flexWrap="wrap">
              <BusinessDistrictFilter buttonStyles={buttonStyles} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" justifyContent="flex-end" alignItems="center">
              <Box style={{ marginRight: '10px' }}>
                <StateMenuFilter />
              </Box>
              <Box>
                <FeederType buttonStyles={buttonStyles} />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Top5FeedersATCC />
>>>>>>> 326bedd12cbaf49d9d312fa19f6f48880d6756c2
        </Grid>
        <Grid item xs={12} lg={6}>
          <HighestATCCFeeder />
        </Grid>
        <Grid item xs={12}>
<<<<<<< HEAD
          <BreakdownCommercialFeeder />
        
=======
          <EnergyFeeders />
>>>>>>> 326bedd12cbaf49d9d312fa19f6f48880d6756c2
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default CommercialFeeder;
