import * as fs from 'fs';
import * as path from 'path';
import { Jomini } from 'jomini';

const convertPdsToJson = async (
    data: string,
    dirPath: string,
    name: string,
) => {
    const parser = await Jomini.initialize();
    const output = parser.parseText(data);
    const arrOutput: Array<object> = [];

    Object.keys(output).forEach((key) => {
        if (output && output.hasOwnProperty.call(output, key)) {
            arrOutput.push({ name: key, ...output[key] });
        }
    });

    fs.mkdirSync(`output/${dirPath}`, { recursive: true });
    fs.writeFileSync(
        `output/${dirPath}/${name}.json`,
        JSON.stringify(arrOutput, null, 4),
    );
};

const formatDataStructure = (dirPath: string, file: string, name: string) => {
    const formatFile = fs
        .readFileSync(`${dirPath}/${file}`, 'utf-8')
        .replace(/#.+/g, '');
    convertPdsToJson(formatFile, dirPath, name);
};

const convertPdsJson = (dirPath: string) => {
    const files = fs.readdirSync(dirPath);
    files.forEach((file) => {
        if (fs.statSync(`${dirPath}/${file}`).isDirectory()) {
            convertPdsJson(`${dirPath}/${file}`);
        } else {
            formatDataStructure(
                path.posix.join(dirPath),
                file,
                file.replace('.txt', ''),
            );
        }
    });
};

export default convertPdsJson;
