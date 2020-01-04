// Modules
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Markdown from 'react-markdown'

// MUI Components
import { makeStyles } from '@material-ui/core/styles'
import { CardContent, Box } from '@material-ui/core/'

// Styling with JSS
const useStyles = makeStyles(theme => ({
  cardContent: {
    height: '200px',
    overflow: 'hidden',
    padding: '10px 30px 10px 30px',
  },
  boxContent:{
    color: theme.palette.text.secondary,
  }
}))

export default (props) => {
  const classes = useStyles()
  const [dataReadMe, setDataReadMe] = useState([])
  const repo = props.repo

  const getReadMe = (repoName) => {
    repoName &&
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
        <Box className={classes.boxContent}>
          {/* <Typography variant="subtitle2">README.md</Typography> */}
          <Markdown
            source={dataReadMe.content && getContent(dataReadMe.content)}
            disallowedTypes={['link', 'heading', 'image']}
            // unwrapDisallowed={true}
          />
        </Box>
      </CardContent>
  )
}
