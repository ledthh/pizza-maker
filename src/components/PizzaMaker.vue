<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center white--text">
        <h1>Заказ пиццы</h1>
      </v-col>
      <v-col cols="12">
        <v-card rounded="xl" class="pa-2">
          <v-row>
            <v-col cols="12" sm="6">
              <v-img src="@/assets/img/pizza_example.jpg" aspect-ratio="1" />
            </v-col>
            <v-col cols="12" sm="6">
              <v-row>
                <v-col cols="12" class="text-center">
                  <h2>Конструктор пиццы</h2>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <h3>Тесто</h3>
                  <div>{{ selectedDough }}</div>
                </v-col>
                <v-col cols="8">
                  <v-row>
                    <v-col
                      cols="4"
                      v-for="item in dough"
                      :key="item.id"
                    >
                      <v-img
                        :style="{ opacity: doughOpacity(item.id) }"
                        :id="item.id"
                        :src="item.src"
                        @click="changeDough(item.id)"
                      />
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <h3>Размер</h3>
                  <div>{{ selectedSize }} см</div>
                </v-col>
                <v-col cols="8">
                  <v-row>
                    <v-col
                      cols="4"
                      v-for="size in sizes"
                      :key="size.id"
                    >
                      <img
                        height="50"
                        :style="{ opacity: sizeOpacity(size.id) }"
                        :id="size.id"
                        :src="size.src"
                        @click="changeSize(size.id)"
                      />
                    </v-col>
                  </v-row>
                    
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <h3>Соус</h3>
                  <div>{{ selectedSauce }}</div>
                </v-col>
                <v-col cols="8">
                  <v-row>
                    <v-col
                      cols="3"
                      v-for="sauce in sauces"
                      :key="sauce.id"
                    >
                      <img
                        height="50"
                        :style="{ opacity: sauceOpacity(sauce.id) }"
                        :id="sauce.id"
                        :src="sauce.src"
                        @click="changeSauce(sauce.id)"
                      />
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-row>
            <!-- Ингредиенты -->
          </v-row>
          
          <v-row>
            <!-- Счётчик - сброс - заказать -->
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import source from '@/data.js';

export default {
  name: 'PizzaMaker',
  data() {
    return {
      currentDough: 'americano',
      currentSize: 'size-small',
      currentSauce: 'garlic',
      sauces: source.sauces,
      dough: source.dough,
      sizes: source.sizes,
      ingredients: source.ingredients
    }
  },
  computed: {
    selectedDough() {
      let selected = '';

      this.dough.forEach((item) => {
        if (item.id === this.currentDough) {
          selected = item.name;
        }
      });

      return selected;
    },
    selectedSize() {
      let selected = '';

      this.sizes.forEach((item) => {
        if (item.id === this.currentSize) {
          selected = item.size;
        }
      });

      return selected;
    },
    selectedSauce() {
      let selected = '';

      this.sauces.forEach((item) => {
        if (item.id === this.currentSauce) {
          selected = item.name;
        }
      });

      return selected;
    }
  },
  methods: {
    doughOpacity(item) {
      return this.currentDough === item ? 1 : 0.4;
    },
    changeDough(item) {
      this.currentDough = item;
    },
    sizeOpacity(item) {
      return this.currentSize === item ? 1 : 0.4;
    },
    changeSize(item) {
      this.currentSize = item;
    },
    sauceOpacity(item) {
      return this.currentSauce === item ? 1 : 0.4;
    },
    changeSauce(item) {
      this.currentSauce = item;
    },
  }
}
</script>
