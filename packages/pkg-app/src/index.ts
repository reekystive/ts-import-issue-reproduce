/**
 * if you open this file in VSCode, you'll see that there's no error
 * but if you run `pnpm run start` (using ts-node) you'll see that this is not working
 */

import { testValue } from 'node_modules/@mono/pkg-shared/src/test.js'
//                         ^ this shouldn't work but it does

console.log(testValue)
