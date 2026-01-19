/**
 * Converts an image file to WebP format using the browser's Canvas API.
 * @param file The input image file (JPEG, PNG, etc.)
 * @param quality Quality of the WebP output (0 to 1, default 0.8)
 * @returns A Promise that resolves to the converted WebP File object.
 */
export async function convertImageToWebP(file: File, quality: number = 0.8): Promise<File> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        const reader = new FileReader();

        reader.onload = (e) => {
            img.src = e.target?.result as string;
        };

        reader.onerror = (e) => reject(e);

        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            if (!ctx) {
                reject(new Error('Failed to get canvas context'));
                return;
            }
            ctx.drawImage(img, 0, 0);

            canvas.toBlob((blob) => {
                if (!blob) {
                    reject(new Error('Canvas to Blob conversion failed'));
                    return;
                }
                const newFile = new File([blob], file.name.replace(/\.[^/.]+$/, "") + ".webp", {
                    type: 'image/webp',
                    lastModified: Date.now(),
                });
                resolve(newFile);
            }, 'image/webp', quality);
        };

        reader.readAsDataURL(file);
    });
}
