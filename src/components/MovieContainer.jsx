import { Box, Text, Grid, Container, Link } from '@chakra-ui/react'
import { Link as Linked } from 'react-router-dom'
import { useEffect, useState } from 'react'
import CardMovie from './CardMovie'

function MovieContainer () {
  const [data, setData] = useState([])

  useEffect(() => {
    async function response () {
      await fetch('https://ghibli-app-back-production.up.railway.app/films')
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err))
    }
    response()
  }, [])

  const listaMovies = data.map((movie) => {
    return (
      <div key={movie._id}>
        <Link as={Linked} to={`/movie/${movie._id}`}><CardMovie movie={movie} /></Link>
      </div>
    )
  })

  return (
    <Box bg='#000000' w='100%'>
      <Container margin='0 auto' maxW='container.xl'>
        <Text color='white' py='30px' pl='7' fontSize='30px' fontWeight='800'>Popular Movies</Text>
        <Grid gridTemplateColumns='repeat(auto-fit, minmax(290px, 1fr))' gap='2' placeItems='center'>
          {listaMovies}
        </Grid>
      </Container>
    </Box>
  )
}

export default MovieContainer
