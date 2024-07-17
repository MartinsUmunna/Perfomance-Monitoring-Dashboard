import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Box, Button, CardContent, Grid, Typography, Stack, Avatar } from '@mui/material';
import GreyCard from '../../shared/greycard';
import DashboardWidgetCard from '../../shared/DashboardWidgetCard';
import CostBreakdownCards from '../../shared/costbreakdowncard';
import { color, fontSize, fontWeight, padding, width } from '@mui/system';
import BlankCard from '../../shared/BlankCard';

const FeederInfoTechnicalAS = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = theme.palette.primary.light;
  const secondary = theme.palette.secondary.main;
  const textColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.8)' : '#2A3547';

  // chart
  const feedernumber = {
    chart: {
        type: 'donut',
        fontFamily: "'Plus Jakarta Sans', sans-serif;",
  
        toolbar: {
          show: false,
        },
        height: 275,
      },
      labels: ["Kano", "Katsina", "Jigawa"],
      colors: [primary, primarylight, secondary],
      plotOptions: {
        pie: {
          
          donut: {
            size: '89%',
            background: 'transparent',
  
            labels: {
              show: true,
              name: {
                show: true,
                offsetY: 7,
              },
              value: {
                show: false,
              },
              total: {
                show: true,
                color: textColor,
                fontSize: '20px',
                fontWeight: '600',
                label: '185',
              },
            },
          },
        },
      },
      dataLabels: {
        enabled: false,

      },
      stroke: {
        show: false,
      },
      legend: {
        show: false,
      },
      tooltip: {
        theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
        fillSeriesColor: false,
      },
  };
  
  const feedernumberseries = [42, 62, 30];

  //   chart 2
  const peakload = {
    chart: {
        type: 'donut',
        fontFamily: "'Plus Jakarta Sans', sans-serif;",
  
        toolbar: {
          show: false,
        },
        height: 275,
      },
      labels: ["Kano", "Katsina", "Jigawa"],
      colors: [primary, primarylight, secondary],
      plotOptions: {
        pie: {
          
          donut: {
            size: '89%',
            background: 'transparent',
  
            labels: {
              show: true,
              name: {
                show: true,
                offsetY: 7,
                
              },
              value: {
                show: false,
              },
              total: {
                show: true,
                color: textColor,
                fontSize: '20px',
                fontWeight: '600',
                label: ['3.22 MW' ],

              },
            },
          },
        },
      },
      dataLabels: {
        enabled: false,

      },
      stroke: {
        show: false,
      },
      legend: {
        show: false,
      },
      tooltip: {
        theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
        fillSeriesColor: false,
        
      },
  };
  
  const peakloadseries = [4.2, 6.2, 3.0];
  //   chart 3
  const customernumber = {
    chart: {
        type: 'donut',
        fontFamily: "'Plus Jakarta Sans', sans-serif;",
  
        toolbar: {
          show: false,
        },
        height: 275,
      },
      labels: ["Kano", "Katsina", "Jigawa"],
      colors: [primary, primarylight, secondary],
      plotOptions: {
        pie: {
          
          donut: {
            size: '89%',
            background: 'transparent',
  
            labels: {
              show: true,
              name: {
                show: true,
                offsetY: 7,
              },
              value: {
                show: false,
              },
              total: {
                show: true,
                color: textColor,
                fontSize: '20px',
                fontWeight: '600',
                label: '5 M',
              },
            },
          },
        },
      },
      dataLabels: {
        enabled: false,

      },
      stroke: {
        show: false,
      },
      legend: {
        show: false,
      },
      tooltip: {
        theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
        fillSeriesColor: false,
      },
  };
  
  const customernumberseries = [42, 62, 30];

  return (
    <BlankCard >
      <CardContent sx={{ p: '30px' }}>
        
      <Stack direction="row" spacing={2} justifyContent="space-between">
          <Typography variant="h5">Tariff Metrics</Typography>
          <Stack direction="row" spacing={2} mt={5} justifyContent="center">
          <Stack direction="row" spacing={3}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar
              sx={{ width: 9, height: 9, bgcolor: '#3B80B2', svg: { display: 'none' } }}
            ></Avatar>
            <Box>
              <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                Kano
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar
              sx={{ width: 9, height: 9, bgcolor: '#599BC8', svg: { display: 'none' } }}
            ></Avatar>
            <Box>
              <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                Katsina
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar
              sx={{ width: 9, height: 9, bgcolor: '#77ADD2', svg: { display: 'none' } }}
            ></Avatar>
            <Box>
              <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                Jigawa
              </Typography>
            </Box>
          </Stack>
        </Stack>
        </Stack>
        </Stack>

        <Grid container spacing={3} mt={2}>
          {/* 1 */}
          <Grid item xs={12} sm={4}>
            <BlankCard>
              <CardContent sx={{ p: '20px' }}>
              <Box justifyContent="center" textAlign="center" mt={1} mb={3}>
                  <Typography variant="h6" fontWeight={800} color='#273E76'>
                    Feeder Number
                  </Typography>
                </Box>

                <Box>
                  <Chart
                    options={feedernumber}
                    series={feedernumberseries}
                    type="donut"
                    height="275px"   
                  />
                </Box>
                
              </CardContent>
            </BlankCard>
          </Grid>
          {/* 2 */}
          <Grid item xs={12} sm={4}>
            <BlankCard>
              <CardContent sx={{ p: '20px' }}>
              <Box justifyContent="center" textAlign="center" mt={1} mb={3}>
                  <Typography variant="h6" fontWeight={800} color='#273E76'>
                    Avg. Peak Load
                  </Typography>
                </Box>

                <Box>
                  <Chart
                    options={peakload}
                    series={peakloadseries}
                    type="donut"
                    height="275px"
                  />
                </Box>
              </CardContent>
            </BlankCard>
          </Grid>
          {/* 3 */}
          <Grid item xs={12} sm={4}>
            <BlankCard>
              <CardContent sx={{ p: '20px' }}>
              <Box justifyContent="center" textAlign="center" mt={1} mb={3}>
                  <Typography variant="h6" fontWeight={800} color='#273E76'>
                    Customer Number
                  </Typography>
                </Box>
                <Box>
                  <Chart
                    options={customernumber}
                    series={customernumberseries}
                    type="donut"
                    height="275px"
                  />
                </Box>
              </CardContent>
            </BlankCard>
          </Grid>
        </Grid>
      </CardContent>
    </BlankCard>
  );
};

export default FeederInfoTechnicalAS;
