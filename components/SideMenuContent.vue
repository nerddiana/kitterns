<template>
  <div class="container flex flex-col align-center">
    <header class="space-y-12">
      <div class="mt-12 ml-6">
        <logo />
      </div>
      <div class="nav font-bold space-y-6">
        <div class="w-full flex flex-col">
          <a class="p-6 w-full" href="#">
            {{ $t('menu.about') }}
          </a>
          <hr />
        </div>
        <div class="w-full flex flex-col">
          <div class="flex justify-between items-center">
            <a class="p-6 w-full" href="#">
              {{ $t('menu.categories') }}
            </a>
            <button class="h-full">
              <img src="../assets/icons/down.svg" alt="" />
            </button>
          </div>
          <hr />
        </div>
        <div class="w-full flex flex-col">
          <a class="p-6 w-full" href="#">
            {{ $t('menu.about') }}
          </a>
          <hr />
        </div>
        <div class="w-full flex flex-col">
          <a class="p-6 w-full" href="#">
            {{ $t('menu.about') }}
          </a>
          <hr />
        </div>
      </div>
    </header>
    <div class="w-full px-6 py-12 text-center absolute bottom-0 left-0">
      <div class="flex text-center justify-center space-x-6">
        <img src="../assets/icons/instagram.svg" alt="" />
        <img src="../assets/icons/facebook.svg" alt="" />
        <img src="../assets/icons/twitter.svg" alt="" />
      </div>
    </div>
  </div>
</template>
