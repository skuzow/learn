import { ref, computed } from 'vue';
import { useFirestore, useCollection } from 'vuefire';
import { collection } from 'firebase/firestore';

export default function useProperties() {
  const db = useFirestore();

  const swimmingPool = ref(false);
  const propertiesCollection = useCollection(collection(db, 'properties'));

  const filteredProperties = computed(() => {
    return swimmingPool.value
      ? propertiesCollection.value.filter((property) => property.swimmingPool)
      : propertiesCollection.value;
  });

  return {
    swimmingPool,
    propertiesCollection,
    filteredProperties
  };
}
