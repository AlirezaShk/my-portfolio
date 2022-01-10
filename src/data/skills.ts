// import { SkillCat, Skill } from '../portfolio/features/skillTable/constants'

// var SkillsData: Array<SkillCat> = [
//     {
//         name: 'Frontend',
//         data: []
//     },
//     {
//         name: 'Backend',
//         data: []
//     },
//     {
//         name: 'Database',
//         data: []
//     }
// ]
// const newSkill = (
//     n: string,
//     v: number,
//     libs: Array<Skill> | undefined = []
// ): Skill => ({ name: n, expertise: v, libs: libs })
// let JavascriptLib = new Array<Skill>()

// JavascriptLib.push(newSkill('JQuery', 100))
// JavascriptLib.push(newSkill('Vue.js', 90))
// JavascriptLib.push(newSkill('AngularJS', 50))
// JavascriptLib.push(newSkill('React', 70))

// let PHPLib = new Array<Skill>()
// PHPLib.push(newSkill('Laravel', 100))
// PHPLib.push(newSkill('CakePHP', 80))

// let CSSLib = new Array<Skill>()
// CSSLib.push(newSkill('SASS', 100))
// CSSLib.push(newSkill('SCSS', 100))
// CSSLib.push(newSkill('Bootstrap', 100))

// let PyLib = new Array<Skill>()
// PyLib.push(newSkill('Django', 70))

// let JavascriptLib2 = new Array<Skill>()
// JavascriptLib2.push(newSkill('Node.js', 40))

// SkillsData[0].data.push(newSkill('Typescript', 100))
// SkillsData[0].data.push(newSkill('Javascript', 100, JavascriptLib))
// SkillsData[0].data.push(newSkill('CSS', 100, CSSLib))
// SkillsData[0].data.push(newSkill('HTML', 100))
// SkillsData[1].data.push(newSkill('PHP', 100, PHPLib))
// SkillsData[1].data.push(newSkill('Python', 80, PyLib))
// SkillsData[1].data.push(newSkill('Go', 70))
// SkillsData[1].data.push(newSkill('Typescript', 100, JavascriptLib2))
// SkillsData[1].data.push(newSkill('Javascript', 100, JavascriptLib2))
// SkillsData[1].data.push(newSkill('C++', 80))
// SkillsData[1].data.push(newSkill('Java', 55))
// SkillsData[2].data.push(newSkill('MySQL', 100))
// SkillsData[2].data.push(newSkill('PostgreS', 60))
// SkillsData[2].data.push(newSkill('SQLite', 90))
// SkillsData[2].data.push(newSkill('MongoDB', 90))

// console.log(JSON.stringify(SkillsData))
// export default SkillsData
export default [
    {
        name: 'Frontend',
        data: [
            { name: 'Typescript', expertise: 100, libs: [] },
            {
                name: 'Javascript',
                expertise: 100,
                libs: [
                    { name: 'JQuery', expertise: 100, libs: [] },
                    { name: 'Vue.js', expertise: 90, libs: [] },
                    { name: 'AngularJS', expertise: 50, libs: [] },
                    { name: 'React', expertise: 70, libs: [] }
                ]
            },
            {
                name: 'CSS',
                expertise: 100,
                libs: [
                    { name: 'SASS', expertise: 100, libs: [] },
                    { name: 'SCSS', expertise: 100, libs: [] },
                    { name: 'Bootstrap', expertise: 100, libs: [] }
                ]
            },
            { name: 'HTML', expertise: 100, libs: [] }
        ]
    },
    {
        name: 'Backend',
        data: [
            {
                name: 'PHP',
                expertise: 100,
                libs: [
                    { name: 'Laravel', expertise: 100, libs: [] },
                    { name: 'CakePHP', expertise: 80, libs: [] }
                ]
            },
            {
                name: 'Python',
                expertise: 80,
                libs: [{ name: 'Django', expertise: 70, libs: [] }]
            },
            { name: 'Go', expertise: 70, libs: [] },
            {
                name: 'Typescript',
                expertise: 100,
                libs: [{ name: 'Node.js', expertise: 40, libs: [] }]
            },
            {
                name: 'Javascript',
                expertise: 100,
                libs: [{ name: 'Node.js', expertise: 40, libs: [] }]
            },
            { name: 'C++', expertise: 80, libs: [] },
            { name: 'Java', expertise: 55, libs: [] }
        ]
    },
    {
        name: 'Database',
        data: [
            { name: 'MySQL', expertise: 100, libs: [] },
            { name: 'PostgreS', expertise: 60, libs: [] },
            { name: 'SQLite', expertise: 90, libs: [] },
            { name: 'MongoDB', expertise: 90, libs: [] }
        ]
    }
]
