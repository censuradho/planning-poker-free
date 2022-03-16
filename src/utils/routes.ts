export const resolvePath = (path: string, obj: Record<string, any>) => {
	let tempPath = path

	Object.keys(obj).map(key => (tempPath = tempPath.replace(`:${key}`, obj[key])))

	return tempPath
}