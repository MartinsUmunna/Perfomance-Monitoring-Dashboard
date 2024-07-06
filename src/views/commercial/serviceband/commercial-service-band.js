import React from 'react';
import { Grid } from '@mui/material';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import ATCCServiceBand from '../../../components/dashboards/ecommerce/ATCCServiceBand';
import BillingEfficiencyServiceBand from '../../../components/dashboards/ecommerce/BillingEfficiencyServiceBand';
import CollectionEfficiencyServiceBand from '../../../components/dashboards/ecommerce/CollectionEfficiencyServiceBand';
import CustomerResponseRateServiceBand from '../../../components/dashboards/ecommerce/CustomerResponseRateServiceBand';
import EnergyCommercialServiceBand from '../../../components/widgets/charts/EnergyCommercialServiceBand';
import StateFilter from 'src/layouts/full/shared/breadcrumb/StateFilter'

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'State',
  },
  {
    title: 'Commercial Service Band',
  },
];

const CommercialServiceBand = () => {
  return (
    <PageContainer title="Commercial Service Band" description="this is Charts page">
      {/* breadcrumb */}
      <Breadcrumb title="Commercial Service Band" items={BCrumb} />
      {/* end breadcrumb */}
      <Grid container spacing={3}>
      <Grid item xs={12}>
          <StateFilter />
        </Grid>
        <Grid item xs={12}>
          <EnergyCommercialServiceBand />
        </Grid>
        
        <Grid item xs={12} lg={6}>
          <ATCCServiceBand />
        </Grid>
        <Grid item xs={12} lg={6}>
          <BillingEfficiencyServiceBand />
        </Grid>
        <Grid item xs={12} lg={6}>
          <CollectionEfficiencyServiceBand />
        </Grid>
        <Grid item xs={12} lg={6}>
          <CustomerResponseRateServiceBand />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default CommercialServiceBand;
