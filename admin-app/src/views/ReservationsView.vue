<template>
  <div class="reservations-view">
    <div class="content">
      <div class="buttonContainer">
        <div v-if="showCreateReservation" class="left-button">
          <ButtonComponent type="sm" @click="hideCreateReservationForm" label="Retour" />
        </div>
        <div class="right-button">
          <ButtonComponent v-if="!showCreateReservation" type="sm" label="+ Ajouter une réservation" @click="showCreateReservationForm" />
        </div>
      </div>
      <div v-if="showCreateReservation">
        <CreateReservationView />
      </div>
      <div v-else>
        <section class="search_filter_container">
          <p>Filtre</p>
          <select class="filter_status_select" v-model="selectedStatus">
            <option value="">Tous</option>
            <option value="0">En attente</option>
            <option value="1">Confirmée</option>
            <option value="2">Annulée</option>
          </select>
          <div class="search_bar">
            <img width="15" height="15" src="https://img.icons8.com/ios/50/search--v1.png" alt="search--v1"/>
            <input v-model="search" type="text" placeholder="Rechercher..." />
          </div>
        </section>
        <section class="tableContainer">
          <table>
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">ID Casier</th>
                <th scope="col">Nom</th>
                <th scope="col">Prénom</th>
                <th scope="col">Email</th>
                <th scope="col">Date</th>
                <th scope="col">Type</th>
                <th scope="col">Status</th>
                <th scope="col" align="center">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="reservation in paginatedReservations" :key="reservation.id">
                <td>{{ reservation.id }}</td>
                <td>{{ reservation.idcasier }}</td>
                <td>{{ reservation.nom }}</td>
                <td>{{ reservation.prenom }}</td>
                <td>{{ reservation.email }}</td>
                <td>{{ formatDate(reservation.date) }}</td>
                <td>{{ reservation.type }}</td>
                <td>
                  <p :class="{
                    'state-pending': reservation.status === 0,
                    'state-confirmed': reservation.status === 1,
                    'state-cancelled': reservation.status === 2
                  }">
                    <span v-if="reservation.status === 0">En attente</span>
                    <span v-else-if="reservation.status === 1">Confirmée</span>
                    <span v-else>Annulée</span>
                  </p>
                </td>
                <td align="center">
                  <button @click="editReservation(reservation.id)">
                    <img width="20" height="20" src="https://img.icons8.com/ios/50/search--v1.png" alt="search--v1"/>
                  </button>
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
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import CreateReservationView from '@/views/CreateReservationView.vue';
import axios from 'axios';

export default {
  name: 'ReservationsView',
  components: {
    ButtonComponent,
    CreateReservationView
  },
  data() {
    return {
      showCreateReservation: false,
      reservations: ref([]),
      selectedStatus: ref(''),
      search: ref(''),
      currentPage: ref(1),
      itemsPerPage: 8,
    };
  },
  computed: {
    filteredReservations() {
      let filtered = this.reservations;

      if (this.selectedStatus) {
        filtered = filtered.filter(reservation => reservation.status === parseInt(this.selectedStatus, 10));
      }

      if (this.search) {
        filtered = filtered.filter(reservation =>
          reservation.nom.toLowerCase().includes(this.search.toLowerCase()) ||
          reservation.prenom.toLowerCase().includes(this.search.toLowerCase()) ||
          reservation.email.toLowerCase().includes(this.search.toLowerCase())
        );
      }

      return filtered;
    },
    totalPages() {
      return Math.ceil(this.filteredReservations.length / this.itemsPerPage);
    },
    paginatedReservations() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredReservations.slice(start, end);
    },
    pages() {
      const maxVisiblePages = 5;
      const total = this.totalPages;
      const current = this.currentPage;
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
    }
  },
  methods: {
    showCreateReservationForm() {
      this.showCreateReservation = true;
    },
    hideCreateReservationForm() {
      this.showCreateReservation = false;
    },
    editReservation() {
      // Navigate to edit reservation view or perform edit action
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToPage(page) {
      this.currentPage = page;
    },
    async fetchReservations() {
      try {
        const response = await axios.get('http://localhost:3000/reservation');
        this.reservations = response.data;
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString('fr-FR');
    }
  },
  mounted() {
    this.fetchReservations();
  }
};
</script>

<style scoped>
/* Styles for the main view */
.reservations-view {
  display: flex;
}

.content {
  flex-grow: 1;
  padding: 20px;
}

.buttonContainer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-button {
  order: 1;
}

.right-button {
  order: 2;
  margin-left: auto;
}

.back-button:hover {
  background-color: #e59426;
}

.tableContainer {
  margin-top: 10%;
}

/* Styles for search filter container */
.search_filter_container {
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
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
  padding: 8px 8px 8px 8px;
  border-radius: 6px;
}

.state-pending {
  text-align: center;
  background-color: #ffe3e6; /* Rouge pastel */
  color: #ce1a2c; /* Rouge plus foncé */
  padding: 5px 10px;
  border-radius: 5px;
}

.state-confirmed {
  text-align: center;
  background-color: #e6f4ea; /* Vert pastel */
  color: #0d750d; /* Vert plus foncé */
  padding: 5px 10px;
  border-radius: 5px;
}

.state-cancelled {
  text-align: center;
  background-color: #f0e9eb; /* Gris pastel */
  color: #666; /* Gris plus foncé */
  padding: 5px 10px;
  border-radius: 5px;
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


