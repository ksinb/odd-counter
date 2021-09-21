<template>
  <div></div>
</template>

<script>
import * as Counter from 'odd-counter';

export default {
  props: {
    count: number,
  },
  mounted() {
    const counter = new Counter.OddCounter({
      target: this.$el,
      props: this.$props,
    });

    this.count = counter;
  },
};
</script>
