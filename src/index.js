
 module.exports = function check(str, bracketsConfig) {
  bracketsConfig=bracketsConfig.map(x=>x.join(''));
  let tmp=str.length/2;
  for (let i=0; i<tmp; i++) {
    bracketsConfig.forEach(x => {
      str=str.replace(`${x}`, '');
    });
  }
  return str.length==0

}
