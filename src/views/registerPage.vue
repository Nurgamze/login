<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Kayıt Ol</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
        crossorigin="anonymous"
      />
    </head>
    <body>
      <section class="vh-50" style="background-color: #f7f6dc">
        <div class="container py-5 h-100">
          <div
            class="row d-flex justify-content-center align-items-center h-100"
          >
            <div class="col col-xl-10">
              <div class="card" style="border-radius: 1rem">
                <div class="row g-0">
                  <div class="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="../gençlik.jpeg"
                      alt="login form"
                      class="img-fluid"
                      style="border-radius: 1rem 0 0 1rem"
                    />
                  </div>
                  <div class="col-md-6 col-lg-7 d-flex align-items-center">
                    <div class="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div class="d-flex align-items-center mb-3 pb-1">
                          <i
                            class="fas fa-cubes fa-2x me-3"
                            style="color: #ff6219"
                          ></i>
                          <img
                            style="margin-left: 81px"
                            width="50%"
                            src="../GH--02.png"
                            alt=""
                          />
                        </div>

                        <h5
                          class="fw-normal mb-3 pb-3"
                          style="letter-spacing: 1px"
                        >
                          Kayıt Olun
                        </h5>

                        <div class="form-outline mb-4">
                          <input
                            v-model="userData.name"
                            type="text"
                            class="form-control form-control-lg"
                            placeholder="Name"
                          />
                          <label
                            class="form-label"
                            for="form2Example17"
                          ></label>
                        </div>
                        <div class="form-outline mb-4">
                          <input
                            v-model="userData.surname"
                            type="text"
                            class="form-control form-control-lg"
                            placeholder="Surname"
                          />
                          <label class="form-label"></label>
                        </div>
                        <div class="form-outline mb-4">
                          <input
                            v-model="userData.phone"
                            type="number"
                            class="form-control form-control-lg"
                            placeholder="Phone"
                          />
                          <label
                            class="form-label"
                            for="form2Example17"
                          ></label>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            v-model="userData.password"
                            type="password"
                            class="form-control form-control-lg"
                            placeholder="Password"
                          />
                          <label
                            class="form-label"
                            for="form2Example27"
                          ></label>
                        </div>

                        <div
                          class="d-flex justify-content-between align-items-center pt-1 mb-4"
                        >
                          <button
                            @click="onSave"
                            class="btn btn-primary btn-lg"
                            type="button"
                          >
                            Kayıt Ol
                          </button>
                          <router-link :to="{ name: 'login' }">
                            Giriş yap!
                          </router-link>
                        </div>

                        <br />
                        <br />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  </html>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        name: null,
        surname: null,
        phone: null,
        password: null,
      },
    };
  },
  methods: {
    onSave() {
      console.log(this.userData);
      this.$appAxios.post("/userData", this.userData).then((save_response) => {
        console.log("save_response", save_response);
      });
    },
  },
};
</script>
