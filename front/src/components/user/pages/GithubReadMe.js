// Modules
import React, { useEffect, useState } from 'react'
import axios from 'axios'

// MUI Components
import { makeStyles } from '@material-ui/core/styles'
import { CardContent, Typography} from '@material-ui/core/'

// Styling with JSS
const useStyles = makeStyles(theme => ({
  cardContent: {
    height: '100px',
    overflow: 'hidden',
  }
}))

export default (props) => {
  const classes = useStyles()
  const [dataReadMe, setDataReadMe] = useState([])
  const repo = props.repo

  const getReadMe = (repoName) => {
    axios
      .get(`https://api.github.com/repos/louiscasciodev/${repoName}/readme`)
      .then(result => setDataReadMe(result.data))
  }

  // decoding ReadMe content(64base) with atob function
  const getContent = (content) => {
    const result = atob(content)
    return result
  }

  useEffect(() => {
    getReadMe(repo)
  }, [])

  return (
    <CardContent className={classes.cardContent}>
      <Typography variant="body2" color="textSecondary" component="p">
        <Typography variant="subtitle2">README.md</Typography>
        {dataReadMe.content && getContent(dataReadMe.content)}
      </Typography>
    </CardContent>
  )
}
