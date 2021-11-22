import { OperationVariables } from '@apollo/client'
import { VariablesParameter } from '@vue/apollo-composable/dist/useQuery'
import gql from 'graphql-tag'
import { useQuery, useResult } from '@vue/apollo-composable'
import { Episode, Character } from '@/definitions'
import { Ref } from 'vue'

type ReponseData = {
    episodes:{
      results: Record<string, unknown>[],
      info: Record <string, unknown>
    },
}
type Result = {
    episodes: Episode[]
    pages: number
}
type Response = {
    loading: Ref<boolean>,
    response: Readonly<Ref<Readonly<Result | null>>>
  }
export function getEpisodes (variables: VariablesParameter<OperationVariables>): Response {
  const { result, loading } = useQuery(gql`
    query getEpisodes($page: Int!, $filterName: String) {
        episodes(page:$page, filter:{name:$filterName}) {
          info{
            pages
          }
          results {
            id
            name
            air_date
            characters{
              id
              name
            }
            
          }
        }
      }
    `, variables, {
    fetchPolicy: 'cache-and-network'
  })
  const response = useResult(result, null, (data: ReponseData): Result => {
    const response = data.episodes.results
    const info = data.episodes.info

    const episodes = response.map((episode): Episode => {
      const charactersData = episode.characters as Record<string, unknown>[]
      const characters = charactersData.map((character): Character => {
        return {
          id: character.id as string,
          name: character.name as string
        }
      })
      return {
        name: episode.name as string,
        characters
      }
    })
    return {
      episodes,
      pages: info.pages as number
    }
  })

  return {
    loading,
    response
  }
}
