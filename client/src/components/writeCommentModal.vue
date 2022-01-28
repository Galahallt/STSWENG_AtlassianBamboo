<template>
  <transition name="modal-animation">
    <div v-show="writeComment" class=" w-full h-full modal flex justify-center items-center">
     <transition name="modal-animation-inner">
        <div v-show="writeComment" class="sm:10/12 md:w-7/12 modal-inner flex flex-col flex-wrap">
          <slot />
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['writeComment'],
  setup(props, { emit }) {
    const close = () => {
      emit('close');
    };
    return { close };
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(113, 113, 122, 0.75);
  transition-property: opacity;
}
.modal-inner {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}
.modal-animation-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-animation-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.modal-animation-inner-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
