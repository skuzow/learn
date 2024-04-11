import { computed } from 'vue';
import { useFirebaseStorage, useStorageFile } from 'vuefire';
import { ref as storageRef } from 'firebase/storage';
import { uid } from 'uid';

export default function useImage() {
  const storage = useFirebaseStorage();
  const storageRefPath = storageRef(storage, `/properties/${uid()}.jpg`);
  const { url, upload } = useStorageFile(storageRefPath);

  const imageUrl = computed(() => url.value);

  function uploadImage(e) {
    const data = e.target.files[0];

    if (data) upload(data);
  }

  return {
    url,
    imageUrl,
    uploadImage
  };
}
