var Path = require('path'),
  Child_process = require('child_process'),
  commandExistsSync = require('command-exists').sync,
  Os = require('os'),
  _isNotWin = Os.type() !== 'Windows_NT',
  _root = null;

function configroot () {
  if (_root === null) {
    if (commandExistsSync('npm')) {
      _root = Child_process.execSync('npm config get prefix', {}).toString().trim();
      if (_isNotWin) {
        _root = Path.resolve(_root, 'lib');
      }
    } else {
      _root = process.cwd();
    }
  }
  return _root;
}

module.exports = configroot;
