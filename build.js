'use strict';

const fs = require('fs-extra');
fs.copySync('./src/main', './dist');
fs.copySync('./src/2016', './dist/2016');
fs.copySync('./src/hate4', './dist/hate4');
fs.copySync('./CNAME', './dist/');
