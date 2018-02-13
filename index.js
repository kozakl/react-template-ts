#!/usr/bin/env node
const fs 	 = require('fs-extra'),
	  {exec} = require('child_process');

const pwd 	   = process.env.PWD,
	  name 	   = process.argv[2],
	  template = process.argv[3];
if (!name)
	return console.error('Usage: react-template-ts2 <project-name> <--redux? | --router?>');

switch (template)
{
	case '--redux' :
		copyTemplate('template-redux');
		npmInstall();
		break;
	case '--router' :
		copyTemplate('template-router');
		npmInstall();
		break;
	default :
		copyTemplate('template');
		npmInstall();
}

function copyTemplate(template)
{
	fs.copySync(`${__dirname}/${template}`, `${pwd}/${name}`);
}

function npmInstall()
{
	const env = {
		NPM_CONFIG_COLOR: 'always'
	};
	const child = exec(`cd ${pwd}/${name} &&\
	                    npm install`,
	                   {env});
	child.stdout.on('data', console.log);
	child.stderr.on('data', console.log);
}