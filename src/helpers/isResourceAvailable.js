import { accessSync, constants } from 'fs';

const isResourceAvailable = async (filePath) => {
	let isResourceCreated;

	try {
		await new Promise((resolve) => {
			resolve(accessSync(filePath, constants.F_OK))
		})
		isResourceCreated = true;
	} 
	catch {
		isResourceCreated = false;
	}

	return isResourceCreated;
};


// const isResourceAvailable = async (filePath) => {
//   let isCreateResource;

//   try {
//     await access(filePath, constants.F_OK);
//     isCreateResource = true;
//   } 
//   catch { 
//     isCreateResource = false;  
//   }

//   return isCreateResource;
// };

export default isResourceAvailable;
