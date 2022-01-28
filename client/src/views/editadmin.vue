<template>
  <div
    style="background-color: #edfff7"
    name="background_all"
    id="background_all"
    class="min-h-screen justify-center"
  >
    <nav-bar />

    <br />

    <div class="flex items-center justify-center space-x-12">
      <div>
        <div class="mr-3">
          <img
            class="pt-5 rounded-full lg-shadow"
            style="width: 300px; height: 300px"
            src="https://menlocoa.org/wp-content/uploads/2012/09/Screen-Shot-2012-09-20-at-11.54.59-AM.png"
          />
        </div>

        <br />
        <div class="ml-16">
          <button
            class="px-8 py-2 mt-4 text-white rounded"
            style="background-color: #37b47e"
          >
            Edit Profile
          </button>
        </div>
      </div>

      <br />
      <div
        class="
          px-10
          py-6
          mt-10
          ml-20
          mr-20
          text-center
          bg-gray-200
          justify-center
        "
        style="border-radius: 50px; background-color: #ffffff"
      >
        <h1 class="text-3xl font-bold text-center">Edit Professor Info</h1>
        <br />
        <p class="font-bold">First Name</p>
        <input
          id="fName"
          name="fName"
          type="text"
          class="input-text-field sm:w-16 md:w-32 lg:w-64"
          style="border-color: #546681; height: 30px; text-align: center"
          v-model.trim="profData.firstName"
          capitalize
        />
        <br />
        <br />
        <p class="font-bold">Last Name</p>
        <input
          id="lName"
          name="lName"
          type="text"
          class="input-text-field sm:w-16 md:w-32 lg:w-64"
          style="border-color: #546681; height: 30px; text-align: center"
          v-model="profData.lastName"
          capitalize
        />
        <br />
        <br />

        <p class="font-bold">Email</p>
        <input
          id="email"
          name="email"
          type="email"
          class="input-text-field sm:w-16 md:w-32 lg:w-64"
          style="border-color: #546681; height: 30px; text-align: center"
          v-model="profData.email"
          lowercase
        />

        <br />
        <br />

        <p class="font-bold">College</p>
        <div>
          <select
            id="college"
            name="college"
            class="rounded-md border-4 border-indigo-500/100 lg:w-64"
            v-model="profData.college"
          >
            <option selected disabled hidden>Choose One</option>
            <option value="BAGCED">BAGCED</option>
            <option value="CCS">CCS</option>
            <option value="COL">COL</option>
            <option value="CLA">CLA</option>
            <option value="GCOE">GCOE</option>
            <option value="RVR-COB">RVR-COB</option>
            <option value="SOE">SOE</option>
            <option value="N/A">N/A</option>
          </select>
        </div>
        <br />
        <br />

        <p class="font-bold">Department</p>
        <div>
          <select
            name="department"
            id="department"
            class="rounded-md border-4 border-indigo-500/100 lg:w-64"
            v-model="profData.department"
          >
            <option selected disabled hidden>Choose One</option>

            <!-- CCS -->
            <optgroup
              v-if="profData.college === 'CCS'"
              label="College of Computer Studies"
            >
              <option value="Information Technology">
                Information Technology
              </option>
              <option value="Computer Technology">Computer Technology</option>
              <option value="Software Technology">Software Technology</option>
            </optgroup>

            <!-- BAGCED -->
            <optgroup
              v-if="profData.college === 'BAGCED'"
              label="Brother Andrew Gonzales College of Education"
            >
              <option value="Counseling and Educational Psychology">
                Counseling and Educational Psychology
              </option>
              <option value="Educational Leadership and Management">
                Educational Leadership and Management
              </option>
              <option value="English and Applied Linguistics">
                English and Applied Linguistics
              </option>
              <option value="Physical Education">Physical Education</option>
              <option value="Science Education">Science Education</option>
            </optgroup>

            <!-- RVR-COB -->
            <optgroup
              v-if="profData.college === 'RVR-COB'"
              label="Ramon V. del Rosario College of Business"
            >
              <option value="Accountancy">Accountancy</option>
              <option value="Commercial Law">Commercial Law</option>
              <option value="Decision Sciences and Innovation">
                Decision Sciences and Innovation
              </option>
              <option value="Management of Financial Institutions">
                Management of Financial Institutions
              </option>
              <option value="Management and Organization">
                Management and Organization
              </option>
              <option value="Marketing Management">Marketing Management</option>
            </optgroup>

            <!-- CLA -->
            <optgroup
              v-if="profData.college === 'CLA'"
              label="College of Liberal Arts"
            >
              <option value="Behavioral Science">Behavioral Science</option>
              <option value="Communication">Communication</option>
              <option value="Filipino">Filipino</option>
              <option value="History">History</option>
              <option value="International Studies">
                International Studies
              </option>
              <option value="Literature">Literature</option>
              <option value="Philosophy">Philosophy</option>
              <option value="Political Science">Political Science</option>
              <option value="Psychology">Psychology</option>
              <option value="Theology and Religious Education">
                Theology and Religious Education
              </option>
            </optgroup>

            <!-- COS -->
            <optgroup
              v-if="profData.college === 'COS'"
              label="College of Science"
            >
              <option value="Biology">Biology</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Physics">Physics</option>
              <option value="Mathematics">Mathematics</option>
            </optgroup>

            <!-- SOE  -->
            <optgroup
              v-if="profData.college === 'SOE'"
              label="School of Economics"
            >
              <option value="School of Economics">School of Economics</option>
            </optgroup>

            <!-- GCOE -->
            <optgroup
              v-if="profData.college === 'GCOE'"
              label="Gokongwei College of Engineering"
            >
              <option value="Chemical Engineering">Chemical Engineering</option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Electronics and Communications Engineering">
                Electronics and Communications Engineering
              </option>
              <option value="Mechanical Engineering">
                Mechanical Engineering
              </option>
              <option value="Industrial Engineering">
                Industrial Engineering
              </option>
              <option value="Manufacturing Engineering and Management">
                Manufacturing Engineering and Management
              </option>
            </optgroup>

            <!-- COL -->
            <optgroup v-if="profData.college === 'COL'" label="College of Law">
              <option value="College of Law">College of Law</option>
            </optgroup>
            <option value="N/A">N/A</option>
          </select>
        </div>
        <br />
        <br />

        <p class="font-bold">Status</p>
        <div>
          <select
            id="status"
            name="status"
            class="rounded-md border-4 border-indigo-500/100 lg:w-64"
            v-model="profData.status"
          >
            <option selected disabled hidden>Choose One</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <br />
        <br />
        <div>
          <router-link :to="`/view/${profData.id}`">
            <button
              class="px-6 py-2 mt-4 text-white rounded"
              style="background-color: #37b47e"
              @click="editProf()"
            >
              Save
            </button>
          </router-link>
          <router-link :to="`/view/${profData.id}`">
            <button
              class="
                px-6
                py-2
                mt-4
                ml-2
                text-white
                bg-red-600
                rounded
                hover:bg-gray-900
              "
            >
              Cancel
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from '../components/NavBar.vue';
import { reactive } from 'vue';
import * as api from '../api';
import { useRoute } from 'vue-router';

export default {
  name: 'EditAdmin',
  components: {
    NavBar,
  },
  setup() {
    const router = useRoute();
    let profData = reactive({
      id: router.params.profID,
      firstName: null,
      lastName: null,
      email: null,
      college: 'Choose One',
      department: 'Choose One',
      status: 'Choose One',
    });

    async function editProf() {
      try {
        const newInfo = {
          id: profData.id,
          firstName: profData.firstName,
          lastName: profData.lastName,
          email: profData.email,
          college: profData.college,
          department: profData.department,
          status: profData.status,
        };

        const res = await api.editProf(newInfo);
        if (res) {
          console.log('Update successful!');
        }
      } catch (err) {
        console.log(err);
      }
    }

    return {
      profData,
      editProf,
    };
  },
};
</script>
