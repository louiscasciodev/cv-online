// Modules
import React from 'react'

// MUI Components
import {
  Grid,
  Paper,
} from '@material-ui/core/'

export default () => {
  return (
    <Grid container spacing={3}>
      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper>
          PlantMe
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper>
        </Paper>
      </Grid>
      {/* Recent Orders */}
      <Grid item xs={12}>
        <Paper>
        </Paper>
      </Grid>
    </Grid>
  )
}
