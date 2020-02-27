// function StringPeriods(str) { 
//     // we will use only lengths of substrings that divide evenly into str
//     const len = str.length;
//     const pivot = Math.max(Math.trunc(Math.sqrt(len)), len);
//     console.log(pivot)
//     for (let i = 2; i <= pivot; i++) {
//       if (len % i === 0) {
//         const block = str.slice(0, len / i);
//         if (block.repeat(i) === str) {
//           return block;
//         }
//       }
//     }
//     return -1;
//   }


function StringPeriods(str) {
    if (str.length <= 1) return -1;

    for (var i = 2; i <= str.length; i++) {
        // skip if the length of the entire string is not a multiple of pattern length
        if ((str.length % i) !== 0) continue;

        var pattern = str.slice(0, str.length / i);
        // run pattern matching for the entire string
        for (var j = 0; j < str.length; j += pattern.length) {
            if (pattern !== str.slice(j, j + pattern.length)) {
                return -1;
            }
        }
        return pattern;
    }
}

console.log(StringPeriods("abcababcababcab"))