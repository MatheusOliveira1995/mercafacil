<template>
  <q-item clickable @click="navigate()">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

type Props = {
  title: string,
  caption: string;
  route: string,
  icon: string;
};

export default defineComponent({
  /**
   */
  name: 'SideMenu',
  /**
   */
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    route: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  },
  /**
   * @param {Props} props
   */
  setup (props: Props) {
    const $router = useRouter()

    const navigate = () => {
      void $router.push(props.route)
    }
    return {
      navigate
    }
  }
})
</script>
