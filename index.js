var Path = require('path'),
  Child_process = require('child_process'),
  commandExistsSync = require('command-exists').sync,
  _root = null;

function configroot () {
  if (_root === null) {
    if (commandExistsSync('npm')) {
      _root = Path.resolve(Child_process.execSync('npm config get prefix', {}).toString().trim(), 'lib');
    } else {
      _root = process.cwd();
    }
  }
  return _root;
}

module.exports = configroot;
