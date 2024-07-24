<template>
  <div>
    <h1>Utilisateurs</h1>
    <div class="content">
      <div v-if="showCreateUser">
        <ButtonComponent type="sm" @click="hideCreateUserForm" label="Retour" />
      </div>
      <div v-if="showCreateUser">
        <CreateUserView />
      </div>
      <div v-else>
        <section class="search_filter_container">
          <div class="search_filter_content">
            <p>Filtre</p>
            <select class="filter_role_select" v-model="selectedRole">
              <option value="">Tous</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="guest">Invités</option>
              <option value="pedagogic">Pedagogique</option>
            </select>
            <div class="search_bar">
              <img width="15" height="15" src="https://img.icons8.com/ios/50/search--v1.png" alt="search--v1"/>
              <input v-model="search" type="text" placeholder="Rechercher..." />
            </div>
          </div>
          <div>
            <p class="action" @click="showCreateUserForm">+ ajouter un utilisateur</p>
          </div>
        </section>
        <section class="tableContainer">
          <table>
            <thead>
              <tr>
                <th scope="col">Prénom</th>
                <th scope="col">Nom</th>
                <th scope="col">Email</th>
                <th scope="col">Promotion</th>
                <th scope="col">Role</th>
                <th scope="col">Card number</th>
                <th scope="col" align="center">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in paginatedUsers" :key="user.id">
                <td>{{ user.firstname }}</td>
                <td>{{ user.lastname }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.school_prom }}</td>
                <td>{{ user.role }}</td>
                <td>{{ user.card_number }}</td>
                <td align="center">
                  <button @click="editUser(user.id)">
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
import CreateUserView from '@/views/CreateUserView.vue';
import axios from 'axios';

export default {
  name: 'UsersView',
  components: {
    ButtonComponent,
    CreateUserView
  },
  data() {
    return {
      showCreateUser: false,
      users: ref([]),
      selectedRole: ref(''),
      search: ref(''),
      currentPage: ref(1),
      itemsPerPage: 8,
    };
  },
  computed: {
    filteredUsers() {
      let filtered = this.users;

      if (this.selectedRole) {
        filtered = filtered.filter(user => user.role === this.selectedRole);
      }

      if (this.search) {
        filtered = filtered.filter(user =>
          user.firstname.toLowerCase().includes(this.search.toLowerCase()) ||
          user.lastname.toLowerCase().includes(this.search.toLowerCase()) ||
          user.email.toLowerCase().includes(this.search.toLowerCase())
        );
      }

      return filtered;
    },
    totalPages() {
      return Math.ceil(this.filteredUsers.length / this.itemsPerPage);
    },
    paginatedUsers() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredUsers.slice(start, end);
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
    showCreateUserForm() {
      this.showCreateUser = true;
    },
    hideCreateUserForm() {
      this.showCreateUser = false;
    },
    editUser() {
      // Navigate to edit user view or perform edit action
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
    async fetchUsers() {
      try {
        const response = await axios.get('http://localhost:3000/user');
        this.users = response.data;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
  },
  mounted() {
    this.fetchUsers();
  }
};
</script>

<style scoped>

* {
  margin: 0;
  font-family: "Roboto", sans-serif;
}
/* Styles for the main view */
.users-view {
  display: flex;
}

.content {
  flex-grow: 1;
}

.buttonContainer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.back-button:hover {
  background-color: #e59426;
}

.tableContainer {
  margin-top: 16px;
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
  padding: 8px 8px 8px 8px;
  border-radius: 6px;
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

table {
  margin: auto;
  width: calc(100% - 32px);
  border-collapse: collapse;
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

