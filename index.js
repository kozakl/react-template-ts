#!/usr/bin/env node
const fs = require('fs-extra');
const {exec} = require('child_process');

const pwd = process.env.PWD,
      name = process.argv[2],
      type = process.argv[3];
if (!name)
    return console.error('Usage: react-template-ts <project-name> <--redux? | --router?>');

switch (type)
{
    case '--redux' :
        copyTemplate('redux');
        npmInstall();
        break;
    case '--router' :
        copyTemplate('router');
        npmInstall();
        break;
    default :
        copyTemplate('default');
        npmInstall();
}

function copyTemplate(template)
{
    const project = `${pwd}/${name}`;
    fs.copySync(`${__dirname}/templates/${template}`, project);
    fs.renameSync(`${project}/gitignore`, `${project}/.gitignore`);
}

function npmInstall()
{
    const env = {
        NPM_CONFIG_COLOR: 'always'
    };
    const child = exec(`cd ${pwd}/${name} && npm install`, {env});
    child.stdout.on('data', console.log);
    child.stderr.on('data', console.log);
}
