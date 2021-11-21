import { useQuery, useResult } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { Character, Episode, Location, Origin } from 'src/definitions'
import { Ref } from 'vue'
import { VariablesParameter } from '@vue/apollo-composable/dist/useQuery'
import { OperationVariables } from 'apollo-client'

type ReponseData = {
  characters:{
    results: Record<string, unknown>[],
    info: Record <string, unknown>
  },
}
type Result = {
  characters: Character[]
  pages: number
}
type Response = {
  loading: Ref<boolean>,
  response: Readonly<Ref<Readonly<Result | null>>>
}
export function getCharacters (variables: VariablesParameter<OperationVariables>):Response {
  const { result, loading } = useQuery(gql`
    query getCharacters($page: Int!, $filterName: String) {
      characters(page:$page, filter:{name:$filterName}) {
        info{
          pages
        }
        results {
          id
          name
          status
          image
          species,
          location{
            name,
            type
          },
          origin{
            name
            dimension
          },
          episode{
            name
          }
        }
      }
    }
  `, variables, {
    fetchPolicy: 'cache-and-network'
  })
  const response = useResult(result, null, (data: ReponseData): Result => {
    const response = data.characters.results
    const info = data.characters.info

    const characters = response.map((character):Character => {
      const episodesResponse = character.episode as Record<string, unknown>[]
      const episodes = episodesResponse.map((episode):Episode => {
        return {
          name: episode.name as string
        }
      })
      const locationReturned = character.location as Record<string, unknown>

      const location: Location = {
        name: locationReturned.name as string,
        type: locationReturned.type as string
      }
      const originReturned = character.origin as Record<string, unknown>
      const origin: Origin = {
        name: originReturned.name as string,
        dimension: originReturned.dimension as string
      }
      return {
        id: character.id as string,
        name: character.name as string,
        image: character.image as string,
        species: character.species as string,
        status: character.status as string,
        episodes,
        location,
        origin
      }
    })

    return {
      characters: characters,
      pages: info.pages as number
    }
  })
  return {
    loading,
    response
  }
}
