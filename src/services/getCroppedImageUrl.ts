const getCroppedImageUrl = (url: string) => {
	const noImg = "no-img-placeholder.webp";
	if (!url) return noImg;

	const target = "media/";
	const cropParams = "crop/600/400/";
	const index = url.indexOf(target) + target.length;

	return url.slice(0, index) + cropParams + url.slice(index);
};

export default getCroppedImageUrl;
