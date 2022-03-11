import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { ReactNode } from 'react'
import { FadeInWhenVisible } from '../components/shared/FadeInWhenVisible'
import { SEO } from '../components/shared/SEO'
import { Title } from '../components/shared/Title'
import { GlobalLayout } from './../components/layouts/GlobalLayout'
import { TeamMember } from './../types/TeamMember'
import { api } from './../util/api'

interface TeamsProps {
  children?: ReactNode
  teams: TeamMember[]
}

const Teams: NextPage<TeamsProps> = ({ teams }) => {
  return (
    <>
      <SEO title="Teams" description="Trigan Teams" />
      <GlobalLayout>
        <Title padding="py-3" title="Meet Our Team" />
        {teams.map((teamMember, i) => {
          return (
            <FadeInWhenVisible duration={(i + 1) * 0.2} key={teamMember.id}>
              <div className="my-5 mx-5 bg-light-grey md:mx-auto md:w-2/3 md:-skew-x-12">
                <div className="grid items-center overflow-hidden px-10 py-5 md:skew-x-12 md:grid-cols-4">
                  {/* Image Starts */}
                  <div className="relative mx-auto h-28 w-28 sm:h-40 sm:w-40 md:col-span-1">
                    <Image
                      src={teamMember.image}
                      alt={teamMember.name}
                      layout="fill"
                      className="rounded-full bg-light"
                    />
                  </div>
                  {/* Image Ends */}

                  <div className="col-span-3 pt-3">
                    <h4 className="text-xl font-semibold">{teamMember.name}</h4>
                    <h6 className="font-medium">{teamMember.title}</h6>

                    <p className="py-2 text-sm">{teamMember.longDescription}</p>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          )
        })}
      </GlobalLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let teams = []
  try {
    const { data } = await api().get('/teammember/getAll')
    teams = data.Data
  } catch (err) {
    console.log(err)
  }
  return {
    props: {
      teams,
    },
    revalidate: false, // Next.js will never attempt to re-generate the page
  }
}

export default Teams
