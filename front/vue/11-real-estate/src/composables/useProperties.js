import { ref, computed } from 'vue';
import { useFirestore, useCollection, useFirebaseStorage } from 'vuefire';
import { doc, collection, deleteDoc } from 'firebase/firestore';
import { ref as storageRef, deleteObject } from 'firebase/storage';

export default function useProperties() {
  const db = useFirestore();
  const storage = useFirebaseStorage();

  const swimmingPool = ref(false);
  const propertiesCollection = useCollection(collection(db, 'properties'));

  async function deleteProperty(id, imageUrl) {
    if (confirm('Are you sure you want to delete this property?')) {
      const propertyRef = doc(db, 'properties', id);
      const imageRef = storageRef(storage, imageUrl);

      await Promise.all([deleteDoc(propertyRef), deleteObject(imageRef)]);
    }
  }

  const filteredProperties = computed(() => {
    return swimmingPool.value
      ? propertiesCollection.value.filter((property) => property.swimmingPool)
      : propertiesCollection.value;
  });

  return {
    swimmingPool,
    propertiesCollection,
    filteredProperties,
    deleteProperty
  };
}
