<template>
  <ion-grid>
    <ion-row>
      <ion-col v-for="header in headers" :key="header" class="header">
        {{ header }}
      </ion-col>
    </ion-row>
    <ion-row v-for="row in rows" :key="row.id">
      <ion-col v-for="cell in row" :key="cell">
        {{ cell }}
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
import { defineComponent } from 'vue';
import { IonGrid, IonRow, IonCol } from '@ionic/vue';

export default defineComponent({
  name: 'TableComponent',
  components: {
    IonGrid,
    IonRow,
    IonCol
  },
  props: {
    headers: {
      type: Array,
      required: true
    },
    rows: {
      type: Array,
      required: true
    }
  }
});
</script>

<style scoped>
.header {
  font-weight: bold;
  background: #f4f4f4;
  padding: 8px;
}
ion-col {
  border: 1px solid #ddd;
  padding: 8px;
}
</style>
