<template>
  <div :class="[{
        'vsm-nowrap': nowrap,
        'vsm-gapped': gap
      },
      align? `vsm-align-${align}`: '',
      verticle? 'vsm-rows': 'vsm-cols'
    ]"
    :style="{
      height,
      width
    }">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'vsmCols',
    props: {
      nowrap: Boolean,
      align: String,
      verticle: Boolean,
      height: String,
      width: String,
      gap: Boolean
    },
      
}
</script>