<script lang="ts" setup>
setPageLayout('default')
import { useQuasar } from 'quasar'
import { object, string, ref as YupRef } from 'yup';
const $q = useQuasar()
const registerFormSchema = object().shape({
  email: string().required().email(),
  username: string().optional().min(4),

});


function validate(field: "email") {
  registerFormSchema
    .validateAt(field, form_value.value)
    .then(() => {
      form_error.value[field] = "";
    })
    .catch(err => {
      form_error.value[field] = err.message;
    });
}
async function loginUser() {

  try {
    await registerFormSchema.validate(form_value.value, { abortEarly: false })
    form_error.value = { email: '', };
    // const response = await useAuth().Register(form_value.value);



  } catch (err: any) {
    if (err.inner) {
      err.inner.forEach((error: { path: string; message: string; }) => {
        form_error.value[error.path as "email"] = error.message;
      });
    }

  }

}

const form_value = ref({ email: "", })
const form_error = ref({ email: '', })


// const { } = await useAuth().Login();
</script>
<template>
  <div class="min-h-screen  text-gray-900 flex justify-center ">
    <div class="max-w-screen-xl m-0 sm:m-10 bg-white overflow-hidden sm:rounded-xl shadow-2xl flex justify-center flex-1">
      <div class="max-[540px]:hidden sm:flex  sm:visible flex-1 bg-blue-500  text-center overflow-hidden">
        <img class="m-12  bg-cover  bg-center bg-no-repeat" src="/undraw_message_sent_re_q2kl.svg" />
      </div>
      <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 flex flex-col justify-center item-center">

        <div class="flex flex-col items-center justify-center flex-1 ">
          <div class="h-40  flex justify-center items-center">
            <h1 class="text-4xl sm:text-6xl font-bold">
              Nano <span class="text-white bg-blue-500 p-1 rounded-lg">SMS</span>
            </h1>
          </div>
          <div class=" max-w-xs w-full flex items-start">

            <h3 class="text-lg font-extrabold"> Mot de passe oublie</h3>
          </div>
          <div class="w-full mt-4 flex items-center justify-center">
            <form @submit.prevent="loginUser">
              <div class="mx-auto max-w-xs">
                <div class="space-y-5">

                  <AuthInput v-model="form_value.email" @validate="validate('email')"
                    placeholder="sample@nanocreatives.com" type="email" :error="form_error.email" />

                </div>
                <button type="submit"
                  class="mt-5 tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg class="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span class="ml-3">
                    Validé
                  </span>
                </button>
                <div class="mt-6">
                  <p class="text-center m-2">
                    Voulez vous Connecter  ?
                    <NuxtLink to="/login"
                      class="text-blue-500 hover:text-blue-600 cursor-pointer transition-all duration-300 ease-in-out">
                      Clicquez ici
                    </NuxtLink>
                  </p>
                  <p class="text-center m-2">
                    Voulez vous Crée un compte ?
                    <NuxtLink to="/register"
                      class="text-blue-500 hover:text-blue-600 cursor-pointer transition-all duration-300 ease-in-out">
                      Cliquez ici
                    </NuxtLink>
                  </p>

                </div>

                <p class="mt-6 text-xs text-blue-600 text-center">
                  I agree to abide by templatana's
                  <a href="#" class="border-b border-blue-500 border-dotted">
                    Terms of Service
                  </a>
                  and its
                  <a href="#" class="border-b border-blue-500 border-dotted">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div class="flex justify-center item-center p-2">
          <img src="https://nanocreatives.com/wp-content/uploads/2023/08/nanocreatives-logo.png" class="w-52" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
