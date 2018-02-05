#!/usr/bin/env node
'use strict';

const fs = require('fs-extra');
const exec = require('child_process').exec;

const pwd  = process.env.PWD,
	  name = process.argv[2];
if (!name)
	return console.error('Template require a name');

fs.copySync(__dirname + '/Template', `${pwd}/${name}`);

const env = {FORCE_COLOR: '1', NPM_CONFIG_COLOR: 'always'};


const child = exec(`cd ${pwd}/${name} &&\
                    npm install`,
                   {env});
child.stdout.on('data', console.log);
child.stderr.on('data', console.log);


return;
/*
var process = exec(`cd ${server} &&\
                      git add . &&\
                      git commit -m "Update: ${project}." &&\
                      git push origin`);
process.stdout.on('data', console.log);
process.stderr.on('data', console.log);


return;
const execSync = require('child_process').execSync;

var d = execSync('pwd');
console.log(process.argv, d.toString(), __dirname);
console.log(process.env.PWD);
*/