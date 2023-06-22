const getCroppedImageUrl = (url: string) => {
	if (!url) return "";

	const target = "media/";
	const cropParams = "crop/600/400/";
	const index = url.indexOf(target) + target.length;

	return url.slice(0, index) + cropParams + url.slice(index);
};

export default getCroppedImageUrl;
