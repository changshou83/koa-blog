import { urlToExternalLink, addDomain } from "@/utils/route/urlToExternalLink"

describe('urlToExternalLink - default Domain', () => {
  it('no params', () => {
    window.location.href = ''
    urlToExternalLink('github')()
    
    expect(window.location.href).toStrictEqual('https://github.com/')
  })

  it('has params', () => {
    const toGithubProject = urlToExternalLink('github', ['user', 'projectName'])
    
    toGithubProject({
      user: 'changshou83',
      projectName: 'studyEveryday',
    })
    
    expect(window.location.href).toStrictEqual('https://github.com/changshou83/studyEveryday')
  })
})

describe('urlToExternalLink - extend Domain', () => {
  addDomain('baidu', {
    url: 'https://www.baidu.com/'
  })

  it('no params', () => {
    urlToExternalLink('baidu')()
    
    expect(window.location.href).toStrictEqual('https://www.baidu.com/')
  })
})
