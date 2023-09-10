export interface Skill {
    name: string;
    icon: string;
  }
  
  export interface SkillGroup {
    title: string;
    skills: any[] 
  }

export const SkillsData : SkillGroup[]  = [
    {
      title: 'Back',
      skills: [
        { name: 'C#', icon: 'https://growiz.com.br/wp-content/uploads/2020/08/kisspng-c-programming-language-logo-microsoft-visual-stud-atlas-portfolio-5b899192d7c600.1628571115357423548838.png' },
        { name: 'VB.NET', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/VB.NET_Logo.svg/800px-VB.NET_Logo.svg.png' },
        { name: '.NET - .NET Core - .NET Framework', icon: 'https://hermes.dio.me/articles/cover/496931d9-69d6-4956-bb0a-032dd5792ade.png' },
        { name: 'T-SQL - SQL', icon: 'https://static-00.iconduck.com/assets.00/sql-database-sql-azure-icon-1955x2048-4pmty46t.png' },
        { name: 'SSRS', icon: 'https://inapp.com/wp-content/uploads/elementor/thumbs/sql-01-01-q05xfvfb3w2ipgcyt2vsxvv996rqtejk8kpbewucbk.png' },
        { name: "Criação de API's REST", icon: 'https://www.opc-router.de/wp-content/uploads/2020/04/icon_rest_webservice_600x400px-300x200.png' }
      ]
    },
    {
      title: 'Front',
      skills: [
        {name: 'Angular', icon:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png'}, 
        {name: 'Typescript', icon:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png'},
        {name: 'Javascript', icon:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png'},
        {name: 'HTML', icon: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
        {name: 'SASS', icon:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png'},
        {name: 'CSS', icon:'https://logospng.org/download/css-3/logo-css-3-2048.png'},
        {name: 'Prototipagem: Figma', icon:'https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png'}
        ]
    },
    {
      title: 'Geral',
      skills: [
        {name: 'GIT', icon:'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'}, 
        {name: 'GITHUB', icon:'https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_github_icon_143196.png'}, 
        {name: 'GITLAB', icon:'https://static-00.iconduck.com/assets.00/gitlab-icon-2048x1885-1o0cwkbx.png'}, 
        {name: 'Azure', icon:'https://swimburger.net/media/ppnn3pcl/azure.png'}, 
        {name: 'CI/CD', icon:'https://www.mabl.com/hubfs/CICDBlog.png'}, 
      ]
    },
    {
      title: 'Soft',
      skills: [
        {name: 'Comunicativo', icon:'https://cdn-icons-png.flaticon.com/512/3201/3201615.png'},
        {name: 'Resiliente', icon:'https://cdn-icons-png.flaticon.com/512/7871/7871636.png'},
        {name: 'Trabalho em equipe', icon:'https://cdn-icons-png.flaticon.com/512/7086/7086327.png'},
        {name: 'Proativo', icon:'https://cdn-icons-png.flaticon.com/512/7871/7871366.png'},
      ]
    }
  ];
  