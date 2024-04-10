import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { defineStore } from 'pinia';
import { useFirebaseAuth } from 'vuefire';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

export const useAuthStore = defineStore('auth', () => {
  const auth = useFirebaseAuth();
  const router = useRouter();

  const authUser = ref(null);
  const isAuth = computed(() => !!authUser.value);

  const errorMsg = ref('');
  const hasError = computed(() => !!errorMsg.value);
  const errorCodes = {
    'auth/invalid-credential': 'Invalid credentials'
  };

  onMounted(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) authUser.value = user;
    });
  });

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        authUser.value = userCredential.user;
        router.push({ name: 'admin-properties' });
      })
      .catch((error) => (errorMsg.value = errorCodes[error.code]));
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        authUser.value = null;
        router.push({ name: 'login' });
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  return {
    isAuth,
    hasError,
    errorMsg,
    login,
    logout
  };
});
