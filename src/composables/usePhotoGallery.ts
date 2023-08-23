import { ref, onMounted, watch } from 'vue';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import axios, {isCancel, AxiosError} from 'axios';
import FormData from 'form-data'

const PHOTO_STORAGE = 'photos';

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

	const photos = ref<UserPhoto[]>([]);

const sendToTransform = async (file) => {
  console.log("in sendToTransform")
  let formData = new FormData();
  formData.append('file', file, file.name);

  axios.post('http://localhost:97/transform', {
    'data': file
  }, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
).then(function(response){
  console.log(response)
})
}

const cachePhotos = () => {
  Preferences.set({
    key: PHOTO_STORAGE,
    value: JSON.stringify(photos.value),
  });
};

const loadSaved = async () => {
  const photoList = await Preferences.get({ key: PHOTO_STORAGE });
  const photosInPreferences = photoList.value ? JSON.parse(photoList.value) : [];

  for (const photo of photosInPreferences) {
    const file = await Filesystem.readFile({
      path: photo.filepath,
      directory: Directory.Data,
    });

    photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
    console.log('printing files:')
    const byteVersion = atob(photo.webviewPath.split(",")[1]);
    const blob = new Blob([byteVersion], { type: 'image/png' });
    sendToTransform(blob)
    break;
  }

  photos.value = photosInPreferences;
};

const convertBlobToBase64 = (blob: Blob) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

 const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
  // Fetch the photo, read as a blob, then convert to base64 format
  const response = await fetch(photo.webPath!);
  const blob = await response.blob();
  // console.log('sending blob')
  //   const pic = sendToTransform(blob)
  const base64Data = (await convertBlobToBase64(blob)) as string;

  const savedFile = await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: Directory.Data,
  });

  // Use webPath to display the new image instead of base64 since it's
  // already loaded into memory
  return {
    filepath: fileName,
    webviewPath: photo.webPath,
  };
};
export const usePhotoGallery = () => {
  axios.get('http://localhost:97/sayhello').then(function(r){
    console.log(r)
  }).catch(function(e){
    console.log(e)
  })
	const takePhoto = async () => {
		const photo = await Camera.getPhoto({
			resultType: CameraResultType.Uri,
			source: CameraSource.Camera,
			quality: 100
		})

		const fileName = Date.now() + '.jpeg';
		const savedFileImage = await savePicture(photo, fileName);

   


		photos.value = [savedFileImage, ...photos.value];

	}

	watch(photos, cachePhotos);
	onMounted(loadSaved);


	return {photos,takePhoto};
}

