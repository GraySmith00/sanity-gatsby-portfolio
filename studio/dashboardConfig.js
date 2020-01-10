export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e17bfc113fd28019e56c663',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-j52qsk7d',
                  apiId: '58a93510-ca56-4ef8-9e6f-e48c314aaaf3'
                },
                {
                  buildHookId: '5e17bfc1063d5f2add3dd841',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-o8cy2k1u',
                  apiId: '8644d572-d344-4c71-85a0-b7707d4f6959'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/GraySmith00/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-o8cy2k1u.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
