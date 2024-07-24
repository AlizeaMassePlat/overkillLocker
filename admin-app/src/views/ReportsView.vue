<template>
  <div>
    <h1>Rapports</h1>
    <section class="search_filter_container">
      <p>Filtre</p>
      <select class="filter_status_select" v-model="selected">
        <option value="">Tous</option>
        <option value="0">A traiter</option>
        <option value="1">En cours</option>
        <option value="2">Résolue</option>
      </select>
      <div class="search_bar">
        <img width="15" height="15" src="https://img.icons8.com/ios/50/search--v1.png" alt="search--v1"/>
        <input v-model="search" type="text" placeholder="Rechercher..." />
      </div>
    </section>
    <section>
      <table>
        <thead>
          <tr>
            <th scope="col">Numéro err.</th>
            <th scope="col">Numéro rés.</th>
            <th scope="col">Nom</th>
            <th scope="col">Date</th>
            <th scope="col">Email</th>
            <th scope="col">Rôle</th>
            <th scope="col">Message</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="report in paginatedReports" :key="report.id">
            <td>{{ report.id }}</td>
            <td>{{ report.reservation.id }}</td>
            <td>{{ report.user.firstname }} {{ report.user.lastname }}</td>
            <td>{{ formatDate(report.date_create) }}</td>
            <td>{{ report.user.email }}</td>
            <td>{{ report.user.role }}</td>
            <td>{{ report.body }}</td>
            <td>
              <select v-model="report.state" :class="getStateClass(report.state)">
                <option :value="0">A traiter</option>
                <option :value="1">En cours</option>
                <option :value="2">Résolue</option>
              </select>
            </td>
            <td @click="navigateToIncident(report.id)">
              <i class="fa-solid fa-eye"></i>            
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
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const errors = ref([]);
const selected = ref('');
const search = ref('');
const currentPage = ref(1);
const itemsPerPage = 8;

const filteredReports = computed(() => {
  let filtered = errors.value;

  if (selected.value) {
    filtered = filtered.filter(report => report.state === parseInt(selected.value, 10));
  }

  if (search.value) {
    filtered = filtered.filter(report =>
      report.user.firstname.toLowerCase().includes(search.value.toLowerCase()) ||
      report.user.lastname.toLowerCase().includes(search.value.toLowerCase()) ||
      report.body.toLowerCase().includes(search.value.toLowerCase())
    );
  }

  return filtered;
});

const totalPages = computed(() => {
  return Math.ceil(filteredReports.value.length / itemsPerPage);
});

const paginatedReports = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredReports.value.slice(start, end);
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

const navigateToIncident = (id) => {
  router.push(`/rapports/incident/${id}`);
};

const fetchErrors = async () => {
  try {
    const response = await axios.get('http://localhost:3000/error/all');
    errors.value = response.data;
  } catch (error) {
    console.error('Error fetching errors:', error);
  }
};

onMounted(() => {
  fetchErrors();
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR');
};

const getStateClass = (state) => {
  return {
    0: 'state-to-treat',
    1: 'state-in-progress',
    2: 'state-resolved',
  }[state];
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
}

.search_filter_container p {
  margin-right: 16px;
  font-family: "Roboto", sans-serif;
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
  padding: 8px 8px 8px 8px;
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
  text-align: left;
}

table tr {
  text-align: left;
}

tbody tr:nth-child(odd){
  background-color: #FFDAC1;
}

tbody tr td button {
  border: none;
  outline: none;
  background: none;
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

select.state-to-treat {
  background-color: #ffe3e6; /* Rouge pastel */
  color: #ce1a2c; /* Rouge plus foncé */
}

select.state-in-progress {
  background-color: #d1ecf1; /* Bleu pastel */
  color: #0c5460; /* Bleu foncé */
}

select.state-resolved {
  background-color: #d4edda; /* Vert pastel */
  color: #155724; /* Vert foncé */
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

</style>
