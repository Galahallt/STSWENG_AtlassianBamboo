<template>
  <div
    style="background-color: #edfff7"
    name="background_all"
    id="background_all"
    class="min-h-screen justify-center"
  >
    <nav-bar />

    <br />

    <div class="flex items-center justify-center">
      <div>
        <div class="mr-15">
          <img
            class="pt-5 rounded-full lg-shadow"
            style="width: 300px; height: 300px"
            :src="profData.profilePicture"
          />
        </div>

        <br />
        <div class="ml-20">
          <input
            id="image-file"
            name="image-file"
            type="file"
            ref="file"
            accept="image/*"
            class="hidden"
            @change="uploadImage"
          />
          <label
            for="image-file"
            class="
              px-6
              py-2
              mt-4
              text-white
              bg-green-600
              rounded-lg
              hover:bg-green-900
              shadow-lg
            "
            >Upload Image</label
          >

          <br />
          <br />
        </div>
        <div class="ml-15">
          <p
            class="text-red-500 manrope-bold text-center text-sm"
            v-if="!state.isValidFile"
          >
            File uploaded is not an image file.
          </p>
          <p v-else></p>
        </div>
      </div>

      <br />
      <div
        class="
          px-40
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
        <h1 class="text-3xl font-bold text-center">
          Edit Instructor Information
        </h1>
        <br />
        <p class="font-bold">First Name</p>
        <input
          id="fName"
          name="fName"
          type="text"
          class="input-text-field sm:w-16 md:w-32 lg:w-64"
          style="border-color: #546681; height: 30px; text-align: center"
          v-model.trim="profData.firstName"
          :placeholder="placeholder.firstName"
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
          v-model.trim="profData.lastName"
          :placeholder="placeholder.lastName"
          capitalize
        />
        <br />
        <br />

        <p class="font-bold">DLSU Email:</p>
        <input
          id="email"
          name="email"
          type="email"
          class="input-text-field sm:w-16 md:w-32 lg:w-64"
          style="border-color: #546681; height: 30px; text-align: center"
          v-model.trim="profData.email"
          :placeholder="placeholder.email"
          lowercase
          :class="{
            'border-red-500': v.email.$error,
          }"
        />
        <p
          class="text-red-500 manrope-bold text-center text-sm"
          v-if="v.email.$error"
        >
          {{ v.email.$errors[0].$message }}
        </p>
        <p v-else></p>
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
          <button
            class="px-6 py-2 mt-4 text-white rounded"
            style="background-color: #37b47e"
            @click="editProf()"
          >
            Save
          </button>
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
import { ref, reactive, onMounted } from 'vue';
import * as api from '../api';
import { useRoute, useRouter } from 'vue-router';
import useVuelidate from '@vuelidate/core';
import { email, helpers } from '@vuelidate/validators';

export default {
  name: 'EditAdmin',
  components: {
    NavBar,
  },
  setup() {
    const file = ref(null);
    const router = useRoute();
    const router2 = useRouter();

    const dlsuEmail = (value) => {
      const domain = value.split('@').pop();

      if (domain != 'dlsu.edu.ph') {
        return false;
      } else {
        for (let i = 0; i < state.allProfs.length; i++) {
          if (profData.email == state.allProfs[i].email) {
            if (profData.email == placeholder.email) {
              console.log('EMAIL VALID');
              return true;
            }
            console.log('PROF EXISTS');
            return false;
          }
        }
        return true;
      }
    };

    const inputEmail = (value) => {
      if (value.trim() == '' || value.trim() == null) {
        return false;
      }
      return true;
    };

    const editRules = {
      email: {
        email,
        inputEmail: helpers.withMessage(
          'Enter email if you wish to retain it',
          inputEmail
        ),
        dlsuEmail: helpers.withMessage(
          'Value must be valid/unregistered DLSU email',
          dlsuEmail
        ),
      },
    };

    let state = reactive({
      fileValidation: null,
      allProfs: null,
      isValidFile: true,
    });

    let placeholder = reactive({
      firstName: null,
      lastName: null,
      email: null,
    });

    let profData = reactive({
      profilePicture: null,
      id: router.params.profID,
      firstName: null,
      lastName: null,
      email: null,
      college: 'Choose One',
      department: 'Choose One',
      status: 'Choose One',
    });

    onMounted(() => {
      loadProf();
    });

    async function loadProf() {
      try {
        const res = await api.getAllProfs();
        state.allProfs = res.data;

        const result = await api.getProf(router.params.profID);
        if (result) {
          profData.profilePicture = result.data.profilePicture;
          placeholder.firstName = result.data.firstName;
          placeholder.lastName = result.data.lastName;
          placeholder.email = profData.email = result.data.email;
          profData.college = result.data.college;
          profData.department = result.data.department;
          profData.status = result.data.status;
        }
      } catch (err) {
        console.log(err);
      }
    }

    const v = useVuelidate(editRules, profData);

    async function editProf() {
      try {
        const validated = await v.value.$validate();

        if (validated) {
          if (profData.firstName == null || profData.firstName == '') {
            profData.firstName = placeholder.firstName;
          }
          if (profData.lastName == null || profData.lastName == '') {
            profData.lastName = placeholder.lastName;
          }

          const formData = new FormData();

          const fileName = file.value.files[0].name;
          const fileExt = fileName.split('.');

          if (
            !file.value.files[0] ||
            fileExt[1] != 'jpg' ||
            fileExt[1] != 'jpeg' ||
            fileExt[1] != 'png' ||
            fileExt[1] != 'gif'
          ) {
            formData.append('profilePicture', profData.profilePicture);
          } else {
            formData.append('image-file', file.value.files[0]);
          }

          formData.append('id', profData.id);
          formData.append('firstName', profData.firstName);
          formData.append('lastName', profData.lastName);
          formData.append('email', profData.email);
          formData.append('college', profData.college);
          formData.append('department', profData.department);
          formData.append('status', profData.status);
          console.log('---------------');
          console.log(file.value.files[0]);

          const res = await api.editProf(formData);
          if (res) {
            router2.push({ path: `/view/${profData.id}` });
          }
        }
      } catch (err) {
        console.log(err);
      }
    }

    function uploadImage() {
      state.fileValidation = file.value.files.length == 0 ? false : true;
      if (state.fileValidation) {
        const fileName = file.value.files[0].name;
        const fileExt = fileName.split('.');
        if (
          fileExt[1] == 'jpg' ||
          fileExt[1] == 'jpeg' ||
          fileExt[1] == 'png' ||
          fileExt[1] == 'gif'
        ) {
          profData.profilePicture = URL.createObjectURL(file.value.files[0]);
          state.isValidFile = true;
          console.log('file: ' + file.value.files[0].name);
        } else {
          state.isValidFile = false;
          console.log('FILE IS NOT AN IMAGE FILE');
        }
      }
    }

    return {
      file,
      state,
      placeholder,
      profData,
      editProf,
      uploadImage,
      v,
    };
  },
};
</script>
