import { Card,Box,Typography,CardContent ,CardActions,Button,CardMedia} from '@mui/material'


export const Kadi = () => {
  return (
    <Box width='300px'>
        <Card>
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              React
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              React is a Javascript Library For Building Great UIs.
              React can be used for Mobile Development Applications.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>LearnMore</Button>
          </CardActions>
            
        </Card>
    </Box>
  )
}
