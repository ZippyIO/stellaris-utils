# Stellaris Utils

Utilities to convert Stellaris files into data that can be queried and used in applications.

These utils have only been tested with Stellaris but should work with other Paradox games that use the same scripting format.

## Stellaris PDS to JSON Array

Convert Paradox Interactive Scripts into a JSON format that can be imported into databases that accept JSON in an Array format.
Created on top of [Jomini](https://github.com/nickbabcock/jomini).

#### Usage/Examples

Game files can be found under the `common` directory of the game installation. Some files may not parse as there are example files that do not contain any data. Suggested to only add the files you require.

Converted files will be exported to ./output/ with their original path.

```javascript
import convertPdsJson from './converter.js';

convertPdsJson('./data');
```
