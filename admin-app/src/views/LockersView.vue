<template>
  <div >
    <h1>Casiers</h1>

    <!-- Liste de tous les casiers -->

    <section class="search_filter_container" v-if="showList">
      <div class="search_filter_content">
        <p>Filtre</p>
        <select class="filter_status_select" v-model="selected">
          <option value="">Tous</option>
          <option value="0">Disponible</option>
          <option value="1">Réservé</option>
          <option value="2">En panne</option>
          <option value="3">Réparation</option>
        </select>
        <div class="search_bar">
          <img width="15" height="15" src="https://img.icons8.com/ios/50/search--v1.png" alt="search--v1"/>
          <input v-model="search" type="text" placeholder="Rechercher..." />
        </div>
      </div>
      <div>
        <p @click="setshowList" class="action">+ Agrandir le parc</p>
      </div>
    </section>

    <section v-if="showList">
      <table>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Coordonées</th>
            <th scope="col">Emplacement</th>
            <th scope="col">Position</th>
            <th scope="col">Date</th>
            <th scope="col">Type</th>
            <th scope="col" align="center">State</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="locker in paginatedLockers" :key="locker.id">
            <td>{{ locker.id }}</td>
            <td>{{ locker.groupLocker.coordinate }}</td>
            <td>{{ locker.groupLocker.name_place }}</td>
            <td>{{ locker.position }}</td>
            <td>{{ formatDate(locker.create_date) }}</td>
            <td>{{ locker.groupLocker.locker_type }}</td>
            <td align="center">
              <select v-model="locker.state" :class="getStateClass(locker.state)">
                <option :value="0">Disponible</option>
                <option :value="1">Réservé</option>
                <option :value="2">En panne</option>
                <option :value="3">Réparation</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1" class="page-btn">«</button>
        <button
          v-for="page in pages"
          :key="page"
          @click="goToPage(page)"
          :class="['page-btn', { active: currentPage === page }]"
        >
          {{ page }}
        </button>
        <button @click="nextPage" :disabled="currentPage === totalPages" class="page-btn">»</button>
      </div>
    </section>

    <!-- Agrandir le parc -->
    <section v-else>
      <div>
        <V2MapComponent mapSize="550px" :needHeader="true" :showList="showList" @update:showList="showList = $event" v-if="!showReports" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import axios from 'axios';
import V2MapComponent from '@/components/v2MapComponent.vue';

const lockers = ref([]);
const selected = ref('');
const search = ref('');
const currentPage = ref(1);
const itemsPerPage = 8;

const showList = ref(true);

const filteredLockers = computed(() => {
  let filtered = lockers.value;

  if (selected.value !== '') {
    filtered = filtered.filter(locker => locker.state === parseInt(selected.value, 10));
  }

  if (search.value) {
    filtered = filtered.filter(locker =>
      locker.groupLocker.name_place.toLowerCase().includes(search.value.toLowerCase()) ||
      locker.groupLocker.locker_type.toLowerCase().includes(search.value.toLowerCase())
    );
  }

  return filtered;
});

const totalPages = computed(() => {
  return Math.ceil(filteredLockers.value.length / itemsPerPage);
});

const paginatedLockers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredLockers.value.slice(start, end);
});

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const goToPage = (page) => {
  currentPage.value = page;
};

const pages = computed(() => {
  const maxVisiblePages = 5;
  const total = totalPages.value;
  const current = currentPage.value;
  let pages = [];

  if (total <= maxVisiblePages) {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    if (current <= 3) {
      pages = [1, 2, 3, 4, '...', total];
    } else if (current >= total - 2) {
      pages = [1, '...', total - 3, total - 2, total - 1, total];
    } else {
      pages = [1, '...', current - 1, current, current + 1, '...', total];
    }
  }

  return pages;
});

const fetchLockers = async () => {
  try {
    const response = await axios.get('http://localhost:3000/locker');
    lockers.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchLockers();
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR');
};

const getStateClass = (state) => {
  return {
    0: 'state-available',
    1: 'state-reserved',
    2: 'state-out-of-order',
    3: 'state-repairing'
  }[state];
};

const setshowList = () => {
  showList.value = false
};

</script>


<style scoped>
* {
  margin: 0;
  font-family: "Roboto", sans-serif;
}

h1 {
  margin-left: 16px;
}

.search_filter_container {
  margin-top: 64px;
  margin-left: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search_filter_content {
  display: flex;
  align-items: center
}

.search_filter_container p {
  margin-right: 16px;
}

.search_filter_container select {
  border-radius: 6px;
  border: none;
  padding: 8px 64px 8px 8px;
  background-color: rgb(219, 219, 219);
}

.search_filter_container input {
  margin-left: 8px;
  outline: none;
  border: none;
}

.search_bar {
  display: flex;
  align-items: center;
  margin-left: 32px;
  border: 1px solid #bdbdbd;
  padding: 8px;
  border-radius: 6px;
}

table {
  margin: auto;
  width: calc(100% - 32px);
  border-collapse: collapse;
  margin-top: 16px;
  font-size: 13px;
}

table th, table td {
  padding: 10px;
}

table tr {
  text-align: left;
}

tbody tr:nth-child(odd) {
  background-color: #FFDAC1;
}

tbody tr td select {
  text-align: center;
  padding: 8px 32px 8px 8px;
  border-radius: 12px;
  font-weight: bold;
  border: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGwxMiAwTDYgOEwwIDB6IiBmaWxsPSIjMDAwIi8+PC9zdmc+');
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 6px;
  font-size: 10px;
}

select.state-available {
  background-color: #d4edda; /* Vert pastel */
  color: #155724; /* Vert foncé */
}

select.state-reserved {
  background-color: #fef3c7; /* Jaune pastel */
  color: #854d0e; /* Jaune foncé */
}

select.state-out-of-order {
  background-color: #ffe3e6; /* Rouge pastel */
  color: #ce1a2c; /* Rouge plus foncé */
}

select.state-repairing {
  background-color: #d1ecf1; /* Bleu pastel */
  color: #0c5460; /* Bleu foncé */
}

.pagination {
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.page-btn {
  padding: 8px 12px;
  margin: 0 4px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
}

.page-btn.active {
  border: 1px solid #FF9800;
  color: #FF9800;
}

.page-btn:disabled {
  background-color: #e0e0e0;
  cursor: not-allowed;
}

.page-btn:not(.active):hover {
  background-color: #f1f1f1;
}

.action {
  border-radius: 8px;
  background-color: #ffa62b;
  color: white;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  padding: 8px 24px;
  font-size: 14px;
  cursor: pointer;
}
</style>

