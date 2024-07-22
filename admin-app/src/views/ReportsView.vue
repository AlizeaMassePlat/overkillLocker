<template>
  <div>
    <h1>Rapports</h1>
    <section class="search_filter_container">
      <p>Filtre</p>
      <select class="filter_status_select" v-model="selected">
        <option default value="">Tous</option>
        <option>Résolu</option>
        <option>A traiter</option>
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
            <th scope="col">Numéro résa.</th>
            <th scope="col">Nom</th>
            <th scope="col">Date</th>
            <th scope="col">Email</th>
            <th scope="col">Rôle</th>
            <th scope="col">Message</th>
            <th scope="col">Status</th>
            <th scope="col" align="center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr  @click="navigateToIncident(report.id_reservation)" v-for="report in paginatedReports" :key="report.id_reservation" >
            <td>{{ report.id_reservation }}</td>
            <td>{{ report.name }}</td>
            <td>{{ report.date }}</td>
            <td>{{ report.email }}</td>
            <td>{{ report.role }}</td>
            <td>{{ report.message }}</td>
            <td>{{ report.status }}</td>
            <td align="center">
              
              <button @click="resolveReport(report.id_reservation)">
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
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router'; 


const router = useRouter();
const selected = ref('');
const search = ref('');
const currentPage = ref(1);
const itemsPerPage = 8;

const reportsArray = ref([
  {
    'id_reservation': 12764,
    'name': 'Jean Dupont',
    'date': '2023-07-20',
    'email': 'jean.dupont@example.com',
    'role': 'Utilisateur',
    'message': 'Problème avec la réservation.',
    'status': 'A traiter',
  },
  {
    'id_reservation': 12765,
    'name': 'Marie Curie',
    'date': '2023-07-21',
    'email': 'marie.curie@example.com',
    'role': 'Admin',
    'message': 'Erreur dans la date.',
    'status': 'Résolu',
  },
  {
    'id_reservation': 12766,
    'name': 'Albert Einstein',
    'date': '2023-07-22',
    'email': 'albert.einstein@example.com',
    'role': 'Utilisateur',
    'message': 'Modification des informations.',
    'status': 'A traiter',
  },
  {
    'id_reservation': 12767,
    'name': 'Isaac Newton',
    'date': '2023-07-23',
    'email': 'isaac.newton@example.com',
    'role': 'Admin',
    'message': 'Annulation de la réservation.',
    'status': 'Résolu',
  },
  {
    'id_reservation': 12768,
    'name': 'Galileo Galilei',
    'date': '2023-07-24',
    'email': 'galileo.galilei@example.com',
    'role': 'Utilisateur',
    'message': 'Demande de remboursement.',
    'status': 'A traiter',
  },
  {
    'id_reservation': 12769,
    'name': 'Nikola Tesla',
    'date': '2023-07-25',
    'email': 'nikola.tesla@example.com',
    'role': 'Admin',
    'message': 'Changement de date.',
    'status': 'Résolu',
  },
  {
    'id_reservation': 12770,
    'name': 'Charles Darwin',
    'date': '2023-07-26',
    'email': 'charles.darwin@example.com',
    'role': 'Utilisateur',
    'message': 'Problème de paiement.',
    'status': 'A traiter',
  },
  {
    'id_reservation': 12771,
    'name': 'Thomas Edison',
    'date': '2023-07-27',
    'email': 'thomas.edison@example.com',
    'role': 'Admin',
    'message': 'Réservation en double.',
    'status': 'Résolu',
  },
  {
    'id_reservation': 12772,
    'name': 'Leonardo da Vinci',
    'date': '2023-07-28',
    'email': 'leonardo.davinci@example.com',
    'role': 'Utilisateur',
    'message': 'Erreur de facturation.',
    'status': 'A traiter',
  },
  {
    'id_reservation': 12773,
    'name': 'Marie Antoinette',
    'date': '2023-07-29',
    'email': 'marie.antoinette@example.com',
    'role': 'Admin',
    'message': 'Problème de communication.',
    'status': 'Résolu',
  },
  {
    'id_reservation': 12774,
    'name': 'Archimède',
    'date': '2023-07-30',
    'email': 'archimede@example.com',
    'role': 'Utilisateur',
    'message': 'Problème de connexion.',
    'status': 'A traiter',
  },
  {
    'id_reservation': 12775,
    'name': 'Alexander Fleming',
    'date': '2023-07-31',
    'email': 'alexander.fleming@example.com',
    'role': 'Admin',
    'message': 'Changement d’adresse.',
    'status': 'Résolu',
  },
]);

const filteredReports = computed(() => {
  let filtered = reportsArray.value;

  if (selected.value) {
    filtered = filtered.filter(report => report.status === selected.value);
  }

  if (search.value) {
    filtered = filtered.filter(report =>
      Object.values(report).some(val =>
        String(val).toLowerCase().includes(search.value.toLowerCase())
      )
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

const resolveReport = (id) => {
  const report = reportsArray.value.find(r => r.id_reservation === id);
  if (report) {
    report.status = 'Résolu';
  }
};

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
}

</script>

<style scoped>
* {
  margin: 0;
  font-family: "Roboto", sans-serif;
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
  width: 95%;
  border-collapse: collapse;
  margin-top: 16px;
}

table th, table td {
  padding: 8px;

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
