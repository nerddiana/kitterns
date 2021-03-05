<template>
  <form class="w-full" action="">
    <div class="grid">
      <label class="h4-b focus:ring-2 focus:ring-blue-600" for="">
        {{ labelText }}
      </label>
      <input
        class="h-12 mt-1 rounded-md shadow-sm border-gray-300 border p-4"
        :type="type"
        :placeholder="holderText"
      />
    </div>
  </form>
</template>

<script>
export default {
  props: ['labelText', 'holderText', 'type'],
}
</script>
