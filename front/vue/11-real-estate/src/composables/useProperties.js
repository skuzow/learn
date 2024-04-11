import { computed } from 'vue';
import { useFirestore, useCollection } from 'vuefire';
import { collection } from 'firebase/firestore';

export default function useProperties() {
  const db = useFirestore();
  const propertiesCollection = useCollection(collection(db, 'properties'));

  const propertyPrice = computed(() => {
    return (price) =>
      Number(price).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      });
  });

  return {
    propertiesCollection,
    propertyPrice
  };
}
