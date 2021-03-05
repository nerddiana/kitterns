<template>
  <div class="mobile-menu items-center text-center">
    <div class="flex justify-between text-center">
      <button class="py-2 px-2 text-center h-auto">
        <svg
          class="text-center w-full"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 7.50008L10.5 1.66675L18 7.50008V16.6667C18 17.1088 17.8244 17.5327 17.5118 17.8453C17.1993 18.1578 16.7754 18.3334 16.3333 18.3334H4.66667C4.22464 18.3334 3.80072 18.1578 3.48816 17.8453C3.17559 17.5327 3 17.1088 3 16.6667V7.50008Z"
            stroke="#080708"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 18.3333V10H13V18.3333"
            stroke="#080708"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p class="menuP">Inicio</p>
      </button>
      <button class="py-2 px-2 text-center h-auto">
        <svg
          class="text-center w-full"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
            stroke="#080708"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.5 17.5L13.875 13.875"
            stroke="#080708"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p class="menuP">Buscar</p>
      </button>
      <button class="py-2 px-2 text-center h-auto">
        <svg
          class="text-center w-full"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M13.3333 3H0.833252V13.8333H13.3333V3Z"
              stroke="#080708"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.3333 7.16675H16.6666L19.1666 9.66675V13.8334H13.3333V7.16675Z"
              stroke="#080708"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.58333 17.9999C5.73393 17.9999 6.66667 17.0672 6.66667 15.9166C6.66667 14.766 5.73393 13.8333 4.58333 13.8333C3.43274 13.8333 2.5 14.766 2.5 15.9166C2.5 17.0672 3.43274 17.9999 4.58333 17.9999Z"
              stroke="#080708"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.4166 17.9999C16.5672 17.9999 17.4999 17.0672 17.4999 15.9166C17.4999 14.766 16.5672 13.8333 15.4166 13.8333C14.266 13.8333 13.3333 14.766 13.3333 15.9166C13.3333 17.0672 14.266 17.9999 15.4166 17.9999Z"
              stroke="#080708"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
        <p class="menuP">Mis pedidos</p>
      </button>
      <button class="py-2 px-2 text-center h-auto">
        <svg
          class="text-center w-full"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.1666 17.5V15.8333C17.1666 14.9493 16.8154 14.1014 16.1903 13.4763C15.5652 12.8512 14.7173 12.5 13.8333 12.5H7.16658C6.28253 12.5 5.43468 12.8512 4.80956 13.4763C4.18444 14.1014 3.83325 14.9493 3.83325 15.8333V17.5"
            stroke="#080708"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.5001 9.16667C12.341 9.16667 13.8334 7.67428 13.8334 5.83333C13.8334 3.99238 12.341 2.5 10.5001 2.5C8.65913 2.5 7.16675 3.99238 7.16675 5.83333C7.16675 7.67428 8.65913 9.16667 10.5001 9.16667Z"
            stroke="#080708"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p class="menuP">Mi cuenta</p>
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.mobile-menu {
  @apply sticky inset-x-0 bottom-0 w-screen bg-white p-2;

  box-shadow: 0 -5px 5px -5px #cdcdcd;
}
.menuP {
  font-size: 0.75rem;
  line-height: 1rem;
}
</style>
