<template>
  <div class="text-black h-full">
    <div class="p-12 w-full sticky">
      <div class="flex justify-center align-middle items-center">
        <Tabs
          class="hover:text-purple cursor-pointer lg:max-w-lg md:max-w-lg w-full lg:space-x-80 sm:space-x-56 font-bold flex justify-between"
          :tablist="tabs"
          @change="activeTab = $event"
        />
      </div>
    </div>
    <!-- <div>Active tab {{ activeTab }}</div> -->
    <!-- acceder -->
    <div
      v-show="activeTab === 'signin'"
      class="w-full p-8 flex justify-center align-middle items-center"
    >
      <form class="max-w-xl">
        <div>
          <legend class="text-center text-2xl font-bold">
            {{ $t('access.welcomeBack') }}
          </legend>
          <div class="mt-12 space-y-8">
            <div class="space-y-8">
              <Input
                :label="$t('contactForm.email')"
                placeholder="janedoe@example.com"
                type="email"
                class="h-12 flex content-center"
              />
              <p class="text-alert text-sm">
                {{ $t('access.validEmail') }}
              </p>
            </div>
            <div class="space-y-8">
              <Input
                :label="$t('contactForm.Psw')"
                :placeholder="$t('contactForm.Psw')"
                type="password"
                class="h-12 flex content-center"
              />
              <p class="text-alert text-sm">
                {{ $t('access.wrongPss') }}
              </p>
            </div>
            <div class="flex">
              <btn-primary class="w-full" :btn-value="$t('buttons.logIn')" />
            </div>
          </div>
        </div>
      </form>
    </div>
    <!-- registrarse -->
    <div
      v-show="activeTab === 'signup'"
      class="w-full p-8 flex justify-center align-middle items-center"
    >
      <form class="max-w-xl">
        <div>
          <legend class="text-center text-2xl font-bold">
            {{ $t('access.welcome') }}
          </legend>
          <div class="mt-12 space-y-12">
            <div class="space-y-10">
              <Input
                placeholder="janedoe@example.com"
                type="email"
                class="h-12 flex content-center"
                label="Correo electrónico"
              />
            </div>
            <div class="space-y-10">
              <Input
                :label="$t('contactForm.Psw')"
                :placeholder="$t('contactForm.Psw')"
                type="password"
                class="h-12 flex content-center"
              />
              <div class="flex justify-between space-x-2">
                <div class="space-y-1">
                  <p class="text-alert text-xs">
                    {{ $t('access.lowercase') }}
                  </p>

                  <p class="text-alert text-xs">
                    {{ $t('access.uppercase') }}
                  </p>
                </div>
                <div>
                  <p class="text-alert text-xs">
                    {{ $t('access.character') }}
                  </p>
                </div>
              </div>
            </div>
            <div class="space-y-10">
              <Input
                :label="$t('contactForm.confirmNewPsw')"
                :placeholder="$t('contactForm.confirmNewPsw')"
                type="password"
                class="h-12 flex content-center"
              />
              <p class="text-alert text-sm">
                {{ $t('access.wrongPss') }}
              </p>
            </div>
            <div class="flex">
              <btn-primary class="w-full" :btn-value="$t('buttons.logIn')" />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import btnPrimary from '~/components/btn-primary.vue'
const tabs = [
  {
    tabId: 'signin',
    label: 'Sign In',
  },
  {
    tabId: 'signup',
    label: 'Sign Up',
  },
]

export default {
  components: { btnPrimary },
  layout: 'session',
  data() {
    return {
      tabs,
      activeTab: tabs[1].tabId,
    }
  },
}
</script>
